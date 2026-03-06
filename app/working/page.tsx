import type { Metadata } from "next";
import Link from "next/link";
import { MicIcon, CommunityIcon, LaptopIcon } from "@/components/SiteIcons";

export const metadata: Metadata = {
  title: "What I Do",
  description:
    "Speaking and confidence coaching, the Freelancing for Good community, and AI consulting — helping people get unstuck and get out of their own way.",
};

const ventures = [
  {
    name: "Speaking & Confidence Coaching",
    borderColor: "border-l-terracotta",
    iconColor: "text-terracotta",
    iconBg: "bg-terracotta/10",
    icon: <MicIcon className="w-6 h-6" />,
    description: [
      "I work one-to-one with people who present, pitch, or simply want to feel less nervous on Zoom calls. I also run team workshops for organisations that want their people to communicate with more clarity and confidence.",
      "My approach combines live speaking practice with memory reconsolidation \u2014 removing the performance blockers that hold people back, not just training around them. My flagship programme guarantees life-changing improvements in just 8 weeks.",
    ],
    href: "https://speakupforgood.com",
    linkText: "Visit speakupforgood.com",
  },
  {
    name: "Freelancing for Good",
    borderColor: "border-l-ochre",
    iconColor: "text-ochre",
    iconBg: "bg-ochre/10",
    icon: <CommunityIcon className="w-6 h-6" />,
    description: [
      "Freelancing for Good is a community for freelancers who want to do meaningful work. With a community, job board, and freelancer directory it\u2019s a growing platform to help freelancers adapt and thrive in an uncertain era.",
    ],
    href: "https://freelancingforgood.com",
    linkText: "Visit freelancingforgood.com",
  },
  {
    name: "AI with Al",
    borderColor: "border-l-sage",
    iconColor: "text-sage",
    iconBg: "bg-sage/10",
    icon: <LaptopIcon className="w-6 h-6" />,
    description: [
      "Whether we like it or not, advanced AI tools are here to stay. I believe we need to learn how to work with them \u2014 not to replace what we do, but to save time, work smarter, and focus on the things that actually matter.",
      "I run workshops, offer consulting, and even wrote a short book about finding clarity with Claude Code & Cowork. Whether you\u2019re curious, cautious, or already experimenting, I can help you figure out what\u2019s hype and what\u2019s actually useful for you.",
    ],
    href: "https://aiwithal.com",
    linkText: "Visit aiwithal.com",
  },
];

export default function Working() {
  return (
    <div className="min-h-screen pt-28 md:pt-36 pb-24">
      <div className="container-page">
        {/* Header */}
        <div className="max-w-3xl mb-24 md:mb-28">
          <div className="flex items-center gap-4 mb-6 animate-fade-up">
            <div className="accent-line animate-expand-line" />
            <p className="eyebrow">What I Do</p>
          </div>
          <h1 className="heading-hero text-4xl md:text-5xl lg:text-6xl mb-6 text-balance animate-fade-up stagger-1">
            What I
            <span className="text-coral"> do.</span>
          </h1>
          <p className="lead animate-fade-up stagger-2">
            I like working on a lot of different things, but there&rsquo;s a
            thread through all of it — I like helping people get unstuck and
            get out of their own way. Whether that&rsquo;s on stage, in their
            freelance career, or figuring out what to do with AI.
          </p>
        </div>

        {/* Venture sections */}
        <div className="space-y-10 md:space-y-14">
          {ventures.map((v) => (
            <div
              key={v.href}
              className={`card card-hover p-10 md:p-14 border-l-4 ${v.borderColor}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-10 h-10 rounded-xl ${v.iconBg} ${v.iconColor} flex items-center justify-center flex-shrink-0`}
                >
                  {v.icon}
                </div>
                <h2 className="heading-section text-2xl md:text-3xl">
                  {v.name}
                </h2>
              </div>
              <div className="space-y-4 body-text mb-8 max-w-2xl">
                {v.description.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              <a
                href={v.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex"
              >
                {v.linkText}
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-28 md:mt-36">
          <div className="divider-gradient mb-20" />
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="heading-section text-3xl md:text-4xl lg:text-[2.75rem] mb-4">
                Interested in
                <span className="block text-charcoal-light/60">
                  working together?
                </span>
              </h2>
              <p className="lead">
                The best next step is simply to get in touch. Tell me what
                you&rsquo;re working on and we can figure out if I&rsquo;m the
                right person to help.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <a
                href="mailto:hello@alistairwebster.com"
                className="btn-primary text-center"
              >
                Email me
              </a>
              <Link href="/" className="btn-secondary text-center">
                Back home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
