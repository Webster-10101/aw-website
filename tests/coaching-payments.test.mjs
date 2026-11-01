import test from 'node:test';
import assert from 'node:assert/strict';
import {monthAfter, scheduleFinalPayment, stopFinalPayment, PLAN} from '../lib/coaching-payments.ts';
const ts = s => Date.parse(s)/1000;
test('calendar month handles short months, leap years and year boundaries',()=>{
 for(const [a,b] of [['2027-01-31','2027-02-28'],['2028-01-31','2028-02-29'],['2026-12-15','2027-01-15']])assert.equal(monthAfter(ts(a)),ts(b));
});
function fixture(){
 const invoices=[],lines=[];
 const charge={id:'ch_1',created:Math.floor(Date.now()/1000),amount_refunded:0,disputed:false,customer:'cus_1',payment_intent:'pi_1'};
 const session={id:'cs_1',metadata:{plan:PLAN},mode:'payment',payment_status:'paid',amount_total:42500,currency:'gbp',customer:'cus_1',payment_intent:'pi_1'};
 const stripe={paymentIntents:{retrieve:async()=>({latest_charge:charge,payment_method:'pm_1',setup_future_usage:'off_session'})},charges:{retrieve:async()=>charge},invoices:{
 list:async function*(){yield* invoices},create:async d=>{const i={id:'in_1',status:'draft',...d};invoices.push(i);return i},listLineItems:async()=>({data:lines}),update:async(id,d)=>Object.assign(invoices.find(i=>i.id===id),d),voidInvoice:async id=>{invoices.find(i=>i.id===id).status='void'}},invoiceItems:{create:async d=>{lines.push(d);return d}}};
 return {stripe,session,charge,invoices,lines};
}
test('one £425 final invoice, with no third payment on replay',async()=>{
 const f=fixture();await scheduleFinalPayment(f.stripe,f.session);await scheduleFinalPayment(f.stripe,f.session);
 assert.equal(f.invoices.length,1);assert.equal(f.lines.length,1);assert.equal(f.lines[0].amount,42500);assert.equal(f.invoices[0].automatically_finalizes_at,monthAfter(f.charge.created));assert.equal(f.invoices[0].auto_advance,true);
});
test('unpaid, unrelated and refunded payments never schedule collection',async()=>{
 for(const mode of ['unpaid','unrelated','refunded']){const f=fixture();if(mode==='unpaid')f.session.payment_status='unpaid';if(mode==='unrelated')f.session.metadata={};if(mode==='refunded')f.charge.amount_refunded=42500;await scheduleFinalPayment(f.stripe,f.session);assert.equal(f.invoices.length,0)}
});
test('wrong amount is rejected',async()=>{const f=fixture();f.session.amount_total=85000;await assert.rejects(scheduleFinalPayment(f.stripe,f.session));assert.equal(f.invoices.length,0)});
test('refund cancels collection and replay cannot restart it',async()=>{
 const f=fixture();await scheduleFinalPayment(f.stripe,f.session);f.charge.amount_refunded=42500;await stopFinalPayment(f.stripe,f.charge);await scheduleFinalPayment(f.stripe,f.session);assert.equal(f.invoices[0].auto_advance,false);assert.equal(f.invoices[0].metadata.plan_cancelled,'true');assert.equal(f.invoices.length,1);
});
test('retry resumes interrupted draft without duplicate lines',async()=>{
 const f=fixture();await scheduleFinalPayment(f.stripe,f.session);f.invoices[0].auto_advance=false;await scheduleFinalPayment(f.stripe,f.session);assert.equal(f.invoices.length,1);assert.equal(f.lines.length,1);assert.equal(f.invoices[0].auto_advance,true);
});
