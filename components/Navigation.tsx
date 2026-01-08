"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/working", label: "Working Together" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/50 bg-white/45 backdrop-blur-xl">
      <div className="container-page py-4 md:py-5 flex justify-between items-center gap-6">
        <Link
          href="/"
          className="font-display text-xl md:text-2xl text-brand-blue tracking-tight hover:text-brand-blue-light transition-colors whitespace-nowrap"
        >
          Alistair Webster
        </Link>

        <div className="flex items-center gap-1 md:gap-2 rounded-full bg-white/50 border border-white/60 backdrop-blur-xl p-1">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  "px-3 md:px-4 py-2 rounded-full text-sm md:text-[15px] font-semibold transition-colors",
                  active
                    ? "bg-brand-blue text-white shadow-sm"
                    : "text-brand-blue/70 hover:text-brand-blue hover:bg-white/70",
                ].join(" ")}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
