"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "done" | "error";

const TOPICS = ["Coaching", "Freelancing for Good", "Consulting or a project", "Something else"];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(form.entries())),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setStatus("done");
      } else {
        setStatus("error");
        setError(data.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  }

  if (status === "done") {
    return (
      <p className="waitlist-msg waitlist-done" role="status">
        Thanks, your message is on its way. I&rsquo;ll get back to you soon.
      </p>
    );
  }

  return (
    <form className="contact-form aw-panel" onSubmit={onSubmit} noValidate>
      <div className="contact-row">
        <label>
          <span>Your name</span>
          <input name="name" type="text" autoComplete="name" required className="field" />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required className="field" />
        </label>
      </div>
      <label>
        <span>What&rsquo;s it about?</span>
        <select name="topic" className="field" defaultValue="Coaching">
          {TOPICS.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label>
        <span>Message</span>
        <textarea name="message" rows={6} required className="field" />
      </label>
      <input name="company" type="text" tabIndex={-1} autoComplete="off" className="waitlist-hp" aria-hidden />
      <div>
        <button type="submit" className="aw-btn aw-btn-primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
      </div>
      <p className="form-privacy">
        I&rsquo;ll only use your details to reply to you. <a href="/privacy">Privacy</a>
      </p>
      {status === "error" && (
        <p className="waitlist-msg waitlist-error" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
