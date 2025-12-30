import Link from "next/link";

export default function Working() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <h1 className="text-6xl md:text-7xl font-bold text-brand-blue mb-8">
            Working Together
          </h1>
          <p className="text-2xl text-brand-blue/80 leading-relaxed">
            Most of what I do centers on helping you clarify your thinking and 
            strengthen your voice. Here's how that tends to show up.
          </p>
        </div>

        {/* 1:1 Coaching */}
        <section className="mb-10 bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl">
          <h2 className="text-4xl font-bold text-brand-blue mb-8">
            1:1 Coaching
          </h2>
          <div className="space-y-5 text-brand-blue/80 leading-relaxed text-xl mb-8">
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
            className="inline-flex items-center px-8 py-4 bg-brand-blue text-white font-bold rounded-full hover:bg-brand-blue-light transition-all shadow-lg hover:shadow-xl hover:scale-105 transform text-lg"
          >
            Learn more at Speak Up For Good →
          </a>
        </section>

        {/* Advisory */}
        <section className="mb-10 bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl">
          <h2 className="text-4xl font-bold text-brand-blue mb-8">
            Advisory & Strategic Thinking
          </h2>
          <div className="space-y-5 text-brand-blue/80 leading-relaxed text-xl">
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
        <section className="mb-10 bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl">
          <h2 className="text-4xl font-bold text-brand-blue mb-8">
            Workshops & Group Work
          </h2>
          <div className="space-y-5 text-brand-blue/80 leading-relaxed text-xl">
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
        <section className="mb-10 bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl">
          <h2 className="text-4xl font-bold text-brand-blue mb-8">
            AI & Tools
          </h2>
          <div className="space-y-5 text-brand-blue/80 leading-relaxed text-xl">
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
        <section className="mt-20 bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl">
          <p className="text-xl text-brand-blue/80 leading-relaxed mb-8">
            If you're interested in working together, the best next step is 
            simply to get in touch. Tell me what you're working on and we can 
            figure out if I'm the right person to help.
          </p>
          <div className="flex gap-6 flex-wrap">
            <a 
              href="mailto:hello@alistairwebster.com"
              className="inline-flex items-center px-8 py-4 bg-brand-blue text-white font-bold rounded-full hover:bg-brand-blue-light transition-all shadow-lg hover:shadow-xl hover:scale-105 transform text-lg"
            >
              Email me
            </a>
            <Link 
              href="/"
              className="inline-flex items-center px-8 py-4 bg-white text-brand-blue font-bold rounded-full hover:bg-white/90 transition-all shadow-md hover:shadow-lg border-2 border-brand-blue/20 hover:scale-105 transform text-lg"
            >
              ← Back home
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
