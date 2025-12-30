import Link from "next/link";

export default function Working() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-stone-900 mb-6">
            Working Together
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            Most of what I do centers on helping you clarify your thinking and 
            strengthen your voice. Here's how that tends to show up.
          </p>
        </div>

        {/* 1:1 Coaching */}
        <section className="mb-16 pb-16 border-b border-stone-200">
          <h2 className="text-2xl font-light text-stone-900 mb-6">
            1:1 Coaching
          </h2>
          <div className="space-y-4 text-stone-600 leading-relaxed mb-6">
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
            className="inline-flex items-center text-stone-900 font-medium hover:text-stone-600 transition-colors"
          >
            Learn more at Speak Up For Good →
          </a>
        </section>

        {/* Advisory */}
        <section className="mb-16 pb-16 border-b border-stone-200">
          <h2 className="text-2xl font-light text-stone-900 mb-6">
            Advisory & Strategic Thinking
          </h2>
          <div className="space-y-4 text-stone-600 leading-relaxed">
            <p>
              Sometimes what's needed isn't coaching but someone to help you 
              think strategically—to see patterns you're too close to notice, 
              ask uncomfortable questions, or help make sense of complexity.
            </p>
            <p>
              This tends to work best with leaders in nonprofits or social 
              enterprises who are navigating something significant: a pivot, 
              a campaign, a crisis, or simply the ongoing challenge of leading 
              with limited resources.
            </p>
            <p>
              The format is flexible—sometimes regular touchpoints, sometimes 
              intensive work around a specific project or moment.
            </p>
          </div>
        </section>

        {/* Workshops */}
        <section className="mb-16 pb-16 border-b border-stone-200">
          <h2 className="text-2xl font-light text-stone-900 mb-6">
            Workshops & Group Work
          </h2>
          <div className="space-y-4 text-stone-600 leading-relaxed">
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
        </section>

        {/* AI & Tools */}
        <section className="mb-16 pb-16 border-b border-stone-200">
          <h2 className="text-2xl font-light text-stone-900 mb-6">
            AI & Tools
          </h2>
          <div className="space-y-4 text-stone-600 leading-relaxed">
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
        </section>

        {/* CTA */}
        <section className="mt-16">
          <p className="text-lg text-stone-600 leading-relaxed mb-6">
            If you're interested in working together, the best next step is 
            simply to get in touch. Tell me what you're working on and we can 
            figure out if I'm the right person to help.
          </p>
          <div className="flex gap-4">
            <a 
              href="mailto:hello@alistairwebster.com"
              className="inline-flex items-center px-6 py-3 bg-stone-900 text-white text-sm font-medium rounded-lg hover:bg-stone-800 transition-colors"
            >
              Email me
            </a>
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 border border-stone-300 text-stone-900 text-sm font-medium rounded-lg hover:bg-stone-50 transition-colors"
            >
              ← Back home
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

