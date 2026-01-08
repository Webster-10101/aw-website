import Link from "next/link";

export default function Home() {
  return (
    <div className="page-shell">
      {/* Hero Section */}
      <section className="container-page mb-24 md:mb-32">
        <p className="eyebrow mb-6">Coach &amp; thinking partner</p>
        <h1 className="heading-display text-5xl md:text-7xl leading-[1.05] mb-8 text-balance">
          I help people think clearly and speak with quiet confidence.
        </h1>
        <p className="lead max-w-3xl mb-10">
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

      {/* How I Work - Cards */}
      <section className="container-page mb-24 md:mb-32">
        <div className="flex items-end justify-between gap-8 flex-wrap mb-12">
          <div>
            <p className="eyebrow mb-3">Ways of working</p>
            <h2 className="heading-display text-3xl md:text-4xl leading-tight">
              A few ways we might work together
            </h2>
          </div>
          <Link href="/working" className="link-arrow">
            See the full page <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* 1:1 Coaching */}
          <div className="panel panel-hover p-10">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-brand-blue/10 ring-1 ring-brand-blue/10 flex items-center justify-center text-brand-blue font-semibold">
                1
              </div>
              <div className="min-w-0">
                <h3 className="heading-display text-2xl md:text-3xl mb-4">
                  1:1 Coaching
                </h3>
                <p className="text-brand-blue/75 leading-relaxed text-lg mb-6">
                  The core of my practice. We create a space where you can think
                  clearly about what matters—high-stakes moments, leadership
                  transitions, difficult conversations, decisions with weight.
                </p>
                <a
                  href="https://speakupforgood.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-arrow"
                >
                  Speak Up For Good <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Advisory */}
          <div className="panel panel-hover p-10">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-brand-blue/10 ring-1 ring-brand-blue/10 flex items-center justify-center text-brand-blue font-semibold">
                2
              </div>
              <div className="min-w-0">
                <h3 className="heading-display text-2xl md:text-3xl mb-4">
                  Advisory &amp; Strategic Thinking
                </h3>
                <p className="text-brand-blue/75 leading-relaxed text-lg">
                  Sometimes what’s needed isn’t coaching but a clear outside
                  perspective—to spot patterns, ask sharper questions, and make
                  sense of complexity without drama.
                </p>
              </div>
            </div>
          </div>

          {/* Workshops */}
          <div className="panel panel-hover p-10">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-brand-blue/10 ring-1 ring-brand-blue/10 flex items-center justify-center text-brand-blue font-semibold">
                3
              </div>
              <div className="min-w-0">
                <h3 className="heading-display text-2xl md:text-3xl mb-4">
                  Workshops &amp; Group Work
                </h3>
                <p className="text-brand-blue/75 leading-relaxed text-lg">
                  Bespoke sessions for leadership teams, boards, and small
                  cohorts—usually when a group needs shared clarity, aligned
                  messaging, or a better way through a knotty decision.
                </p>
              </div>
            </div>
          </div>

          {/* AI & Tools */}
          <div className="panel panel-hover p-10">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-brand-blue/10 ring-1 ring-brand-blue/10 flex items-center justify-center text-brand-blue font-semibold">
                4
              </div>
              <div className="min-w-0">
                <h3 className="heading-display text-2xl md:text-3xl mb-4">
                  AI &amp; Tools
                </h3>
                <p className="text-brand-blue/75 leading-relaxed text-lg">
                  Thoughtful use of new tools in service of what matters—without
                  losing your voice. Sometimes this is personal; sometimes it’s
                  organizational strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who I Work With */}
      <section className="container-page">
        <div className="panel p-12">
          <p className="eyebrow mb-3">Fit</p>
          <h2 className="heading-display text-3xl md:text-4xl mb-6">
            Who I tend to work well with
          </h2>
          <p className="lead mb-8">
            Thoughtful people, already capable, working on things that matter.
            Often:
          </p>
          <ul className="space-y-4 text-brand-blue/75 text-lg md:text-xl mb-10">
            <li className="leading-relaxed flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-blue/40 flex-none" />
              <span>Leaders in nonprofits and mission-driven organizations</span>
            </li>
            <li className="leading-relaxed flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-blue/40 flex-none" />
              <span>
                People preparing for high-stakes moments—presentations,
                difficult conversations, transitions
              </span>
            </li>
            <li className="leading-relaxed flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-blue/40 flex-none" />
              <span>
                Anyone who needs to think something through properly before
                moving forward
              </span>
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
