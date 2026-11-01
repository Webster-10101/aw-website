import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { scheduleFinalPayment, stopFinalPayment } from '@/lib/coaching-payments';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  const key = process.env.COACHING_STRIPE_RESTRICTED_KEY;
  const secret = process.env.COACHING_STRIPE_WEBHOOK_SECRET;
  const account = process.env.COACHING_STRIPE_ACCOUNT_ID;
  if (!key || !secret || !account) return NextResponse.json({error: 'Not configured'}, {status: 503});
  const stripe = new Stripe(key);
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(await request.text(), request.headers.get('stripe-signature') || '', secret);
  } catch { return NextResponse.json({error: 'Invalid signature'}, {status: 400}); }
  // Live endpoint must not process test events or events for a connected third-party account.
  if (!event.livemode || (event.account && event.account !== account)) {
    return NextResponse.json({error: 'Wrong event context'}, {status: 400});
  }
  try {
    if (event.type === 'checkout.session.completed' || event.type === 'checkout.session.async_payment_succeeded') {
      await scheduleFinalPayment(stripe, event.data.object as Stripe.Checkout.Session);
    } else if (event.type === 'charge.refunded') {
      await stopFinalPayment(stripe, event.data.object as Stripe.Charge);
    } else if (event.type === 'charge.dispute.created') {
      const dispute = event.data.object as Stripe.Dispute;
      const chargeId = typeof dispute.charge === 'string' ? dispute.charge : dispute.charge.id;
      await stopFinalPayment(stripe, await stripe.charges.retrieve(chargeId));
    }
    return NextResponse.json({received: true});
  } catch {
    // Return failure for Stripe retries; never log customer details, keys, or raw API errors.
    console.error('Coaching payment event needs retry', event.id, event.type);
    return NextResponse.json({error: 'Processing failed'}, {status: 500});
  }
}
