// The one scoring implementation for the speaker quiz. The quiz page, results
// page and server all call this, so the type and profile shown on screen are
// the same ones the written plan is based on.
//
// Carried over unchanged from the speakupforgood.com quiz page (scoreArchetype),
// which decided everyone's speaker type. Its profile ("sliding scales") formula
// replaces the two other copies that used to run on the results page and server.

import { ARCHETYPE_IDS, type ArchetypeId } from "./questions";

export type Answers = Record<string, unknown>;

export type SlidingScales = {
  clearness: number;
  spontaneity: number;
  expressiveness: number;
  authenticity: number;
  energy: number;
};

export type ScoringResult = {
  primary: ArchetypeId;
  scores: Record<ArchetypeId, number>;
  slidingScales: SlidingScales;
};

export const SCALES: { key: keyof SlidingScales; left: string; right: string; description: string }[] = [
  { key: "clearness", left: "Confusing", right: "Clear", description: "How directly you communicate your ideas" },
  { key: "spontaneity", left: "Cautious", right: "Spontaneous", description: "How quickly you speak without editing" },
  { key: "expressiveness", left: "Reserved", right: "Expressive", description: "Your emotional range and vividness" },
  { key: "authenticity", left: "Performance", right: "Authentic", description: "How real or polished you feel when speaking" },
  { key: "energy", left: "Calm", right: "High energy", description: "Your overall intensity and presence" },
];

const num = (v: unknown) => (typeof v === "number" ? v : 5);
const list = (v: unknown) => (Array.isArray(v) ? (v as unknown[]) : []);

export function scoreArchetype(answers: Answers): ScoringResult {
  const scores: Record<ArchetypeId, number> = {
    rambler: 0, overthinker: 0, doubter: 0, pleaser: 0,
    performer: 0, intense: 0, rationalist: 0, minimalist: 0,
  };

  const isLow = (val: number) => val <= 4;
  const isHigh = (val: number) => val >= 7;

  const q1 = list(answers.q1);
  const q2 = answers.q2;
  const q3 = num(answers.q3);
  const q5 = num(answers.q5);
  const q6 = num(answers.q6);
  const q7 = num(answers.q7);
  const q9 = list(answers.q9);

  for (const selection of q1) {
    if (typeof selection === "string" && selection in scores) scores[selection as ArchetypeId] += 3;
  }

  for (const prep of q9) {
    switch (prep) {
      case "overprepare": scores.overthinker += 2; scores.doubter += 1; scores.rationalist += 1; break;
      case "loose": scores.rambler += 2; scores.pleaser += 1; break;
      case "improv": scores.rambler += 2; scores.intense += 2; break;
      case "polish": scores.performer += 2; scores.pleaser += 1; break;
      case "structure": scores.rationalist += 2; scores.minimalist += 1; break;
      case "minimal": scores.minimalist += 2; scores.rationalist += 1; break;
    }
  }

  switch (q2) {
    case "dive_in": scores.rambler += 2; scores.intense += 1; break;
    case "stall_time": scores.overthinker += 2; scores.rationalist += 1; break;
    case "apologize_first": scores.doubter += 2; scores.pleaser += 1; break;
    case "say_less": scores.minimalist += 2; scores.doubter += 1; break;
    case "perform_anyway": scores.performer += 2; break;
    case "speak_forcefully": scores.intense += 2; break;
    case "stick_to_facts": scores.rationalist += 2; break;
  }

  switch (answers.q8) {
    case "said_too_much": scores.rambler += 2; break;
    case "should_have_said": scores.overthinker += 2; break;
    case "sounded_dumb": scores.doubter += 2; break;
    case "hope_comfortable": scores.pleaser += 2; break;
    case "looked_good": scores.performer += 2; break;
    case "made_impact": scores.intense += 2; break;
    case "was_accurate": scores.rationalist += 2; break;
    case "job_done": scores.minimalist += 2; break;
  }

  if (isLow(q6)) { scores.rambler += 2; }
  else if (isHigh(q6)) { scores.rationalist += 2; scores.performer += 1; scores.minimalist += 2; }

  if (isHigh(q7)) { scores.performer += 2; scores.pleaser += 1; }
  else if (isLow(q7)) { scores.minimalist += 2; scores.doubter += 1; scores.rationalist += 1; }

  if (isLow(q5)) { scores.overthinker += 2; scores.doubter += 1; }
  else if (isHigh(q5)) { scores.rambler += 2; scores.intense += 2; scores.performer += 1; }

  switch (answers.q4) {
    case "explain_more": scores.rambler += 2; break;
    case "think_first": scores.overthinker += 2; break;
    case "soften_position": scores.doubter += 1; scores.pleaser += 1; break;
    case "accommodate": scores.pleaser += 2; break;
    case "defend_polished": scores.performer += 2; break;
    case "push_back": scores.intense += 2; break;
    case "present_evidence": scores.rationalist += 2; break;
    case "state_briefly": scores.minimalist += 2; break;
  }

  if (q3 <= 3) { scores.doubter += 2; scores.overthinker += 2; scores.pleaser += 1; }
  else if (q3 <= 4) { scores.doubter += 1; scores.overthinker += 1; }
  else if (q3 >= 9) { scores.intense += 2; scores.performer += 2; scores.rationalist += 1; }
  else if (q3 >= 7) { scores.performer += 1; scores.intense += 1; scores.rationalist += 1; }

  switch (answers.q10) {
    case "staying_focused": scores.rambler += 2; break;
    case "starting_without_perfect": scores.overthinker += 2; break;
    case "believing_valuable": scores.doubter += 2; break;
    case "being_direct": scores.pleaser += 2; break;
    case "being_authentic": scores.performer += 2; break;
    case "moderating_energy": scores.intense += 2; break;
    case "making_engaging": scores.rationalist += 2; break;
    case "knowing_when_stop": scores.minimalist += 2; break;
  }

  const sorted = (Object.entries(scores) as [ArchetypeId, number][]).sort((a, b) => {
    if (b[1] !== a[1]) return b[1] - a[1];
    const q1A = q1.includes(a[0]) ? 3 : 0;
    const q1B = q1.includes(b[0]) ? 3 : 0;
    if (q1B !== q1A) return q1B - q1A;
    let q9A = 0, q9B = 0;
    for (const prep of q9) {
      if ((prep === "overprepare" && a[0] === "overthinker") || (prep === "improv" && a[0] === "rambler") || (prep === "polish" && a[0] === "performer") || (prep === "structure" && a[0] === "rationalist")) q9A += 2;
      if ((prep === "overprepare" && b[0] === "overthinker") || (prep === "improv" && b[0] === "rambler") || (prep === "polish" && b[0] === "performer") || (prep === "structure" && b[0] === "rationalist")) q9B += 2;
    }
    if (q9B !== q9A) return q9B - q9A;
    if (q3 >= 8) {
      if ((b[0] === "performer" || b[0] === "intense") && !(a[0] === "performer" || a[0] === "intense")) return 1;
      if ((a[0] === "performer" || a[0] === "intense") && !(b[0] === "performer" || b[0] === "intense")) return -1;
    }
    if (q3 <= 4) {
      if ((b[0] === "doubter" || b[0] === "overthinker") && !(a[0] === "doubter" || a[0] === "overthinker")) return 1;
      if ((a[0] === "doubter" || a[0] === "overthinker") && !(b[0] === "doubter" || b[0] === "overthinker")) return -1;
    }
    return 0;
  });

  const total = Math.max(1, Object.values(scores).reduce((sum, s) => sum + s, 0));
  const clamp = (v: number) => Math.min(100, Math.max(0, v));

  const slidingScales: SlidingScales = {
    clearness: clamp(q6 * 8 + ((scores.rationalist + scores.minimalist) / total) * 25 - (scores.rambler / total) * 15 + (isHigh(q6) ? 10 : 0)),
    spontaneity: clamp(q5 * 8 + ((scores.rambler + scores.intense) / total) * 20 - ((scores.overthinker + scores.doubter) / total) * 25 + (q2 === "dive_in" ? 15 : q2 === "stall_time" ? -15 : q2 === "apologize_first" ? -10 : 0)),
    expressiveness: clamp((q2 === "dive_in" || q2 === "speak_forcefully" ? 65 : q2 === "perform_anyway" ? 60 : q2 === "say_less" ? 25 : 40) + ((scores.intense + scores.performer) / total) * 25 - ((scores.minimalist + scores.rationalist) / total) * 20 + (answers.q8 === "made_impact" ? 10 : answers.q8 === "job_done" ? -10 : 0)),
    authenticity: clamp((11 - q7) * 8 + ((scores.doubter + scores.minimalist + scores.overthinker) / total) * 20 - (scores.performer / total) * 30 + (isLow(q7) ? 15 : isHigh(q7) ? -10 : 0)),
    energy: clamp(q3 * 9 + ((scores.intense + scores.performer + scores.rambler) / total) * 20 - ((scores.minimalist + scores.rationalist + scores.overthinker) / total) * 15 + (q2 === "speak_forcefully" || q2 === "dive_in" ? 10 : q2 === "stall_time" || q2 === "say_less" ? -10 : 0)),
  };

  return { primary: sorted[0][0], scores, slidingScales };
}

// Older links and stored rows use display names ("Self-Doubter"); map any form to an id.
const LEGACY: Record<string, ArchetypeId> = {
  "self-doubter": "doubter",
  "people pleaser": "pleaser",
  "intense speaker": "intense",
};
export function toArchetypeId(value: unknown): ArchetypeId | null {
  if (typeof value !== "string") return null;
  const v = value.trim().toLowerCase();
  if ((ARCHETYPE_IDS as string[]).includes(v)) return v as ArchetypeId;
  return LEGACY[v] ?? null;
}

// Reads the answers carried in a quiz link. Returns null if they are missing or unreadable.
export function parseAnswers(raw: string | null): Answers | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? (parsed as Answers) : null;
  } catch {
    return null;
  }
}

export function scaleLabel(value: number, left: string, right: string): string {
  return `${Math.round(value > 50 ? value : 100 - value)}% ${(value > 50 ? right : left).toLowerCase()}`;
}
