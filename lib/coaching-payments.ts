import Stripe from 'stripe';

export const PLAN = 'coaching-850-two-payments-v1';
export const INSTALMENT = 42500;

export function monthAfter(timestamp: number): number {
  const date = new Date(timestamp * 1000);
  const day = date.getUTCDate();
  date.setUTCDate(1);
  date.setUTCMonth(date.getUTCMonth() + 1);
  const lastDay = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + 1, 0)).getUTCDate();
  date.setUTCDate(Math.min(day, lastDay));
  return Math.floor(date.getTime() / 1000);
}

const id = (value: unknown): string => typeof value === 'string' ? value : (value as {id?: string})?.id || '';

// A single scheduled invoice, never a recurring subscription. Stripe owns the timer.
export async function scheduleFinalPayment(stripe: Stripe, session: Stripe.Checkout.Session) {
  if (session.metadata?.plan !== PLAN || session.payment_status !== 'paid') return;
  if (session.mode !== 'payment' || session.amount_total !== INSTALMENT || session.currency !== 'gbp') {
    throw new Error('Unexpected coaching payment');
  }
  const customer = id(session.customer);
  const paymentIntent = id(session.payment_intent);
  if (!customer || !paymentIntent) throw new Error('Missing payment reference');
  const intent = await stripe.paymentIntents.retrieve(paymentIntent, {expand: ['latest_charge']});
  const charge = intent.latest_charge as Stripe.Charge | null;
  if (!charge || typeof charge === 'string') throw new Error('Missing charge');
  // A refund/dispute delivered before checkout completion must not schedule another charge.
  if (charge.amount_refunded > 0 || charge.disputed) return;
  const paymentMethod = id(intent.payment_method);
  if (!paymentMethod || intent.setup_future_usage !== 'off_session') throw new Error('No consented reusable payment method');
  const metadata = {plan: PLAN, checkout_session: session.id, initial_payment_intent: paymentIntent};
  // Durable lookup covers retries after Stripe's 24-hour idempotency window.
  let invoice: Stripe.Invoice | undefined;
  for await (const candidate of stripe.invoices.list({customer, limit: 100})) {
    if (candidate.metadata?.checkout_session === session.id) { invoice = candidate; break; }
  }
  if (invoice?.metadata?.plan_cancelled === 'true' || (invoice && invoice.status !== 'draft')) return;
  if (invoice?.auto_advance) return;
  invoice ||= await stripe.invoices.create({
    customer, collection_method: 'charge_automatically', auto_advance: false,
    pending_invoice_items_behavior: 'exclude', default_payment_method: paymentMethod,
    description: '8-week Speaking Transformation — final payment (2 of 2)', metadata,
  }, {idempotencyKey: `${session.id}-final-invoice`});
  const lines = await stripe.invoices.listLineItems(invoice.id, {limit: 100});
  if (!lines.data.length) {
    await stripe.invoiceItems.create({customer, invoice: invoice.id, currency: 'gbp', amount: INSTALMENT,
      description: 'Final payment of £425 — programme total £850', metadata,
    }, {idempotencyKey: `${session.id}-final-line`});
  } else if (lines.data.length !== 1 || lines.data[0].amount !== INSTALMENT) {
    throw new Error('Unexpected final invoice amount');
  }
  // Re-check immediately before enabling collection in case the first payment was refunded.
  const latest = await stripe.charges.retrieve(charge.id);
  if (latest.amount_refunded > 0 || latest.disputed) {
    await stripe.invoices.update(invoice.id, {auto_advance: false, metadata: {...metadata, plan_cancelled: 'true'}});
    return;
  }
  const due = monthAfter(charge.created);
  if (due <= Math.floor(Date.now() / 1000)) throw new Error('Final-payment date passed; manual review required');
  await stripe.invoices.update(invoice.id, {auto_advance: true, automatically_finalizes_at: due},
    {idempotencyKey: `${session.id}-schedule-final`});
  // Close the race where a refund webhook ran between our check and enabling collection.
  const afterScheduling = await stripe.charges.retrieve(charge.id);
  if (afterScheduling.amount_refunded > 0 || afterScheduling.disputed) {
    await stopFinalPayment(stripe, afterScheduling);
  }
}

export async function stopFinalPayment(stripe: Stripe, charge: Stripe.Charge) {
  const customer = id(charge.customer);
  const paymentIntent = id(charge.payment_intent);
  if (!customer || !paymentIntent) return;
  for await (const invoice of stripe.invoices.list({customer, limit: 100})) {
    if (invoice.metadata?.plan !== PLAN || invoice.metadata?.initial_payment_intent !== paymentIntent) continue;
    if (invoice.status === 'draft' || invoice.status === 'open') {
      await stripe.invoices.update(invoice.id, {auto_advance: false, metadata: {...invoice.metadata, plan_cancelled: 'true'}});
      if (invoice.status === 'open') await stripe.invoices.voidInvoice(invoice.id);
    }
  }
}
