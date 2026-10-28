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
      <PriceBlock amount="£1,400" label="8-week Speaking Transformation" detail="Everything below, in one programme" />
      <ul className="practical">
        <li><Icon name="calendar" size={18} /><span>Eight weekly 1:1 sessions, 60 minutes each</span></li>
        <li><Icon name="check" size={18} /><span>A self-assessment at the start and end, so you can see how your confidence has changed</span></li>
        <li><Icon name="spark" size={18} /><span>A plan shaped around your goals, plus rehearsal for your real talks</span></li>
        <li><Icon name="mic" size={18} /><span>A full year of Speak Up: about 10 minutes a day of guided practice</span></li>
        <li><Icon name="meeting" size={18} /><span>Online, or in person in Edinburgh</span></li>
      </ul>
      <Button href={track(LINKS.bookProgramme, `${from}-price`)} arrow>
        Book the programme
      </Button>
      <p className="guarantee">
        <strong>Four-session fit guarantee:</strong> if the coaching isn&rsquo;t right for you after four sessions,
        ask within seven days of session four, before session five, for a full refund. <a href="/terms#guarantee">Read the guarantee</a>.
      </p>
      <p className="price-after">
        After booking, you pay securely, pick your first session, and we set the rest for the same time each week.
      </p>
      <hr />
      <PriceBlock amount="£195" label="Single session" detail="Focused help with one specific talk, pitch or event." />
      <p className="price-after">If you book the programme within a month, the £195 comes off the price.</p>
      <Button href={track(LINKS.bookSession, `${from}-price-single`)} variant="secondary">
        Book a session
      </Button>
      <hr />
      <p className="price-intro">
        Not sure yet? <a href={track(LINKS.introCall, `${from}-price`)}>Book a free intro call</a> and we&rsquo;ll talk it through.
      </p>
    </aside>
  );
}
