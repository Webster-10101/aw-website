import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-brand-blue/10 bg-white/70 backdrop-blur-sm mt-32">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="text-base text-brand-blue/70">
            <p className="mb-2 font-bold text-brand-blue text-lg">Alistair Webster</p>
            <p>Coach and thinking partner</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 text-base">
            <a 
              href="https://speakupforgood.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-blue/70 hover:text-brand-blue transition-colors font-semibold hover:underline"
            >
              Speak Up For Good →
            </a>
            <a 
              href="mailto:hello@alistairwebster.com"
              className="text-brand-blue/70 hover:text-brand-blue transition-colors font-semibold hover:underline"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
