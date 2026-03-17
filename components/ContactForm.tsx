"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/mwvrwbwq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus("sent");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="text-center py-12">
        <p className="text-xl font-medium text-charcoal mb-2">Thanks for your message!</p>
        <p className="text-charcoal-muted">I'll get back to you as soon as I can.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm link-coral"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-charcoal mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-5 py-4 rounded-xl bg-white/90 backdrop-blur-sm border border-charcoal/[0.08] text-charcoal placeholder:text-charcoal-muted focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral/30 transition-all duration-300"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-charcoal mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-5 py-4 rounded-xl bg-white/90 backdrop-blur-sm border border-charcoal/[0.08] text-charcoal placeholder:text-charcoal-muted focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral/30 transition-all duration-300"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-charcoal mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={6}
            className="w-full px-5 py-4 rounded-xl bg-white/90 backdrop-blur-sm border border-charcoal/[0.08] text-charcoal placeholder:text-charcoal-muted focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral/30 transition-all duration-300 resize-none"
            placeholder="What's on your mind?"
          />
        </div>
        <button type="submit" className="btn-primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send message"}
        </button>
        {status === "error" && (
          <p className="text-sm text-red-600">
            Something went wrong. Please try again or email me directly.
          </p>
        )}
      </form>

      <p className="text-sm text-charcoal-muted mt-4">
        Or email me directly at{" "}
        <a
          href="mailto:hello@alistairwebster.com"
          className="link-coral"
        >
          hello@alistairwebster.com
        </a>
      </p>
    </div>
  );
}
