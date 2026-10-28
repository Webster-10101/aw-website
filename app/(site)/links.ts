// External destinations used across the new site.
export const LINKS = {
  introCall: "https://calendly.com/alistair-webster/intro-call",
  bookProgramme: "https://calendly.com/alistair-webster/speaking-transformation",
  bookSession: "https://calendly.com/alistair-webster/single-session",
  quiz: "https://speakupforgood.com/speaker-quiz",
  substack: "https://speakupforgood.substack.com/",
  linkedin: "https://www.linkedin.com/in/alistair-webster/",
  ffg: "https://freelancingforgood.com",
  claudeClarity: "https://claudeclarity.com",
  claudeClarityAmazon: "https://www.amazon.co.uk/dp/B0FTMB9GJ1",
  email: "mailto:hello@alistairwebster.com",
};

// Tags an outbound quiz or booking link so Calendly and the quiz can see which button it came from.
export function track(url: string, content: string): string {
  const u = new URL(url);
  u.searchParams.set("utm_source", "alistairwebster");
  u.searchParams.set("utm_medium", "website");
  u.searchParams.set("utm_campaign", "coaching");
  u.searchParams.set("utm_content", content);
  return u.toString();
}
