"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Icon, Note } from "@/components/aw";
import { addAttribution, getQuizAttribution } from "@/lib/quiz/attribution";
import { OPTIONAL_QUESTIONS } from "@/lib/quiz/questions";
import { saveOptional } from "@/lib/quiz/session";
import { Progress } from "./QuizFlow";

export default function OptionalQuestions() {
  const params = useSearchParams();
  const archetype = params.get("archetype");
  // Only present when the browser couldn't store answers in the tab.
  const answers = params.get("answers");
  const [index, setIndex] = useState(0);
  const [optional, setOptional] = useState<Record<string, string | string[]>>({});

  useEffect(() => {
    getQuizAttribution();
    if (!archetype) window.location.replace("/speaker-quiz");
  }, [archetype]);

  if (!archetype) return null;

  const q = OPTIONAL_QUESTIONS[index];
  const last = index === OPTIONAL_QUESTIONS.length - 1;

  function goTo(i: number) {
    setIndex(i);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function toResults() {
    const next = new URLSearchParams({ archetype: archetype! });
    if (answers) next.set("answers", answers);
    if (!saveOptional(optional)) next.set("optionalAnswers", JSON.stringify(optional));
    window.location.href = addAttribution(`/speaker-quiz/results?${next.toString()}`, getQuizAttribution());
  }

  const picked = Array.isArray(optional[q.id]) ? (optional[q.id] as string[]) : [];

  return (
    <section className="section quiz">
      <div className="wrap quiz-step">
        <div className="quiz-head">
          <Note>Optional</Note>
          <p className="lede">
            A few extra questions help tailor your growth plan. Answer as many or as few as you like.
          </p>
        </div>
        <Progress label={`Question ${index + 1} of ${OPTIONAL_QUESTIONS.length}`} value={((index + 1) / OPTIONAL_QUESTIONS.length) * 100} />
        <div className="quiz-card aw-panel">
          <h1 className="quiz-prompt" id="quiz-prompt">
            {q.prompt}
          </h1>
          {q.type === "multiple-select" ? (
            <div className="quiz-options" role="group" aria-labelledby="quiz-prompt">
              <p className="quiz-note">Choose any that apply</p>
              {q.options!.map((o) => {
                const on = picked.includes(o);
                return (
                  <button
                    key={o}
                    type="button"
                    role="checkbox"
                    aria-checked={on}
                    className={`quiz-option${on ? " on" : ""}`}
                    onClick={() =>
                      setOptional((prev) => ({ ...prev, [q.id]: on ? picked.filter((p) => p !== o) : [...picked, o] }))
                    }
                  >
                    <i className="box" aria-hidden>
                      {on && <Icon name="check" />}
                    </i>
                    <span>{o}</span>
                  </button>
                );
              })}
            </div>
          ) : (
            <textarea
              className="field"
              aria-labelledby="quiz-prompt"
              rows={4}
              maxLength={700}
              placeholder={q.placeholder}
              value={typeof optional[q.id] === "string" ? (optional[q.id] as string) : ""}
              onChange={(e) => setOptional((prev) => ({ ...prev, [q.id]: e.target.value }))}
            />
          )}
        </div>
        <div className="quiz-nav">
          <button type="button" className="aw-btn aw-btn-secondary" disabled={index === 0} onClick={() => goTo(index - 1)}>
            Back
          </button>
          {last ? (
            <button type="button" className="aw-btn aw-btn-primary" onClick={toResults}>
              See my results <Icon name="arrow-right" />
            </button>
          ) : (
            <button type="button" className="aw-btn aw-btn-primary" onClick={() => goTo(index + 1)}>
              Next <Icon name="arrow-right" />
            </button>
          )}
        </div>
        {!last && (
          <p className="quiz-skip">
            <button type="button" className="text-link" onClick={toResults}>
              Skip to my results
            </button>
          </p>
        )}
      </div>
    </section>
  );
}
