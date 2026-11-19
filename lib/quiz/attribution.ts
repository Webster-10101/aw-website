// Campaign tags (UTM) carried through the quiz, its emails and the booking link.
// Only these five fields are kept; arbitrary URL parameters are never copied.
export const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;
export type Attribution = Partial<Record<(typeof UTM_KEYS)[number], string>>;

export const INTRO_CALL_URL = "https://calendly.com/alistair-webster/intro-call";
const STORAGE_KEY = "speaker-quiz-attribution";

export function sanitizeAttribution(input: unknown): Attribution {
  const result: Attribution = {};
  if (!input || typeof input !== "object") return result;
  for (const key of UTM_KEYS) {
    const value = (input as Record<string, unknown>)[key];
    if (typeof value === "string" && value.trim()) result[key] = value.trim().slice(0, 200);
  }
  return result;
}

// Browser only. A newly tagged visit replaces the stored campaign as a whole.
export function getQuizAttribution(): Attribution {
  if (typeof window === "undefined") return {};
  const incoming = sanitizeAttribution(Object.fromEntries(new URLSearchParams(window.location.search).entries()));
  try {
    if (Object.keys(incoming).length) {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(incoming));
      return incoming;
    }
    return sanitizeAttribution(JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || "{}"));
  } catch {
    return incoming;
  }
}

export function addAttribution(url: string, attribution: Attribution): string {
  const result = new URL(url, "https://alistairwebster.com");
  for (const [key, value] of Object.entries(sanitizeAttribution(attribution))) result.searchParams.set(key, value);
  return url.startsWith("/") ? result.pathname + result.search + result.hash : result.toString();
}

export function quizBookingUrl(): string {
  return addAttribution(INTRO_CALL_URL, getQuizAttribution());
}

// Stored inside optional_answers (existing JSONB column), as the old site did, so no migration is needed.
export function storedAttribution(answers?: Record<string, unknown>): Attribution {
  try {
    return sanitizeAttribution(JSON.parse(String(answers?._attribution || "{}")));
  } catch {
    return {};
  }
}
