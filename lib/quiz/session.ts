// Keeps quiz answers in this browser tab rather than in the page URL, so a
// shared results link only carries the speaker type and campaign tags.

const ANSWERS = "speaker-quiz:answers";
const OPTIONAL = "speaker-quiz:optional";

function save(key: string, value: unknown): boolean {
  try {
    sessionStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

function load<T>(key: string): T | null {
  try {
    const raw = sessionStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

export const saveAnswers = (answers: Record<string, unknown>) => save(ANSWERS, answers);
export const loadAnswers = () => load<Record<string, unknown>>(ANSWERS);
export const saveOptional = (optional: Record<string, unknown>) => save(OPTIONAL, optional);
export const loadOptional = () => load<Record<string, unknown>>(OPTIONAL);
