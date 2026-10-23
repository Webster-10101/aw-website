import type { Metadata } from "next";
import { Button, Gradient, Icon, Note } from "@/components/aw";
import { LINKS } from "../links";

export const metadata: Metadata = {
  title: "Freelancing for Good — Alistair Webster",
  description:
    "Alistair Webster co-founded Freelancing for Good, a community of 1,000+ freelancers working with charities, nonprofits and mission-driven organisations.",
};

const WHAT = [
  {
    icon: "conversation",
    title: "The community",
    body: "A Slack of 1,000+ freelancers sharing work, advice and support.",
  },
  {
    icon: "presentation",
    title: "Jobs",
    body: "A board of freelance roles with impactful organisations.",
  },
  {
    icon: "spark",
    title: "Impact Pro",
    body: "A membership for freelancers who want more support to build an impactful career.",
  },
  {
    icon: "meeting",
    title: "Reach",
    body: "Around 14,000 followers on LinkedIn, and growing.",
  },
];

export default function FfgPage() {
  return (
    <>
      <section className="section legal-page">
        <div className="wrap ffg">
          <Note>Freelancing for Good</Note>
          <h1 className="aw-h aw-h-l">
            A community for freelancers who want their work to <Gradient>do some good.</Gradient>
          </h1>
          <p className="lede">
            I co-founded Freelancing for Good with Maja. It&rsquo;s a community of 1,000+ freelancers who want to work
            with charities, nonprofits and mission-driven organisations, and build a sustainable career doing it.
          </p>
          <ul className="ffg-cards">
            {WHAT.map((c) => (
              <li key={c.title} className="aw-panel">
                <Icon name={c.icon} circle />
                <h2>{c.title}</h2>
                <p>{c.body}</p>
              </li>
            ))}
          </ul>
          <div className="ffg-why">
            <h2 className="aw-h aw-h-m">Why it matters to me</h2>
            <p>
              I see all the time how speaking holds good people back. Brilliant freelancers undersell themselves on
              calls, freeze in pitches, or stay quiet in rooms where their ideas are needed. It&rsquo;s a big part of why
              I coach.
            </p>
          </div>
          <div className="ctas">
            <Button href={LINKS.ffg} arrow>
              Visit freelancingforgood.com
            </Button>
            <Button href="/coaching" variant="secondary">
              Coaching
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
