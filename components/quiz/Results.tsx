"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { Gradient, Icon, Note } from "@/components/aw";
import { ARCHETYPES } from "@/lib/quiz/archetypes";
import { getQuizAttribution, quizBookingUrl } from "@/lib/quiz/attribution";
import { SCALES, parseAnswers, scaleLabel, scoreArchetype, toArchetypeId } from "@/lib/quiz/scoring";

type Status = "idle" | "sending" | "done" | "error";

export default function Results() {
  const params = useSearchParams();
  // Older links used "mainAnswers"; current ones use "answers".
  const answers = useMemo(() => parseAnswers(params.get("answers") ?? params.get("mainAnswers")), [params]);
  const optionalRaw = params.get("optionalAnswers");
  const result = useMemo(() => (answers ? scoreArchetype(answers) : null), [answers]);
  const id = result?.primary ?? toArchetypeId(params.get("archetype") ?? params.get("primary"));

  const [booking, setBooking] = useState("https://calendly.com/alistair-webster/intro-call");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    getQuizAttribution();
    setBooking(quizBookingUrl());
    if (!id) window.location.replace("/speaker-quiz");
  }, [id]);

  if (!id) return null;
  const a = ARCHETYPES[id];

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setStatus("sending");
    setMessage("");
    let optionalAnswers = {};
    try {
      optionalAnswers = optionalRaw ? JSON.parse(optionalRaw) : {};
    } catch {
      optionalAnswers = {};
    }
    try {
      const res = await fetch("/api/speaker-quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.get("firstName"),
          email: form.get("email"),
          company: form.get("company"),
          newsletterOptIn: form.get("newsletterOptIn") === "on",
          answers,
          optionalAnswers,
          attribution: getQuizAttribution(),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setStatus("done");
        setMessage(data.message ?? "Your growth plan is on its way to your inbox.");
      } else {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <>
      <section className="section quiz">
        <div className="wrap quiz-results">
          <div className="quiz-head">
            <Note>Your speaker type</Note>
            <h1 className="aw-h aw-h-l">
              <Gradient>{a.title}</Gradient>
            </h1>
            <p className="lede">{a.description}</p>
            <p className="quiz-body">{a.introText}</p>
          </div>

          {result && (
            <div className="quiz-profile aw-panel">
              <h2 className="aw-h aw-h-m">Your speaking style profile</h2>
              <p className="quiz-body">Based on your answers, here&rsquo;s how you lean on five dimensions.</p>
              <ul>
                {SCALES.map((s) => {
                  const v = result.slidingScales[s.key];
                  return (
                    <li key={s.key}>
                      <div className="quiz-scale-ends">
                        <span className={v <= 50 ? "lean" : undefined}>{s.left}</span>
                        <span className={v > 50 ? "lean" : undefined}>{s.right}</span>
                      </div>
                      <div className="quiz-bar quiz-bar-scale">
                        <i style={{ width: `${v}%` }} />
                        <b style={{ left: `${v}%` }} aria-hidden />
                      </div>
                      <div className="quiz-scale-foot">
                        <span>{s.description}</span>
                        <strong>{scaleLabel(v, s.left, s.right)}</strong>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          <div className="quiz-shows aw-panel">
            <h2 className="aw-h aw-h-m">Where you might recognise this</h2>
            <ol>
              {a.whereItShowsUp.map((x) => {
                const [label, ...rest] = x.split(": ");
                return (
                  <li key={x}>
                    <b>{label}:</b> {rest.join(": ")}
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="quiz-two">
            <div className="aw-panel">
              <h2 className="aw-h aw-h-m">Your strengths</h2>
              <ul className="quiz-ticks">
                {a.strengths.map((s) => (
                  <li key={s}>
                    <Icon name="check" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="aw-panel">
              <h2 className="aw-h aw-h-m">Where to grow</h2>
              <ul className="quiz-ticks">
                {a.growthAreas.map((s) => (
                  <li key={s}>
                    <Icon name="arrow-right" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <blockquote className="quiz-thought">{a.finalThought}</blockquote>
        </div>
      </section>

      <section className="section section-sunk quiz-plan-section">
        <div className="wrap quiz-plan">
          {status === "done" ? (
            <div className="quiz-done aw-panel" role="status">
              <h2 className="aw-h aw-h-m">Thanks, you&rsquo;re all set</h2>
              <p className="quiz-body">{message}</p>
              <p className="quiz-body">It usually arrives within a few minutes. If you can&rsquo;t see it, check your spam folder.</p>
              <p className="quiz-body">
                If you&rsquo;d like to talk through your results, you can{" "}
                <a href={booking}>book a free 45-minute intro call</a>.
              </p>
            </div>
          ) : (
            <>
              <div className="quiz-plan-copy">
                <Note>Want the full picture?</Note>
                <h2 className="aw-h aw-h-l">Get your growth plan</h2>
                <p className="lede">
                  A longer plan for {a.title}, written by AI from your answers, with things to try this week. It
                  comes straight to your inbox.
                </p>
              </div>
              <form className="contact-form aw-panel" onSubmit={onSubmit} noValidate>
                <div className="contact-row">
                  <label>
                    <span>First name</span>
                    <input className="field" name="firstName" autoComplete="given-name" required maxLength={80} />
                  </label>
                  <label>
                    <span>Email</span>
                    <input className="field" name="email" type="email" autoComplete="email" required maxLength={254} />
                  </label>
                </div>
                <input name="company" type="text" tabIndex={-1} autoComplete="off" className="waitlist-hp" aria-hidden />
                <label className="quiz-consent">
                  <input type="checkbox" name="newsletterOptIn" />
                  <span>Send me occasional speaking emails from Alistair. Optional, and you can unsubscribe at any time.</span>
                </label>
                <button type="submit" className="aw-btn aw-btn-primary" disabled={status === "sending"}>
                  {status === "sending" ? "Writing your plan…" : "Email me my growth plan"}
                </button>
                {status === "sending" && (
                  <p className="form-privacy" role="status">
                    This usually takes 10 to 30 seconds. Please keep this page open.
                  </p>
                )}
                {status === "error" && (
                  <p className="waitlist-msg waitlist-error" role="alert">
                    {message}
                  </p>
                )}
                <p className="form-privacy">
                  I&rsquo;ll only use your email to send your plan, unless you tick the box above. <a href="/privacy">Privacy</a>
                </p>
              </form>
              <p className="quiz-call">
                Rather talk it through? <a href={booking}>Book a free 45-minute intro call</a>.
              </p>
            </>
          )}
        </div>
      </section>
    </>
  );
}
