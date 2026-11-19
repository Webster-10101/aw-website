import type { Metadata } from "next";
import { pageMeta } from "../meta";
import QuizFlow from "@/components/quiz/QuizFlow";

const base = pageMeta(
  "Speaker quiz",
  "What kind of speaker are you? Ten quick questions to find your speaker type, plus a personalised growth plan by email.",
  "/speaker-quiz"
);
const card = { url: "/speaker-quiz/og/quiz", width: 1200, height: 630, alt: "What kind of speaker are you?" };
export const metadata: Metadata = {
  ...base,
  openGraph: { ...base.openGraph, images: [card] },
  twitter: { ...base.twitter, card: "summary_large_image", images: [card.url] },
};

export default function SpeakerQuizPage() {
  return <QuizFlow />;
}
