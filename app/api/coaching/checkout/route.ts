import {NextRequest, NextResponse} from 'next/server';
import Stripe from 'stripe';
import {PLAN, INSTALMENT} from '@/lib/coaching-payments';

export const runtime = 'nodejs';
const origin = 'https://alistairwebster.com';
export async function POST(request: NextRequest) {
  if (request.headers.get('origin') !== origin) return new NextResponse('Invalid origin', {status: 403});
  const key = process.env.COACHING_STRIPE_RESTRICTED_KEY;
  if (!key || !process.env.COACHING_STRIPE_WEBHOOK_SECRET) {
    return NextResponse.redirect(`${origin}/coaching/pay-in-two?unavailable=1`, 303);
  }
  try {
    const session = await new Stripe(key).checkout.sessions.create({
      mode: 'payment', customer_creation: 'always',
      integration_identifier: 'aw-coaching-split-qdvnmzkr',
      metadata: {plan: PLAN},
      // Klarna supports saved methods but not automatically collected invoices.
      excluded_payment_method_types: ['klarna'],
      line_items: [{price_data: {currency: 'gbp', unit_amount: INSTALMENT,
        product_data: {name: 'Speaking Transformation — payment 1 of 2'}}, quantity: 1}],
      payment_intent_data: {setup_future_usage: 'off_session', metadata: {plan: PLAN}},
      custom_text: {submit: {message: 'Programme total £850: pay £425 today and authorise one final £425 payment automatically one calendar month later using your saved payment method. No further payments. Two-session fit guarantee: request within seven days of session two, before session three, for a refund of everything paid and cancellation of the balance. Terms: https://alistairwebster.com/terms#guarantee'}},
      success_url: `${origin}/coaching/payment-confirmed?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/coaching/pay-in-two`,
    });
    if (!session.url) throw new Error('Missing checkout URL');
    return NextResponse.redirect(session.url, 303);
  } catch {
    console.error('Unable to open coaching checkout');
    return NextResponse.redirect(`${origin}/coaching/pay-in-two?unavailable=1`, 303);
  }
}
