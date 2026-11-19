// Speaker type content, shown on the results page and used as the base for the written plan.
// Carried over from speakupforgood.com. Only change: "drop the act" reworded (Nov 2026).

import type { ArchetypeId } from "./questions";

export type Archetype = {
  title: string;
  description: string;
  introText: string;
  strengths: string[];
  growthAreas: string[];
  whereItShowsUp: string[];
  finalThought: string;
  /** One-line summary for the plan prompt. */
  context: string;
  /** "moving from X" phrase for the fallback plan. */
  shift: string;
};

export const ARCHETYPES: Record<ArchetypeId, Archetype> = {
  rambler: {
    title: "The Rambler",
    description:
      "You’ve got energy to spare. When you talk, ideas tumble out fast and furious, and people can feel the spark. The trouble is, that spark sometimes sets everything on fire at once — words rush out, sentences spiral, and clarity gets lost in the noise.",
    introText:
      "At its heart, rambling isn’t a flaw. It’s usually a response to pressure — the silence feels heavy, so you fill it. You hope clarity will appear halfway through the sentence. And sometimes it does. Other times, your audience is left spinning or disengaged.",
    strengths: [
      "You have momentum — you never get stuck for long.",
      "You’re spontaneous — quick to grab ideas and run with them.",
      "You’re courageous — you’re not afraid to open your mouth even when you’re unsure.",
    ],
    growthAreas: [
      "Pause on purpose. Treat silence as a tool, not a failure. It makes your words hit harder.",
      "Pick one arrow. Before you speak, ask: what’s the one thing I want them to take away? Aim for that and return to that.",
      "Wrap it up cleanly. End with a clear prompt — something like “And that’s what matters most.” No trailing off.",
    ],
    whereItShowsUp: [
      "Work presentation: You’ve got loads of ideas, so you throw them all in at once. Colleagues are left nodding politely but not really sure what the main point was.",
      "Q&A session: Someone asks a tricky question, and instead of pausing, you launch into a stream of half-answers, hoping clarity will appear along the way — people start to zone out.",
      "Casual conversation: You get excited telling a story but keep looping back, adding side details, until the punchline gets buried.",
    ],
    finalThought:
      "Your energy is infectious, but people need clarity and space to follow you. When you learn to land your ideas as powerfully as you generate them, you stop being “the one who talks a lot” — and start being the one everyone remembers.",
    context:
      "has energy to spare, ideas tumble out fast and furious, but clarity gets lost in the noise - needs to focus on one main point and pause purposefully",
    shift: "rushed and scattered to clear, concise and confident",
  },
  overthinker: {
    title: "The Overthinker",
    description:
      "You’ve got plenty to say — but when the spotlight’s on, you tend to freeze. Instead of speaking freely, you start running mental checks: Is this the right answer? Am I saying it perfectly? Before you know it, the moment has passed.",
    introText:
      "Overthinking doesn’t mean you lack ideas. Quite the opposite. You’ve got depth and clarity when you relax. The problem is the inner critic — that little voice that treats every word like it’s being marked in an exam.",
    strengths: [
      "You’re thoughtful — your answers carry weight when you let them out.",
      "You’re authentic — people trust you when you drop the perfection filter.",
      "You’re sharp — your ability to analyse and organise makes you credible and clear.",
    ],
    growthAreas: [
      "Trust the first thought. Don’t wait for the perfect answer — speak, then refine if needed. Not everything you say has to be super valuable.",
      "Let silence breathe. Pauses aren’t proof you’re stuck. They make you look thoughtful and confident.",
      "Feel it, don’t just think it. Bring emotion into your words. People remember what you make them feel more than what you make them think.",
    ],
    whereItShowsUp: [
      "Job interview: You pause too long before answering because you’re trying to craft the “perfect” reply. You never get into the flow so your answers are stilted and stiff.",
      "Team meeting: Someone asks your opinion. You’ve got a clear idea, but you hesitate, edit yourself, then finally share something watered down.",
      "Social gathering: You want to contribute to a lively chat, but by the time you’ve figured out how to phrase it, the conversation has already moved on.",
    ],
    finalThought:
      "Your thoughtfulness is a strength, if used wisely. When you stop trying to get it “right” and start letting it flow, people will see the real you — intelligent, flowing, and worth listening to.",
    context:
      "has plenty to say but freezes when spotlight is on, runs mental checks instead of speaking freely - needs to trust first thoughts and feel rather than just think",
    shift: "controlled and self-conscious to free and connected",
  },
  doubter: {
    title: "The Self-Doubter",
    description:
      "You know your stuff, but when it’s time to speak, you tend to shrink back. Maybe you start with an implied or a real apology (“I might not explain this well…”) or trail off before finishing strong. It’s not that you don’t have ideas — it’s that fear of judgement makes you play small.",
    introText:
      "Self-doubt doesn’t mean you’re weak. It just means you care. You want to get it right, you want people to value what you say. But the more you worry about how you come across, and how others are reacting, the harder it is to fully commit and actually trust yourself.",
    strengths: [
      "You’re empathetic — tuned in to how others feel.",
      "You’re authentic — people relate to your honesty and humility.",
      "You’re resilient — the fear of slipping up makes you better at bouncing back.",
    ],
    growthAreas: [
      "Drop the apology and bring conviction. Swap “Sorry if this doesn’t make sense…” with “Here’s why this matters.”",
      "Commit to a strong end. End every point with conviction and hold the silence. Don’t let the doubt show at the end.",
      "Speak from care, not fear. Instead of worrying about judgement, talk about why the subject matters to you. Be brave enough to be vulnerable and show yourself.",
    ],
    whereItShowsUp: [
      "Starting a presentation: You open with, “I’m not sure if this makes sense…” which lowers the energy and sets expectations before you’ve even begun.",
      "Sharing an idea: You give a good point but trail off at the end, so you sound less confident than you really are.",
      "One-to-one chat: You downplay your opinion, worried it might sound silly, even though it’s often the thing people need to hear.",
    ],
    finalThought:
      "Your voice is more powerful than you think. When you stop apologising for it and start owning it, people won’t just hear your words — they’ll feel your calm and confident conviction.",
    context:
      "knows their stuff but shrinks back when speaking, fear of judgement makes them play small - needs to drop apologies and speak from care not fear",
    shift: "holding back to putting it out there for yourself",
  },
  pleaser: {
    title: "The People Pleaser",
    description:
      "You care about people. You want them to like you, to feel they’ve got value from listening. That’s a gift — but it can also trap you. Instead of saying what you really think, you slip into “expert mode” or soften your opinions to keep everyone comfortable.",
    introText:
      "On the surface, you look polished and professional. Underneath, it can feel a little hollow — like you’re performing a role instead of expressing your actual feelings and thoughts.",
    strengths: [
      "You’re relatable — people lean in because you care.",
      "You’ve got conviction — when you speak honestly, it resonates.",
      "You’re adaptable — you listen well and respond in the moment.",
    ],
    growthAreas: [
      "Drop “expert mode.” Imagine you’re talking to a friend, not delivering a lecture.",
      "Ask yourself why. Keep digging: why does this really matter to me? Speak from there.",
      "Risk the truth. Don’t just say what people want to hear. Say what you actually believe — even if it feels riskier.",
    ],
    whereItShowsUp: [
      "Client pitch: You present polished, well-rehearsed points, but avoid sharing what you really think about their flawed idea — just to keep them happy.",
      "Panel discussion: You stick to “safe” answers and skip anything that might spark disagreement, even though stronger opinions would make you stand out.",
      "Everyday chat: A friend asks what you want to do, and you immediately answer, “I don’t mind — whatever you prefer,” even when you do have a preference.",
    ],
    finalThought:
      "People have a sixth sense for inauthenticity. So stop trying to please everyone and start thinking more about pleasing yourself. When you start speaking from your real convictions, you’ll unlock a superpower. Some people won’t like it — and that’s completely OK.",
    context:
      "cares about people but slips into performance mode to keep everyone comfortable instead of saying what they think - needs to risk the truth and stop trying to please everyone",
    shift: "performing for approval to speaking with authenticity",
  },
  performer: {
    title: "The Performer",
    description:
      "You know how to put on a show. Strong delivery, polished presence, maybe even a few tricks and hacks up your sleeve. The trouble is, all that polish can sometimes get in the way. Instead of connection, people feel the performance. It looks good, but it doesn’t always feel real.",
    introText:
      "Performers often treat speaking like a test — something to ace with flawless execution. That works up to a point, but it misses what people actually want: to feel like they’re talking to a real human who they can relate to.",
    strengths: [
      "You’ve got range — you already know how to use voice and body.",
      "You’ve got presence — people notice when you walk into a room.",
      "You’ve got work ethic — preparation is second nature.",
    ],
    growthAreas: [
      "Flip the switch. Exaggerate “stage mode,” then relax into how you’d tell the same thing to a friend.",
      "Bring the feeling. Instead of focusing on technique, ask: what do I actually feel about this? Speak from there.",
      "Stay in character. If you slip up, keep going. Don’t apologise — own the moment.",
    ],
    whereItShowsUp: [
      "Conference talk: You deliver with polish — big gestures, perfect pacing — but the audience feels like they’re watching a show, not meeting the real you.",
      "Networking event: You tell the same rehearsed joke or story, but it comes out a little mechanical instead of natural.",
      "Team meeting: You’re great when prepared, but if someone throws you a curveball, you stumble because you’re relying on your script or rigid routine.",
    ],
    finalThought:
      "Your polish is impressive, but your presence is what people remember. When you ease off the polish and let yourself be real, you stop being just “good on stage” — and start connecting and communicating authentically. A truly powerful combination.",
    context:
      "knows how to put on a show with strong delivery and polish, but this gets in the way of real connection - needs to bring feeling and let people see the real person behind the polish",
    shift: "performance mode to authentic presence",
  },
  intense: {
    title: "The Intense Speaker",
    description:
      "When you speak, people feel it. There’s power in your voice, conviction in your delivery, and no one’s left wondering where you stand. But sometimes that intensity comes on so strong it can be overwhelming. Everything feels high-stakes, all the time — leaving little space for lightness, contrast, or play.",
    introText:
      "At its root, intensity often comes from fear of losing control. If you ease up, will people still take you seriously? The truth: yes. In fact, they’ll connect more deeply when you show range and are able to be human.",
    strengths: [
      "You’ve got conviction — people know you mean what you say.",
      "You’ve got momentum — your energy carries you into flow quickly.",
      "You’ve got creativity — your force shakes up stale thinking.",
    ],
    growthAreas: [
      "Play with contrast. Try saying something at full volume and energy, then again in a quiet, calm tone. Notice how both land.",
      "Pause on purpose. A few seconds of silence can be more powerful than charging ahead.",
      "Add lightness. Not everything has to be serious. A moment of humour or curiosity makes your intensity even sharper when you bring it back. Experiment with being playful.",
    ],
    whereItShowsUp: [
      "Boardroom presentation: You go full throttle from the start — serious tone, rapid delivery — leaving no breathing room for the audience.",
      "Debate or discussion: Even on light topics, you come across as forceful, which can make others back down rather than engage.",
      "Casual chat: Someone cracks a joke, but you respond with heavy seriousness, missing the chance to show your lighter side.",
    ],
    finalThought:
      "Your passion is undeniable. But passion with contrast — highs and lows — is what keeps people hooked. When you balance your fire with calm, you don’t lose power. You gain contrast and impact.",
    context:
      "speaks with power and conviction but sometimes overwhelms with intensity - needs to play with contrast and add lightness",
    shift: "always full-throttle to intentional range",
  },
  rationalist: {
    title: "The Rationalist",
    description:
      "You like things to make sense. Clear structure, solid logic, everything in order. That gives you credibility — people trust that you’ve done your thinking. But it can also make you sound a little flat. Too many summaries, too much abstraction, and not enough of you.",
    introText:
      "Rationalists often believe that showing emotion risks losing authority. So you keep things safe, factual, tidy. The result: people nod along, but they don’t always feel it. And with that you miss the chance to make changes happen.",
    strengths: [
      "You’re clear — people understand complex ideas when you explain them.",
      "You’re credible — accuracy makes you trustworthy.",
      "You’ve got conviction — when you care, your clarity of thought becomes persuasive.",
    ],
    growthAreas: [
      "Tell it like it happened. Share stories in the present tense with detail and feeling, not just the summary.",
      "Add musicality. Play with tone — calm, joyful, frustrated — instead of staying monotone.",
      "Switch off “lecture mode.” Imagine you’re exploring an idea with a peer, not delivering a report.",
    ],
    whereItShowsUp: [
      "Work update: You summarise everything neatly, but colleagues feel disconnected because you left out the human story behind it.",
      "Conference Q&A: You give a technically correct, detailed answer that’s hard to follow — people get lost in the detail instead of the message.",
      "Everyday story: A friend asks about your holiday. You list facts — “We went to three cities, saw these sights” — but skip the funny or emotional moments and little details that would bring it to life.",
    ],
    finalThought:
      "Your clarity makes you reliable and trustworthy. But clarity with emotion can make you compelling and more impactful. When you let people feel your ideas as well as understand them, you move from being listened to — to being able to influence and persuade others.",
    context:
      "likes clear structure and solid logic which gives credibility, but can sound flat and miss human connection - needs to add feeling and switch off lecture mode",
    shift: "purely logical to logical and human",
  },
  minimalist: {
    title: "The Minimalist",
    description:
      "You probably already know this about yourself: you don’t say more than you need to. You get to the point, keep it short, maybe even cut things off before they’re fully formed. On the surface, that can look calm and collected — but if you’re honest, it often comes from holding back.",
    introText:
      "Minimalists keep their cards close to their chests. Instead of sharing the messy, human details — the real story, the real feeling, the vulnerabilities — you summarise at a safe distance. It’s not that you don’t have things to say. It’s that saying less feels safer than saying too much.",
    strengths: [
      "You naturally bring focus. People listen when you speak because you’re not wasting words. Everything you say has gone through a (usually far too strict) value filter.",
      "You hold composure under pressure — you don’t panic, you don’t overshare. That’s rare. You deliver more value in ten words than others do in ten minutes.",
      "And when you do add emotion or detail, it lands harder, because people aren’t expecting it.",
    ],
    growthAreas: [
      "Add one more layer. When you tell a story, don’t stop at the headline. Add the detail that feels a little too personal, or the feeling you’d normally skip.",
      "Trust the first idea. You don’t need to perfect or edit in your head before speaking. Try blurting it out and having fun finding the meaning or fleshing out the idea.",
      "Finish with strength. Instead of trailing off, choose a clear closing line and let the silence do the work. People remember how you end.",
    ],
    whereItShowsUp: [
      "Team discussion: You make one short comment and stop, even though you had more to say. The group moves on, missing your insight. Or you wait your turn, which never comes.",
      "Presentation close: You make your point then finish with a half-sentence or trail off, so the ending feels flat instead of strong.",
      "Casual storytelling: A friend asks how your weekend was. You answer, “Yeah, it was good thanks, how was yours,” when you actually have some stories or moments you could share.",
    ],
    finalThought:
      "Minimalists often worry about saying too much, which if we’re honest, is simply not a danger for you. That gives you the freedom to push it and say more. When you open up and let people see more of what’s underneath, you’ll get so much more back in return.",
    context:
      "doesn't say more than needed, gets to the point but holds back messy human details that would connect - needs to add one more layer and share more truth",
    shift: "contained to expressive",
  },
};
