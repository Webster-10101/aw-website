import { CONSENT_TEXT } from "@/lib/quiz/consent";
import { NextResponse } from "next/server";
import { ARCHETYPES } from "@/lib/quiz/archetypes";
import { sanitizeAttribution } from "@/lib/quiz/attribution";
import { quizDb } from "@/lib/quiz/db";
import { resultsEmail } from "@/lib/quiz/email";
import { generatePlan, sharedAnything, type OptionalAnswers } from "@/lib/quiz/plan";
import { OPTIONAL_QUESTIONS, QUESTIONS, isAnswered } from "@/lib/quiz/questions";
import { scoreArchetype } from "@/lib/quiz/scoring";

// Saves a quiz submission to the existing CRM table, writes the personalised plan
// and emails it. Needs QUIZ_SUPABASE_URL, QUIZ_SUPABASE_SERVICE_ROLE_KEY,
// RESEND_API_KEY and QUIZ_FROM; ANTHROPIC_API_KEY (and optionally OPENAI_API_KEY)
// for the written plan; QUIZ_BCC optional; RESEND_QUIZ_SEGMENT_ID for the
// optional speaking-emails list.

export const maxDuration = 60;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const RATE_LIMIT = 3; // submissions per IP per hour, counted in the database so it holds across servers


const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

function cleanAnswers(raw: unknown): Record<string, unknown> | null {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return null;
  const input = raw as Record<string, unknown>;
  const out: Record<string, unknown> = {};
  for (const q of QUESTIONS) {
    const value = input[q.id];
    const allowed = new Set((q.options ?? []).map((o) => o.id));
    if (q.type === "multi" && Array.isArray(value)) {
      out[q.id] = value.filter((v) => typeof v === "string" && allowed.has(v)).slice(0, q.maxSelections ?? 8);
    } else if (q.type === "single" && typeof value === "string" && allowed.has(value)) {
      out[q.id] = value;
    } else if (q.type === "rating" && typeof value === "number") {
      out[q.id] = value;
    }
    if (!isAnswered(q, out[q.id])) return null;
  }
  return out;
}

function cleanOptional(raw: unknown): OptionalAnswers {
  const out: OptionalAnswers = {};
  if (!raw || typeof raw !== "object") return out;
  const input = raw as Record<string, unknown>;
  for (const q of OPTIONAL_QUESTIONS) {
    const value = input[q.id];
    if (q.type === "multiple-select" && Array.isArray(value)) {
      const picks = value.filter((v): v is string => typeof v === "string" && (q.options ?? []).includes(v));
      if (picks.length) out[q.id] = picks;
    } else if (q.type === "text") {
      const text = str(value, 700);
      if (text) out[q.id] = text;
    }
  }
  return out;
}

async function addToSpeakingList(email: string, firstName: string): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const segmentId = process.env.RESEND_QUIZ_SEGMENT_ID;
  if (!apiKey || !segmentId) return false;
  const headers = { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" };
  // Never set unsubscribed: false on an existing contact; only create new ones as subscribed.
  const created = await fetch("https://api.resend.com/contacts", {
    method: "POST",
    headers,
    body: JSON.stringify({ email, first_name: firstName, unsubscribed: false, segments: [{ id: segmentId }] }),
  });
  if (created.ok) return true;
  const added = await fetch(`https://api.resend.com/contacts/${encodeURIComponent(email)}/segments/${segmentId}`, {
    method: "POST",
    headers,
  });
  if (added.ok || added.status === 409) return true;
  console.error("Quiz: speaking list signup failed", created.status, added.status, await added.text().catch(() => ""));
  return false;
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: real people never fill this hidden field.
  if (str(body.company, 200) !== "") return NextResponse.json({ ok: true, emailSent: true });

  const firstName = str(body.firstName, 80);
  const email = str(body.email, 254).toLowerCase();
  if (!firstName) return NextResponse.json({ ok: false, error: "Please add your first name." }, { status: 400 });
  if (!EMAIL.test(email)) return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });

  const answers = cleanAnswers(body.answers);
  if (!answers) {
    return NextResponse.json({ ok: false, error: "Some quiz answers are missing. Please retake the quiz." }, { status: 400 });
  }
  const optional = cleanOptional(body.optionalAnswers);
  const attribution = sanitizeAttribution(body.attribution);
  const newsletterOptIn = body.newsletterOptIn === true;

  // The server works out the type itself, with the same scoring the pages use.
  const { primary, slidingScales } = scoreArchetype(answers);
  const archetype = ARCHETYPES[primary];

  const db = quizDb();
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.QUIZ_FROM;
  if (!db || !apiKey || !from) {
    console.error("Quiz: missing configuration", { db: !!db, resend: !!apiKey, from: !!from });
    return NextResponse.json(
      { ok: false, error: "The quiz isn't working right now. Please try again later." },
      { status: 503 }
    );
  }

  const ip = (req.headers.get("x-forwarded-for")?.split(",")[0] || req.headers.get("x-real-ip") || "").trim() || null;
  if (ip) {
    const since = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    const { count, error } = await db
      .from("quiz_responses")
      .select("id", { count: "exact", head: true })
      .eq("ip_address", ip)
      .gte("created_at", since);
    if (error) console.error("Quiz: rate limit check failed", error.message);
    else if ((count ?? 0) >= RATE_LIMIT) {
      return NextResponse.json({ ok: false, error: "Too many requests. Please try again in an hour." }, { status: 429 });
    }
  }

  // Save first. If the CRM can't record it, stop rather than send an email with no record behind it.
  const consent = { newsletter: newsletterOptIn, at: new Date().toISOString(), wording: newsletterOptIn ? CONSENT_TEXT : null, source: "alistairwebster.com/speaker-quiz" };
  const { data: saved, error: saveError } = await db
    .from("quiz_responses")
    .insert({
      email,
      first_name: firstName,
      archetype: primary,
      main_answers: answers,
      optional_answers: { ...optional, _attribution: JSON.stringify(attribution), _consent: JSON.stringify(consent) },
      ip_address: ip,
      calendly_booked: false,
      follow_up_sent: false,
      mailerlite_added: false,
      email_sent: false,
      email_status: "pending",
      signup_source: "Quiz",
      status: "Lead",
    })
    .select("id")
    .single();

  if (saveError || !saved) {
    console.error("Quiz: could not save submission", saveError?.message);
    return NextResponse.json(
      { ok: false, error: "Sorry, something went wrong saving your answers. Please try again in a moment." },
      { status: 502 }
    );
  }
  const id = saved.id as string;

  const { plan, source } = await generatePlan(primary, slidingScales, optional);
  const { subject, html } = resultsEmail({
    firstName,
    title: archetype.title,
    plan,
    sharedExtra: sharedAnything(optional),
    newsletterOptIn,
    attribution,
  });

  if (newsletterOptIn) await addToSpeakingList(email, firstName).catch((e) => console.error("Quiz: list error", e));

  const bcc = process.env.QUIZ_BCC ? [process.env.QUIZ_BCC] : undefined;
  let emailId: string | null = null;
  let emailError: string | null = null;
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        // One submission can only ever produce one email, even if this request is retried.
        "Idempotency-Key": `speaker-quiz-result/${id}`,
      },
      body: JSON.stringify({ from, to: [email], bcc, subject, html }),
    });
    const data = await res.json().catch(() => ({}));
    if (res.ok && data?.id) emailId = data.id;
    else emailError = `Resend ${res.status}: ${data?.message || "send failed"}`.slice(0, 500);
  } catch (e) {
    emailError = (e instanceof Error ? e.message : "send failed").slice(0, 500);
  }

  const { error: updateError } = await db
    .from("quiz_responses")
    .update(
      emailId
        ? { email_content: html, email_subject: subject, email_status: "sent", email_sent: true, email_sent_at: new Date().toISOString(), resend_email_id: emailId }
        : { email_content: html, email_subject: subject, email_status: "failed", email_error: emailError }
    )
    .eq("id", id);
  if (updateError) console.error("Quiz: could not record email status", id, updateError.message);

  console.log("Quiz: submission", id, { archetype: primary, plan: source, emailSent: !!emailId });

  if (!emailId) {
    console.error("Quiz: email failed", id, emailError);
    return NextResponse.json(
      { ok: false, emailSent: false, error: "We couldn’t send your plan. Please try again later." },
      { status: 502 }
    );
  }
  return NextResponse.json({ ok: true, emailSent: true, message: "Your growth plan is on its way to your inbox." });
}
