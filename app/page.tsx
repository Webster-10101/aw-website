import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 mb-32">
        <h1 className="text-7xl md:text-8xl font-bold text-brand-blue mb-12 leading-tight">
          Hi there! 👋
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-10 leading-tight max-w-4xl">
          I help people think clearly and speak confidently about what matters.
        </h2>
        <p className="text-2xl text-brand-blue/80 leading-relaxed mb-12 max-w-3xl">
          Most of my work happens in conversation—one-to-one coaching, advisory sessions, 
          or workshops with small groups. The thread that runs through all of it is helping 
          you find your voice and use it with purpose.
        </p>
        <div className="flex gap-6 flex-wrap">
          <a 
            href="mailto:hello@alistairwebster.com"
            className="inline-flex items-center px-10 py-5 bg-brand-blue text-white text-xl font-bold rounded-full hover:bg-brand-blue-light transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform"
          >
            Get in touch
          </a>
          <Link 
            href="/working"
            className="inline-flex items-center px-10 py-5 bg-white text-brand-blue text-xl font-bold rounded-full hover:bg-white/90 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform"
          >
            How I work
          </Link>
        </div>
      </section>

      {/* How I Work - Cards */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-16 text-center">
          Ways of working
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* 1:1 Coaching */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] transform">
            <h3 className="text-3xl font-bold text-brand-blue mb-6">
              1:1 Coaching
            </h3>
            <p className="text-brand-blue/80 leading-relaxed text-lg mb-6">
              This is where most of my energy goes. Whether you're navigating a transition, 
              preparing for something important, or working through a question that won't 
              let you go—we create space to think it through properly.
            </p>
            <a 
              href="https://speakupforgood.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-blue font-bold hover:underline inline-flex items-center text-lg"
            >
              Learn more at Speak Up For Good →
            </a>
          </div>

          {/* Advisory */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] transform">
            <h3 className="text-3xl font-bold text-brand-blue mb-6">
              Advisory & Strategic Thinking
            </h3>
            <p className="text-brand-blue/80 leading-relaxed text-lg">
              Sometimes what's needed isn't coaching but someone to help you think 
              strategically—to see patterns you're too close to notice, ask uncomfortable 
              questions, or help make sense of complexity.
            </p>
          </div>

          {/* Workshops */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] transform">
            <h3 className="text-3xl font-bold text-brand-blue mb-6">
              Workshops & Group Work
            </h3>
            <p className="text-brand-blue/80 leading-relaxed text-lg">
              Occasionally I work with small groups—leadership teams, boards, or cohorts—on 
              communication, decision-making, or working through strategic questions together.
            </p>
          </div>

          {/* AI & Tools */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] transform">
            <h3 className="text-3xl font-bold text-brand-blue mb-6">
              AI & Tools
            </h3>
            <p className="text-brand-blue/80 leading-relaxed text-lg">
              I'm curious about how AI changes the way we think and work. Sometimes this 
              shows up in coaching conversations, sometimes in helping organizations think 
              through what these tools mean for them.
            </p>
          </div>
        </div>
      </section>

      {/* Who I Work With */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-8">
            Who I work with
          </h2>
          <p className="text-brand-blue/80 leading-relaxed mb-8 text-xl">
            The people I work best with tend to be thoughtful, already accomplished, 
            and working on things that matter to them. They're often:
          </p>
          <ul className="space-y-4 text-brand-blue/80 text-xl mb-10">
            <li className="leading-relaxed flex items-start">
              <span className="mr-3 mt-1 text-2xl">•</span>
              <span>Leaders in nonprofits or mission-driven organizations</span>
            </li>
            <li className="leading-relaxed flex items-start">
              <span className="mr-3 mt-1 text-2xl">•</span>
              <span>People preparing for high-stakes moments—presentations, difficult conversations, transitions</span>
            </li>
            <li className="leading-relaxed flex items-start">
              <span className="mr-3 mt-1 text-2xl">•</span>
              <span>Anyone who needs to think something through properly before they can move forward</span>
            </li>
          </ul>
          <p className="text-brand-blue/80 leading-relaxed text-xl">
            If this resonates and you'd like to talk, I'm particularly interested in 
            working with people who care about using their voice well.
          </p>
        </div>
      </section>
    </div>
  );
}
