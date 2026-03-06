import Link from "next/link";
import { MicIcon, CommunityIcon, LaptopIcon, LinkedInIcon, SubstackIcon } from "@/components/SiteIcons";

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
                className="font-display text-2xl text-charcoal font-medium tracking-tight hover:text-navy transition-colors duration-300 inline-block mb-5"
              >
                Alistair Webster
              </Link>
              <p className="text-charcoal-light max-w-md leading-relaxed">
                Speaking and confidence coach, Freelancing for Good co-founder,
                and AI consultant. Helping people to speak up and be heard, work
                smarter with AI, and find freedom and purpose through
                freelancing.
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
                    What I Do
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
                <li>
                  <Link
                    href="/contact"
                    className="text-charcoal-light hover:text-charcoal transition-colors duration-300"
                  >
                    Contact
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
                    className="text-charcoal-light hover:text-navy transition-colors duration-300"
                  >
                    hello@alistairwebster.com
                  </a>
                </li>
                <li>
                  <a href="https://speakupforgood.com" target="_blank" rel="noopener noreferrer" className="text-charcoal-light hover:text-charcoal transition-colors duration-300 inline-flex items-center gap-2">
                    <MicIcon className="w-4 h-4 opacity-50" />
                    Speak Up For Good
                  </a>
                </li>
                <li>
                  <a href="https://aiwithal.com" target="_blank" rel="noopener noreferrer" className="text-charcoal-light hover:text-charcoal transition-colors duration-300 inline-flex items-center gap-2">
                    <LaptopIcon className="w-4 h-4 opacity-50" />
                    AI with Al
                  </a>
                </li>
                <li>
                  <a href="https://freelancingforgood.com" target="_blank" rel="noopener noreferrer" className="text-charcoal-light hover:text-charcoal transition-colors duration-300 inline-flex items-center gap-2">
                    <CommunityIcon className="w-4 h-4 opacity-50" />
                    Freelancing for Good
                  </a>
                </li>
                <li>
                  <a href="https://speakupforgood.substack.com/" target="_blank" rel="noopener noreferrer" className="text-charcoal-light hover:text-charcoal transition-colors duration-300 inline-flex items-center gap-2">
                    <SubstackIcon className="w-4 h-4 opacity-50" />
                    Substack
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/alistair-webster/" target="_blank" rel="noopener noreferrer" className="text-charcoal-light hover:text-charcoal transition-colors duration-300 inline-flex items-center gap-2">
                    <LinkedInIcon className="w-4 h-4 opacity-50" />
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Giving pledge */}
          <div className="mb-12 text-sm text-charcoal-light leading-relaxed max-w-md">
            I donate 10% of my income to effective charities through the{" "}
            <a
              href="https://freelancingforgood.com/pledge/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal hover:text-navy transition-colors duration-300 underline underline-offset-2 decoration-charcoal/20"
            >
              Freelancing for Good Giving Pledge
            </a>
            , in partnership with Giving What We Can.
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-charcoal/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-charcoal-muted">
              © {new Date().getFullYear()} Alistair Webster
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
