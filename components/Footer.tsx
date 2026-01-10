import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 md:mt-32 border-t border-gray-100 bg-white/60 backdrop-blur-sm">
      <div className="container-page py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <p className="font-serif text-xl text-charcoal font-semibold mb-2">
              Alistair Webster
            </p>
            <p className="text-charcoal-light">Coach and thinking partner</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <a
              href="https://speakupforgood.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow"
            >
              Speak Up For Good <span aria-hidden="true">→</span>
            </a>
            <a href="mailto:hello@alistairwebster.com" className="link-arrow">
              Get in touch <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100 text-sm text-charcoal-light/60">
          © {new Date().getFullYear()} Alistair Webster. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
