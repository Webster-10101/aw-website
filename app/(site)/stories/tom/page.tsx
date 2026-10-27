import type { Metadata } from "next";
import { Button, Gradient, Highlight, Note } from "@/components/aw";
import { LINKS } from "../../links";

export const metadata: Metadata = {
  title: "Tom's story — Alistair Webster",
  description:
    "Tom Gauthier was already a confident speaker, until things went off-script. How coaching helped him move from performing to speaking from connection.",
};

export default function TomStory() {
  return (
    <>
      <section className="section legal-page">
        <div className="wrap story">
          <Note>Client story</Note>
          <h1 className="aw-h aw-h-l">
            Tom: from performing to <Gradient>speaking from connection</Gradient>
          </h1>
          <p className="story-intro">
            Tom is a language entrepreneur, teaching people a distinctive method for learning languages. He&rsquo;d
            also done stand-up comedy, so he came to coaching already confident. What he wanted to fix was what happened
            when things went off-script.
          </p>

          <section>
            <h2 className="aw-h aw-h-m">Before</h2>
            <blockquote>
              <p>
                Before working with Alistair, I actually thought I was a good public speaker. I felt confident &mdash;
                I&rsquo;d done stand-up comedy and had a job where I spoke often. But I had a big weakness: if things went
                off-script, I&rsquo;d get destabilized fast.
              </p>
              <p>
                My default was always the same: write a script, learn it by heart, rely on structure and
                &ldquo;fail-proof&rdquo; TED Talk&ndash;style gimmicks. It worked&hellip; until it didn&rsquo;t. It killed
                my ability to improvise, made it hard to relax, and it was exhausting to prepare and rehearse all the
                time.
              </p>
            </blockquote>
          </section>

          <section>
            <h2 className="aw-h aw-h-m">What we worked on</h2>
            <blockquote>
              <p>
                Early on, Alistair spotted the real issue: I was using structure to avoid risk, not to express myself.
                Over a few months, he helped me shift from &ldquo;performing&rdquo; to speaking from feeling.
              </p>
            </blockquote>
          </section>

          <section>
            <h2 className="aw-h aw-h-m">What changed</h2>
            <blockquote>
              <p>
                Now when I speak, I&rsquo;m not even conscious of how I&rsquo;m speaking &mdash; I don&rsquo;t feel like
                I&rsquo;m performing. I feel like I&rsquo;m talking from vulnerability, from something real. And the
                crazy part is: people feel it.
              </p>
            </blockquote>
          </section>
        </div>
      </section>

      <section className="story-pull">
        <div className="wrap">
          <p className="aw-h aw-h-l">
            &ldquo;It <Gradient>honestly changed my life.</Gradient>&rdquo;
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap story">
          <section>
            <blockquote>
              <p>
                What surprised me most is how far beyond speaking this went. Alistair helped me see a bigger pattern in
                my life: over-preparing to avoid mistakes. That insight opened me up to new experiences, and honestly
                changed my life. The naturalness and fluidity we worked on in speaking started showing up everywhere
                &mdash; in how I work, how I approach projects, even in things like starting martial arts.
              </p>
              <p>
                <Highlight>
                  My rhythm is better, my stories land more, I don&rsquo;t rush, and I don&rsquo;t speak from a script
                  &mdash; I speak from connection.
                </Highlight>
              </p>
            </blockquote>
          </section>

          <section>
            <h2 className="aw-h aw-h-m">Who it&rsquo;s for, in his words</h2>
            <blockquote>
              <p>
                Alistair is an excellent coach: extremely patient, a great listener, and someone who creates real
                psychological safety. If you&rsquo;re an introvert who&rsquo;s terrified of public speaking, he&rsquo;s
                the right guy. And if you&rsquo;re like me &mdash; outwardly confident, but still afraid and craving real
                connection &mdash; he&rsquo;ll help you speak with an open heart.
              </p>
            </blockquote>
            <div className="story-who">
              <span className="story-avatar" aria-hidden>TG</span>
              <span>
                <strong>Tom Gauthier</strong>
                <br />
                Coaching client
              </span>
            </div>
          </section>
        </div>
      </section>

      <section className="section section-sunk final">
        <div className="wrap">
          <div className="section-head">
            <h2 className="aw-h aw-h-l">
              Want to work <Gradient>like this?</Gradient>
            </h2>
            <p className="lede">
              Eight weeks of 1:1 coaching, with a year of practice in Speak Up. Or start with a free 45-minute intro call.
            </p>
          </div>
          <div className="ctas">
            <Button href="/coaching" arrow>
              See the 8-week programme
            </Button>
            <Button href={LINKS.introCall} variant="secondary">
              Book a free intro call
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
