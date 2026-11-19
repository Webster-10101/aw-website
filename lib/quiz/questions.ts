// Speaker quiz questions, carried over from speakupforgood.com.
// Option ids are stored in the CRM, so never rename them; labels can change.

export type ArchetypeId =
  | "rambler"
  | "overthinker"
  | "doubter"
  | "pleaser"
  | "performer"
  | "intense"
  | "rationalist"
  | "minimalist";

export const ARCHETYPE_IDS: ArchetypeId[] = [
  "rambler",
  "overthinker",
  "doubter",
  "pleaser",
  "performer",
  "intense",
  "rationalist",
  "minimalist",
];

export type Question = {
  id: string;
  prompt: string;
  type: "single" | "multi" | "rating";
  options?: { id: string; label: string }[];
  min?: number;
  max?: number;
  maxSelections?: number;
};

export const QUESTIONS: Question[] = [
  {
    id: "q1",
    prompt: "If you put me on stage, my reaction will be to…",
    type: "multi",
    maxSelections: 3,
    options: [
      { id: "rambler", label: "Fill the space with ideas and energy" },
      { id: "overthinker", label: "Hold back until I’m “ready”" },
      { id: "doubter", label: "Want to speak but second-guess myself" },
      { id: "pleaser", label: "Say what I think others want to hear" },
      { id: "performer", label: "Turn on polish and performance mode" },
      { id: "intense", label: "Come in hot and dominate" },
      { id: "rationalist", label: "Focus on facts and logic" },
      { id: "minimalist", label: "Say exactly what needs to be said" },
    ],
  },
  {
    id: "q2",
    prompt: "When I have to speak without preparation, I typically…",
    type: "single",
    options: [
      { id: "dive_in", label: "Dive in and find my way as I go" },
      { id: "stall_time", label: "Ask questions or stall for thinking time" },
      { id: "apologize_first", label: "Apologise for not being prepared" },
      { id: "say_less", label: "Keep it very brief to minimise risk" },
      { id: "perform_anyway", label: "Perform confidently even without content" },
      { id: "speak_forcefully", label: "Speak with conviction regardless" },
      { id: "stick_to_facts", label: "Stick to what I know for certain" },
    ],
  },
  { id: "q3", prompt: "I feel confident speaking in high-stakes situations", type: "rating", min: 1, max: 10 },
  {
    id: "q4",
    prompt: "When someone disagrees with me publicly, I tend to…",
    type: "single",
    options: [
      { id: "explain_more", label: "Explain my point with more examples and details" },
      { id: "think_first", label: "Pause to carefully consider their perspective" },
      { id: "soften_position", label: "Soften my position to find middle ground" },
      { id: "accommodate", label: "Look for ways to make everyone comfortable" },
      { id: "defend_polished", label: "Defend my view with polished confidence" },
      { id: "push_back", label: "Push back strongly on what I believe" },
      { id: "present_evidence", label: "Present clear evidence for my position" },
      { id: "state_briefly", label: "State my view briefly and move on" },
    ],
  },
  { id: "q5", prompt: "I can find words quickly when I’m put on the spot", type: "rating", min: 1, max: 10 },
  { id: "q6", prompt: "I stay on one idea at a time rather than jumping around", type: "rating", min: 1, max: 10 },
  {
    id: "q7",
    prompt: "When speaking, I feel like I’m performing rather than being myself",
    type: "rating",
    min: 1,
    max: 10,
  },
  {
    id: "q8",
    prompt: "After speaking, I usually think…",
    type: "single",
    options: [
      { id: "said_too_much", label: "“I probably said too much, but I covered everything”" },
      { id: "should_have_said", label: "“I should have said that differently”" },
      { id: "sounded_dumb", label: "“I hope I didn’t sound stupid”" },
      { id: "hope_comfortable", label: "“I hope everyone felt comfortable with that”" },
      { id: "looked_good", label: "“I sounded polished and professional”" },
      { id: "made_impact", label: "“I made my point powerfully”" },
      { id: "was_accurate", label: "“The information was accurate and clear”" },
      { id: "job_done", label: "“I said what needed to be said”" },
    ],
  },
  {
    id: "q9",
    prompt: "Before speaking, I usually prepare by…",
    type: "multi",
    maxSelections: 2,
    options: [
      { id: "overprepare", label: "Over-preparing every detail and contingency" },
      { id: "loose", label: "Making a loose outline with key points" },
      { id: "improv", label: "Relying on enthusiasm and improvisation" },
      { id: "polish", label: "Practising delivery and polishing the presentation" },
      { id: "structure", label: "Researching thoroughly and building a logical flow" },
      { id: "minimal", label: "Doing minimal prep, just clarifying the core message" },
    ],
  },
  {
    id: "q10",
    prompt: "My biggest speaking challenge is usually…",
    type: "single",
    options: [
      { id: "staying_focused", label: "Staying focused and not going off on tangents" },
      { id: "starting_without_perfect", label: "Starting to speak before I feel perfectly ready" },
      { id: "believing_valuable", label: "Believing I have something valuable to contribute" },
      { id: "being_direct", label: "Being direct when it might create tension" },
      { id: "being_authentic", label: "Being authentic instead of just polished" },
      { id: "moderating_energy", label: "Moderating my energy and reading the room" },
      { id: "making_engaging", label: "Making technical content engaging and relatable" },
      { id: "knowing_when_stop", label: "Knowing when I’ve said enough" },
    ],
  },
];

export type OptionalQuestion = {
  id: string;
  prompt: string;
  type: "multiple-select" | "text";
  options?: string[];
  placeholder?: string;
};

// Optional follow-ups. Answers to these feed the written plan.
export const OPTIONAL_QUESTIONS: OptionalQuestion[] = [
  {
    id: "situations",
    prompt: "The situations I most want to improve in are…",
    type: "multiple-select",
    options: ["Work meetings", "Social settings", "Presentations", "Everyday conversations", "Public speaking events"],
  },
  {
    id: "struggle",
    prompt: "When it comes to speaking, I struggle most with…",
    type: "text",
    placeholder: "e.g. finding the right words, feeling confident, keeping people engaged…",
  },
  {
    id: "authentic",
    prompt: "I feel most like myself when I’m speaking…",
    type: "text",
    placeholder: "e.g. with close friends, about topics I care about, in small groups…",
  },
  {
    id: "world_class",
    prompt: "If I woke up tomorrow as a world-class speaker, I’d know because…",
    type: "text",
    placeholder: "e.g. I’d feel confident in any room, people would seek my input…",
  },
  {
    id: "confidence_moment",
    prompt: "The moment I’d love to feel more confident in is…",
    type: "text",
    placeholder: "e.g. presenting to my boss, speaking up in meetings, giving a toast…",
  },
  {
    id: "life_change",
    prompt: "Being a stronger speaker would change things for me by…",
    type: "text",
    placeholder: "e.g. moving my career on, building better relationships, sharing my ideas…",
  },
  {
    id: "curiosity",
    prompt: "Something I’ve always wondered about speaking is…",
    type: "text",
    placeholder: "e.g. how some people make it look so easy, what makes a speaker memorable…",
  },
];

export function isAnswered(q: Question, answer: unknown): boolean {
  if (q.type === "rating") return typeof answer === "number" && answer >= (q.min ?? 1) && answer <= (q.max ?? 10);
  if (q.type === "single") return typeof answer === "string" && answer.length > 0;
  return Array.isArray(answer) && answer.length > 0 && (!q.maxSelections || answer.length <= q.maxSelections);
}
