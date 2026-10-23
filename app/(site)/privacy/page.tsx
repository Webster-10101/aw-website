import type { Metadata } from "next";
import { Note } from "@/components/aw";
import { LINKS } from "../links";

export const metadata: Metadata = {
  title: "Privacy — Alistair Webster",
  description: "What personal information Alistair Webster collects, why, and how long it's kept.",
};

export default function PrivacyPage() {
  return (
    <main className="section legal-page">
      <div className="wrap legal">
        <Note>The small print</Note>
        <h1 className="aw-h aw-h-l">Privacy</h1>
        <p className="legal-updated">Last updated 23 October 2026</p>

        <section>
          <h2 className="aw-h aw-h-m">Who I am</h2>
          <p>
            I&rsquo;m Alistair Webster, a sole trader based in Edinburgh, and I&rsquo;m responsible for any personal
            information you share through this site. Questions? Email{" "}
            <a href={LINKS.email}>hello@alistairwebster.com</a>.
          </p>
        </section>

        <section>
          <h2 className="aw-h aw-h-m">What I collect, and why</h2>
          <ul>
            <li>
              <strong>Speak Up waitlist:</strong> your email address, so I can tell you when the app opens. It&rsquo;s
              stored with Resend, my email provider, and every email has an unsubscribe link.
            </li>
            <li>
              <strong>Booking a call or coaching:</strong> your name, email address and anything you write in the
              booking form, through Calendly. Payments go through Stripe, and I never see your card details.
            </li>
            <li>
              <strong>Coaching sessions:</strong> with your agreement, I record our sessions on Zoom so we can review
              them. I also keep my own notes. Both are used only to coach you.
            </li>
            <li>
              <strong>Emails you send me:</strong> kept so I can reply and help you.
            </li>
            <li>
              <strong>Site analytics:</strong> I use Fathom Analytics, which doesn&rsquo;t use cookies or collect
              personal information. It just tells me how many people visit and which pages they read. There&rsquo;s
              no cookie banner because there are no tracking cookies.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="aw-h aw-h-m">Things I link to</h2>
          <p>The Speaker Quiz, Speak Up, Substack and LinkedIn have their own privacy policies.</p>
        </section>

        <section>
          <h2 className="aw-h aw-h-m">What I don&rsquo;t do</h2>
          <p>
            I don&rsquo;t sell your information, and I don&rsquo;t share it with anyone except the services above,
            which store it on my behalf.
          </p>
        </section>

        <section>
          <h2 className="aw-h aw-h-m">How long I keep it</h2>
          <ul>
            <li>Waitlist: until you unsubscribe or ask me to remove you.</li>
            <li>Session recordings and notes: one year after we finish working together.</li>
            <li>Booking and payment records: six years, as UK tax rules require.</li>
          </ul>
        </section>

        <section>
          <h2 className="aw-h aw-h-m">Your rights</h2>
          <p>
            You can ask to see, correct or delete what I hold about you, or object to how I use it. Email me and
            I&rsquo;ll respond within a month. If you&rsquo;re unhappy with how I&rsquo;ve handled it, you can complain
            to the Information Commissioner&rsquo;s Office at <a href="https://ico.org.uk">ico.org.uk</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
