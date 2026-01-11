import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen pt-28 md:pt-36 pb-24">
      <div className="container-page">
        {/* Header */}
        <div className="max-w-3xl mb-20 md:mb-24">
          <div className="flex items-center gap-4 mb-6 animate-fade-up">
            <div className="accent-line animate-expand-line" />
            <p className="eyebrow">About</p>
          </div>
          <h1 className="heading-hero text-4xl md:text-5xl lg:text-6xl animate-fade-up stagger-1">
            A little context.
          </h1>
        </div>

        {/* Main Content - Two Column on Large */}
        <div className="grid lg:grid-cols-3 gap-16 lg:gap-20">
          {/* Main Text */}
          <div className="lg:col-span-2">
            <div className="space-y-6 body-text">
              <p className="text-xl md:text-2xl text-charcoal leading-[1.6] font-display" style={{ fontWeight: 400 }}>
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
                  className="link-coral"
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

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Quick Facts Card */}
            <div className="card p-8 md:p-9">
              <h3 className="heading-section text-lg mb-6">At a glance</h3>
              <dl className="space-y-5">
                <div>
                  <dt className="eyebrow text-[11px] mb-1.5">Based in</dt>
                  <dd className="text-charcoal font-medium">United Kingdom</dd>
                </div>
                <div>
                  <dt className="eyebrow text-[11px] mb-1.5">Focus</dt>
                  <dd className="text-charcoal font-medium">Coaching & Advisory</dd>
                </div>
                <div>
                  <dt className="eyebrow text-[11px] mb-1.5">Background</dt>
                  <dd className="text-charcoal font-medium">Ultraspeaking Lead Coach</dd>
                </div>
              </dl>
            </div>

            {/* CTA Card */}
            <div className="card p-8 md:p-9 bg-coral/[0.03] border-coral/10 relative overflow-hidden">
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-coral/[0.05] rounded-bl-[60px]" />

              <h3 className="heading-section text-lg mb-3 relative">Want to connect?</h3>
              <p className="body-text text-[15px] mb-6 relative">
                If you'd like to talk about working together, drop me a line.
              </p>
              <a href="mailto:hello@alistairwebster.com" className="btn-primary w-full text-center relative">
                Get in touch
              </a>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-28 md:mt-36">
          <div className="divider-gradient mb-20" />
          <div className="card p-10 md:p-14 lg:p-16 relative overflow-hidden">
            {/* Decorative background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-cream-warm to-transparent opacity-50" />

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative">
              <div>
                <h2 className="heading-section text-3xl md:text-4xl lg:text-[2.75rem] mb-4">
                  Curious about
                  <span className="block text-charcoal-light/60">coaching?</span>
                </h2>
                <p className="lead">
                  Whether you're preparing for something specific or just want to explore,
                  I'm happy to have a conversation.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                <a href="mailto:hello@alistairwebster.com" className="btn-primary text-center">
                  Email me
                </a>
                <Link href="/working" className="btn-secondary text-center">
                  Ways of working
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
