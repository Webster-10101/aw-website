import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import { RadioIcon } from "@/components/SiteIcons";

export const metadata: Metadata = {
  title: "Apps",
  description:
    "Apps and tools built by Alistair Webster.",
};

const apps = [
  {
    name: "FreelanceRad.io",
    description:
      "A radio station for freelancers. Curated background music and community radio, built to keep you company while you work.",
    href: "https://freelancerad.io",
    linkText: "freelancerad.io",
    icon: <RadioIcon />,
    iconColor: "text-coral",
    iconBg: "bg-coral/10",
  },
];

export default function Apps() {
  return (
    <div className="min-h-screen pt-28 md:pt-36 pb-24">
      <div className="container-page">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-6 animate-fade-up">
            <div className="accent-line animate-expand-line" />
            <p className="eyebrow">Apps</p>
          </div>
          <h1 className="heading-hero text-4xl md:text-5xl lg:text-6xl animate-fade-up stagger-1">
            Things I&rsquo;ve built.
          </h1>
          <p className="lead mt-6 animate-fade-up stagger-2">
            Side projects and tools &mdash; mostly built with Claude Code.
          </p>
        </div>

        {/* App cards */}
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            {apps.map((app) => (
              <a
                key={app.href}
                href={app.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-hover p-8 md:p-10 group block"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-9 h-9 rounded-lg ${app.iconBg} ${app.iconColor} flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}
                  >
                    {app.icon}
                  </div>
                  <h2 className="heading-section text-xl">{app.name}</h2>
                </div>
                <p className="body-text text-[15px] mb-6">{app.description}</p>
                <span className="link-arrow text-sm">
                  {app.linkText} <span aria-hidden="true">&rarr;</span>
                </span>
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
