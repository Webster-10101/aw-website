import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Full viewport with dramatic typography */}
      <section className="min-h-[92vh] flex items-center pt-20 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-coral/[0.03] blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-teal/[0.03] blur-3xl pointer-events-none" />

        <div className="container-page w-full relative">
          <div className="max-w-4xl">
            {/* Eyebrow with accent line */}
            <div className="flex items-center gap-4 mb-8 animate-fade-up">
              <div className="accent-line animate-expand-line" />
              <p className="eyebrow">Coach & Thinking Partner</p>
            </div>

            {/* Hero headline - dramatic typography */}
            <h1 className="heading-hero text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] mb-8 text-balance animate-fade-up stagger-1">
              I help people think clearly
              <br className="hidden sm:block" />
              <span className="text-coral"> and speak with quiet confidence.</span>
            </h1>

            {/* Subheadline */}
            <p className="lead max-w-2xl mb-12 animate-fade-up stagger-2">
              Most of my work happens in conversation—coaching, advisory sessions, and
              occasional workshops. The thread is always clarity: finding the true
              thing to say, and saying it in a way that lands.
            </p>

            {/* CTA buttons */}
            <div className="flex gap-4 flex-wrap items-center animate-fade-up stagger-3">
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

      {/* Gradient Divider */}
      <div className="container-page">
        <div className="divider-gradient" />
      </div>

      {/* Ways of Working */}
      <section className="py-28 md:py-36">
        <div className="container-page">
          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <p className="eyebrow mb-4">Ways of Working</p>
              <h2 className="heading-section text-3xl md:text-4xl lg:text-[2.75rem]">
                A few ways we might
                <span className="block text-charcoal-light/60">work together</span>
              </h2>
            </div>
            <Link href="/working" className="link-arrow shrink-0 group">
              See the full page <span aria-hidden="true" className="inline-block">→</span>
            </Link>
          </div>

          {/* Featured Card - Coaching */}
          <div className="card card-hover p-10 md:p-14 lg:p-16 mb-8">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 lg:items-center">
              <div className="lg:w-1/3 flex flex-col items-start lg:items-center">
                <div className="icon-badge-coral w-20 h-20 mb-6 lg:mb-0">
                  <span className="text-coral font-display font-semibold text-2xl">1:1</span>
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
            <div className="card card-hover p-8 md:p-9">
              <div className="icon-badge-teal w-14 h-14 mb-6">
                <span className="text-teal font-display font-semibold text-lg">Adv</span>
              </div>
              <h3 className="heading-section text-xl mb-3">Advisory</h3>
              <p className="body-text text-[15px]">
                A clear outside perspective—to spot patterns, ask sharper questions,
                and make sense of complexity.
              </p>
            </div>

            {/* Workshops */}
            <div className="card card-hover p-8 md:p-9">
              <div className="icon-badge-coral w-14 h-14 mb-6">
                <span className="text-coral font-display font-semibold text-lg">Wk</span>
              </div>
              <h3 className="heading-section text-xl mb-3">Workshops</h3>
              <p className="body-text text-[15px]">
                Bespoke sessions for leadership teams when a group needs shared
                clarity or a better way through.
              </p>
            </div>

            {/* AI & Tools */}
            <div className="card card-hover p-8 md:p-9">
              <div className="icon-badge-teal w-14 h-14 mb-6">
                <span className="text-teal font-display font-semibold text-lg">AI</span>
              </div>
              <h3 className="heading-section text-xl mb-3">AI & Tools</h3>
              <p className="body-text text-[15px]">
                Thoughtful use of new tools in service of what matters—without
                losing your voice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="container-page">
        <div className="divider-gradient" />
      </div>

      {/* Who I Work With */}
      <section className="py-28 md:py-36">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left - Text Content */}
            <div>
              <p className="eyebrow mb-4">Who I Work With</p>
              <h2 className="heading-section text-3xl md:text-4xl lg:text-[2.75rem] mb-6">
                People I tend to
                <span className="block text-charcoal-light/60">work well with</span>
              </h2>
              <p className="lead mb-10">
                Thoughtful people, already capable, working on things that matter.
              </p>

              {/* List with refined styling */}
              <ul className="space-y-5 body-text">
                <li className="flex items-start gap-4 group">
                  <span className="mt-2.5 h-2 w-2 rounded-full bg-coral flex-none transition-transform group-hover:scale-125" />
                  <span>Leaders in nonprofits and mission-driven organizations</span>
                </li>
                <li className="flex items-start gap-4 group">
                  <span className="mt-2.5 h-2 w-2 rounded-full bg-coral flex-none transition-transform group-hover:scale-125" />
                  <span>People preparing for high-stakes moments—presentations, difficult conversations</span>
                </li>
                <li className="flex items-start gap-4 group">
                  <span className="mt-2.5 h-2 w-2 rounded-full bg-coral flex-none transition-transform group-hover:scale-125" />
                  <span>Anyone who needs to think something through properly before moving forward</span>
                </li>
              </ul>
            </div>

            {/* Right - CTA Card */}
            <div className="lg:mt-16">
              <div className="card p-10 md:p-12 relative overflow-hidden">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-coral/[0.04] rounded-bl-[80px]" />

                <h3 className="heading-section text-2xl mb-4 relative">Let's talk</h3>
                <p className="body-text mb-8 relative">
                  If this resonates and you'd like to explore working together,
                  I'd love to hear what you're thinking about.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 relative">
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
        </div>
      </section>
    </div>
  );
}
