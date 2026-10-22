import { LINKS } from "./links";

export type Post = { title: string; url: string; date: string };

// Shown if the feed can't be reached at build/revalidate time.
const FALLBACK: Post[] = [
  { title: "The courage to stop talking", url: "https://speakupforgood.substack.com/p/the-courage-to-stop-talking", date: "Sep 2026" },
  { title: "Treating your voice as an instrument", url: "https://speakupforgood.substack.com/p/treating-your-voice-as-an-instrument", date: "Aug 2026" },
  { title: "Speaking up isn't just about speaking", url: "https://speakupforgood.substack.com/p/speaking-up-isnt-just-about-speaking", date: "Feb 2026" },
];

const decode = (s: string) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&#8217;|&rsquo;/g, "’")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();

export async function latestPosts(count = 3): Promise<Post[]> {
  try {
    const res = await fetch(`${LINKS.substack}feed`, { next: { revalidate: 86400 } });
    if (!res.ok) return FALLBACK;
    const xml = await res.text();
    const items = Array.from(xml.matchAll(/<item>([\s\S]*?)<\/item>/g)).slice(0, count);
    const posts = items.map(([, item]) => {
      const title = item.match(/<title>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/title>/)?.[1] ?? "";
      const url = item.match(/<link>([\s\S]*?)<\/link>/)?.[1] ?? LINKS.substack;
      const pub = item.match(/<pubDate>([\s\S]*?)<\/pubDate>/)?.[1];
      const date = pub ? new Date(pub).toLocaleDateString("en-GB", { month: "short", year: "numeric" }) : "";
      return { title: decode(title), url: url.trim(), date };
    });
    return posts.length === count && posts.every((p) => p.title) ? posts : FALLBACK;
  } catch {
    return FALLBACK;
  }
}
