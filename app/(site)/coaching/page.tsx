import type { Metadata } from "next";
import {
  ArrowGrid,
  Button,
  Contrast,
  Gradient,
  Highlight,
  Note,
  Pillars,
  PullQuote,
  Testimonial,
  Waveform,
} from "@/components/aw";
import Reveal from "@/components/aw/Reveal";
import { LINKS } from "../links";
import { COACHING_FAQS } from "../faqs";
import { Phases, PriceCard } from "../programme";

export const metadata: Metadata = {
  title: "The 8-week Speaking Transformation — Alistair Webster",
  description:
    "Eight weeks of 1:1 speaking coaching with Alistair Webster: build your skills, work on what's underneath, and practise daily in Speak Up. £1,400, with a four-session fit guarantee.",
};

const FOR_YOU = [
  "You freeze, go blank or rush when the pressure's on",
  "You know what you think, but struggle to land it",
  "You feel drained by performing a professional version of yourself",
  "You already speak well, but want more presence and personality",
  "You want to think more clearly on your feet",
  "You sense something underneath getting in the way: imposter feelings, old stories, fear of being seen",
];

const OUTCOMES = [
  "Less inner noise, more flow",
  "Getting to the point, clearly and concisely",
  "A stronger connection with the people listening",
  "Confidence that feels natural, not performed",
  "Less drain from being “professional”",
];

export default function CoachingPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero hero-centred">
        <div className="wrap">
          <div className="hero-copy">
            <Note>The 8-week Speaking Transformation</Note>
            <h1 className="aw-h aw-h-xl coaching-h1">
              Close the gap between who you are and <Gradient>how you show up.</Gradient>
            </h1>
            <p className="lede">
              Most people don&rsquo;t need more speaking tips. They need to stop spending so much energy being someone
              else when it counts. Over eight weeks, we&rsquo;ll build your skills and work on what&rsquo;s underneath,
              so speaking feels like you: clearer, calmer and more compelling.
            </p>
            <div className="ctas">
              <Button href={LINKS.bookProgramme} arrow>
                Book the programme
              </Button>
              <Button href={LINKS.introCall} variant="secondary">
                Book a free intro call
              </Button>
            </div>
            <p className="cta-note">£1,400 · eight weekly 1:1 sessions · a year of Speak Up · four-session fit guarantee</p>
          </div>
          <div className="hero-wave" aria-hidden>
            <Waveform id="coaching-wave" bars={64} seed={7} height={72} live />
          </div>
        </div>
      </section>

      {/* The real problem */}
      <section className="section section-sunk">
        <div className="wrap">
          <div className="section-head">
            <h2 className="aw-h aw-h-l">
              The problem usually <Highlight>isn&rsquo;t technique.</Highlight>
            </h2>
            <p className="lede">
              Plenty of people who struggle with speaking already know what to do. What gets in the way is the effort of
              performing: trying to be the person you think you should be in a meeting, a pitch or on a stage.
            </p>
            <p className="lede">
              That gap between who you are and who you feel you need to be is exhausting. It makes you self-conscious
              and stilted, and leaves you drained afterwards. This programme closes it, so speaking feels like you.
            </p>
          </div>
          <h3 className="aw-h aw-h-m for-you-title">This is for you if&hellip;</h3>
          <ArrowGrid items={FOR_YOU} />
        </div>
      </section>

      {/* More than tips */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2 className="aw-h aw-h-l">
              <Highlight>More than</Highlight> tips, tricks and hacks
            </h2>
          </div>
          <Reveal className="contrast-reveal">
            <Contrast
              notLabel="Tips and tricks on their own"
              yesLabel="What we work on"
              not={["One-size-fits-all tips", "A memorised script, and hoping", "Advice you forget by Monday"]}
              yes={[
                "What's going on when the pressure's on, and why",
                "The patterns underneath, not just the moments they show up",
                "Skills practised until they hold up live",
                "Recovery techniques you can rely on",
                "Ways to prepare effectively",
                "Lasting change that goes beyond just speaking",
              ]}
              closing="A structured programme that helps you build real confidence."
            />
          </Reveal>
        </div>
      </section>

      {/* How I work */}
      <section className="band aw-dark band-animated">
        <div className="aw-dark-glow" aria-hidden />
        <div className="wrap">
          <div className="aw-dark-inner">
            <h2 className="aw-h aw-h-l">
              Most coaching works on one level. <Gradient>This works on both.</Gradient>
            </h2>
            <p className="aw-dark-lede">
              Skills on the surface, and what&rsquo;s driving the pressure underneath, with practice in between. Working
              on all of it is what makes the change last.
            </p>
            <Pillars
              items={[
                {
                  title: "On the surface",
                  body: "Presence, clarity, storytelling and delivery, built through rep-based speaking games rooted in the Ultraspeaking method. Supportive, playful and surprisingly fun.",
                },
                {
                  title: "Underneath",
                  body: "The old stories about who you are, what's safe to express and what happens when you're seen. My approach is CBT-informed, shaped by counselling-skills training and memory reconsolidation research. It isn't therapy, just focused work on what's holding you back.",
                },
                {
                  title: "In between",
                  body: "About 10 minutes a day in Speak Up, my own app: guided practice, a speaking fitness score, courses and AI coaching, so new habits stick.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Structure */}
      <section className="section section-sunk">
        <div className="wrap">
          <div className="programme">
            <div className="programme-copy">
              <h2 className="aw-h aw-h-l">
                A framework, <Highlight>not a formula.</Highlight>
              </h2>
              <p className="lede">
                We&rsquo;ll quickly find what matters most for you and adapt as we go. This is the usual shape of the
                eight weeks.
              </p>
              <Phases />
            </div>
            <aside className="outcomes aw-panel">
              <h3 className="aw-h aw-h-m">By the end, most clients notice</h3>
              <ArrowGrid items={OUTCOMES} columns={1} />
            </aside>
          </div>
        </div>
      </section>

      {/* Tom */}
      <section className="quote-row">
        <div className="wrap tom">
          <PullQuote
            quote={
              <>
                Alistair spotted the real issue: I was using structure to avoid risk, not to express myself&hellip; Now{" "}
                <Highlight>I feel like I&rsquo;m talking from something real</Highlight>. And the crazy part is: people
                feel it.
              </>
            }
            name="Tom Gauthier"
            role="Coaching client"
            link={
              <a className="text-link" href="/stories/tom">
                Read Tom&rsquo;s story →
              </a>
            }
          />
          <blockquote className="tom-aside aw-panel">
            <p>
              &ldquo;If you&rsquo;re an introvert who&rsquo;s terrified of public speaking, he&rsquo;s the right guy. And
              if you&rsquo;re like me &mdash; outwardly confident, but still afraid and craving real connection &mdash;{" "}
              <Highlight>he&rsquo;ll help you speak with an open heart</Highlight>.&rdquo;
            </p>
            <cite>Tom, on who it&rsquo;s for</cite>
          </blockquote>
        </div>
      </section>

      {/* Price */}
      <section className="section section-sunk" id="book">
        <div className="wrap">
          <div className="programme">
            <div className="programme-copy">
              <h2 className="aw-h aw-h-l">
                Everything included, <Gradient>one price.</Gradient>
              </h2>
              <p className="lede">
                Eight weeks of personal coaching, a plan built around you, and a year of practice to make it stick.
                If the coaching isn&rsquo;t the right approach for you after four sessions, ask within seven days of session four,
                before session five, and I&rsquo;ll refund your programme fee in full. <a href="/terms#guarantee">Read the guarantee</a>.
              </p>
              <Testimonial
                quote={
                  <>
                    The way you stayed at ease and heard my questions inspired me to do the same &mdash; to take my time
                    and own my speaking. This was{" "}
                    <Highlight>one of the most impactful coaching sessions I&rsquo;ve had</Highlight>.
                  </>
                }
                name="Evelyn Q"
                role="Coaching client"
              />
            </div>
            <PriceCard />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2 className="aw-h aw-h-l">Questions people ask</h2>
          </div>
          <div className="faq">
            {COACHING_FAQS.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <div className="answer">
                  <p>{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section section-sunk final">
        <div className="wrap">
          <div className="section-head">
            <h2 className="aw-h aw-h-l">
              Ready to <Gradient>transform how you show up?</Gradient>
            </h2>
            <p className="lede">
              Book the programme, or start with a free 45-minute intro call to see if we&rsquo;re a good fit.
            </p>
          </div>
          <div className="ctas">
            <Button href={LINKS.bookProgramme} arrow>
              Book the programme
            </Button>
            <Button href={LINKS.introCall} variant="secondary">
              Book a free intro call
            </Button>
          </div>
          <Testimonial
            quote={
              <>
                Through thoughtful questions and a very human approach, I&rsquo;ve got{" "}
                <Highlight>a simple plan with steps for what I can do in my situation starting immediately</Highlight>.
              </>
            }
            name="Nailya B"
            role="Coaching client"
          />
        </div>
      </section>
    </>
  );
}
