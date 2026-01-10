import Link from "next/link";

export default function Working() {
  return (
    <div className="page-shell">
      <div className="container-page">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <p className="eyebrow mb-4">Working Together</p>
          <h1 className="heading-hero text-4xl md:text-5xl lg:text-6xl mb-6 max-w-3xl text-balance">
            Clarity, voice, and good decisions.
          </h1>
          <p className="lead max-w-2xl">
            Most of what I do centers on helping you clarify your thinking and 
            strengthen your voice. Here are a few ways that tends to show up.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-8">
          {/* 1:1 Coaching */}
          <div className="card p-10 md:p-12">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-16 h-16 rounded-2xl bg-coral/10 flex items-center justify-center shrink-0">
                <span className="text-coral font-serif font-bold text-xl">1:1</span>
              </div>
              <div>
                <h2 className="heading-section text-3xl md:text-4xl mb-6">Coaching</h2>
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
                  className="btn-primary"
                >
                  Learn more at Speak Up For Good
                </a>
              </div>
            </div>
          </div>

          {/* Advisory */}
          <div className="card p-10 md:p-12">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-16 h-16 rounded-2xl bg-teal/10 flex items-center justify-center shrink-0">
                <span className="text-teal font-serif font-bold text-lg">Adv</span>
              </div>
              <div>
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
                  <p>
                    The format is flexible—sometimes regular touchpoints, sometimes 
                    intensive work around a specific project or moment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Workshops */}
          <div className="card p-10 md:p-12">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-16 h-16 rounded-2xl bg-coral/10 flex items-center justify-center shrink-0">
                <span className="text-coral font-serif font-bold text-lg">Wk</span>
              </div>
              <div>
                <h2 className="heading-section text-3xl md:text-4xl mb-6">Workshops & Group Work</h2>
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
          <div className="card p-10 md:p-12">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-16 h-16 rounded-2xl bg-teal/10 flex items-center justify-center shrink-0">
                <span className="text-teal font-serif font-bold text-xl">AI</span>
              </div>
              <div>
                <h2 className="heading-section text-3xl md:text-4xl mb-6">AI & Tools</h2>
                <div className="space-y-5 body-text">
                  <p>
                    I'm deeply curious about how AI is changing the way we work and 
                    think—particularly for people in mission-driven roles.
                  </p>
                  <p>
                    Sometimes this shows up in coaching (how do you use these tools 
                    without losing your voice?). Sometimes it's helping an organization 
                    think through what AI means for their work in a grounded way.
                  </p>
                  <p>
                    This isn't about chasing trends—it's about using new tools 
                    thoughtfully in service of what actually matters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 card p-10 md:p-12">
          <p className="lead mb-8">
            If you're interested in working together, the best next step is 
            simply to get in touch. Tell me what you're working on and we can 
            figure out if I'm the right person to help.
          </p>
          <div className="flex gap-4 flex-wrap items-center">
            <a href="mailto:hello@alistairwebster.com" className="btn-primary">
              Email me
            </a>
            <Link href="/" className="btn-secondary">
              Back home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
