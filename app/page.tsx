import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <h1 className="text-6xl md:text-7xl font-bold text-brand-blue mb-6">
          Hi there! 👋
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-8 leading-snug">
          I help people think clearly and speak confidently about what matters.
        </h2>
        <p className="text-xl text-brand-blue/80 leading-relaxed mb-8">
          Most of my work happens in conversation—one-to-one coaching, advisory sessions, 
          or workshops with small groups. The thread that runs through all of it is helping 
          you find your voice and use it with purpose.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a 
            href="mailto:hello@alistairwebster.com"
            className="inline-flex items-center px-8 py-4 bg-brand-blue text-white text-lg font-semibold rounded-full hover:bg-brand-blue-light transition-all shadow-lg hover:shadow-xl"
          >
            Get in touch
          </a>
          <Link 
            href="/working"
            className="inline-flex items-center px-8 py-4 bg-white text-brand-blue text-lg font-semibold rounded-full hover:bg-white/80 transition-all shadow-md"
          >
            How I work
          </Link>
        </div>
      </section>

      {/* How I Work - Cards */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <h2 className="text-3xl font-bold text-brand-blue mb-10 text-center">
          Ways of working
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* 1:1 Coaching */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-brand-blue mb-4">
              1:1 Coaching
            </h3>
            <p className="text-brand-blue/80 leading-relaxed mb-4">
              This is where most of my energy goes. Whether you're navigating a transition, 
              preparing for something important, or working through a question that won't 
              let you go—we create space to think it through properly.
            </p>
            <a 
              href="https://speakupforgood.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-blue font-semibold hover:underline inline-flex items-center"
            >
              Learn more at Speak Up For Good →
            </a>
          </div>

          {/* Advisory */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-brand-blue mb-4">
              Advisory & Strategic Thinking
            </h3>
            <p className="text-brand-blue/80 leading-relaxed">
              Sometimes what's needed isn't coaching but someone to help you think 
              strategically—to see patterns you're too close to notice, ask uncomfortable 
              questions, or help make sense of complexity.
            </p>
          </div>

          {/* Workshops */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-brand-blue mb-4">
              Workshops & Group Work
            </h3>
            <p className="text-brand-blue/80 leading-relaxed">
              Occasionally I work with small groups—leadership teams, boards, or cohorts—on 
              communication, decision-making, or working through strategic questions together.
            </p>
          </div>

          {/* AI & Tools */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-brand-blue mb-4">
              AI & Tools
            </h3>
            <p className="text-brand-blue/80 leading-relaxed">
              I'm curious about how AI changes the way we think and work. Sometimes this 
              shows up in coaching conversations, sometimes in helping organizations think 
              through what these tools mean for them.
            </p>
          </div>
        </div>
      </section>

      {/* Who I Work With */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-10 shadow-lg">
          <h2 className="text-3xl font-bold text-brand-blue mb-6">
            Who I work with
          </h2>
          <p className="text-brand-blue/80 leading-relaxed mb-6 text-lg">
            The people I work best with tend to be thoughtful, already accomplished, 
            and working on things that matter to them. They're often:
          </p>
          <ul className="space-y-3 text-brand-blue/80 text-lg mb-8">
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
          <p className="text-brand-blue/80 leading-relaxed text-lg">
            If this resonates and you'd like to talk, I'm particularly interested in 
            working with people who care about using their voice well.
          </p>
        </div>
      </section>
    </div>
  );
}
