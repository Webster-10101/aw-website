import type { Metadata } from "next";
import { Suspense } from "react";
import Results from "@/components/quiz/Results";

export const metadata: Metadata = {
  title: "Your speaker type",
  robots: { index: false, follow: true },
  alternates: { canonical: "/speaker-quiz" },
};

export default function ResultsPage() {
  return (
    <Suspense fallback={null}>
      <Results />
    </Suspense>
  );
}
