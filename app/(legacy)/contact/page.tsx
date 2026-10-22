import type { Metadata } from "next";
import { LinkedInIcon, SubstackIcon, MicIcon, CommunityIcon, LaptopIcon } from "@/components/SiteIcons";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Alistair Webster. Speaking coaching, AI consulting, or just to say hello.",
};

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/alistair-webster/",
    description: "Connect and say hello",
    color: "text-[#0A66C2]",
    bg: "bg-[#0A66C2]/10",
    icon: <LinkedInIcon />,
  },
  {
    name: "Substack",
    href: "https://speakupforgood.substack.com/",
    description: "Writing on speaking and confidence",
    color: "text-[#FF6719]",
    bg: "bg-[#FF6719]/10",
    icon: <SubstackIcon />,
  },
  {
    name: "Speak Up For Good",
    href: "https://speakupforgood.com",
    description: "Speaking and confidence coaching",
    color: "text-terracotta",
    bg: "bg-terracotta/10",
    icon: <MicIcon />,
  },
  {
    name: "Freelancing for Good",
    href: "https://freelancingforgood.com",
    description: "Community for impact-driven freelancers",
    color: "text-ochre",
    bg: "bg-ochre/10",
    icon: <CommunityIcon />,
  },
  {
    name: "AI with Al",
    href: "https://aiwithal.com",
    description: "AI consulting and workshops",
    color: "text-sage",
    bg: "bg-sage/10",
    icon: <LaptopIcon />,
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen pt-28 md:pt-36 pb-24">
      <div className="container-page">
        {/* Header */}
        <div className="max-w-3xl mb-20 md:mb-24">
          <div className="flex items-center gap-4 mb-6 animate-fade-up">
            <div className="accent-line animate-expand-line" />
            <p className="eyebrow">Contact</p>
          </div>
          <h1 className="heading-hero text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-up stagger-1">
            Get in touch.
          </h1>
          <p className="lead animate-fade-up stagger-2">
            If you&rsquo;d like to work together, have a question, or just
            want to say hello &mdash; I&rsquo;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Form */}
          <ContactForm />

          {/* Links */}
          <div className="space-y-6">
            <h3 className="heading-section text-xl mb-6">Find me elsewhere</h3>
            <div className="space-y-5">
              {socials.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className={`w-10 h-10 rounded-xl ${s.bg} ${s.color} flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}
                  >
                    {s.icon}
                  </div>
                  <div>
                    <p className={`font-medium text-charcoal group-hover:${s.color} transition-colors duration-300`}>
                      {s.name}
                    </p>
                    <p className="text-sm text-charcoal-muted">
                      {s.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Based in Edinburgh */}
            <div className="pt-4">
              <p className="text-sm text-charcoal-muted">
                Based in Edinburgh, Scotland.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
