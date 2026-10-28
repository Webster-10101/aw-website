import type { Metadata } from "next";

export const SITE_URL = "https://alistairwebster.com";
const IMAGE = { url: "/images/alistair-disc.jpg", width: 900, height: 900, alt: "Alistair Webster" };

// Per-page metadata: title (the layout template adds "— Alistair Webster"), description,
// canonical URL, and matching social previews.
export function pageMeta(title: string, description: string, path: string): Metadata {
  const full = `${title} — Alistair Webster`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_GB",
      siteName: "Alistair Webster",
      url: path,
      title: full,
      description,
      images: [IMAGE],
    },
    twitter: { card: "summary", title: full, description, images: [IMAGE.url] },
  };
}
