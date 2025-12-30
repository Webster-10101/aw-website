import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="text-sm text-stone-600">
            <p className="mb-2">Alistair Webster</p>
            <p>Coach and thinking partner</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 text-sm">
            <a 
              href="https://speakupforgood.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-stone-600 hover:text-stone-900 transition-colors"
            >
              Speak Up For Good →
            </a>
            <a 
              href="mailto:hello@alistairwebster.com"
              className="text-stone-600 hover:text-stone-900 transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

