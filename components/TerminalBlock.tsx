"use client";

import { useEffect, useRef, useState } from "react";

interface TerminalLine {
  type: "prompt" | "output" | "success" | "blank" | "summary" | "comment";
  text: string;
}

interface TerminalBlockProps {
  lines: TerminalLine[];
  title?: string;
  className?: string;
}

export default function TerminalBlock({ lines, title, className = "" }: TerminalBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visibleLines, setVisibleLines] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let i = 0;
          const interval = setInterval(() => {
            i++;
            setVisibleLines(i);
            if (i >= lines.length) clearInterval(interval);
          }, 120);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [lines.length]);

  return (
    <div ref={ref} className={`terminal-panel ${className}`}>
      <div className="terminal-header">
        <div className="terminal-dot bg-[#ff5f57]" />
        <div className="terminal-dot bg-[#febc2e]" />
        <div className="terminal-dot bg-[#28c840]" />
        {title && (
          <span className="ml-3 text-xs font-mono text-terminal-muted">{title}</span>
        )}
      </div>
      <div className="terminal-body">
        {lines.map((line, i) => {
          const visible = i < visibleLines;
          const opacity = visible ? "opacity-100" : "opacity-0";
          const transform = visible ? "translate-y-0" : "translate-y-1";

          if (line.type === "blank") {
            return <div key={i} className={`h-4 transition-all duration-300 ${opacity}`} />;
          }

          if (line.type === "prompt") {
            return (
              <div
                key={i}
                className={`transition-all duration-300 ${opacity} ${transform}`}
              >
                <span className="text-terminal-green select-none">$ </span>
                <span className="text-terminal-text">{line.text}</span>
                {i === 0 && visibleLines === 0 && (
                  <span className="inline-block w-[7px] h-[14px] bg-terminal-green/80 ml-0.5 align-middle animate-terminal-blink" />
                )}
              </div>
            );
          }

          if (line.type === "success") {
            return (
              <div
                key={i}
                className={`transition-all duration-300 ${opacity} ${transform}`}
              >
                <span className="text-terminal-green">{"\u2713"} </span>
                <span className="text-terminal-text/90">{line.text}</span>
              </div>
            );
          }

          if (line.type === "summary") {
            return (
              <div
                key={i}
                className={`transition-all duration-300 text-terminal-muted ${opacity} ${transform}`}
              >
                <span className="text-terminal-green">{"\u2192"} </span>
                {line.text}
              </div>
            );
          }

          if (line.type === "comment") {
            return (
              <div
                key={i}
                className={`transition-all duration-300 text-terminal-muted ${opacity} ${transform}`}
              >
                {line.text}
              </div>
            );
          }

          return (
            <div
              key={i}
              className={`transition-all duration-300 text-terminal-text/90 ${opacity} ${transform}`}
            >
              {line.text}
            </div>
          );
        })}
      </div>
    </div>
  );
}
