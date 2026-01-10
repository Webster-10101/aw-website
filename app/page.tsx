import Link from "next/link";

export default function Home() {
  return (
    <div className="page-shell">
      {/* Hero Section */}
      <section className="container-page mb-24 md:mb-32">
        <p className="eyebrow mb-6">Coach & Thinking Partner</p>
        <h1 className="heading-hero text-5xl md:text-6xl lg:text-7xl mb-8 max-w-4xl text-balance">
          I help people think clearly and speak with quiet confidence.
        </h1>
        <p className="lead max-w-2xl mb-10">
          Most of my work happens in conversation—coaching, advisory sessions, and 
          occasional workshops. The thread is always clarity: finding the true 
          thing to say, and saying it in a way that lands.
        </p>
        <div className="flex gap-4 flex-wrap items-center">
          <a href="mailto:hello@alistairwebster.com" className="btn-primary">
            Get in touch
          </a>
          <Link href="/working" className="btn-secondary">
            How I work
          </Link>
        </div>
      </section>

      {/* Ways of Working */}
      <section className="container-page mb-24 md:mb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow mb-3">Ways of Working</p>
            <h2 className="heading-section text-3xl md:text-4xl">
              A few ways we might work together
            </h2>
          </div>
          <Link href="/working" className="link-arrow shrink-0">
            See the full page <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* 1:1 Coaching */}
          <div className="card card-hover p-8 md:p-10">
            <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center mb-6">
              <span className="text-coral font-serif font-bold text-lg">1:1</span>
            </div>
            <h3 className="heading-section text-2xl mb-4">Coaching</h3>
            <p className="body-text mb-6">
              The core of my practice. We create a space where you can think 
              clearly about what matters—high-stakes moments, leadership 
              transitions, difficult conversations, decisions with weight.
            </p>
            <a
              href="https://speakupforgood.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link-coral"
            >
              Speak Up For Good →
            </a>
          </div>

          {/* Advisory */}
          <div className="card card-hover p-8 md:p-10">
            <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-6">
              <span className="text-teal font-serif font-bold text-lg">Adv</span>
            </div>
            <h3 className="heading-section text-2xl mb-4">Advisory & Strategic Thinking</h3>
            <p className="body-text">
              Sometimes what's needed isn't coaching but a clear outside 
              perspective—to spot patterns, ask sharper questions, and make 
              sense of complexity without drama.
            </p>
          </div>

          {/* Workshops */}
          <div className="card card-hover p-8 md:p-10">
            <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center mb-6">
              <span className="text-coral font-serif font-bold text-lg">Wk</span>
            </div>
            <h3 className="heading-section text-2xl mb-4">Workshops & Group Work</h3>
            <p className="body-text">
              Bespoke sessions for leadership teams, boards, and small 
              cohorts—usually when a group needs shared clarity, aligned 
              messaging, or a better way through a knotty decision.
            </p>
          </div>

          {/* AI & Tools */}
          <div className="card card-hover p-8 md:p-10">
            <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-6">
              <span className="text-teal font-serif font-bold text-lg">AI</span>
            </div>
            <h3 className="heading-section text-2xl mb-4">AI & Tools</h3>
            <p className="body-text">
              Thoughtful use of new tools in service of what matters—without 
              losing your voice. Sometimes this is personal; sometimes it's 
              organizational strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Who I Work With */}
      <section className="container-page">
        <div className="card p-10 md:p-14">
          <p className="eyebrow mb-4">Who I Work With</p>
          <h2 className="heading-section text-3xl md:text-4xl mb-6">
            People I tend to work well with
          </h2>
          <p className="lead mb-8">
            Thoughtful people, already capable, working on things that matter. Often:
          </p>
          <ul className="space-y-4 body-text mb-10">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-coral flex-none" />
              <span>Leaders in nonprofits and mission-driven organizations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-coral flex-none" />
              <span>People preparing for high-stakes moments—presentations, difficult conversations, transitions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-coral flex-none" />
              <span>Anyone who needs to think something through properly before moving forward</span>
            </li>
          </ul>
          <div className="flex gap-4 flex-wrap items-center">
            <a href="mailto:hello@alistairwebster.com" className="btn-primary">
              Email me
            </a>
            <Link href="/about" className="btn-secondary">
              About me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
