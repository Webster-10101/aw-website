export const metadata = {title: 'Pay in two | Alistair Webster', robots: {index: false, follow: false}};
export default function PayInTwo({searchParams}: {searchParams: {unavailable?: string}}) {
  return <main className="section legal-page"><div className="wrap legal">
    <h1 className="aw-h aw-h-l">Your programme, in two payments.</h1>
    <p>Eight weekly coaching sessions for £850. Pay £425 now, then one final £425 automatically one calendar month later. There are no further payments.</p>
    <p>After payment, you can choose a time for your first session. We’ll arrange the remaining sessions together.</p>
    {searchParams.unavailable ? <p role="alert">Checkout couldn’t open just now. Please try again or <a href="/contact">get in touch</a>. If you have already paid, please don’t pay again.</p> : null}
    <form action="/api/coaching/checkout" method="post"><button type="submit" className="aw-btn aw-btn-primary">Continue to secure payment →</button></form>
    <p className="aw-muted">✓ Two-session fit guarantee: if the coaching isn’t right for you, request a refund within seven days of session two, before session three. I’ll refund everything paid and cancel the remaining payment. <a href="/terms#guarantee">Read the guarantee</a>.</p>
  </div></main>;
}
