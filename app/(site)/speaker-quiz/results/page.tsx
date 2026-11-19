import type { Metadata } from "next";
import { Suspense } from "react";
import Results from "@/components/quiz/Results";
import { ARCHETYPES } from "@/lib/quiz/archetypes";
import { toArchetypeId } from "@/lib/quiz/scoring";

// Shared results links show a card for that speaker type on LinkedIn, WhatsApp and the like.
export function generateMetadata({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }): Metadata {
  const raw = searchParams.archetype ?? searchParams.primary;
  const id = toArchetypeId(Array.isArray(raw) ? raw[0] : raw);
  const a = id ? ARCHETYPES[id] : null;
  const title = a ? `I'm ${a.title}. What kind of speaker are you?` : "Your speaker type";
  const description = a ? a.description : "Ten quick questions to find your speaker type, plus a personalised growth plan by email.";
  const image = { url: `/speaker-quiz/og/${id ?? "quiz"}`, width: 1200, height: 630, alt: a ? a.title : "Speaker quiz" };
  return {
    title: a ? a.title : "Your speaker type",
    description,
    robots: { index: false, follow: true },
    alternates: { canonical: "/speaker-quiz" },
    openGraph: { type: "website", locale: "en_GB", siteName: "Alistair Webster", title, description, images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [image.url] },
  };
}

export default function ResultsPage() {
  return (
    <Suspense fallback={null}>
      <Results />
    </Suspense>
  );
}
