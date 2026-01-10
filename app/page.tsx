import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Full viewport height */}
      <section className="min-h-[90vh] flex items-center pt-20">
        <div className="container-page w-full">
          <div className="max-w-4xl">
            <p className="eyebrow mb-6">Coach & Thinking Partner</p>
            <h1 className="heading-hero text-5xl md:text-6xl lg:text-7xl mb-8 text-balance">
              I help people think clearly and speak with quiet confidence.
            </h1>
            <p className="lead max-w-2xl mb-12">
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
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container-page">
        <div className="h-px bg-gradient-to-r from-transparent via-charcoal/10 to-transparent" />
      </div>

      {/* Ways of Working */}
      <section className="py-24 md:py-32">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <p className="eyebrow mb-3">Ways of Working</p>
              <h2 className="heading-section text-3xl md:text-4xl">
                A few ways we might work together
              </h2>
            </div>
            <Link href="/working" className="link-arrow shrink-0">
              See the full page <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Featured Card - Coaching */}
          <div className="card card-hover p-10 md:p-14 mb-8">
            <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
              <div className="lg:w-1/3">
                <div className="w-20 h-20 rounded-2xl bg-coral/10 flex items-center justify-center mb-6 lg:mb-0 lg:mx-auto">
                  <span className="text-coral font-serif font-bold text-2xl">1:1</span>
                </div>
              </div>
              <div className="lg:w-2/3">
                <h3 className="heading-section text-2xl md:text-3xl mb-4">Coaching</h3>
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
            </div>
          </div>

          {/* Secondary Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Advisory */}
            <div className="card card-hover p-8">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-5">
                <span className="text-teal font-serif font-bold">Adv</span>
              </div>
              <h3 className="heading-section text-xl mb-3">Advisory</h3>
              <p className="body-text text-base">
                A clear outside perspective—to spot patterns, ask sharper questions, 
                and make sense of complexity.
              </p>
            </div>

            {/* Workshops */}
            <div className="card card-hover p-8">
              <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center mb-5">
                <span className="text-coral font-serif font-bold">Wk</span>
              </div>
              <h3 className="heading-section text-xl mb-3">Workshops</h3>
              <p className="body-text text-base">
                Bespoke sessions for leadership teams when a group needs shared 
                clarity or a better way through.
              </p>
            </div>

            {/* AI & Tools */}
            <div className="card card-hover p-8">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-5">
                <span className="text-teal font-serif font-bold">AI</span>
              </div>
              <h3 className="heading-section text-xl mb-3">AI & Tools</h3>
              <p className="body-text text-base">
                Thoughtful use of new tools in service of what matters—without 
                losing your voice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container-page">
        <div className="h-px bg-gradient-to-r from-transparent via-charcoal/10 to-transparent" />
      </div>

      {/* Who I Work With */}
      <section className="py-24 md:py-32">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Text Content */}
            <div>
              <p className="eyebrow mb-4">Who I Work With</p>
              <h2 className="heading-section text-3xl md:text-4xl mb-6">
                People I tend to work well with
              </h2>
              <p className="lead mb-8">
                Thoughtful people, already capable, working on things that matter.
              </p>
              <ul className="space-y-4 body-text mb-10">
                <li className="flex items-start gap-4">
                  <span className="mt-2 h-2 w-2 rounded-full bg-coral flex-none" />
                  <span>Leaders in nonprofits and mission-driven organizations</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-2 h-2 w-2 rounded-full bg-coral flex-none" />
                  <span>People preparing for high-stakes moments—presentations, difficult conversations</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-2 h-2 w-2 rounded-full bg-coral flex-none" />
                  <span>Anyone who needs to think something through properly before moving forward</span>
                </li>
              </ul>
            </div>

            {/* Right - CTA Card */}
            <div className="card p-10 md:p-12">
              <h3 className="heading-section text-2xl mb-4">Let's talk</h3>
              <p className="body-text mb-8">
                If this resonates and you'd like to explore working together, 
                I'd love to hear what you're thinking about.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="mailto:hello@alistairwebster.com" className="btn-primary text-center">
                  Email me
                </a>
                <Link href="/about" className="btn-secondary text-center">
                  About me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
