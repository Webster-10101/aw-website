import Image from "next/image";

const ventures = [
  {
    href: "https://speakupforgood.com",
    className: "hub-bubble hub-bubble--coaching",
    title: "Speaking & Confidence Coaching",
    subtitle: "Move past blocks. Speak authentically.",
  },
  {
    href: "https://freelancingforgood.com",
    className: "hub-bubble hub-bubble--ffg",
    title: "Freelancing for Good",
    subtitle: "A community for impact-driven freelancers.",
  },
  {
    href: "https://aiwithal.com",
    className: "hub-bubble hub-bubble--ai",
    title: "AI with Al",
    subtitle: "Consulting and workflow workshops.",
  },
];

export default function HubHero() {
  return (
    <section className="min-h-[92vh] flex items-center pt-28 relative overflow-hidden">
      <div className="container-page w-full relative">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-0 lg:gap-0">
          {/* Left — person */}
          <div className="flex flex-col items-center relative z-10">
            {/* Greeting */}
            <p className="font-display italic text-[clamp(1.8rem,3vw,2.6rem)] font-normal text-charcoal mb-5 animate-fade-up lg:relative lg:left-4">
              Hi, I&rsquo;m Alistair 👋
            </p>

            {/* Photo cutout */}
            <div className="hub-photo-cutout w-[200px] h-[260px] lg:w-[clamp(220px,28vw,340px)] lg:h-[clamp(280px,36vw,440px)] bg-cream-warm relative overflow-hidden animate-scale-in">
              <Image
                src="/images/alistair-webster.jpg"
                alt="Alistair Webster"
                width={768}
                height={960}
                className="object-cover object-top w-full h-full"
                priority
              />
            </div>

          </div>

          {/* Right — paths + bubbles */}
          <div className="relative flex flex-col gap-6 pl-0 lg:pl-8 z-10 mt-10 lg:mt-0 w-full max-w-[340px] lg:max-w-none lg:w-auto">
            <p className="text-[0.95rem] text-charcoal-muted pl-[1.15rem] -mb-2">
              I do a few different things - have a look around!
            </p>
            {/* SVG connection lines — desktop only */}
            <svg
              className="hub-connection-lines absolute -left-8 top-1/2 -translate-y-1/2 w-[calc(100%+3rem)] h-[120%] pointer-events-none z-0 hidden lg:block"
              viewBox="0 0 300 300"
              preserveAspectRatio="none"
            >
              <path d="M 0,150 C 60,150 40,60 140,50" />
              <path d="M 0,150 C 80,150 80,150 140,150" />
              <path d="M 0,150 C 60,150 40,240 140,250" />
            </svg>

            {ventures.map((v) => (
              <a
                key={v.href}
                href={v.href}
                target="_blank"
                rel="noopener noreferrer"
                className={v.className}
              >
                <span className="flex items-center gap-2.5">
                  <span className="hub-bubble__dot" />
                  <span className="font-display text-[clamp(1.1rem,1.8vw,1.35rem)] font-medium text-charcoal leading-snug">
                    {v.title}
                  </span>
                </span>
                <span className="text-[0.85rem] text-charcoal-muted mt-1 pl-[1.15rem]">
                  {v.subtitle}
                </span>
                <span className="hub-bubble__arrow" aria-hidden="true">
                  &rarr;
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
