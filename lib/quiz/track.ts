// Quiz funnel events for Fathom (cookieless, no personal data). Names are
// numbered so they sort into funnel order in the Fathom dashboard.

const sent = new Set<string>();

export function trackQuiz(name: string) {
  if (typeof window === "undefined" || sent.has(name)) return;
  sent.add(name);
  try {
    window.fathom?.trackEvent(`Quiz: ${name}`);
  } catch {
    // analytics must never break the quiz
  }
}

export const step = (n: number) => String(n).padStart(2, "0");
