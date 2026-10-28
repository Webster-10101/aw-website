import type { Metadata } from "next";
import { pageMeta } from "../meta";
import { Gradient, Note } from "@/components/aw";
import ContactForm from "@/components/aw/ContactForm";
import { LINKS, track } from "../links";

export const metadata: Metadata = pageMeta(
  "Contact",
  "Get in touch with Alistair Webster about coaching, Freelancing for Good, or a project.",
  "/contact"
);

export default function ContactPage() {
  return (
    <section className="section legal-page">
      <div className="wrap contact">
        <div className="contact-copy">
          <Note>Say hello</Note>
          <h1 className="aw-h aw-h-l">
            Get in <Gradient>touch.</Gradient>
          </h1>
          <p className="lede">
            If you&rsquo;d like to work together, have a question, or just want to say hello, I&rsquo;d love to hear
            from you.
          </p>
          <ul className="contact-alt">
            <li>
              <strong>Thinking about coaching?</strong> You can also{" "}
              <a href={track(LINKS.introCall, "contact")}>book a free 45-minute intro call</a> straight away.
            </li>
            <li>
              <strong>Freelancing for Good?</strong> Member and job questions are best sent via{" "}
              <a href={LINKS.ffg}>freelancingforgood.com</a>.
            </li>
            <li>
              <strong>Elsewhere:</strong> <a href={LINKS.linkedin}>LinkedIn</a> ·{" "}
              <a href={LINKS.substack}>Substack</a>
            </li>
          </ul>
          <p className="contact-where">Based in Edinburgh, Scotland.</p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
