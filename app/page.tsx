import Link from "next/link";
import HubHero from "@/components/HubHero";
import ScrollReveal from "@/components/ScrollReveal";
import TestimonialRotator from "@/components/TestimonialRotator";
import { MicIcon, CommunityIcon, LaptopIcon } from "@/components/SiteIcons";

const ventures = [
  {
    name: "Speaking & Confidence Coaching",
    color: "bg-terracotta",
    iconColor: "text-terracotta",
    iconBg: "bg-terracotta/10",
    icon: <MicIcon />,
    description:
      "I love helping people speak with more confidence and clarity. I offer an 8-week programme of live coaching that combines Ultraspeaking techniques with neuroscience to remove the blockers that hold people back.",
    href: "https://speakupforgood.com",
    linkText: "speakupforgood.com",
  },
  {
    name: "Freelancing for Good",
    color: "bg-ochre",
    iconColor: "text-ochre",
    iconBg: "bg-ochre/10",
    icon: <CommunityIcon />,
    description:
      "At Freelancing for Good we connect impact-driven freelancers with the orgs who need their help. We help freelancers make sense of the AI shifts reshaping their work, and have built an engaged community of inspiring people.",
    href: "https://freelancingforgood.com",
    linkText: "freelancingforgood.com",
  },
  {
    name: "AI with Al",
    color: "bg-sage",
    iconColor: "text-sage",
    iconBg: "bg-sage/10",
    icon: <LaptopIcon />,
    description:
      "I've been using AI tools to save real time in my own projects, and now I'm helping others do the same. I wrote a book about finding clarity with Claude Code & Cowork, and offer consulting and workshops to help you navigate what's changing.",
    href: "https://aiwithal.com",
    linkText: "aiwithal.com",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hub Hero */}
      <HubHero />

      {/* Brief intro */}
      <ScrollReveal>
        <section className="py-20 md:py-28">
          <div className="container-page">
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <p className="lead">
                I always find it hard to explain what I do, so here&rsquo;s my
                best shot. I&rsquo;m a certified{" "}
                <a href="https://ultraspeaking.com" target="_blank" rel="noopener noreferrer" className="link-coral">Ultraspeaking</a> coach
                 — I use Memory Reconsolidation techniques to help people{" "}
                <Link href="https://speakupforgood.com" className="link-coral">speak with
                confidence and remove blockers</Link>.
              </p>
              <p className="lead">
                I co-founded{" "}
                <a href="https://freelancingforgood.com" target="_blank" rel="noopener noreferrer" className="link-coral">Freelancing for
                Good</a>, a community for impact-motivated freelancers. And I
                help orgs and teams use{" "}
                <a href="https://aiwithal.com" target="_blank" rel="noopener noreferrer" className="link-coral">AI workflows</a> to
                save time and get more done.
              </p>
              <p className="lead">
                I like to keep busy — I also work for a{" "}
                <a href="https://centerforreducingsuffering.org" target="_blank" rel="noopener noreferrer" className="link-coral">small nonprofit</a>,
                run a{" "}
                <a href="https://goodbackgroundmusic.co.uk" target="_blank" rel="noopener noreferrer" className="link-coral">record label</a> and{" "}
                <a href="https://freelancerad.io" target="_blank" rel="noopener noreferrer" className="link-coral">radio station</a>,
                and still freelance on everything from copywriting to web
                design. Interested in how I keep all these plates spinning?{" "}
                <Link href="/about" className="link-coral">
                  Read more about how I work.
                </Link>
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Gradient Divider */}
      <div className="container-page">
        <div className="divider-gradient" />
      </div>

      {/* Three venture cards */}
      <ScrollReveal>
        <section className="py-20 md:py-28">
          <div className="container-page">
            <div className="grid md:grid-cols-3 gap-8">
              {ventures.map((v) => (
                <a
                  key={v.href}
                  href={v.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card card-hover p-8 md:p-10 group block"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-9 h-9 rounded-lg ${v.iconBg} ${v.iconColor} flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}
                    >
                      {v.icon}
                    </div>
                    <h3 className="heading-section text-xl">{v.name}</h3>
                  </div>
                  <p className="body-text text-[15px] mb-6">{v.description}</p>
                  <span className="link-arrow text-sm">
                    {v.linkText} <span aria-hidden="true">→</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Testimonials */}
      <ScrollReveal>
        <section className="py-20 md:py-28">
          <div className="container-page">
            <TestimonialRotator />
          </div>
        </section>
      </ScrollReveal>

      {/* Gradient Divider */}
      <div className="container-page">
        <div className="divider-gradient" />
      </div>

      {/* CTA */}
      <ScrollReveal>
        <section className="py-20 md:py-28">
          <div className="container-page">
            <div className="card p-10 md:p-14 lg:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-coral/[0.04] rounded-bl-[80px]" />

              <h3 className="heading-section text-2xl mb-4 relative">
                Let&rsquo;s talk
              </h3>
              <p className="body-text mb-8 relative max-w-lg">
                If something here has piqued your interest, or you&rsquo;d
                like to explore working together, I&rsquo;d love to hear from
                you.
              </p>
              <p className="text-sm text-stone-400 mb-8 relative">
                Based in Edinburgh.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 relative">
                <a
                  href="mailto:hello@alistairwebster.com"
                  className="btn-primary text-center"
                >
                  Email me
                </a>
                <Link href="/about" className="btn-secondary text-center">
                  About me
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
