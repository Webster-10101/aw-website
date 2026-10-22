import { NextResponse } from "next/server";

// Adds an email to the Speak Up app waitlist (a Resend audience).
// Needs RESEND_API_KEY and RESEND_WAITLIST_AUDIENCE_ID in the environment.

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
  const audienceId = process.env.RESEND_WAITLIST_AUDIENCE_ID;
  if (!apiKey || !audienceId) {
    return NextResponse.json({ ok: false, error: "The waitlist isn't open yet." }, { status: 503 });
  }

  const res = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ email, unsubscribed: false }),
  });

  // Already on the list counts as success.
  if (res.ok || res.status === 409) {
    return NextResponse.json({ ok: true });
  }

  console.error("Waitlist signup failed", res.status, await res.text().catch(() => ""));
  return NextResponse.json({ ok: false, error: "Something went wrong. Please try again." }, { status: 502 });
}
