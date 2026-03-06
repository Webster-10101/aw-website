"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(
      `From: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:hello@alistairwebster.com?subject=${subject}&body=${body}`;
  };

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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={6}
            className="w-full px-5 py-4 rounded-xl bg-white/90 backdrop-blur-sm border border-charcoal/[0.08] text-charcoal placeholder:text-charcoal-muted focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral/30 transition-all duration-300 resize-none"
            placeholder="What's on your mind?"
          />
        </div>
        <button type="submit" className="btn-primary">
          Send message
        </button>
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
