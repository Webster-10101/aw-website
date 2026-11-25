"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { Gradient, Icon, Note } from "@/components/aw";
import { CONSENT_TEXT } from "@/lib/quiz/consent";
import { ARCHETYPES } from "@/lib/quiz/archetypes";
import { addAttribution, getQuizAttribution, quizBookingUrl } from "@/lib/quiz/attribution";
import { parseAnswers, scoreArchetype, toArchetypeId } from "@/lib/quiz/scoring";
import { loadAnswers, loadOptional } from "@/lib/quiz/session";
import { trackQuiz } from "@/lib/quiz/track";

type Status = "idle" | "sending" | "done" | "error";

export default function Results() {
  const params = useSearchParams();
  // Answers normally live in this browser tab, so a shared link shows only the type.
  // Older links (and browsers without storage) carry them in the URL as "answers" or "mainAnswers".
  const urlAnswers = useMemo(() => parseAnswers(params.get("answers") ?? params.get("mainAnswers")), [params]);
  const urlType = toArchetypeId(params.get("archetype") ?? params.get("primary"));
  const [stored, setStored] = useState<{ answers: Record<string, unknown> | null; optional: Record<string, unknown> } | null>(null);

  useEffect(() => {
    const saved = loadAnswers();
    const valid = saved ? parseAnswers(JSON.stringify(saved)) : null;
    // Ignore answers from an earlier quiz if this link is for a different type (e.g. someone else's shared link).
    const matches = valid && (!urlType || scoreArchetype(valid).primary === urlType);
    setStored({ answers: matches ? valid : null, optional: matches ? loadOptional() ?? {} : {} });
  }, [urlType]);

  const answers = urlAnswers ?? stored?.answers ?? null;
  const result = useMemo(() => (answers ? scoreArchetype(answers) : null), [answers]);
  const id = result?.primary ?? urlType;
  const ready = urlAnswers !== null || stored !== null;

  useEffect(() => {
    if (!ready || !id) return;
    trackQuiz(answers ? "12 saw results" : "shared link viewed");
  }, [ready, id, answers]);

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
    let optionalAnswers: Record<string, unknown> = stored?.optional ?? {};
    const optionalRaw = params.get("optionalAnswers");
    if (optionalRaw) {
      try {
        optionalAnswers = JSON.parse(optionalRaw);
      } catch {
        optionalAnswers = {};
      }
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
        trackQuiz("13 requested plan");
        setMessage(data.message ?? "Your growth plan is on its way to your inbox.");
      } else {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
        trackQuiz("plan request failed");
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
            <p className="lede">{a.preview}</p>
          </div>
        </div>
      </section>

      <section className="section section-sunk quiz-plan-section">
        <div className="wrap quiz-plan">
          {!ready ? null : !answers ? (
            <div className="quiz-plan-copy">
              <Note>Curious about yours?</Note>
              <h2 className="aw-h aw-h-l">What kind of speaker are you?</h2>
              <p className="lede">Ten quick questions, about two minutes, and a growth plan for your type by email.</p>
              <div className="ctas">
                <a className="aw-btn aw-btn-primary" href={addAttribution("/speaker-quiz", getQuizAttribution())}>
                  Take the quiz <Icon name="arrow-right" />
                </a>
              </div>
            </div>
          ) : status === "done" ? (
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
                <h2 className="aw-h aw-h-m">What could you try next?</h2>
                <p className="lede">
                  Get a personalised speaking plan with exercises to try this week. It&rsquo;s written by AI using your quiz answers.
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
                  <span>{CONSENT_TEXT}</span>
                </label>
                <button type="submit" className="aw-btn aw-btn-primary" disabled={status === "sending"}>
                  {status === "sending" ? "Writing your plan…" : "Email me my speaking plan"}
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
