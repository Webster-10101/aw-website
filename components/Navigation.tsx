"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home", mobileLabel: "Home" },
    { href: "/working", label: "What I Do", mobileLabel: "Work" },
    { href: "/about", label: "About", mobileLabel: "About" },
    { href: "/contact", label: "Contact", mobileLabel: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Subtle gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream/95 via-cream/90 to-cream/0 backdrop-blur-md" />

      <div className="container-page py-5 flex justify-between items-center relative">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-xl md:text-2xl text-charcoal font-medium tracking-tight hover:text-coral transition-colors duration-300"
        >
          Alistair Webster
        </Link>

        {/* Desktop nav - pill navigation */}
        <div className="hidden md:flex items-center gap-0.5 bg-charcoal/[0.04] backdrop-blur-sm rounded-full p-1 border border-charcoal/[0.06]">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-5 py-2 rounded-full text-[13px] font-medium transition-all duration-300 ${
                  active
                    ? "bg-white text-charcoal shadow-sm"
                    : "text-charcoal-muted hover:text-charcoal hover:bg-white/50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile nav */}
        <div className="flex md:hidden items-center gap-5">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  active ? "text-coral" : "text-charcoal-light hover:text-charcoal"
                }`}
              >
                {link.mobileLabel}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
