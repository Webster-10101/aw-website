import {
  Button,
  Gradient,
  Highlight,
  Icon,
  Mark,
  Note,
  PhotoDisc,
  Pillars,
  PullQuote,
  StoryCard,
  Testimonial,
  Venn,
  Waveform,
} from "@/components/aw";
import type { Metadata } from "next";
import WaitlistForm from "@/components/aw/WaitlistForm";
import { LINKS, track } from "./links";
import { latestPosts } from "./substack";
import { FAQS } from "./faqs";
import { Phases, PriceCard } from "./programme";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const SITUATIONS = [
  { icon: "meeting", title: "In meetings.", body: "Say it the first time, without rehearsing it in your head." },
  { icon: "presentation", title: "In presentations.", body: "Hold the room, not just get through the slides." },
  { icon: "pitch", title: "In pitches.", body: "Make the case and sound like you believe it." },
  { icon: "heart", title: "At weddings and occasions.", body: "Funny, warm, and remembered for the right reasons." },
  { icon: "conversation", title: "In difficult conversations.", body: "Stay clear and kind when it gets uncomfortable." },
  { icon: "spark", title: "When you're already good.", body: "Storytelling, presence and spontaneity, the next level up." },
];

const ELSEWHERE = [
  {
    icon: "meeting",
    title: "Freelancing for Good",
    body: "I co-founded a community of 1,000+ freelancers working for causes they care about. I see all the time how speaking holds good people back.",
    link: "More about FFG",
    href: "/ffg",
  },
  {
    icon: "spark",
    title: "Claude Clarity",
    body: "My book on building an AI-powered productivity system with Claude. Available on Kindle.",
    link: "claudeclarity.com",
    href: LINKS.claudeClarity,
  },
  {
    icon: "presentation",
    title: "Consulting",
    body: "Websites, copywriting and design, plus some AI consulting, for the right projects.",
    link: "Get in touch",
    href: "/contact",
  },
  {
    icon: "waveform",
    title: "Other projects",
    body: "Freelance Radio, GBM Music (original music that led to sales and commissions) and whatever's capturing my interest.",
    link: "See projects",
    href: "/projects",
  },
];

export default async function Home() {
  const posts = await latestPosts(3);
  return (
    <>
      {/* 1. Hero */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <h1 className="aw-h aw-h-xl">
              <span className="aw-h-line">Get out of your</span>
              <span className="aw-h-line">own way.</span>
              <span className="aw-h-line aw-gradient-text">Find your voice.</span>
            </h1>
            <p className="lede">
              Whether you freeze under pressure, struggle to get to the point, or already speak well but want more
              presence and personality, I&rsquo;ll help you express yourself with ease and authenticity, and rewire your
              speaking confidence.
            </p>
            <div className="ctas">
              <Button href={track(LINKS.quiz, "home-hero")} arrow>
                Take the Speaker Quiz
              </Button>
              <Button href={track(LINKS.introCall, "home-hero")} variant="secondary">
                Book a free intro call
              </Button>
            </div>
            <p className="cta-note">A few minutes to explore your speaking strengths and what to work on next.</p>
          </div>
          <div className="hero-art">
            <Note className="hero-note" arrow>
              Hi, I&rsquo;m Alistair, a speaking coach.
            </Note>
            <PhotoDisc src="/images/alistair-disc.jpg" alt="Alistair Webster, smiling, on Arthur's Seat in Edinburgh" size={440} waveId="hero-wave" live />
          </div>
        </div>
      </section>

      {/* 2. Three-step story */}
      <section className="section section-sunk">
        <div className="wrap">
          <div className="section-head">
            <h2 className="aw-h aw-h-l">
              Speak up <Highlight plain swoosh>the way you want to,</Highlight> when it matters most.
            </h2>
          </div>
          <div className="story-steps">
            <div className="story-step">
              <span className="story-num" aria-hidden>1</span>
              <StoryCard icon="conversation" title="You have something worth saying.">
                An idea in the meeting. A pitch for funding. A story at dinner. A wedding speech you only get to give once.
              </StoryCard>
            </div>
            <div className="story-step">
              <span className="story-num" aria-hidden>2</span>
              <StoryCard icon="waveform" title="But it doesn't come out the way it sounds in your head.">
                Sometimes it&rsquo;s nerves. Sometimes it&rsquo;s habit: the over-prepared script, the safe version of you.
                Either way, you can change it.
              </StoryCard>
            </div>
            <div className="story-step">
              <span className="story-num" aria-hidden>3</span>
              <StoryCard icon="spark" title="With the right practice, speaking starts to feel like you.">
                You contribute without overthinking it. Your stories land. You stop scripting every word and connect more.
              </StoryCard>
            </div>
          </div>
          <div className="situations-wrap">
            <h3 className="situations-title">
              Trust yourself <Highlight>when it counts.</Highlight>
            </h3>
            <ul className="situations">
              {SITUATIONS.map((s) => (
                <li key={s.title}>
                  <Icon name={s.icon} circle />
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Dark band — three things */}
      <section className="band aw-dark band-animated">
        <div className="aw-dark-glow" aria-hidden />
        <div className="wrap">
          <div>
            <div className="aw-dark-inner">
              <h2 className="aw-h aw-h-l">
                Great speaking is about <Gradient>more than just technique.</Gradient>
              </h2>
              <p className="aw-dark-lede">It takes three things. Each one helps on its own; together, they&rsquo;re what makes it stick.</p>
              <div className="aw-approach">
                <Venn labels={["Skills", "Psychology", "Practice"]} centre="you, at your best" />
                <Pillars
                  items={[
                    {
                      title: "Skills",
                      body: "Storytelling, presence, structure and spontaneity, through exercises that get you out of your head and help you enjoy being seen.",
                    },
                    {
                      title: "Psychology",
                      body: "My coaching takes a CBT-informed approach, working on what's underneath, not just the surface habits.",
                    },
                    {
                      title: "Practice",
                      body: "Short, guided sessions in Speak Up, my own app, so you keep improving between our calls.",
                    },
                  ]}
                />
              </div>
              <p className="band-foot">
                <a className="wipe-link" href="/coaching">
                  How the programme works →
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="quote-row">
        <div className="wrap tom">
          <PullQuote
            quote={
              <>
                I actually thought I was a good public speaker&hellip; Now <Highlight>my rhythm is better, my stories land more</Highlight>, I
                don&rsquo;t rush, and I don&rsquo;t speak from a script &mdash; I speak from connection.
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
              &ldquo;What surprised me most is how far beyond speaking this went. Alistair helped me see a bigger pattern
              in my life: over-preparing to avoid mistakes. That insight opened me up to new experiences, and{" "}
              <Highlight>honestly changed my life</Highlight>.&rdquo;
            </p>
            <cite>Tom, on what changed</cite>
          </blockquote>
        </div>
      </section>

      {/* About */}
      <section className="section section-sunk" id="about">
        <div className="wrap">
          <div className="about">
            <div className="about-art">
              <PhotoDisc src="/images/alistair-webster.jpg" alt="Alistair Webster" size={320} wave={false} />
            </div>
            <div className="about-copy">
              <Note>A bit about me</Note>
              <div className="about-body">
                <p>
                  I was the quiet kid (I still hate admitting that) who dreaded speaking up, from giving a speech to
                  introducing myself or ordering a coffee. I even secretly quit my first online speaking lesson halfway
                  through.
                </p>
                <p>
                  What changed things was practical training, plus understanding why being seen felt like such a big deal
                  in the first place. My brain was predicting catastrophe whenever I opened my mouth!
                </p>
                <p>
                  That&rsquo;s what my coaching combines now: Ultraspeaking-style drills, counselling-skills training, and
                  an approach informed by memory reconsolidation research and CBT ideas about how the nervous system
                  responds under pressure.
                </p>
                <p>
                  I&rsquo;m a certified Ultraspeaking coach. Their method is built on speaking games and practice rather
                  than theory, which is the backbone of the skills side of my coaching.
                </p>
                <p>
                  <a className="text-link" href="/about">
                    More about me →
                  </a>
                </p>
              </div>
              <div className="badge aw-panel">
                <Icon name="check" circle />
                <div>
                  <b>Ultraspeaking L1 Coach Certification</b>
                  <span>Ultraspeaking · Issued Aug 2025</span>
                </div>
              </div>
            </div>
          </div>
          <div className="ultra-quote">
            <Testimonial
              quote={
                <>
                  You gave me personalised feedback that really helped. <Highlight>I actually spoke for the entire hour</Highlight>, which
                  I&rsquo;m not used to, and it felt great! You helped me believe more in my own skills as a speaker.
                </>
              }
              name="Liudmila"
              role="Coaching client"
            />
          </div>
        </div>
      </section>

      {/* 6. The app */}
      <section className="section" id="app">
        <div className="wrap">
          <div className="aw-app">
            <div className="aw-app-stage">
              <div className="aw-app-disc d1" />
              <div className="aw-app-disc d2" />
              <div className="aw-phone">
                <div className="aw-phone-notch" />
                <div className="aw-phone-screen">
                  <div className="phone-ui">
                    <span className="meta">Tuesday · Week 3</span>
                    <p className="greet">
                      Good morning.
                      <br />
                      <span>Ready to practise?</span>
                    </p>
                    <div className="dots" aria-hidden>
                      <i className="on" />
                      <i className="on" />
                      <i className="on" />
                      <i />
                      <i />
                      <i />
                      <i />
                    </div>
                    <div className="phone-card">
                      <span className="label">This week&rsquo;s drill</span>
                      <span className="title">Tell a two-minute story without notes</span>
                      <div className="phone-play">
                        <span className="btn">
                          <Icon name="play" />
                        </span>
                        <Waveform id="phone-wave" bars={22} height={36} seed={5} />
                      </div>
                    </div>
                    <div className="phone-row">
                      <Icon name="mic" circle />
                      <div>
                        <b>Warm-up</b>
                        <small>3 min · daily</small>
                      </div>
                    </div>
                    <div className="phone-row">
                      <Icon name="calendar" circle />
                      <div>
                        <b>Next session</b>
                        <small>Thursday with Alistair</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span className="phone-caption">Concept screen</span>
            </div>
            <div className="aw-app-copy">
              <h2 className="aw-app-title">
                Your progress doesn&rsquo;t stop <Highlight>between sessions.</Highlight>
              </h2>
              <p className="aw-app-body">
                Practice is where new habits stick. In <strong>Speak Up</strong>, my own app, you get short daily warm-ups
                and drills built around what we&rsquo;re working on, so you keep improving between our calls, and a
                speaking fitness score so you can see it happening.
              </p>
              <p className="aw-app-body">
                It&rsquo;s included for a year with the eight-week programme, along with courses and AI coaching to help
                you keep growing long after we finish.
              </p>
              <Button href="#programme" variant="secondary">
                See what&rsquo;s included
              </Button>
              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Programme and price */}
      <section className="section section-sunk" id="programme">
        <div className="wrap">
          <div className="programme">
            <div className="programme-copy">
              <h2 className="aw-h aw-h-l">Eight weeks to become a more confident, compelling speaker.</h2>
              <p className="lede">
                Personal coaching, practical exercises and a structured way to keep improving between sessions.
              </p>
              <Phases />
            </div>
            <PriceCard from="home" />
          </div>
          <div className="programme-quote">
            <Testimonial
              quote={
                <>
                  The way you stayed at ease and heard my questions inspired me to do the same &mdash; to take my time and
                  own my speaking. This was <Highlight>one of the most impactful coaching sessions I&rsquo;ve had</Highlight>.
                </>
              }
              name="Evelyn Q"
              role="Coaching client"
            />
          </div>
        </div>
      </section>

      {/* 8. Tips */}
      <section className="section">
        <div className="wrap">
          <div className="tips-head">
            <div className="section-head">
              <h2 className="aw-h aw-h-l">Speaking tips you need to hear</h2>
              <p className="lede">Short, practical ideas from my public speaking newsletter.</p>
            </div>
          </div>
          <div className="tips">
            {posts.map((p, i) => (
              <a key={p.url} className={`tip aw-panel${i === 1 ? " dark" : ""}`} href={p.url}>
                <span className="tip-date">{p.date}</span>
                <p className="tip-title">
                  {p.title.split(" ").slice(0, -2).join(" ")}{" "}
                  <Gradient>{p.title.split(" ").slice(-2).join(" ")}</Gradient>
                </p>
                <span className="tip-foot">
                  Read on Substack <Mark id={`tip-mark-${i}`} size={32} tone={i === 1 ? "dark" : "voice"} />
                </span>
              </a>
            ))}
          </div>
          <div className="subscribe aw-panel">
            <p>
              <strong>Get new posts by email.</strong> Subscribe to my public speaking newsletter. Free, and easy to
              leave.
            </p>
            <Button href={LINKS.substack} arrow>
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-sunk" id="faq">
        <div className="wrap">
          <div className="section-head">
            <h2 className="aw-h aw-h-l">Questions people ask</h2>
          </div>
          <div className="faq">
            {FAQS.map((f) => (
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

      {/* 9. Final CTA */}
      <section className="section final">
        <div className="wrap">
          <div className="section-head">
            <h2 className="aw-h aw-h-l">
              Ready to <Gradient>find your voice?</Gradient>
            </h2>
            <p className="lede">
              Take the Speaker Quiz: in a few minutes, you&rsquo;ll learn your strengths and challenges, and get your
              own personalised plan. Or book a free intro call and we&rsquo;ll talk it through.
            </p>
          </div>
          <div className="ctas">
            <Button href={track(LINKS.quiz, "home-footer")} arrow>
              Take the Speaker Quiz
            </Button>
            <Button href={track(LINKS.introCall, "home-footer")} variant="secondary">
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
      {/* Other projects */}
      <section className="section section-sunk" id="projects">
        <div className="wrap">
          <div className="about-more">
            <h2 className="about-more-title">Other things I do</h2>
            <ul className="about-cards">
              {ELSEWHERE.map((c) => (
                <li key={c.title}>
                  <a className="about-card aw-panel" href={c.href}>
                    <Icon name={c.icon} circle />
                    <span className="about-card-title">{c.title}</span>
                    <span className="about-card-body">{c.body}</span>
                    <span className="about-card-link">
                      {c.link} <Icon name="arrow-right" size={16} />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
