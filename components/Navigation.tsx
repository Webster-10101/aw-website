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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100/80">
      <div className="container-page py-4 flex justify-between items-center">
        <Link
          href="/"
          className="font-serif text-xl md:text-2xl text-charcoal font-semibold hover:text-coral transition-colors"
        >
          Alistair Webster
        </Link>

        <div className="hidden md:flex items-center gap-1 bg-cream-dark/50 rounded-full p-1.5">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  active
                    ? "bg-white text-charcoal shadow-sm"
                    : "text-charcoal-light hover:text-charcoal hover:bg-white/50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile nav */}
        <div className="flex md:hidden items-center gap-4">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  active ? "text-coral" : "text-charcoal-light"
                }`}
              >
                {link.label.split(" ")[0]}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
