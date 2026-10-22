"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "done" | "error";

export default function WaitlistForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.get("email"), company: form.get("company") }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setStatus("done");
        setMessage("You're on the list. I'll email you when Speak Up opens.");
      } else {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  if (status === "done") {
    return (
      <p className="waitlist-msg waitlist-done" role="status">
        {message}
      </p>
    );
  }

  return (
    <form className="waitlist" onSubmit={onSubmit} noValidate>
      <label htmlFor="waitlist-email" className="waitlist-label">
        Want the app on its own? Join the waitlist.
      </label>
      <div className="waitlist-row">
        <input
          id="waitlist-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@example.com"
          className="waitlist-input"
        />
        <input name="company" type="text" tabIndex={-1} autoComplete="off" className="waitlist-hp" aria-hidden />
        <button type="submit" className="aw-btn aw-btn-primary" disabled={status === "sending"}>
          {status === "sending" ? "Joining…" : "Join the waitlist"}
        </button>
      </div>
      {status === "error" && (
        <p className="waitlist-msg waitlist-error" role="alert">
          {message}
        </p>
      )}
    </form>
  );
}
