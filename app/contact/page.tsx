"use client";

import { useState } from "react";
import { LinkedInIcon, SubstackIcon, MicIcon, CommunityIcon, LaptopIcon } from "@/components/SiteIcons";

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/alistair-webster/",
    description: "Connect and say hello",
    color: "text-[#0A66C2]",
    bg: "bg-[#0A66C2]/10",
    icon: <LinkedInIcon />,
  },
  {
    name: "Substack",
    href: "https://speakupforgood.substack.com/",
    description: "Writing on speaking and confidence",
    color: "text-[#FF6719]",
    bg: "bg-[#FF6719]/10",
    icon: <SubstackIcon />,
  },
  {
    name: "Speak Up For Good",
    href: "https://speakupforgood.com",
    description: "Speaking and confidence coaching",
    color: "text-terracotta",
    bg: "bg-terracotta/10",
    icon: <MicIcon />,
  },
  {
    name: "Freelancing for Good",
    href: "https://freelancingforgood.com",
    description: "Community for impact-driven freelancers",
    color: "text-ochre",
    bg: "bg-ochre/10",
    icon: <CommunityIcon />,
  },
  {
    name: "AI with Al",
    href: "https://aiwithal.com",
    description: "AI consulting and workshops",
    color: "text-sage",
    bg: "bg-sage/10",
    icon: <LaptopIcon />,
  },
];

export default function Contact() {
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
    <div className="min-h-screen pt-28 md:pt-36 pb-24">
      <div className="container-page">
        {/* Header */}
        <div className="max-w-3xl mb-20 md:mb-24">
          <div className="flex items-center gap-4 mb-6 animate-fade-up">
            <div className="accent-line animate-expand-line" />
            <p className="eyebrow">Contact</p>
          </div>
          <h1 className="heading-hero text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-up stagger-1">
            Get in touch.
          </h1>
          <p className="lead animate-fade-up stagger-2">
            If you&rsquo;d like to work together, have a question, or just
            want to say hello &mdash; I&rsquo;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Form */}
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

          {/* Links */}
          <div className="space-y-6">
            <h3 className="heading-section text-xl mb-6">Find me elsewhere</h3>
            <div className="space-y-5">
              {socials.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className={`w-10 h-10 rounded-xl ${s.bg} ${s.color} flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}
                  >
                    {s.icon}
                  </div>
                  <div>
                    <p className={`font-medium text-charcoal group-hover:${s.color} transition-colors duration-300`}>
                      {s.name}
                    </p>
                    <p className="text-sm text-charcoal-muted">
                      {s.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Based in Edinburgh */}
            <div className="pt-4">
              <p className="text-sm text-charcoal-muted">
                Based in Edinburgh, Scotland.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
