"use client";

import { useEffect, useState } from "react";
import { Gradient, Icon, Note } from "@/components/aw";
import { addAttribution, getQuizAttribution, quizBookingUrl } from "@/lib/quiz/attribution";
import { QUESTIONS, isAnswered, type Question } from "@/lib/quiz/questions";
import { scoreArchetype } from "@/lib/quiz/scoring";

type Answers = Record<string, unknown>;

export default function QuizFlow() {
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [booking, setBooking] = useState("https://calendly.com/alistair-webster/intro-call");

  // Capture campaign tags from the landing URL before anything else navigates.
  useEffect(() => {
    getQuizAttribution();
    setBooking(quizBookingUrl());
  }, []);

  const q = QUESTIONS[index];
  const done = QUESTIONS.filter((x) => isAnswered(x, answers[x.id])).length;
  const last = index === QUESTIONS.length - 1;

  function goTo(i: number) {
    setIndex(i);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function finish(final: Answers) {
    const { primary } = scoreArchetype(final);
    const params = new URLSearchParams({ archetype: primary, answers: JSON.stringify(final) });
    window.location.href = addAttribution(`/speaker-quiz/additional-questions?${params.toString()}`, getQuizAttribution());
  }

  function choose(value: unknown, autoAdvance: boolean) {
    const next = { ...answers, [q.id]: value };
    setAnswers(next);
    if (autoAdvance && !last) window.setTimeout(() => goTo(index + 1), 250);
  }

  if (!started) {
    return (
      <section className="section quiz">
        <div className="wrap quiz-intro">
          <Note>Speaker quiz</Note>
          <h1 className="aw-h aw-h-l">
            What kind of <Gradient>speaker</Gradient> are you?
          </h1>
          <p className="lede">
            Ten quick questions to find your speaker type, plus a personalised growth plan by email. It takes about two
            minutes.
          </p>
          <ul className="quiz-features">
            <li className="aw-panel">
              <Icon name="quiz" circle />
              <b>Your speaker type</b>
              <span>One of eight speaker types, each with its own strengths and blind spots.</span>
            </li>
            <li className="aw-panel">
              <Icon name="pitch" circle />
              <b>A growth plan</b>
              <span>Practical ideas for your type, sent straight to your inbox.</span>
            </li>
            <li className="aw-panel">
              <Icon name="spark" circle />
              <b>Things to try</b>
              <span>Small changes you can use in your very next conversation.</span>
            </li>
          </ul>
          <div className="ctas">
            <button type="button" className="aw-btn aw-btn-primary" onClick={() => setStarted(true)}>
              Start the quiz <Icon name="arrow-right" />
            </button>
          </div>
          <details className="quiz-about">
            <summary>About this quiz</summary>
            <p>
              The growth plan is written by AI from your answers, so it&rsquo;s a starting point rather than a
              diagnosis. If you&rsquo;d like to talk it through properly, you can{" "}
              <a href={booking}>book a free intro call</a>.
            </p>
            <p>
              Results may not be 100% accurate, but they&rsquo;re usually pretty good. I&rsquo;d love any feedback:{" "}
              <a href="/contact">get in touch</a>.
            </p>
          </details>
        </div>
      </section>
    );
  }

  return (
    <section className="section quiz">
      <div className="wrap quiz-step">
        <Progress label={`Question ${index + 1} of ${QUESTIONS.length}`} value={(done / QUESTIONS.length) * 100} />
        <div className="quiz-card aw-panel">
          <h1 className="quiz-prompt" id="quiz-prompt">
            {q.prompt}
          </h1>
          <QuestionInput q={q} value={answers[q.id]} onChoose={choose} />
        </div>
        <div className="quiz-nav">
          <button type="button" className="aw-btn aw-btn-secondary" onClick={() => (index === 0 ? setStarted(false) : goTo(index - 1))}>
            Back
          </button>
          {last ? (
            <button
              type="button"
              className="aw-btn aw-btn-primary"
              disabled={done < QUESTIONS.length}
              onClick={() => finish(answers)}
            >
              See my speaker type <Icon name="arrow-right" />
            </button>
          ) : (
            <button
              type="button"
              className="aw-btn aw-btn-primary"
              disabled={!isAnswered(q, answers[q.id])}
              onClick={() => goTo(index + 1)}
            >
              Next <Icon name="arrow-right" />
            </button>
          )}
        </div>
        {last && done < QUESTIONS.length && (
          <p className="quiz-hint" role="status">
            {QUESTIONS.length - done} question{QUESTIONS.length - done > 1 ? "s" : ""} still to answer. Use Back to
            find {QUESTIONS.length - done > 1 ? "them" : "it"}.
          </p>
        )}
      </div>
    </section>
  );
}

export function Progress({ label, value }: { label: string; value: number }) {
  return (
    <div className="quiz-progress">
      <span>{label}</span>
      <div className="quiz-bar" role="progressbar" aria-valuenow={Math.round(value)} aria-valuemin={0} aria-valuemax={100}>
        <i style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function QuestionInput({
  q,
  value,
  onChoose,
}: {
  q: Question;
  value: unknown;
  onChoose: (value: unknown, autoAdvance: boolean) => void;
}) {
  if (q.type === "rating") {
    const min = q.min ?? 1;
    const max = q.max ?? 10;
    return (
      <div className="quiz-rating" role="radiogroup" aria-labelledby="quiz-prompt">
        <div className="quiz-scale">
          {Array.from({ length: max - min + 1 }, (_, i) => min + i).map((n) => (
            <button
              key={n}
              type="button"
              role="radio"
              aria-checked={value === n}
              className={value === n ? "on" : undefined}
              onClick={() => onChoose(n, true)}
            >
              {n}
            </button>
          ))}
        </div>
        <div className="quiz-scale-labels">
          <span>Strongly disagree</span>
          <span>Strongly agree</span>
        </div>
      </div>
    );
  }

  if (q.type === "single") {
    return (
      <div className="quiz-options" role="radiogroup" aria-labelledby="quiz-prompt">
        {q.options!.map((o) => (
          <button
            key={o.id}
            type="button"
            role="radio"
            aria-checked={value === o.id}
            className={`quiz-option${value === o.id ? " on" : ""}`}
            onClick={() => onChoose(o.id, true)}
          >
            <i className="dot" aria-hidden />
            <span>{o.label}</span>
          </button>
        ))}
      </div>
    );
  }

  const picked = Array.isArray(value) ? (value as string[]) : [];
  const max = q.maxSelections ?? Infinity;
  return (
    <div className="quiz-options" role="group" aria-labelledby="quiz-prompt">
      <p className="quiz-note">
        Choose up to {q.maxSelections} ({picked.length}/{q.maxSelections})
      </p>
      {q.options!.map((o) => {
        const on = picked.includes(o.id);
        const disabled = !on && picked.length >= max;
        return (
          <button
            key={o.id}
            type="button"
            role="checkbox"
            aria-checked={on}
            disabled={disabled}
            className={`quiz-option${on ? " on" : ""}`}
            onClick={() => onChoose(on ? picked.filter((p) => p !== o.id) : [...picked, o.id], false)}
          >
            <i className="box" aria-hidden>
              {on && <Icon name="check" />}
            </i>
            <span>{o.label}</span>
          </button>
        );
      })}
    </div>
  );
}
