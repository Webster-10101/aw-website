"use client";

import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    quote:
      "The way you stayed at ease and heard my questions inspired me to do the same \u2014 to take my time and own my speaking. This was one of the most impactful coaching sessions I\u2019ve had.",
    name: "Evelyn Q",
  },
  {
    quote:
      "You gave me personalised feedback that really helped. I actually spoke for the entire hour, which I\u2019m not used to, and it felt great! You helped me believe more in my own skills as a speaker.",
    name: "Liudmila",
  },
  {
    quote:
      "Through thoughtful questions and a very human approach, I\u2019ve got a simple plan with steps for what I can do in my situation starting immediately.",
    name: "Nailya B",
  },
];

export default function TestimonialRotator() {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback((next: number) => {
    setFading(true);
    setTimeout(() => {
      setIndex(next);
      setFading(false);
    }, 400);
  }, []);

  const prev = () => goTo((index - 1 + testimonials.length) % testimonials.length);
  const next = () => goTo((index + 1) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(() => {
      goTo((index + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [index, goTo]);

  const t = testimonials[index];

  return (
    <div className="max-w-3xl mx-auto text-center">
      <div className="text-6xl md:text-8xl font-display text-teal/20 leading-none mb-6">
        &ldquo;
      </div>
      <div className="relative">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-12 text-charcoal/30 hover:text-charcoal/60 transition-colors text-2xl md:text-3xl p-2"
        >
          &larr;
        </button>
        <div
          className={`transition-opacity duration-400 ${fading ? "opacity-0" : "opacity-100"}`}
        >
          <blockquote className="text-xl md:text-2xl lg:text-[1.75rem] font-display text-charcoal leading-relaxed mb-8 px-8 md:px-0">
            {t.quote}
          </blockquote>
          <cite className="not-italic">
            <span className="text-charcoal font-medium">{t.name}</span>
          </cite>
        </div>
        <button
          onClick={next}
          aria-label="Next testimonial"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-12 text-charcoal/30 hover:text-charcoal/60 transition-colors text-2xl md:text-3xl p-2"
        >
          &rarr;
        </button>
      </div>
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === index ? "bg-charcoal/40" : "bg-charcoal/15 hover:bg-charcoal/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
