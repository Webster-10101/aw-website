import Link from "next/link";

export default function Working() {
  return (
    <div className="min-h-screen pt-28 md:pt-36 pb-24">
      <div className="container-page">
        {/* Header with entrance animation */}
        <div className="max-w-3xl mb-24 md:mb-28">
          <div className="flex items-center gap-4 mb-6 animate-fade-up">
            <div className="accent-line animate-expand-line" />
            <p className="eyebrow">Working Together</p>
          </div>
          <h1 className="heading-hero text-4xl md:text-5xl lg:text-6xl mb-6 text-balance animate-fade-up stagger-1">
            Clarity, voice, and
            <span className="text-coral"> good decisions.</span>
          </h1>
          <p className="lead animate-fade-up stagger-2">
            Most of what I do centers on helping you clarify your thinking and
            strengthen your voice. Here are a few ways that tends to show up.
          </p>
        </div>

        {/* Services - Alternating Layout */}
        <div className="space-y-20 md:space-y-28">
          {/* 1:1 Coaching - Full Width Featured */}
          <div className="card card-hover p-10 md:p-14 lg:p-16 relative overflow-hidden">
            {/* Decorative accent */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-coral via-coral/50 to-transparent" />

            <div className="grid lg:grid-cols-3 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-1">
                <div className="icon-badge-coral w-20 h-20 mb-6">
                  <span className="text-coral font-display font-semibold text-2xl">1:1</span>
                </div>
                <h2 className="heading-section text-3xl md:text-4xl">Coaching</h2>
              </div>
              <div className="lg:col-span-2">
                <div className="space-y-5 body-text mb-8">
                  <p>
                    This is the core of my practice. We meet regularly—usually every
                    two weeks—and create a space where you can think clearly about
                    whatever you're working on.
                  </p>
                  <p>
                    It might be preparing for a high-stakes presentation, navigating
                    a leadership transition, working through a decision that matters,
                    or building the confidence to say what needs to be said.
                  </p>
                  <p>
                    The work is practical, not theoretical. You'll leave each session
                    with clarity and a sense of what to do next.
                  </p>
                </div>
                <a
                  href="https://speakupforgood.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex"
                >
                  Learn more at Speak Up For Good
                </a>
              </div>
            </div>
          </div>

          {/* Advisory - Two Column */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="icon-badge-teal w-16 h-16 mb-6">
                <span className="text-teal font-display font-semibold text-xl">Adv</span>
              </div>
              <h2 className="heading-section text-3xl md:text-4xl mb-6">
                Advisory &
                <span className="block text-charcoal-light/60">Strategic Thinking</span>
              </h2>
              <div className="space-y-5 body-text">
                <p>
                  Sometimes what's needed isn't coaching but someone to help you
                  think strategically—to see patterns you're too close to notice,
                  ask uncomfortable questions, or make sense of complexity.
                </p>
                <p>
                  This tends to work best with leaders in nonprofits or social
                  enterprises navigating something significant: a pivot, a campaign,
                  a crisis, or simply the ongoing challenge of leading with limited resources.
                </p>
              </div>
            </div>
            <div className="card p-10 md:p-12 bg-teal/[0.03] border-teal/10">
              <h3 className="heading-section text-xl mb-5">What this looks like</h3>
              <ul className="space-y-4 body-text">
                <li className="flex items-start gap-4 group">
                  <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-teal flex-none transition-transform group-hover:scale-150" />
                  <span>Regular touchpoints over months</span>
                </li>
                <li className="flex items-start gap-4 group">
                  <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-teal flex-none transition-transform group-hover:scale-150" />
                  <span>Intensive work around a specific project</span>
                </li>
                <li className="flex items-start gap-4 group">
                  <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-teal flex-none transition-transform group-hover:scale-150" />
                  <span>On-call support during critical moments</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Workshops - Full Width */}
          <div className="card card-hover p-10 md:p-14 lg:p-16">
            <div className="grid lg:grid-cols-3 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-1">
                <div className="icon-badge-coral w-16 h-16 mb-6">
                  <span className="text-coral font-display font-semibold text-xl">Wk</span>
                </div>
                <h2 className="heading-section text-3xl md:text-4xl">
                  Workshops &
                  <span className="block text-charcoal-light/60">Group Work</span>
                </h2>
              </div>
              <div className="lg:col-span-2">
                <div className="space-y-5 body-text">
                  <p>
                    Occasionally I work with leadership teams, boards, or small cohorts
                    on questions that need collective attention.
                  </p>
                  <p>
                    This might be a session on clear communication, working through a
                    strategic decision together, or helping a team find its voice around
                    something important.
                  </p>
                  <p>
                    These tend to be bespoke—designed around what the group actually
                    needs, not a packaged program.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* AI & Tools - Two Column with Dark Card */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="card p-10 md:p-12 bg-charcoal text-white order-2 lg:order-1 relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-charcoal-light/10 to-transparent" />

              <h3 className="font-display text-xl mb-4 text-white/90 relative">The question I'm interested in</h3>
              <p className="text-white/70 leading-relaxed text-lg font-display italic relative">
                "How do we use these tools without losing what makes human thinking valuable?"
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="icon-badge-teal w-16 h-16 mb-6">
                <span className="text-teal font-display font-semibold text-xl">AI</span>
              </div>
              <h2 className="heading-section text-3xl md:text-4xl mb-6">AI & Tools</h2>
              <div className="space-y-5 body-text">
                <p>
                  I'm deeply curious about how AI is changing the way we work and
                  think—particularly for people in mission-driven roles.
                </p>
                <p>
                  This isn't about chasing trends—it's about using new tools
                  thoughtfully in service of what actually matters.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-28 md:mt-36">
          <div className="divider-gradient mb-20" />
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="heading-section text-3xl md:text-4xl lg:text-[2.75rem] mb-4">
                Interested in
                <span className="block text-charcoal-light/60">working together?</span>
              </h2>
              <p className="lead">
                The best next step is simply to get in touch. Tell me what you're
                working on and we can figure out if I'm the right person to help.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <a href="mailto:hello@alistairwebster.com" className="btn-primary text-center">
                Email me
              </a>
              <Link href="/" className="btn-secondary text-center">
                Back home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
