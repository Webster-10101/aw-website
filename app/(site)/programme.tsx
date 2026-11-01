import { Button, Icon, PriceBlock } from "@/components/aw";
import { LINKS, track } from "./links";

// Shared by the homepage (#programme) and /coaching, so the offer only lives in one place.

export const PHASES = [
  {
    when: "Weeks 1–3",
    title: "Foundation",
    body: "A self-assessment and a plan built around your goals. Then the fundamentals: staying present and composed under pressure, using pauses and breath, and letting more of your expression come through.",
  },
  {
    when: "Weeks 4–5",
    title: "Clarity and story",
    body: "Getting to the point, and telling stories that connect.",
  },
  {
    when: "Weeks 6–7",
    title: "Fluency and authenticity",
    body: "Thinking on your feet, trusting your instincts and bringing more of yourself, so speaking stops feeling like a performance.",
  },
  {
    when: "Week 8",
    title: "Put it to work",
    body: "Bringing it all together for your real, high-stakes situations, then a final self-assessment to see what's changed.",
  },
  {
    when: "Then",
    title: "A year of practice",
    body: "Speak Up keeps you improving long after our sessions finish.",
  },
];

export function Phases() {
  return (
    <ol className="stages">
      {PHASES.map((st, i) => (
        <li key={st.when} className={i === PHASES.length - 1 ? "stage stage-year" : "stage"}>
          <span className="stage-when">{st.when}</span>
          <h3>{st.title}</h3>
          <p>{st.body}</p>
        </li>
      ))}
    </ol>
  );
}

export function PriceCard({ from }: { from: string }) {
  return (
    <aside className="price-card aw-panel" aria-label="Prices">
      <PriceBlock amount="£850" label="8-week Speaking Transformation" detail="Pay in full or two payments of £425" />
      <ul className="practical">
        <li><Icon name="calendar" size={18} /><span>Eight weekly 1:1 sessions, 60 minutes each</span></li>
        <li><Icon name="check" size={18} /><span>A self-assessment at the start and end, so you can see how your confidence has changed</span></li>
        <li><Icon name="spark" size={18} /><span>A plan shaped around your goals, plus rehearsal for your real talks</span></li>
        <li><Icon name="mic" size={18} /><span>A full year of Speak Up: about 10 minutes a day of guided practice</span></li>
        <li><Icon name="meeting" size={18} /><span>Online, or in person in Edinburgh</span></li>
      </ul>
      <Button href={track(LINKS.bookProgramme, `${from}-price`)} arrow className="btn-voice">
        Pay in full — £850
      </Button>
      <p className="price-after"><a href={track(LINKS.bookProgrammeSplit, `${from}-price-split`)}>Choose two payments of £425</a>: first at booking, second before session five. The second payment is collected separately, not charged automatically.</p>
      <p className="price-after">
        Pay securely when you book your first session, then we set the rest for the same time each week.
      </p>
      <hr />
      <PriceBlock amount="£150" label="Single session" detail="Focused help with one specific talk, pitch or event." />
      <p className="price-after">If you book the programme within a month, the £150 comes off the price. Contact me before booking to arrange the credit.</p>
      <Button href={track(LINKS.bookSession, `${from}-price-single`)} variant="secondary">
        Book a session
      </Button>
      <hr />
      <p className="price-intro">
        Not sure yet? <a href={track(LINKS.introCall, `${from}-price`)}>Book a free intro call</a> and we&rsquo;ll talk it through.
      </p>
      <section className="fit-guarantee" aria-label="Two-session fit guarantee">
        <h3>Two-session fit guarantee</h3>
        <p>If the coaching isn&rsquo;t right for you after two sessions, I&rsquo;ll refund everything you&rsquo;ve paid and cancel any remaining payment. Just let me know within seven days of session two, before session three. <a href="/terms#guarantee">Read the guarantee</a>.</p>
      </section>
    </aside>
  );
}
