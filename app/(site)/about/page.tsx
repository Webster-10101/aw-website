import type { Metadata } from "next";
import { pageMeta } from "../meta";
import { Button, Gradient, Note, PhotoDisc } from "@/components/aw";
import { LINKS } from "../links";

export const metadata: Metadata = pageMeta(
  "About",
  "Speaking coach, co-founder of Freelancing for Good, author of Claude Clarity, and a freelancer on everything from copywriting to web design. Based in Edinburgh.",
  "/about"
);

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
                freelancers. I&rsquo;ve been a freelancer myself for many years, working on all sorts of projects.
              </p>
              <p>
                I recently wrote <a href={LINKS.claudeClarityAmazon}>Claude Clarity</a>, a book about how I use Claude to
                adapt as a freelancer and stay on top of my projects and commitments in this new era. I help people and
                teams build productivity systems that save time, and adapt to the rise of AI to improve their output and
                do more of the work they care about.
              </p>
              <p>
                I also consult for nonprofits, build and manage websites and content, and make music through{" "}
                <a href="https://goodbackgroundmusic.co.uk">GBM Music</a>. I recently launched an online radio station,{" "}
                <a href="https://freelancerad.io">Freelance Radio</a>. It&rsquo;s great background music while you work!
              </p>
            </div>
            <dl className="glance">
              <div>
                <dt>Based in</dt>
                <dd>Edinburgh</dd>
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
