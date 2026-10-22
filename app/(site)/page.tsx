import {
  Button,
  Gradient,
  Highlight,
  Icon,
  Mark,
  Note,
  PhotoDisc,
  Pillars,
  PriceBlock,
  PullQuote,
  StoryCard,
  Testimonial,
  Venn,
  Waveform,
} from "@/components/aw";
import WaitlistForm from "@/components/aw/WaitlistForm";
import { LINKS } from "./links";
import { latestPosts } from "./substack";

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
    link: "freelancingforgood.com",
    href: LINKS.ffg,
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
    href: LINKS.email,
  },
  {
    icon: "waveform",
    title: "Other projects",
    body: "Freelance Radio, GBM Music (original music that led to sales and commissions) and whatever's capturing my interest.",
    link: "See projects",
    href: "/apps",
  },
];

const STAGES = [
  {
    when: "Week 1",
    title: "Find your focus",
    body: "A self-assessment of where you are and what you want, then a plan built around it.",
  },
  {
    when: "Weeks 2–6",
    title: "Build skills, shift habits",
    body: "Coaching, exercises and feedback in our sessions, with short daily practice in Speak Up.",
  },
  {
    when: "Weeks 7–8",
    title: "Put it to work",
    body: "Rehearsal for your real talks and situations, then a final assessment to see what's changed.",
  },
  {
    when: "Then",
    title: "A year of practice",
    body: "Speak Up keeps you improving long after our sessions finish.",
  },
];

const FAQS: { q: string; a: React.ReactNode }[] = [
  {
    q: "Who is this for?",
    a: "If you're here, probably you! Anyone who wants to feel more confident and comfortable when they speak, whether you're pitching for funding, presenting at work, giving a wedding speech, leading a team, or simply wanting to feel more at home in your own skin.",
  },
  {
    q: "What makes your approach different?",
    a: "I create a supportive space, then push you (gently) out of your comfort zone, because that's where growth happens. We combine Ultraspeaking's practical exercises (a method that's helped thousands of people) with a CBT-informed look at what's going on under pressure, plus the Speak Up app so you keep practising between sessions. And I started out terrified of speaking myself, so I understand the blocks, not just the techniques.",
  },
  {
    q: "How quickly will I see results?",
    a: "Most clients notice a shift in their very first session. For lasting change, we go deeper over the eight weeks, giving you time to practise, refine and embed new habits. And if you show up and do the work but don't feel the difference, I'll make it right.",
  },
  {
    q: "What if I'm extremely nervous about speaking?",
    a: "Then you're in exactly the right place. We start gently, at your pace, and build confidence step by step. You'll never be thrown in unprepared. The process is supportive, playful and (surprisingly) fun.",
  },
  {
    q: "Isn't this just who I am? Can I really change?",
    a: "Yes. Speaking confidence isn't a fixed trait, it's a skill. I've seen people go from shaking hands and dry mouths to giving talks they're proud of, and actually enjoying it. It doesn't mean you stop being you. It means you can express yourself more fully, and trust yourself when it counts.",
  },
  {
    q: "What happens in a session?",
    a: "We usually jump straight into short speaking games, designed to put you under just enough pressure to learn, but not so much that it's overwhelming. Each session is tailored to your goals: a presentation, handling Q&A, speaking up in meetings, or introducing yourself in a room.",
  },
  {
    q: "Is this therapy?",
    a: "No. I'm a coach, and our focus is how you speak. My coaching draws on counselling-skills training and a CBT-informed approach, but if something bigger comes up, I'll say so and point you towards the right support.",
  },
  {
    q: "Online or in person?",
    a: "Usually online, which works wherever you are. If you're in Edinburgh, in person can be arranged when it's convenient.",
  },
  {
    q: "What happens after the eight weeks?",
    a: "You keep a full year in the Speak Up app, so practice carries on. If you want a top-up before a big moment, single sessions are always available.",
  },
  {
    q: "I've got something big next week. Can you help?",
    a: "I know the feeling! We'll do an intensive one-off session focused on your immediate need: targeted practice to help you feel ready, even if time is short. If you want to build longer-term skills afterwards, we can talk about the programme.",
  },
  {
    q: "How do I book?",
    a: (
      <>
        Start with a <a href={LINKS.introCall}>free 20-minute intro call</a>. It's a chance to see if we're a good fit, and
        you'll get a taste of the method. Then you can book and pay for sessions or the programme through my calendar.
      </>
    ),
  },
  {
    q: "Do you work with teams?",
    a: (
      <>
        Yes. I run interactive speaking workshops, as lunch-and-learns, half days or full days.{" "}
        <a href="https://speakupforgood.com/workshops">See team workshops →</a>
      </>
    ),
  },
  {
    q: "Do you work with comedians and performers?",
    a: (
      <>
        Yes! Based in Edinburgh, I work with stand-up comedians and live performers on material, nerves, presence and
        recovery, whether you're prepping for the Fringe or working on a new set.{" "}
        <a href="https://speakupforgood.com/comedians">See coaching for comedians →</a>
      </>
    ),
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
              <Button href={LINKS.quiz} arrow>
                Take the Speaker Quiz
              </Button>
              <Button href={LINKS.introCall} variant="secondary">
                Book a free intro call
              </Button>
            </div>
            <p className="cta-note">Five minutes to explore your speaking strengths and what to work on next.</p>
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
                      body: "My coaching takes a CBT-informed approach, working on the root causes rather than the symptoms.",
                    },
                    {
                      title: "Practice",
                      body: "Short, guided sessions in Speak Up, my own app, so you keep improving between our calls.",
                    },
                  ]}
                />
              </div>
              <p className="band-foot">
                <a className="wipe-link" href="#programme">
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
      <section className="section">
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
              <ol className="stages">
                {STAGES.map((st, i) => (
                  <li key={st.when} className={i === STAGES.length - 1 ? "stage stage-year" : "stage"}>
                    <span className="stage-when">{st.when}</span>
                    <h3>{st.title}</h3>
                    <p>{st.body}</p>
                  </li>
                ))}
              </ol>
            </div>
            <aside className="price-card aw-panel" aria-label="Prices">
              <PriceBlock amount="£1,400" label="8-week Speaking Transformation" detail="Everything below, in one programme" />
              <ul className="practical">
                <li><Icon name="calendar" size={18} /><span>Eight weekly 1:1 sessions, 60 minutes each</span></li>
                <li><Icon name="check" size={18} /><span>A self-assessment at the start and end, so you can see how your confidence has changed</span></li>
                <li><Icon name="spark" size={18} /><span>A plan shaped around your goals, plus rehearsal for your real talks</span></li>
                <li><Icon name="mic" size={18} /><span>A full year of Speak Up: about 10 minutes a day of guided practice</span></li>
                <li><Icon name="meeting" size={18} /><span>Online, or in person in Edinburgh</span></li>
              </ul>
              <Button href={LINKS.bookProgramme} arrow>
                Book the programme
              </Button>
              <p className="guarantee">
                <strong>Guaranteed:</strong> show up, do the work, and if you don&rsquo;t feel the difference,
                I&rsquo;ll <a href="/terms">make it right</a>.
              </p>
              <p className="price-after">
                After booking, you pay securely, pick your first session, and we set the rest for the same time each
                week.
              </p>
              <hr />
              <PriceBlock amount="£195" label="Single session" detail="Focused help with one specific talk, pitch or event." />
              <Button href={LINKS.bookSession} variant="secondary">
                Book a session
              </Button>
              <hr />
              <p className="price-intro">
                Not sure yet? <a href={LINKS.introCall}>Book a free intro call</a> and we&rsquo;ll talk it through.
              </p>
            </aside>
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
              Take the Speaker Quiz: in five minutes, you&rsquo;ll learn your strengths and challenges, and get your
              own personalised plan. Or book a free intro call and we&rsquo;ll talk it through.
            </p>
          </div>
          <div className="ctas">
            <Button href={LINKS.quiz} arrow>
              Take the Speaker Quiz
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
