import type { Metadata } from "next";
import { Gradient, Note } from "@/components/aw";

export const metadata: Metadata = {
  title: "Terms — Alistair Webster",
  description: "Booking terms and the guarantee for coaching with Alistair Webster.",
};

export default function TermsPage() {
  return (
    <main className="section legal-page">
      <div className="wrap legal">
        <Note>The small print</Note>
        <h1 className="aw-h aw-h-l">Terms</h1>
        <p className="legal-updated">Last updated 23 October 2026</p>

        <section id="guarantee" className="legal-guarantee aw-panel">
          <h2 className="aw-h aw-h-m">The guarantee</h2>
          <p className="legal-promise">
            <strong>
              Show up, do the work, and if you don&rsquo;t feel the difference, <Gradient>I&rsquo;ll make it right.</Gradient>
            </strong>
          </p>
          <p>
            If you&rsquo;ve come to all eight sessions, practised in Speak Up on at least three days a week, and completed both
            self-assessments, and you still don&rsquo;t feel a real difference, tell me within 7 days of your final
            session and I&rsquo;ll refund your programme fee in full.
          </p>
          <p>No forms, no arguing. If you&rsquo;ve shown up and it hasn&rsquo;t worked, that&rsquo;s on me.</p>
        </section>

        <section>
          <h2 className="aw-h aw-h-m">Booking and payment</h2>
          <ul>
            <li>The 8-week Speaking Transformation is £1,400, paid when you book.</li>
            <li>A single session is £195, paid when you book.</li>
            <li>If you book the programme within a month of a single session, the £195 comes off the programme price.</li>
            <li>I&rsquo;m not VAT registered, so there&rsquo;s no VAT to add.</li>
          </ul>
        </section>

        <section>
          <h2 className="aw-h aw-h-m">Rescheduling and cancelling</h2>
          <ul>
            <li>You can reschedule any session with at least 24 hours&rsquo; notice through the booking link.</li>
            <li>A session missed without notice counts as used.</li>
            <li>If you change your mind before your first session, you&rsquo;ll get a full refund.</li>
          </ul>
        </section>

        <section>
          <h2 className="aw-h aw-h-m">Speak Up</h2>
          <p>
            The programme includes a year of Speak Up from your first session. After that, you can carry on at the
            standard subscription price.
          </p>
        </section>

        <section>
          <h2 className="aw-h aw-h-m">Sessions</h2>
          <p>Sessions are held online, or in person in Edinburgh when that suits us both.</p>
        </section>

        <section>
          <h2 className="aw-h aw-h-m">What coaching is, and isn&rsquo;t</h2>
          <p>
            My coaching draws on ideas from CBT and counselling skills, but it isn&rsquo;t therapy or a medical
            service. If you&rsquo;re dealing with anxiety or another mental health condition that significantly
            affects your daily life, please speak to your GP or a qualified therapist. I&rsquo;m happy to work
            alongside them.
          </p>
        </section>

        <section>
          <h2 className="aw-h aw-h-m">Confidentiality</h2>
          <p>
            What you share in our sessions stays between us. I&rsquo;ll only share it if I&rsquo;m required to by law,
            or if I believe someone is at risk of serious harm.
          </p>
        </section>

        <section>
          <h2 className="aw-h aw-h-m">The legal bit</h2>
          <p>
            These terms are governed by the law of Scotland. Questions? <a href="/contact">Get in touch</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
