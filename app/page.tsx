import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="max-w-3xl mx-auto px-6 mb-32">
        <h1 className="text-5xl md:text-6xl font-light text-stone-900 mb-8 leading-tight">
          I help people think clearly and speak confidently about what matters.
        </h1>
        <p className="text-xl text-stone-600 leading-relaxed">
          Most of my work happens in conversation—one-to-one coaching, advisory sessions, 
          or workshops with small groups. The thread that runs through all of it is helping 
          you find your voice and use it with purpose.
        </p>
      </section>

      {/* How I Work */}
      <section className="max-w-3xl mx-auto px-6 mb-32">
        <h2 className="text-3xl font-light text-stone-900 mb-8">How I work</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-medium text-stone-900 mb-3">
              1:1 Coaching
            </h3>
            <p className="text-stone-600 leading-relaxed">
              This is where most of my energy goes. Whether you're navigating a transition, 
              preparing for something important, or working through a question that won't 
              let you go—we create space to think it through properly.
            </p>
            <p className="text-sm text-stone-500 mt-3">
              → Full details at{" "}
              <a 
                href="https://speakupforgood.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-stone-900 transition-colors"
              >
                Speak Up For Good
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-stone-900 mb-3">
              Advisory & Strategic Thinking
            </h3>
            <p className="text-stone-600 leading-relaxed">
              Sometimes what's needed isn't coaching but a consultant—someone to
              help you see around corners, spot what's not being said, or make sense 
              of complexity. This tends to work best with leaders in mission-driven 
              organizations.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-stone-900 mb-3">
              Workshops & Group Work
            </h3>
            <p className="text-stone-600 leading-relaxed">
              Occasionally I work with small groups—leadership teams, boards, or cohorts—on 
              communication, decision-making, or working through strategic questions together.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-stone-900 mb-3">
              AI & Tools
            </h3>
            <p className="text-stone-600 leading-relaxed">
              I'm curious about how AI changes the way we think and work. Sometimes this 
              shows up in coaching conversations, sometimes in helping organizations think 
              through what these tools mean for them.
            </p>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="max-w-3xl mx-auto px-6 mb-32">
        <h2 className="text-3xl font-light text-stone-900 mb-8">Who I work with</h2>
        <p className="text-stone-600 leading-relaxed mb-6">
          The people I work best with tend to be thoughtful, already accomplished, 
          and working on things that matter to them. They're often:
        </p>
        <ul className="space-y-3 text-stone-600">
          <li className="leading-relaxed">
            • Leaders in nonprofits or mission-driven organizations
          </li>
          <li className="leading-relaxed">
            • People preparing for high-stakes moments—presentations, difficult 
            conversations, transitions
          </li>
          <li className="leading-relaxed">
            • Anyone who needs to think something through properly before they can 
            move forward
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6">
        <div className="border-t border-stone-200 pt-12">
          <p className="text-lg text-stone-600 leading-relaxed mb-6">
            If this resonates and you'd like to talk, get in touch. I'm particularly 
            interested in working with people who care about using their voice well.
          </p>
          <div className="flex gap-4">
            <a 
              href="mailto:hello@alistairwebster.com"
              className="inline-flex items-center px-6 py-3 bg-stone-900 text-white text-sm font-medium rounded-lg hover:bg-stone-800 transition-colors"
            >
              Get in touch
            </a>
            <Link 
              href="/about"
              className="inline-flex items-center px-6 py-3 border border-stone-300 text-stone-900 text-sm font-medium rounded-lg hover:bg-stone-50 transition-colors"
            >
              More about me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

