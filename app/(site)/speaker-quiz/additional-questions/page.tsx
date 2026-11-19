import type { Metadata } from "next";
import { Suspense } from "react";
import OptionalQuestions from "@/components/quiz/OptionalQuestions";

export const metadata: Metadata = {
  title: "Speaker quiz",
  robots: { index: false, follow: true },
  alternates: { canonical: "/speaker-quiz" },
};

export default function AdditionalQuestionsPage() {
  return (
    <Suspense fallback={null}>
      <OptionalQuestions />
    </Suspense>
  );
}
