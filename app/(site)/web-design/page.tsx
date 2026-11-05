import type { Metadata } from "next";
import { pageMeta, SITE_URL } from "../meta";
import { ArrowGrid, Gradient, Icon, Note, Testimonial } from "@/components/aw";
import ContactForm from "@/components/aw/ContactForm";

export const metadata: Metadata = pageMeta(
  "Web Design & Branding in Preston and Lancashire",
  "Alistair Webster Web Design: websites, branding and graphic design for small businesses, charities and local organisations across Preston and Lancashire. Maintenance, rescues and practical AI too.",
  "/web-design"
);

const PHONE_DISPLAY = "07904 429705";
const PHONE_TEL = "+447904429705";
const REVIEWS_URL = "https://www.google.com/maps/search/?api=1&query=Alistair+Webster+Web+Design+Much+Hoole";

const SERVICES = [
  {
    icon: "browser",
    title: "Full website packages",
    body: "Design, build, copy and launch. A site that explains what you do and makes it easy for people to get in touch.",
  },
  {
    icon: "pen",
    title: "Branding and graphic design",
    body: "Logos, brand identity, print and social graphics, plus simple marketing support to get them working.",
  },
  {
    icon: "wrench",
    title: "Maintenance and care",
    body: "Updates, fixes, security and small changes, so your site keeps working and you don’t have to think about it.",
  },
  {
    icon: "refresh",
    title: "Rescues and refreshes",
    body: "Inherited a site nobody understands? I’ll sort it out, tidy it up, or rebuild it.",
  },
  {
    icon: "spark",
    title: "Practical AI solutions",
    body: "Automating admin, or adding smart tools to your site, where they genuinely help.",
  },
] as const;

type Work = { title: string; body: string; img: string; link?: string; href?: string };

const WORK: Work[] = [
  {
    title: "Oxford University Sport",
    body: "App design for the University of Oxford’s sport department.",
    img: "/images/work/oxford-sport-app.jpg",
  },
  {
    title: "Trent Bridge",
    body: "Menu design for the restaurant at Trent Bridge.",
    img: "/images/work/trent-bridge-menu.jpg",
  },
  {
    title: "Nottingham Hospitality Stars Awards",
    body: "Design for Nottingham’s hospitality awards.",
    img: "/images/work/hospitality-stars.jpg",
  },
  {
    title: "Freelancing for Good",
    body: "The website for my community of 1,000+ freelancers working with charities and mission-driven organisations.",
    img: "/images/work/ffg.jpg",
    link: "freelancingforgood.com",
    href: "https://freelancingforgood.com",
  },
  {
    title: "Nottingham Civic Society",
    body: "Website for the city’s civic society, caring about Nottingham since 1962.",
    img: "/images/work/nottingham-civic.jpg",
    link: "nottinghamcivicsociety.org.uk",
    href: "https://nottinghamcivicsociety.org.uk",
  },
  {
    title: "Customate Solutions",
    body: "Website for a business that helps organisations streamline their workflows.",
    img: "/images/work/customate.jpg",
    link: "customate.solutions",
    href: "https://customate.solutions",
  },
];

const REVIEWS = [
  {
    quote:
      "He is flexible, conscientious and responsive, and has a broad range of skills from graphic design and copywriting to marketing and public relations.",
    name: "Dan Selinger",
    role: "University of Oxford",
  },
  {
    quote:
      "Working with Alistair was a fantastically rewarding process as he was able to realise the vision for an exciting new fundraising campaign for sport – and greatly improve on it!",
    name: "Heather Brickell",
    role: "University of Oxford",
  },
  {
    quote:
      "Fantastic at designing everything you require. Polite and always makes sure that you are happy with the product. I would recommend Alistair 100% for any design work which you require.",
    name: "Stuart Morrison",
    role: "Long-standing client",
  },
  {
    quote:
      "I needed a really professional design job done. Alistair was really responsive and produced brilliant work. The end result was better than anything we hoped for!",
    name: "Matthew Burdock",
    role: "NDC · Google review ★★★★★",
  },
];

const STEPS = [
  <>
    <strong>A free chat</strong> about what you need.
  </>,
  <>
    <strong>A clear, fixed quote</strong>, so you know where you stand.
  </>,
  <>
    <strong>I build it</strong>, you give feedback, and it goes live.
  </>,
  <>
    <strong>I&rsquo;m on hand afterwards</strong> for anything you need.
  </>,
];

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Alistair Webster Web Design",
  url: `${SITE_URL}/web-design`,
  image: `${SITE_URL}/images/alistair-disc.jpg`,
  telephone: PHONE_TEL,
  founder: { "@type": "Person", name: "Alistair Webster" },
  areaServed: ["Preston", "South Ribble", "Leyland", "Chorley", "Lancashire", "Edinburgh"],
  serviceType: ["Web design", "Graphic design", "Branding", "Website maintenance"],
};

/* Playful hero illustration: a laptop showing a little shop, with floating bits around it. */
function LaptopArt() {
  return (
    <svg className="wd-art" viewBox="0 0 440 340" role="img" aria-label="Illustration of a laptop showing a small shop website">
      <defs>
        <linearGradient id="wd-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--berry)" />
          <stop offset="1" stopColor="var(--tangerine)" />
        </linearGradient>
      </defs>

      {/* soft blob behind */}
      <path
        className="wd-art-blob"
        d="M70 80c40-52 150-70 230-48s128 80 116 150-80 118-170 122S40 280 30 210 30 132 70 80z"
        fill="var(--sand)"
      />

      {/* laptop lid */}
      <rect x="92" y="62" width="256" height="170" rx="14" fill="var(--paper-raised)" stroke="var(--ink)" strokeWidth="4" />
      {/* browser bar */}
      <path d="M106 90h228" stroke="var(--line)" strokeWidth="3" />
      <circle cx="114" cy="78" r="3.5" fill="var(--berry)" />
      <circle cx="126" cy="78" r="3.5" fill="var(--saffron)" />
      <circle cx="138" cy="78" r="3.5" fill="var(--line-strong)" />
      <rect x="160" y="72" width="120" height="12" rx="6" fill="var(--paper-sunk)" />

      {/* shop header */}
      <rect x="110" y="100" width="34" height="8" rx="4" fill="var(--ink)" />
      <rect x="250" y="101" width="22" height="6" rx="3" fill="var(--line)" />
      <rect x="278" y="101" width="22" height="6" rx="3" fill="var(--line)" />
      {/* basket icon in header */}
      <path d="M312 100h14l-2 9h-10z" fill="none" stroke="var(--ink)" strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="330" cy="99" r="5" fill="var(--berry)" />

      {/* hero banner */}
      <rect x="110" y="116" width="220" height="34" rx="8" fill="url(#wd-grad)" />
      <rect x="120" y="125" width="80" height="7" rx="3.5" fill="#fff" opacity=".95" />
      <rect x="120" y="137" width="52" height="5" rx="2.5" fill="#fff" opacity=".7" />

      {/* product cards */}
      <g>
        <rect x="110" y="158" width="66" height="62" rx="8" fill="var(--paper)" stroke="var(--line)" strokeWidth="2" />
        <circle cx="143" cy="180" r="13" fill="var(--saffron-tint)" stroke="var(--saffron)" strokeWidth="2.5" />
        <rect x="118" y="200" width="34" height="5" rx="2.5" fill="var(--ink-subtle)" />
        <rect x="118" y="209" width="20" height="5" rx="2.5" fill="var(--berry)" />
      </g>
      <g>
        <rect x="187" y="158" width="66" height="62" rx="8" fill="var(--paper)" stroke="var(--line)" strokeWidth="2" />
        <rect x="207" y="167" width="26" height="26" rx="6" fill="var(--berry-tint)" stroke="var(--berry)" strokeWidth="2.5" />
        <rect x="195" y="200" width="34" height="5" rx="2.5" fill="var(--ink-subtle)" />
        <rect x="195" y="209" width="20" height="5" rx="2.5" fill="var(--berry)" />
      </g>
      <g>
        <rect x="264" y="158" width="66" height="62" rx="8" fill="var(--paper)" stroke="var(--line)" strokeWidth="2" />
        <path d="M297 166l13 24h-26z" fill="var(--sand)" stroke="var(--tangerine)" strokeWidth="2.5" strokeLinejoin="round" />
        <rect x="272" y="200" width="34" height="5" rx="2.5" fill="var(--ink-subtle)" />
        <rect x="272" y="209" width="20" height="5" rx="2.5" fill="var(--berry)" />
      </g>

      {/* laptop base */}
      <path d="M70 240h300l-14 18H84z" fill="var(--paper-raised)" stroke="var(--ink)" strokeWidth="4" strokeLinejoin="round" />
      <path d="M196 240h48" stroke="var(--ink)" strokeWidth="4" strokeLinecap="round" />

      {/* floating: price tag */}
      <g className="wd-art-float wd-art-f1">
        <path
          d="M370 92l26 4 4 26-26 26-30-30z"
          fill="var(--saffron-tint)"
          stroke="var(--ink)"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <circle cx="386" cy="106" r="4" fill="var(--ink)" />
      </g>

      {/* floating: star rating bubble */}
      <g className="wd-art-float wd-art-f2">
        <rect x="18" y="128" width="78" height="32" rx="16" fill="var(--paper-raised)" stroke="var(--ink)" strokeWidth="3" />
        {[36, 52, 68].map((x) => (
          <path
            key={x}
            d={`M${x} 136l2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.2-4.1 5.8-.8z`}
            fill="var(--saffron)"
          />
        ))}
      </g>

      {/* floating: heart */}
      <path
        className="wd-art-float wd-art-f3"
        d="M60 74s-14-8.6-14-19a7.6 7.6 0 0 1 14-4.4A7.6 7.6 0 0 1 74 55c0 10.4-14 19-14 19z"
        fill="url(#wd-grad)"
      />

      {/* cursor clicking a product */}
      <g className="wd-art-cursor">
        <path
          d="M232 186l0 34 9-8 7 15 7-3-7-15 12-1z"
          fill="var(--ink)"
          stroke="#fff"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </g>

      {/* sparkles */}
      <path
        d="M392 210l3 8 8 3-8 3-3 8-3-8-8-3 8-3z"
        fill="var(--berry)"
        className="wd-art-twinkle"
      />
      <path d="M118 28l2 5.5 5.5 2-5.5 2-2 5.5-2-5.5-5.5-2 5.5-2z" fill="var(--saffron)" className="wd-art-twinkle wd-art-t2" />
      {/* hand-drawn swoosh under the laptop */}
      <path
        d="M110 286c60 14 160 14 220-4"
        fill="none"
        stroke="url(#wd-grad)"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function WebDesignPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />

      <section className="section legal-page">
        <div className="wrap ffg">
          <div className="wd-hero">
            <div className="wd-hero-copy">
              <Note>Alistair Webster Web Design</Note>
              <h1 className="aw-h aw-h-l">
                Websites and design that are <Gradient>easy to live with.</Gradient>
              </h1>
              <p className="lede">
                I&rsquo;ve been freelancing for 15 years, working with local and international clients, and websites
                have been a big part of that, alongside branding and design. I work with small businesses, charities and
                local organisations across Preston and Lancashire, and further afield. I get sites up quickly and
                painlessly, and look after them afterwards so you don&rsquo;t have to think about it.
              </p>
            </div>
            <LaptopArt />
          </div>

          <h2 className="aw-h aw-h-m wd-h">What I do</h2>
          <ul className="ffg-cards wd-cards">
            {SERVICES.map((s) => (
              <li key={s.title} className="aw-panel">
                <Icon name={s.icon} circle />
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ul>

          <h2 className="aw-h aw-h-m wd-h">Selected work</h2>
          <ul className="projects wd-work">
            {WORK.map((w) => {
              const inner = (
                <>
                  <img className="wd-work-img" src={w.img} alt="" loading="lazy" width={800} height={600} />
                  <span className="wd-work-copy">
                    <span className="about-card-title">{w.title}</span>
                    <span className="about-card-body">{w.body}</span>
                    {w.link && (
                      <span className="about-card-link">
                        {w.link} <Icon name="arrow-right" size={16} />
                      </span>
                    )}
                  </span>
                </>
              );
              return (
                <li key={w.title}>
                  {w.href ? (
                    <a className="wd-work-card aw-panel" href={w.href} target="_blank" rel="noopener noreferrer">
                      {inner}
                    </a>
                  ) : (
                    <div className="wd-work-card aw-panel">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>

          <h2 className="aw-h aw-h-m wd-h">What clients say</h2>
          <div className="wd-reviews">
            {REVIEWS.map((r) => (
              <Testimonial key={r.name} quote={r.quote} name={r.name} role={r.role} />
            ))}
          </div>
          <p className="wd-small">
            <a className="text-link" href={REVIEWS_URL} target="_blank" rel="noopener noreferrer">
              See my reviews on Google →
            </a>
          </p>

          <h2 className="aw-h aw-h-m wd-h">How it works</h2>
          <ArrowGrid items={STEPS} columns={2} />
        </div>
      </section>

      <section className="section" id="enquire">
        <div className="wrap contact">
          <div className="contact-copy">
            <Note>Get in touch</Note>
            <h2 className="aw-h aw-h-l">
              Tell me about <Gradient>your project.</Gradient>
            </h2>
            <p className="lede">
              A new site, a refresh, a logo, or something that just needs fixing. Send a message or give me a call for
              a no-obligation chat.
            </p>
            <dl className="glance">
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
                </dd>
              </div>
              <div>
                <dt>Based in</dt>
                <dd>Preston and Edinburgh. Mostly remote, happy to meet in person when I&rsquo;m local.</dd>
              </div>
            </dl>
          </div>
          <ContactForm defaultTopic="Websites or design" />
        </div>
      </section>
    </>
  );
}
