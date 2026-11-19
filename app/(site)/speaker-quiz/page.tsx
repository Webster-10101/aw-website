import type { Metadata } from "next";
import { pageMeta } from "../meta";
import QuizFlow from "@/components/quiz/QuizFlow";

export const metadata: Metadata = pageMeta(
  "Speaker quiz",
  "What kind of speaker are you? Ten quick questions to find your speaker type, plus a personalised growth plan by email.",
  "/speaker-quiz"
);

export default function SpeakerQuizPage() {
  return <QuizFlow />;
}
