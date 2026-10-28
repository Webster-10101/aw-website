import type { Metadata } from "next";
import { pageMeta } from "../meta";
import { Gradient, Icon, Note } from "@/components/aw";
import { LINKS } from "../links";

export const metadata: Metadata = pageMeta(
  "Projects",
  "Side projects, tools and experiments by Alistair Webster, mostly built with Claude Code.",
  "/projects"
);

const PROJECTS = [
  {
    icon: "mic",
    title: "Speak Up",
    body: "My speaking practice app: daily guided drills, a speaking fitness score, courses and AI coaching.",
    link: "Join the waitlist",
    href: "/#app",
  },
  {
    icon: "quiz",
    title: "The Speaker Quiz",
    body: "Five minutes to find your speaking strengths and what to work on next.",
    link: "Take the quiz",
    href: LINKS.quiz,
  },
  {
    icon: "spark",
    title: "Claude Clarity",
    body: "A book about how I use Claude to stay on top of my projects and commitments.",
    link: "claudeclarity.com",
    href: LINKS.claudeClarity,
  },
  {
    icon: "waveform",
    title: "Freelance Radio",
    body: "A radio station for freelancers: curated background music and community radio to keep you company while you work.",
    link: "freelancerad.io",
    href: "https://freelancerad.io",
  },
  {
    icon: "play",
    title: "GBM Music",
    body: "My record label. Original music that led to sales and commissions.",
    link: "goodbackgroundmusic.co.uk",
    href: "https://goodbackgroundmusic.co.uk",
  },
  {
    icon: "conversation",
    title: "Coffee Chat",
    body: "Coffee chats for Slack communities, to help members network and get to know each other.",
    soon: true,
  },
] as const;

export default function ProjectsPage() {
  return (
    <section className="section legal-page">
      <div className="wrap ffg">
        <Note>Projects</Note>
        <h1 className="aw-h aw-h-l">
          Things I&rsquo;ve <Gradient>built.</Gradient>
        </h1>
        <p className="lede">Side projects, tools and experiments, mostly built with Claude Code.</p>
        <ul className="projects">
          {PROJECTS.map((p) =>
            "soon" in p ? (
              <li key={p.title}>
                <div className="about-card aw-panel project-soon">
                  <Icon name={p.icon} circle />
                  <span className="about-card-title">{p.title}</span>
                  <span className="about-card-body">{p.body}</span>
                  <span className="soon-tag">Coming soon</span>
                </div>
              </li>
            ) : (
              <li key={p.title}>
                <a className="about-card aw-panel" href={p.href}>
                  <Icon name={p.icon} circle />
                  <span className="about-card-title">{p.title}</span>
                  <span className="about-card-body">{p.body}</span>
                  <span className="about-card-link">
                    {p.link} <Icon name="arrow-right" size={16} />
                  </span>
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
}
