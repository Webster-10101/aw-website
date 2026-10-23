import type { Metadata } from "next";
import { Gradient, Note } from "@/components/aw";
import ContactForm from "@/components/aw/ContactForm";
import { LINKS } from "../links";

export const metadata: Metadata = {
  title: "Contact — Alistair Webster",
  description: "Get in touch with Alistair Webster about coaching, Freelancing for Good, or a project.",
};

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
              <a href={LINKS.introCall}>book a free 20-minute intro call</a> straight away.
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
