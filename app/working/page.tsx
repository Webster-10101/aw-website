import Link from "next/link";

export default function Working() {
  return (
    <div className="page-shell">
      <div className="container-page max-w-5xl">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="eyebrow mb-4">Working together</p>
          <h1 className="heading-display text-5xl md:text-6xl leading-tight mb-6 text-balance">
            Clarity, voice, and good decisions.
          </h1>
          <p className="lead">
            Most of what I do centers on helping you clarify your thinking and
            strengthen your voice. Here are a few ways that tends to show up.
          </p>
        </div>

        <section className="grid gap-8">
          {/* 1:1 Coaching */}
          <div className="panel panel-hover p-10 md:p-12">
            <div className="flex items-start gap-5">
              <div className="h-12 w-12 rounded-2xl bg-brand-blue/10 ring-1 ring-brand-blue/10 flex items-center justify-center text-brand-blue font-semibold">
                1:1
              </div>
              <div className="min-w-0">
                <h2 className="heading-display text-3xl md:text-4xl mb-5">
                  Coaching
                </h2>
                <div className="space-y-5 text-brand-blue/75 leading-relaxed text-lg md:text-xl mb-8">
                  <p>
                    This is the core of my practice. We meet regularly—usually
                    every two weeks—and create a space where you can think
                    clearly about whatever you're working on.
                  </p>
                  <p>
                    It might be preparing for a high-stakes presentation,
                    navigating a leadership transition, working through a
                    decision that matters, or building the confidence to say
                    what needs to be said.
                  </p>
                  <p>
                    The work is practical, not theoretical. You’ll leave each
                    session with clarity and a sense of what to do next.
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
          <div className="panel panel-hover p-10 md:p-12">
            <div className="flex items-start gap-5">
              <div className="h-12 w-12 rounded-2xl bg-brand-blue/10 ring-1 ring-brand-blue/10 flex items-center justify-center text-brand-blue font-semibold">
                Adv
              </div>
              <div className="min-w-0">
                <h2 className="heading-display text-3xl md:text-4xl mb-5">
                  Advisory &amp; Strategic Thinking
                </h2>
                <div className="space-y-5 text-brand-blue/75 leading-relaxed text-lg md:text-xl">
                  <p>
                    Sometimes what’s needed isn’t coaching but someone to help
                    you think strategically—to see patterns you’re too close to
                    notice, ask uncomfortable questions, or make sense of
                    complexity.
                  </p>
                  <p>
                    This tends to work best with leaders in nonprofits or social
                    enterprises navigating something significant: a pivot, a
                    campaign, a crisis, or simply the ongoing challenge of
                    leading with limited resources.
                  </p>
                  <p>
                    The format is flexible—sometimes regular touchpoints,
                    sometimes intensive work around a specific project or
                    moment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Workshops */}
          <div className="panel panel-hover p-10 md:p-12">
            <div className="flex items-start gap-5">
              <div className="h-12 w-12 rounded-2xl bg-brand-blue/10 ring-1 ring-brand-blue/10 flex items-center justify-center text-brand-blue font-semibold">
                Wk
              </div>
              <div className="min-w-0">
                <h2 className="heading-display text-3xl md:text-4xl mb-5">
                  Workshops &amp; Group Work
                </h2>
                <div className="space-y-5 text-brand-blue/75 leading-relaxed text-lg md:text-xl">
                  <p>
                    Occasionally I work with leadership teams, boards, or small
                    cohorts on questions that need collective attention.
                  </p>
                  <p>
                    This might be a session on clear communication, working
                    through a strategic decision together, or helping a team
                    find its voice around something important.
                  </p>
                  <p>
                    These tend to be bespoke—designed around what the group
                    actually needs, not a packaged program.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* AI & Tools */}
          <div className="panel panel-hover p-10 md:p-12">
            <div className="flex items-start gap-5">
              <div className="h-12 w-12 rounded-2xl bg-brand-blue/10 ring-1 ring-brand-blue/10 flex items-center justify-center text-brand-blue font-semibold">
                AI
              </div>
              <div className="min-w-0">
                <h2 className="heading-display text-3xl md:text-4xl mb-5">
                  AI &amp; Tools
                </h2>
                <div className="space-y-5 text-brand-blue/75 leading-relaxed text-lg md:text-xl">
                  <p>
                    I’m deeply curious about how AI is changing the way we work
                    and think—particularly for people in mission-driven roles.
                  </p>
                  <p>
                    Sometimes this shows up in coaching (how do you use these
                    tools without losing your voice?). Sometimes it’s helping an
                    organization think through what AI means for their work in a
                    grounded way.
                  </p>
                  <p>
                    This isn’t about chasing trends—it’s about using new tools
                    thoughtfully in service of what actually matters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-12 md:mt-16 panel p-10 md:p-12">
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
        </section>
      </div>
    </div>
  );
}
