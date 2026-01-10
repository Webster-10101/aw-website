import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 md:mt-28 border-t border-gray-200/60 bg-white/40 backdrop-blur-sm">
      <div className="container-page py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="font-serif text-2xl text-charcoal font-semibold hover:text-coral transition-colors inline-block mb-4">
              Alistair Webster
            </Link>
            <p className="text-charcoal-light max-w-md">
              Coach and thinking partner. Helping people think clearly and 
              speak with quiet confidence.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-medium text-charcoal mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-charcoal-light hover:text-charcoal transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/working" className="text-charcoal-light hover:text-charcoal transition-colors">
                  Working Together
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-charcoal-light hover:text-charcoal transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium text-charcoal mb-4">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:hello@alistairwebster.com" 
                  className="text-charcoal-light hover:text-coral transition-colors"
                >
                  hello@alistairwebster.com
                </a>
              </li>
              <li>
                <a
                  href="https://speakupforgood.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-charcoal-light hover:text-coral transition-colors"
                >
                  Speak Up For Good
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-charcoal-light/70">
          <p>© {new Date().getFullYear()} Alistair Webster. All rights reserved.</p>
          <p>Built with care</p>
        </div>
      </div>
    </footer>
  );
}
