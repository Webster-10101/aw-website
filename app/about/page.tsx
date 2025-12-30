import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-6xl md:text-7xl font-bold text-brand-blue mb-6">
            About
          </h1>
        </div>

        {/* Main Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl mb-12">
          <div className="space-y-6 text-brand-blue/80 leading-relaxed text-xl">
            <p>
              I'm Alistair Webster. I work as a coach and thinking partner, 
              mostly with people in leadership roles who care about using their 
              voice well.
            </p>

            <p>
              My background is an odd mix. I've worked in nonprofits, run campaigns, 
              built digital tools, advised organizations through moments of change, 
              and spent years helping people prepare for high-stakes speaking moments.
            </p>

            <p>
              What ties it all together is an interest in clarity—helping people 
              figure out what they actually think, and then say it in a way that 
              lands.
            </p>

            <p>
              I'm trained as a coach through{" "}
              <a 
                href="https://ultraspeaking.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-blue font-bold hover:underline"
              >
                Ultraspeaking
              </a>
              , where I spent several years as a lead coach and program designer. 
              That work taught me how much can shift when people learn to think 
              clearly under pressure and trust their own voice.
            </p>

            <p>
              These days, most of my work is one-to-one—coaching leaders, preparing 
              people for moments that matter, or serving as an outside thinking 
              partner for organizations navigating complexity.
            </p>

            <p>
              I'm also curious about AI and how it's changing the way we work. 
              Not in a "move fast and break things" way, but in asking: how do 
              we use these tools without losing what makes human thinking valuable?
            </p>

            <p>
              I live in the UK. When I'm not working, I'm usually reading, walking, 
              or thinking about ways to make complex things clearer.
            </p>
          </div>
        </div>

        {/* CTA */}
        <section className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl">
          <p className="text-xl text-brand-blue/80 leading-relaxed mb-8">
            If you'd like to talk about working together, or you're just curious 
            about whether coaching might be useful for you, get in touch.
          </p>
          <div className="flex gap-6 flex-wrap">
            <a 
              href="mailto:hello@alistairwebster.com"
              className="inline-flex items-center px-8 py-4 bg-brand-blue text-white font-bold rounded-full hover:bg-brand-blue-light transition-all shadow-lg hover:shadow-xl hover:scale-105 transform text-lg"
            >
              Get in touch
            </a>
            <Link 
              href="/working"
              className="inline-flex items-center px-8 py-4 bg-white text-brand-blue font-bold rounded-full hover:bg-white/90 transition-all shadow-md hover:shadow-lg border-2 border-brand-blue/20 hover:scale-105 transform text-lg"
            >
              Ways of working
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
