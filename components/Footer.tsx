import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 md:mt-32 border-t border-white/50 bg-white/35 backdrop-blur-xl">
      <div className="container-page py-14 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div className="text-brand-blue/70">
            <p className="mb-2 font-display text-xl text-brand-blue tracking-tight">
              Alistair Webster
            </p>
            <p className="text-base">Coach and thinking partner</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-base">
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
      </div>
    </footer>
  );
}
