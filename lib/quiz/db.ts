// Server-only access to the existing speakupforgood.com CRM table (quiz_responses).
// Uses the service role key, which bypasses row-level security, so this must never
// be imported into a client component.
//
// Needs QUIZ_SUPABASE_URL and QUIZ_SUPABASE_SERVICE_ROLE_KEY (the same project the
// Speak Up For Good CRM reads).

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let cached: SupabaseClient | null = null;

export function quizDb(): SupabaseClient | null {
  if (cached) return cached;
  const url = process.env.QUIZ_SUPABASE_URL;
  const key = process.env.QUIZ_SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  cached = createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
  return cached;
}
