import Stripe from 'stripe';
import { PLAN, INSTALMENT } from '@/lib/coaching-payments';
import { unstable_noStore as noStore } from 'next/cache';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Your programme booking | Alistair Webster', robots: { index: false, follow: false } };

export default async function PaymentConfirmed({ searchParams }: { searchParams: Promise<{ session_id?: string }> }) {
  noStore();
  const { session_id } = await searchParams;
  const key = process.env.COACHING_STRIPE_RESTRICTED_KEY;
  const booking = process.env.COACHING_PREPAID_BOOKING_URL;
  let paid = false;
  if (key && booking && session_id && /^cs_live_[A-Za-z0-9]+$/.test(session_id)) {
    try {
      const session = await new Stripe(key).checkout.sessions.retrieve(session_id);
      paid = session.livemode && session.metadata?.plan === PLAN && session.mode === 'payment'
        && session.payment_status === 'paid' && session.amount_total === INSTALMENT && session.currency === 'gbp';
    } catch { /* A missing or expired reference must never display a paid booking link. */ }
  }
  return <main className="section legal-page"><div className="wrap legal">
    <h1 className="aw-h aw-h-l">{paid ? 'You’re in. Let’s book your first session.' : 'Let’s check your payment.'}</h1>
    {paid ? <>
      <p>Your first £425 payment has been received. Choose a time for your first coaching session below. There is nothing more to pay when booking your session.</p>
      <p>Your final £425 will be collected automatically one calendar month after your first payment. That completes the £850 programme fee.</p>
      <p><a className="aw-btn aw-btn-primary" href={booking} rel="noreferrer">Book your first session →</a></p>
      <p>You have a two-session fit guarantee: if the coaching isn’t right for you, let me know within seven days of session two, before session three. I’ll refund everything paid and cancel any remaining payment. <a href="/terms#guarantee">Read the guarantee</a>.</p>
    </> : <>
      <p>I couldn’t confirm a completed payment from this link. If you have already paid, please get in touch so I can help you book your first session. Please don’t pay again.</p>
      <p><a href="/contact">Get in touch →</a></p>
    </>}
  </div></main>;
}
