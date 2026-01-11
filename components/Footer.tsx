import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 md:mt-32 relative">
      {/* Top border with gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-charcoal/10 to-transparent" />

      <div className="bg-white/40 backdrop-blur-sm">
        <div className="container-page py-16 md:py-20">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link
                href="/"
                className="font-display text-2xl text-charcoal font-medium tracking-tight hover:text-coral transition-colors duration-300 inline-block mb-5"
              >
                Alistair Webster
              </Link>
              <p className="text-charcoal-light max-w-md leading-relaxed">
                Coach and thinking partner. Helping people think clearly and
                speak with quiet confidence.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="eyebrow text-[11px] mb-5">Navigation</h4>
              <ul className="space-y-3.5">
                <li>
                  <Link
                    href="/"
                    className="text-charcoal-light hover:text-charcoal transition-colors duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/working"
                    className="text-charcoal-light hover:text-charcoal transition-colors duration-300"
                  >
                    Working Together
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-charcoal-light hover:text-charcoal transition-colors duration-300"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="eyebrow text-[11px] mb-5">Connect</h4>
              <ul className="space-y-3.5">
                <li>
                  <a
                    href="mailto:hello@alistairwebster.com"
                    className="text-charcoal-light hover:text-coral transition-colors duration-300"
                  >
                    hello@alistairwebster.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://speakupforgood.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-charcoal-light hover:text-coral transition-colors duration-300 inline-flex items-center gap-1.5"
                  >
                    Speak Up For Good
                    <svg
                      className="w-3.5 h-3.5 opacity-50"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-charcoal/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-charcoal-muted">
              © {new Date().getFullYear()} Alistair Webster
            </p>
            <p className="text-sm text-charcoal-muted">
              Built with care
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
