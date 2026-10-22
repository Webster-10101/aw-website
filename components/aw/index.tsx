// Alistair Webster design system components, ported from the design-system bundle (AW namespace).
// Styles live in app/(site)/aw.css (prefix `aw-`).
import type { CSSProperties, ReactNode } from "react";

const cx = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(" ");

/* ---- Waveform: rounded bars in the Voice gradient ---- */
const VOICE = ["var(--berry)", "var(--tangerine)", "var(--saffron)"];
const VOICE_ON_DARK = ["#ff4f86", "#ff8a4c", "#ffc145"];

function amp(i: number, n: number, seed = 1, taper = true) {
  const a =
    0.5 * Math.abs(Math.sin(i * 0.55 + seed)) +
    0.3 * Math.abs(Math.sin(i * 1.7 + 2 * seed)) +
    0.2 * Math.abs(Math.sin(i * 0.23 + seed * 0.5));
  const env = taper ? Math.pow(Math.sin((Math.PI * (i + 0.5)) / n), 0.6) : 1;
  return 0.12 + 0.88 * a * env;
}

export function Waveform({
  id,
  bars = 48,
  seed = 1,
  height = 80,
  width = "100%",
  tone = "voice",
  thin = false,
  className,
  style,
}: {
  id: string;
  bars?: number;
  seed?: number;
  height?: number | string;
  width?: number | string;
  tone?: "voice" | "dark" | "ink" | "muted";
  thin?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  const H = 100;
  const step = 10;
  const bw = thin ? 3.5 : 5.5;
  const W = bars * step;
  const stops = tone === "dark" ? VOICE_ON_DARK : VOICE;
  const fill = tone === "ink" ? "currentColor" : tone === "muted" ? "var(--line-strong)" : `url(#${id})`;
  return (
    <svg className={cx("aw-wave", className)} viewBox={`0 0 ${W} ${H}`} width={width} height={height} style={style} aria-hidden>
      {(tone === "voice" || tone === "dark") && (
        <defs>
          <linearGradient id={id} x1={0} x2={W} y1={0} y2={0} gradientUnits="userSpaceOnUse">
            <stop offset="0%" style={{ stopColor: stops[0] }} />
            <stop offset="55%" style={{ stopColor: stops[1] }} />
            <stop offset="100%" style={{ stopColor: stops[2] }} />
          </linearGradient>
        </defs>
      )}
      <g fill={fill}>
        {Array.from({ length: bars }, (_, i) => {
          const bh = Math.max(bw, amp(i, bars, seed) * H);
          return <rect key={i} x={i * step + (step - bw) / 2} y={(H - bh) / 2} width={bw} height={bh} rx={bw / 2} />;
        })}
      </g>
    </svg>
  );
}

/* ---- Mark: five designed bars ---- */
const MARK = [0.42, 0.78, 1, 0.62, 0.34];
export function Mark({ id, size = 48, tone = "voice" }: { id: string; size?: number; tone?: "voice" | "dark" }) {
  const stops = tone === "dark" ? VOICE_ON_DARK : VOICE;
  return (
    <svg className="aw-mark" viewBox="0 0 100 100" width={size} height={size} role="img" aria-label="Alistair Webster">
      <defs>
        <linearGradient id={id} x1={0} x2={100} y1={0} y2={0} gradientUnits="userSpaceOnUse">
          <stop offset="8%" style={{ stopColor: stops[0] }} />
          <stop offset="55%" style={{ stopColor: stops[1] }} />
          <stop offset="92%" style={{ stopColor: stops[2] }} />
        </linearGradient>
      </defs>
      <g fill={`url(#${id})`}>
        {MARK.map((v, i) => {
          const bh = v * 76;
          return <rect key={i} x={8 + i * 18} y={50 - bh / 2} width={12} height={bh} rx={6} />;
        })}
      </g>
    </svg>
  );
}

/* ---- Icon: 24 grid, 1.75 stroke, round caps ---- */
type Part = [string, Record<string, string | number>];
const ICONS: Record<string, Part[]> = {
  "arrow-right": [["path", { d: "M5 12h14M13 6l6 6-6 6" }]],
  check: [["path", { d: "M5 12.5l4.5 4.5L19 7.5" }]],
  x: [["path", { d: "M6 6l12 12M18 6L6 18" }]],
  mic: [["rect", { x: 9, y: 3, width: 6, height: 11, rx: 3 }], ["path", { d: "M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21" }]],
  waveform: [["path", { d: "M3 10v4M7 7v10M11 4v16M15 8v8M19 10.5v3" }]],
  meeting: [
    ["circle", { cx: 9, cy: 8, r: 3.5 }],
    ["path", { d: "M2.5 20c.6-3.4 3.2-5.5 6.5-5.5s5.9 2.1 6.5 5.5" }],
    ["circle", { cx: 17, cy: 9, r: 2.5 }],
    ["path", { d: "M17 14.5c2.4.2 4 2 4.5 5.5" }],
  ],
  presentation: [["rect", { x: 3, y: 4, width: 18, height: 12, rx: 2 }], ["path", { d: "M12 16v4M8 20h8" }]],
  pitch: [["path", { d: "M3 17l6-6 4 4 8-8" }], ["path", { d: "M15 7h6v6" }]],
  heart: [["path", { d: "M12 20s-7.5-4.6-7.5-10.2A4.1 4.1 0 0 1 12 7.4a4.1 4.1 0 0 1 7.5 2.4C19.5 15.4 12 20 12 20z" }]],
  conversation: [["path", { d: "M4 5.5h16v10.5H10l-6 4.5z" }]],
  spark: [["path", { d: "M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" }], ["path", { d: "M19 15.5v4M17 17.5h4" }]],
  calendar: [["rect", { x: 3.5, y: 5, width: 17, height: 15.5, rx: 2.5 }], ["path", { d: "M3.5 10h17M8 3v4M16 3v4" }]],
  play: [["path", { d: "M8 5.5v13l10.5-6.5z" }]],
  quiz: [["circle", { cx: 12, cy: 12, r: 9 }], ["path", { d: "M9.5 9.5a2.6 2.6 0 0 1 5 .9c0 1.7-2.5 2.2-2.5 3.8M12 17.2v.1" }]],
};

export function Icon({ name, circle = false, size }: { name: keyof typeof ICONS | string; circle?: boolean; size?: number }) {
  const parts = ICONS[name] ?? ICONS.spark;
  const svg = (
    <svg className="aw-icon" viewBox="0 0 24 24" style={size ? { width: size, height: size } : undefined} aria-hidden>
      {parts.map(([tag, attrs], i) => {
        const Tag = tag as "path";
        return <Tag key={i} {...(attrs as object)} />;
      })}
    </svg>
  );
  return circle ? <span className="aw-icon-circle">{svg}</span> : svg;
}

/* ---- Button ---- */
export function Button({
  href,
  variant = "primary",
  size,
  arrow = false,
  children,
  external = false,
}: {
  href: string;
  variant?: "primary" | "secondary";
  size?: "sm";
  arrow?: boolean;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      className={cx("aw-btn", `aw-btn-${variant}`, size === "sm" && "aw-btn-sm")}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      {arrow && <Icon name="arrow-right" />}
    </a>
  );
}

/* ---- Handwritten note (replaces uppercase eyebrows) ---- */
export function Note({ children, arrow = false, className }: { children: ReactNode; arrow?: boolean; className?: string }) {
  return (
    <p className={cx("aw-eyebrow", className)}>
      {children}
      {arrow && (
        <svg viewBox="0 0 34 22" aria-hidden>
          <path d="M2 4 C 12 4, 22 8, 30 18 M30 18 l-1 -8 M30 18 l-8 -2" />
        </svg>
      )}
    </p>
  );
}

/* ---- Highlight: berry words, optional swoosh underline ---- */
export function Highlight({ children, swoosh = false, plain = false }: { children: ReactNode; swoosh?: boolean; plain?: boolean }) {
  return (
    <span className={cx("aw-hl", plain && "aw-hl-plain")}>
      {children}
      {swoosh && (
        <svg className="aw-hl-wave" viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden>
          <path d="M2 9 C 30 3, 70 2, 98 5" fill="none" stroke="var(--berry)" strokeWidth={5} strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        </svg>
      )}
    </span>
  );
}

export function Gradient({ children }: { children: ReactNode }) {
  return <span className="aw-gradient-text">{children}</span>;
}

/* ---- StoryCard ---- */
export function StoryCard({ icon, title, children }: { icon: string; title: string; children: ReactNode }) {
  return (
    <article className="aw-story aw-panel">
      <Icon name={icon} circle />
      <h3 className="aw-story-title">{title}</h3>
      <p className="aw-story-body">{children}</p>
    </article>
  );
}

/* ---- Contrast: not this / this ---- */
export function Contrast({
  notLabel,
  yesLabel,
  not,
  yes,
  closing,
}: {
  notLabel: string;
  yesLabel: string;
  not: string[];
  yes: string[];
  closing?: string;
}) {
  return (
    <div className="aw-contrast">
      <div>
        <p className="aw-contrast-label">{notLabel}</p>
        <ul className="aw-contrast-col aw-contrast-not aw-panel">
          {not.map((t) => (
            <li key={t}>
              <Icon name="x" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="aw-contrast-label">{yesLabel}</p>
        <ul className="aw-contrast-col aw-contrast-yes aw-panel">
          {yes.map((t) => (
            <li key={t}>
              <Icon name="check" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
      {closing && <p className="aw-contrast-close">{closing}</p>}
    </div>
  );
}

/* ---- Approach: three overlapping discs in the dark band ---- */
const PILLAR_COLOURS = ["#ff4f86", "#ff8a4c", "#ffc145"];
export function Venn({ labels, centre }: { labels: [string, string, string]; centre: string }) {
  const discs = [
    { cx: 150, cy: 140 },
    { cx: 250, cy: 140 },
    { cx: 200, cy: 226 },
  ];
  return (
    <svg className="aw-venn" viewBox="0 0 400 370" role="img" aria-label={`${labels.join(", ")} overlap; ${centre} sits where they meet.`}>
      {discs.map((d, i) => (
        <circle key={i} cx={d.cx} cy={d.cy} r={108} fill={PILLAR_COLOURS[i]} fillOpacity={0.16} stroke={PILLAR_COLOURS[i]} strokeWidth={2} />
      ))}
      <text x={102} y={98} textAnchor="middle" style={{ fill: PILLAR_COLOURS[0] }}>{labels[0]}</text>
      <text x={298} y={98} textAnchor="middle" style={{ fill: PILLAR_COLOURS[1] }}>{labels[1]}</text>
      <text x={200} y={306} textAnchor="middle" style={{ fill: PILLAR_COLOURS[2] }}>{labels[2]}</text>
      <text x={200} y={176} textAnchor="middle" className="centre">{centre}</text>
    </svg>
  );
}

export function Pillars({ items }: { items: { title: string; body: ReactNode }[] }) {
  return (
    <ul className="aw-pillars">
      {items.map((x, i) => (
        <li key={x.title}>
          <i style={{ background: PILLAR_COLOURS[i] }} />
          <div>
            <h3>{x.title}</h3>
            <p>{x.body}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

/* ---- Quotes ---- */
function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);
  return (
    <span className="aw-avatar" aria-hidden>
      {initials}
    </span>
  );
}

function Who({ name, role, link }: { name: string; role?: string; link?: ReactNode }) {
  return (
    <figcaption className="aw-who">
      <Avatar name={name} />
      <div>
        <div className="aw-who-name">{name}</div>
        {role && <div className="aw-who-role">{role}</div>}
        {link}
      </div>
    </figcaption>
  );
}

export function Testimonial({ quote, name, role }: { quote: ReactNode; name: string; role?: string }) {
  return (
    <figure className="aw-quote aw-panel">
      <blockquote className="aw-quote-text">“{quote}”</blockquote>
      <Who name={name} role={role} />
    </figure>
  );
}

export function PullQuote({ quote, name, role, link }: { quote: ReactNode; name: string; role?: string; link?: ReactNode }) {
  return (
    <figure className="aw-pull">
      <blockquote className="aw-pull-text">“{quote}”</blockquote>
      <Who name={name} role={role} link={link} />
    </figure>
  );
}

/* ---- Lists + price ---- */
export function ArrowGrid({ items, columns = 3 }: { items: ReactNode[]; columns?: number }) {
  return (
    <ul className="aw-arrows" style={{ ["--aw-cols" as string]: columns }}>
      {items.map((it, i) => (
        <li key={i}>
          <Icon name="arrow-right" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export function PriceBlock({ amount, label, detail }: { amount: string; label: string; detail?: string }) {
  return (
    <div className="aw-price">
      <span className="aw-price-amount">{amount}</span>
      <span className="aw-price-label">{label}</span>
      {detail && <span className="aw-price-detail">{detail}</span>}
    </div>
  );
}

/* ---- PhotoDisc: photo in a disc, optional waveform behind ---- */
export function PhotoDisc({
  src,
  alt,
  size = 420,
  wave = true,
  waveId,
}: {
  src: string;
  alt: string;
  size?: number;
  wave?: boolean;
  waveId?: string;
}) {
  return (
    <div className="aw-photodisc" style={{ ["--aw-disc" as string]: `${size}px` }}>
      {wave && waveId && (
        <div className="aw-photodisc-wave">
          <Waveform id={waveId} bars={56} height={size * 0.42} seed={3} />
        </div>
      )}
      <div className="aw-photodisc-back" />
      <div className="aw-photodisc-img">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} />
      </div>
    </div>
  );
}
