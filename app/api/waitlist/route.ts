import { NextResponse } from "next/server";

// Adds an email to the Speak Up app waitlist (a Resend segment).
// Needs RESEND_API_KEY and RESEND_WAITLIST_SEGMENT_ID in the environment.

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(req: Request) {
  let body: { email?: unknown; company?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: real people never fill this hidden field.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!EMAIL.test(email) || email.length > 254) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const segmentId = process.env.RESEND_WAITLIST_SEGMENT_ID;
  if (!apiKey || !segmentId) {
    return NextResponse.json({ ok: false, error: "The waitlist isn't open yet." }, { status: 503 });
  }
  const headers = { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" };

  // New contact: create it straight into the waitlist segment.
  const created = await fetch("https://api.resend.com/contacts", {
    method: "POST",
    headers,
    body: JSON.stringify({ email, unsubscribed: false, segments: [{ id: segmentId }] }),
  });
  if (created.ok) return NextResponse.json({ ok: true });

  // Contacts are global in Resend, so an existing contact (e.g. a newsletter or quiz signup)
  // can't be created twice; add them to the segment instead.
  const added = await fetch(
    `https://api.resend.com/contacts/${encodeURIComponent(email)}/segments/${segmentId}`,
    { method: "POST", headers }
  );
  if (added.ok || added.status === 409) return NextResponse.json({ ok: true });

  console.error(
    "Waitlist signup failed",
    created.status,
    await created.text().catch(() => ""),
    added.status,
    await added.text().catch(() => "")
  );
  return NextResponse.json({ ok: false, error: "Something went wrong. Please try again." }, { status: 502 });
}
