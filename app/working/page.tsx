import Link from "next/link";

export default function Working() {
  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-24">
      <div className="container-page">
        {/* Header */}
        <div className="max-w-3xl mb-20 md:mb-24">
          <p className="eyebrow mb-4">Working Together</p>
          <h1 className="heading-hero text-4xl md:text-5xl lg:text-6xl mb-6 text-balance">
            Clarity, voice, and good decisions.
          </h1>
          <p className="lead">
            Most of what I do centers on helping you clarify your thinking and 
            strengthen your voice. Here are a few ways that tends to show up.
          </p>
        </div>

        {/* Services - Alternating Layout */}
        <div className="space-y-16 md:space-y-24">
          {/* 1:1 Coaching - Full Width Featured */}
          <div className="card p-10 md:p-14 lg:p-16">
            <div className="grid lg:grid-cols-3 gap-10 items-start">
              <div className="lg:col-span-1">
                <div className="w-20 h-20 rounded-2xl bg-coral/10 flex items-center justify-center mb-6">
                  <span className="text-coral font-serif font-bold text-2xl">1:1</span>
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

          {/* Advisory - Image Right */}
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-teal/10 flex items-center justify-center mb-6">
                <span className="text-teal font-serif font-bold text-xl">Adv</span>
              </div>
              <h2 className="heading-section text-3xl md:text-4xl mb-6">Advisory & Strategic Thinking</h2>
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
            <div className="card p-10 md:p-12 bg-teal/5 border-teal/10">
              <h3 className="heading-section text-xl mb-4">What this looks like</h3>
              <ul className="space-y-3 body-text">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal flex-none" />
                  <span>Regular touchpoints over months</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal flex-none" />
                  <span>Intensive work around a specific project</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal flex-none" />
                  <span>On-call support during critical moments</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Workshops - Full Width */}
          <div className="card p-10 md:p-14">
            <div className="grid lg:grid-cols-3 gap-10 items-start">
              <div className="lg:col-span-1">
                <div className="w-16 h-16 rounded-2xl bg-coral/10 flex items-center justify-center mb-6">
                  <span className="text-coral font-serif font-bold text-xl">Wk</span>
                </div>
                <h2 className="heading-section text-3xl md:text-4xl">Workshops & Group Work</h2>
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

          {/* AI & Tools */}
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="card p-10 md:p-12 bg-charcoal text-white order-2 lg:order-1">
              <h3 className="font-serif text-xl mb-4 text-white/90">The question I'm interested in</h3>
              <p className="text-white/70 leading-relaxed text-lg italic">
                "How do we use these tools without losing what makes human thinking valuable?"
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 rounded-2xl bg-teal/10 flex items-center justify-center mb-6">
                <span className="text-teal font-serif font-bold text-xl">AI</span>
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

        {/* CTA */}
        <div className="mt-24 md:mt-32">
          <div className="h-px bg-gradient-to-r from-transparent via-charcoal/10 to-transparent mb-16" />
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="heading-section text-3xl md:text-4xl mb-4">
                Interested in working together?
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
