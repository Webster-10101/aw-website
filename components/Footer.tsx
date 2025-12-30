import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-brand-blue/10 bg-white/60 backdrop-blur-sm mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="text-sm text-brand-blue/70">
            <p className="mb-2 font-medium text-brand-blue">Alistair Webster</p>
            <p>Coach and consultant</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 text-sm">
            <a 
              href="https://speakupforgood.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-blue/70 hover:text-brand-blue transition-colors font-medium"
            >
              Speak Up For Good →
            </a>
            <a 
              href="mailto:hello@alistairwebster.com"
              className="text-brand-blue/70 hover:text-brand-blue transition-colors font-medium"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
