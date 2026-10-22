import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import TerminalBlock from "@/components/TerminalBlock";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ultraspeaking-certified speaking coach, AI consultant, and Freelancing for Good co-founder. Based in Edinburgh.",
};

const systemLines = [
  { type: "prompt" as const, text: "al --status" },
  { type: "blank" as const, text: "" },
  { type: "comment" as const, text: "# ventures" },
  { type: "success" as const, text: "Speaking coaching        clients active, pipeline growing" },
  { type: "success" as const, text: "Freelancer community    members engaged, content flowing" },
  { type: "success" as const, text: "AI consulting           workshops + client projects" },
  { type: "blank" as const, text: "" },
  { type: "comment" as const, text: "# side projects" },
  { type: "success" as const, text: "Nonprofit — fellowship programme running" },
  { type: "success" as const, text: "Record label — catalogue growing" },
  { type: "success" as const, text: "Book — writing in progress" },
  { type: "blank" as const, text: "" },
  { type: "comment" as const, text: "# system health" },
  { type: "success" as const, text: "Inbox zero" },
  { type: "success" as const, text: "Weekly review up to date" },
  { type: "output" as const, text: "Nothing slipping through the cracks" },
  { type: "blank" as const, text: "" },
  { type: "summary" as const, text: "6 projects. 1 system. 0 chaos." },
];

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
                Hi, I&rsquo;m Alistair Webster! I work as a speaking and
                confidence coach and AI consultant.
              </p>

              <p>
                My background is a bit of an odd mix. I&rsquo;ve worked in
                travel, marketing, and nonprofits &mdash; but I&rsquo;ve always
                loved the flexibility and freedom that comes with freelancing.
              </p>

              <p>
                I&rsquo;m an{" "}
                <a
                  href="https://ultraspeaking.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-coral"
                >
                  Ultraspeaking
                </a>
                -certified public speaking coach &mdash; having gone on my own
                journey after realising how my own weaknesses were holding me
                back. Now I love helping other people overcome their blockers
                and thrive.
              </p>

              <p>
                These days I coach people who speak publicly &mdash;
                presentations, pitches &mdash; but also those who deal with
                some form of social anxiety, or anyone who just wants to be
                able to speak up a little more and be heard.
              </p>

              <p>
                My method combines live practice with neuroscience-backed
                memory reconsolidation techniques &mdash; which help remove
                the root causes of speaking and confidence issues. Rather than
                training around performance blockers, I help people rewrite
                them.
              </p>

              <p>
                Like a lot of people, I&rsquo;ve also been amazed and terrified
                by the AI tools we now have available. They are not going
                anywhere, so I think it&rsquo;s essential to stay on top of
                developments and understand how to get the most out of these
                tools, and be prepared for a changing future.
              </p>

              <p>
                I use Claude Code to run my business, build tools that help me
                do more of what I want to &mdash; and to keep me organised.
                I&rsquo;ve spent hundreds of hours building systems with it and
                I even wrote{" "}
                <a
                  href="https://claudeclarity.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-coral"
                >
                  a short book about it
                </a>
                .
              </p>

              <p>
                I help other people and organisations do the same &mdash; set up
                AI workflows that genuinely save time and repetitive effort.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Photo */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/alistair-webster.jpg"
                  alt="Alistair Webster"
                  width={768}
                  height={768}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-coral/10 rounded-2xl -z-10" />
            </div>

            {/* Quick Facts Card */}
            <div className="card p-8 md:p-9">
              <h3 className="heading-section text-lg mb-6">At a glance</h3>
              <dl className="space-y-5">
                <div>
                  <dt className="eyebrow text-[11px] mb-1.5">Based in</dt>
                  <dd className="text-charcoal font-medium">Edinburgh</dd>
                </div>
                <div>
                  <dt className="eyebrow text-[11px] mb-1.5">Focus</dt>
                  <dd className="text-charcoal font-medium">Speaking Coaching · FFG Community Co-Founder · AI Consulting</dd>
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

        {/* The System — terminal mini case study */}
        <div className="mt-28 md:mt-36">
          <div className="divider-gradient mb-20" />
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="eyebrow mb-4">How it all fits</p>
              <h2 className="heading-section text-3xl md:text-4xl mb-6">
                A lot of plates.
              </h2>
              <div className="space-y-4 body-text">
                <p>
                  I do a bunch of stuff. I love working on so many different
                  things, but at the core I have to be very organised.
                </p>
                <p>
                  I can only spin so many plates because I built a system around
                  it, using Claude Code to build on and make maintaining existing
                  productivity setups like Getting Things Done easy.
                </p>
                <p>
                  This is the same kind of setup I help clients build. Whether
                  you&rsquo;re a solo operator juggling too many balls, or a
                  team that wants AI to help with the heavy lifting.{" "}
                  <a
                    href="https://aiwithal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-coral"
                  >
                    See how it works.
                  </a>
                </p>
              </div>
            </div>
            <TerminalBlock
              lines={systemLines}
              title="al — system status"
            />
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
                  <span className="block text-charcoal-light/60">working together?</span>
                </h2>
                <p className="lead">
                  Whether you&rsquo;re preparing for something specific or just
                  want to chat. Feel free to get in touch.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                <a href="mailto:hello@alistairwebster.com" className="btn-primary text-center">
                  Email me
                </a>
                <Link href="/working" className="btn-secondary text-center">
                  What I do
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
