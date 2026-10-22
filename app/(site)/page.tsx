import {
  ArrowGrid,
  Button,
  Contrast,
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
              Whether it&rsquo;s freezing under pressure, rambling without getting to the point or dreading your turn to
              introduce yourself, we all wish we were better speakers. I&rsquo;ll help you express yourself with ease and
              authenticity, and rewire your speaking confidence.
            </p>
            <div className="ctas">
              <Button href={LINKS.quiz} arrow>
                Take the Speaker Quiz
              </Button>
              <Button href={LINKS.introCall} variant="secondary">
                Book a free intro call
              </Button>
            </div>
          </div>
          <div className="hero-art">
            <Note className="hero-note" arrow>
              Hi, I&rsquo;m Alistair, a speaking coach.
            </Note>
            <PhotoDisc src="/images/alistair-disc.jpg" alt="Alistair Webster, smiling, on Arthur's Seat in Edinburgh" size={440} waveId="hero-wave" />
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
                You contribute without overthinking it. Your stories land. You prepare less and connect more.
              </StoryCard>
            </div>
          </div>
        </div>
      </section>

      {/* 3. More than tips and tricks */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2 className="aw-h aw-h-l">
              <Highlight>More than</Highlight> tips, tricks and hacks
            </h2>
          </div>
          <Contrast
            notLabel="Tips and tricks on their own"
            yesLabel="What we work on"
            not={["Breathing hacks and power poses", "A memorised script, and hoping", "Advice you forget by Monday"]}
            yes={[
              "What's going on when the pressure's on, and why",
              "The patterns underneath, not just the moments they show up",
              "Skills practised until they hold up live",
              "Recovery techniques you can rely on",
              "Ways to prepare effectively",
              "Lasting change that goes beyond just speaking",
            ]}
            closing="A structured programme to help you build real confidence."
          />
        </div>
      </section>

      {/* 4. Trust yourself */}
      <section className="section section-sunk">
        <div className="wrap split">
          <div className="section-head">
            <h2 className="aw-h aw-h-l">
              Trust yourself <Highlight>when it counts.</Highlight>
            </h2>
            <p className="lede">
              Why is it so hard to speak under pressure the way we do when it&rsquo;s off? Through coaching that recreates
              that pressure and works on the root causes, you&rsquo;ll build the confidence to show up as yourself,
              whatever the situation. Whether that&rsquo;s Monday morning&rsquo;s meeting or the speech of your life.
            </p>
          </div>
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
      </section>

      {/* 5. Dark band — three things */}
      <section className="band aw-dark">
        <div className="aw-dark-glow" aria-hidden />
        <div className="wrap">
          <div>
            <div className="aw-dark-inner">
              <h2 className="aw-h aw-h-l">Good speaking takes three things.</h2>
              <p className="aw-dark-lede">Each one helps on its own. Together, they&rsquo;re what makes it stick.</p>
              <div className="aw-approach">
                <Venn labels={["Authenticity", "Psychology", "Practice"]} centre="you, at your best" />
                <Pillars
                  items={[
                    { title: "Authenticity", body: "Exercises that get you out of your head and help you enjoy being seen." },
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
                <a className="text-link" href="#programme">
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
                  That&rsquo;s what my coaching combines now: Ultraspeaking drills, counselling-skills training, and an
                  interest in memory reconsolidation and how the nervous system responds under pressure.
                </p>
              </div>
            </div>
          </div>
          <div className="about-more">
            <h3 className="about-more-title">Other things I do</h3>
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
                Practise every week in the <Highlight>Speak Up</Highlight> app
              </h2>
              <p className="aw-app-body">
                Daily warm-ups, drills and exercises, plus practice designed to complement our coaching sessions. Record
                yourself, play it back, try again. It&rsquo;s included for a year with the eight-week programme, so you
                keep going long after we finish.
              </p>
              <Button href="#programme" variant="secondary">
                See what&rsquo;s included
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ultraspeaking */}
      <section className="section section-sunk">
        <div className="wrap">
          <div className="ultra">
            <div>
              <h2 className="aw-h aw-h-l ultra-title">Trained in the Ultraspeaking method</h2>
              <div className="ultra-body">
                <p>I&rsquo;m an Ultraspeaking-certified coach, trained by some of the best in the business.</p>
                <p>
                  Ultraspeaking&rsquo;s approach, praised by creators like Ali Abdaal, Anne-Laure Le Cunff and Lucy
                  Simkins, isn&rsquo;t about memorising scripts or chasing perfect delivery. It&rsquo;s about finding your
                  authentic voice and building lasting confidence.
                </p>
                <p>
                  Through coaching and speaking games, I help you communicate with impact, overcome imposter syndrome, and
                  inspire others.
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
            <div className="why aw-panel">
              <h3>Why it works</h3>
              <ul>
                <li>
                  <Icon name="mic" circle />
                  <div>
                    <b>Learn by doing.</b>
                    <span>Speaking games and exercises, not theory or lectures.</span>
                  </div>
                </li>
                <li>
                  <Icon name="waveform" circle />
                  <div>
                    <b>Sound like yourself.</b>
                    <span>Your natural style, not a rehearsed performance.</span>
                  </div>
                </li>
                <li>
                  <Icon name="presentation" circle />
                  <div>
                    <b>Built for real life.</b>
                    <span>Techniques that hold up in the meetings, pitches and speeches you actually face.</span>
                  </div>
                </li>
              </ul>
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

      {/* 7. Programme and price */}
      <section className="section" id="programme">
        <div className="wrap programme">
          <div className="programme-copy">
            <h2 className="aw-h aw-h-l">
              Transform your speaking confidence in eight weeks. <Highlight plain swoosh>Guaranteed.</Highlight>
              <span className="footnote">
                <button type="button" className="footnote-btn" aria-describedby="guarantee-tip" aria-label="About the guarantee">
                  *
                </button>
                <span role="tooltip" id="guarantee-tip" className="footnote-tip">
                  Show up, do the work, and if you don&rsquo;t feel the difference, I&rsquo;ll{" "}
                  <a href="/terms">make it right</a>.
                </span>
              </span>
            </h2>
            <p className="lede">
              Over eight weeks, we&rsquo;ll work out where you want to improve, build your skills and work on the habits
              that might be holding you back. Then you keep going, with a full year in the Speak Up app.
            </p>
            <ArrowGrid
              columns={2}
              items={[
                <><strong>Eight 1:1 sessions</strong> shaped around what you&rsquo;re actually preparing for.</>,
                <>A year of the <strong>Speak Up app</strong> for structured practice between sessions.</>,
                <><strong>Assessments</strong> at the start and end, so you can see what changed.</>,
                <><strong>Real rehearsal</strong> for a specific talk, pitch or speech.</>,
                <><strong>Storytelling and structure</strong>, so your point lands.</>,
                <><strong>Presence and delivery:</strong> pace, pause and voice.</>,
              ]}
            />
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
          <aside className="price-card aw-panel" aria-label="Prices">
            <PriceBlock amount="£1,400" label="8-week Speaking Transformation" detail="Includes a year of Speak Up app access" />
            <Button href={LINKS.bookProgramme} arrow>
              Book the programme
            </Button>
            <hr />
            <PriceBlock amount="£150" label="Single session" detail="60 minutes for a specific talk, pitch or event" />
            <Button href={LINKS.bookSession} variant="secondary">
              Book a session
            </Button>
            <hr />
            <p className="price-intro">
              Not sure yet? <a href={LINKS.introCall}>Book a free intro call</a> and we&rsquo;ll talk it through.
            </p>
          </aside>
        </div>
      </section>

      {/* 8. Tips */}
      <section className="section section-sunk">
        <div className="wrap">
          <div className="tips-head">
            <div className="section-head">
              <h2 className="aw-h aw-h-l">Speaking tips you need to hear</h2>
              <p className="lede">Short, practical ideas from my newsletter.</p>
            </div>
            <Button href={LINKS.substack} variant="secondary" arrow>
              Subscribe
            </Button>
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
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
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
      <section className="section section-sunk final">
        <div className="wrap">
          <div className="section-head">
            <h2 className="aw-h aw-h-l">
              Ready to <Gradient>find your voice?</Gradient>
            </h2>
            <p className="lede">
              Book a free intro call and we&rsquo;ll talk it through. Or take the Speaker Quiz first: five minutes, and
              you&rsquo;ll get a personalised plan.
            </p>
          </div>
          <div className="ctas">
            <Button href={LINKS.introCall} arrow>
              Book a free intro call
            </Button>
            <Button href={LINKS.quiz} variant="secondary">
              Take the Speaker Quiz
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
