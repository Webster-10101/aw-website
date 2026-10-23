import type { Metadata } from "next";
import { Button, Gradient, Note, PhotoDisc } from "@/components/aw";
import { LINKS } from "../links";

export const metadata: Metadata = {
  title: "About — Alistair Webster",
  description:
    "Speaking coach, co-founder of Freelancing for Good, author of Claude Clarity, and a freelancer on everything from copywriting to web design. Based in Edinburgh.",
};

export default function AboutPage() {
  return (
    <>
      <section className="section legal-page">
        <div className="wrap about-page">
          <div className="about-page-art">
            <PhotoDisc src="/images/alistair-webster.jpg" alt="Alistair Webster" size={300} wave={false} />
          </div>
          <div className="about-page-copy">
            <Note>Hi, I&rsquo;m Alistair</Note>
            <h1 className="aw-h aw-h-l">
              I always find it hard to explain <Gradient>what I do.</Gradient>
            </h1>
            <p className="about-page-lede">So here&rsquo;s my best shot.</p>
            <div className="about-body">
              <p>
                I&rsquo;m a <a href="/coaching">speaking coach</a>, certified in the Ultraspeaking method. I help people
                speak with confidence and clear the blockers that get in the way.
              </p>
              <p>
                I co-founded <a href="/ffg">Freelancing for Good</a>, a community of 1,000+ impact-motivated
                freelancers. I also wrote <a href={LINKS.claudeClarity}>Claude Clarity</a>, and I help people and teams
                build productivity systems that save time and get more done, and show them how to use AI to improve their output.
              </p>
              <p>
                I like to keep busy. I also consult for a small nonprofit, build and manage websites and content, and run
                a record label, GBM Music, and a radio station, <a href="https://freelancerad.io">Freelance Radio</a>.
              </p>
            </div>
            <dl className="glance">
              <div>
                <dt>Based in</dt>
                <dd>Edinburgh</dd>
              </div>
              <div>
                <dt>Work</dt>
                <dd>Speaking coach · FFG co-founder · Author · Freelancer</dd>
              </div>
            </dl>
            <div className="ctas">
              <Button href="/contact" arrow>
                Get in touch
              </Button>
              <Button href="/coaching" variant="secondary">
                Coaching
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
