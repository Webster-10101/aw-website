import { LINKS } from "./links";

export type Faq = { q: string; a: React.ReactNode };

export const FAQS: Faq[] = [
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

const pick = (q: string) => FAQS.find((f) => f.q === q)!;

// The programme page reuses the homepage answers where they overlap, plus two of its own.
export const COACHING_FAQS: Faq[] = [
  pick("How quickly will I see results?"),
  pick("What if I'm extremely nervous about speaking?"),
  {
    q: "I'm already a decent speaker. Is this for me?",
    a: "Yes. Some of my clients are confident, experienced speakers who want to stop relying on scripts, sound more like themselves and connect more. Tom had done stand-up comedy before we worked together.",
  },
  {
    q: "How is this different from a public speaking course?",
    a: "Most courses teach techniques. This works on your skills and on what's going on when the pressure's on, with daily practice between sessions. And it's built around you and your situations, not a set syllabus.",
  },
  pick("What happens in a session?"),
  pick("I've got something big next week. Can you help?"),
  pick("Is this therapy?"),
  pick("Online or in person?"),
  pick("What happens after the eight weeks?"),
];
