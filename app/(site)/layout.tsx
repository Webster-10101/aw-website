import type { Metadata } from "next";
import { Caveat, Plus_Jakarta_Sans } from "next/font/google";
import "./aw.css";
import "./site.css";
import FathomEvents from "@/components/FathomEvents";
import { Button, Note } from "@/components/aw";
import { LINKS } from "./links";

const siteUrl = "https://alistairwebster.com";
const description =
  "Speaking coach in Edinburgh. Get out of your own way and find your voice, with coaching, practice in the Speak Up app, and an eight-week programme.";

export const metadata: Metadata = {
  title: {
    default: "Alistair Webster — Speaking coach",
    template: "%s — Alistair Webster",
  },
  description,
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Alistair Webster",
    title: "Alistair Webster — Speaking coach",
    description,
    images: [{ url: "/images/alistair-disc.jpg", width: 900, height: 900, alt: "Alistair Webster" }],
  },
  twitter: { card: "summary", title: "Alistair Webster — Speaking coach", description, images: ["/images/alistair-disc.jpg"] },
};

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const hand = Caveat({ subsets: ["latin"], weight: ["600"], variable: "--font-hand", display: "swap" });

const NAV = [
  { label: "Coaching", href: "/coaching" },
  { label: "About", href: "/about" },
  { label: "FFG", href: "/ffg" },
  { label: "Projects", href: "/projects" },
];

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <head>
        <script src="https://cdn.usefathom.com/script.js" data-site="BVRLOARP" defer />
      </head>
      <body className={`${sans.variable} ${hand.variable}`}>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <FathomEvents />
        <header className="nav">
          <div className="wrap nav-inner">
            <a href="/" className="aw-wordmark">
              Alistair Webster
            </a>
            <nav aria-label="Main">
              <ul className="nav-links">
                {NAV.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <Button href={LINKS.quiz} size="sm" arrow>
              Take the quiz
            </Button>
          </div>
        </header>
        <main id="main">{children}</main>
        <footer className="footer">
          <div className="wrap">
            <div className="footer-grid">
              <div>
                <a href="/" className="aw-wordmark">
                  Alistair Webster
                </a>
                <Note className="footer-sign">Speak soon.</Note>
              </div>
              <div>
                <h2>Explore</h2>
                <ul>
                  <li><a href="/coaching">Coaching</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/ffg">Freelancing for Good</a></li>
                  <li><a href="/projects">Projects</a></li>
                </ul>
              </div>
              <div>
                <h2>Follow</h2>
                <ul>
                  <li><a href={LINKS.substack}>Substack</a></li>
                  <li><a href={LINKS.linkedin}>LinkedIn</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>
              <div>
                <h2>The small print</h2>
                <ul>
                  <li><a href="/terms">Terms</a></li>
                  <li><a href="/privacy">Privacy</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-base">
              <span>© {new Date().getFullYear()} Alistair Webster</span>
              <span className="version">
                v{process.env.NEXT_PUBLIC_APP_VERSION} · {process.env.NEXT_PUBLIC_COMMIT_SHA}
              </span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
