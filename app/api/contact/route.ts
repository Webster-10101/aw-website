import { NextResponse } from "next/server";

// Sends a contact-form message to Al via Resend, with Reply-To set to the sender.
// Needs RESEND_API_KEY, CONTACT_TO (Al's inbox) and CONTACT_FROM (an address on a Resend-verified domain).

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const TOPICS = ["Coaching", "Freelancing for Good", "Consulting or a project", "Something else"];

const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: real people never fill this hidden field.
  if (str(body.company, 200) !== "") return NextResponse.json({ ok: true });

  const name = str(body.name, 120);
  const email = str(body.email, 254).toLowerCase();
  const topic = TOPICS.includes(str(body.topic, 60)) ? str(body.topic, 60) : "Something else";
  const message = str(body.message, 5000);

  if (!name) return NextResponse.json({ ok: false, error: "Please add your name." }, { status: 400 });
  if (!EMAIL.test(email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
  }
  if (message.length < 10) {
    return NextResponse.json({ ok: false, error: "Please add a short message." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM;
  if (!apiKey || !to || !from) {
    return NextResponse.json(
      { ok: false, error: "The form isn't working right now. Please try again later." },
      { status: 503 }
    );
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Website: ${topic} — ${name}`,
      text: `${message}\n\n—\n${name} <${email}>\nTopic: ${topic}\nSent from the contact form on alistairwebster.com`,
    }),
  });
  if (res.ok) return NextResponse.json({ ok: true });

  console.error("Contact form send failed", res.status, await res.text().catch(() => ""));
  return NextResponse.json({ ok: false, error: "Something went wrong. Please try again." }, { status: 502 });
}
