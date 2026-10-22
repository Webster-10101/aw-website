"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// Adds `is-in` once the wrapped block scrolls into view, so CSS can animate it once.
export default function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal${inView ? " is-in" : ""}${className ? ` ${className}` : ""}`}>
      {children}
    </div>
  );
}
