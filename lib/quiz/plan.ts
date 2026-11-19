// Writes the personalised growth plan. Server only.
// Claude Sonnet 5.5 first (with Anthropic's server-side fallback), OpenAI as a backup,
// then a fixed plan built from the speaker type content if neither is available.

import Anthropic from "@anthropic-ai/sdk";
import OpenAI from "openai";
import { ARCHETYPES } from "./archetypes";
import type { ArchetypeId } from "./questions";
import type { SlidingScales } from "./scoring";

export type OptionalAnswers = Record<string, string | string[]>;

const QUESTION_LABELS: Record<string, string> = {
  situations: "Focus areas",
  struggle: "Main challenge",
  authentic: "When they feel most themselves",
  world_class: "Their vision of world-class speaking",
  confidence_moment: "Key confidence goal",
  life_change: "Desired impact",
  curiosity: "Something they wonder about",
};

const filled = (v: unknown) => (Array.isArray(v) ? v.length > 0 : typeof v === "string" && v.trim() !== "");

export function sharedAnything(optional: OptionalAnswers): boolean {
  return Object.entries(optional).some(([k, v]) => !k.startsWith("_") && filled(v));
}

export function buildPrompt(id: ArchetypeId, scales: SlidingScales, optional: OptionalAnswers): string {
  const a = ARCHETYPES[id];
  const struggle = typeof optional.struggle === "string" ? optional.struggle.trim() : "";
  const curiosity = typeof optional.curiosity === "string" ? optional.curiosity.trim() : "";
  const shared = Object.entries(optional)
    .filter(([k, v]) => !k.startsWith("_") && filled(v))
    .map(([k, v]) => `- ${QUESTION_LABELS[k] || k}: ${Array.isArray(v) ? v.join(", ") : v}`)
    .join("\n");
  const s = (n: number) => Math.round(n);

  return `You are writing a personalised speaking growth plan in the voice of Alistair Webster, a speaking coach. Write in Alistair's conversational, authentic style - like you're talking to an intelligent friend.

IMPORTANT: This plan is generated automatically from the person's quiz answers. Alistair has not read their answers or met them. Never say or imply that he has personally reviewed their answers, spoken with them, or knows them.

The scores are this person's quiz results only. Don't claim how common or rare a score, type or behaviour is, and don't compare them with other people or quote statistics. You have no data for that.

WRITING STYLE:
- Use simple words, short varied sentences, natural flow
- Use metaphors or vivid everyday examples. Never invent personal stories, past clients, or facts about Alistair
- Write in British English (realise, colour, practise as a verb)
- Make advice actionable and memorable with clear takeaways
- Add very subtle dry humour - just a touch of wit that feels natural, not forced
- Avoid AI clichés, hype, or trying to sound smart
- Be direct, honest, and human
- End with a clear wrap-up or takeaway

The person is "${a.title}" - someone who ${a.context}.

THEIR SPEAKING PROFILE (the same figures they saw on their results page):
- Clearness: ${s(scales.clearness)}/100 (${scales.clearness > 50 ? "more clear" : "tends toward confusing"})
- Spontaneity: ${s(scales.spontaneity)}/100 (${scales.spontaneity > 50 ? "more spontaneous" : "more cautious"})
- Expressiveness: ${s(scales.expressiveness)}/100 (${scales.expressiveness > 50 ? "more expressive" : "more reserved"})
- Authenticity: ${s(scales.authenticity)}/100 (${scales.authenticity > 50 ? "more authentic" : "more performance-oriented"})
- Energy: ${s(scales.energy)}/100 (${scales.energy > 50 ? "higher energy" : "more calm"})

CORE CONTENT TO WORK WITH:
**Description:** ${a.description}

${a.introText}
**Strengths:**
${a.strengths.map((x) => `- ${x}`).join("\n")}
**Where It Shows Up:**
${a.whereItShowsUp.map((x) => `- ${x}`).join("\n")}
**Growth Areas:**
${a.growthAreas.map((x) => `- ${x}`).join("\n")}
**Final Thought:** ${a.finalThought}
${shared ? `\nWHAT THEY SHARED IN THE QUIZ:\n${shared}\n` : ""}
TASK:
Write a growth plan that feels like a conversation with Alistair. Use the core content as your foundation, but make it personal based on their scores and what they shared. Include specific advice for their challenges and questions.

Structure it simply:
# Your Speaker Growth Plan

## What your answers suggest
[Use the description but make it conversational and reference their specific scores/context]

## Your natural strengths
[Use the strengths but add personal insights]

## Where this probably shows up
[Use the examples but make them relatable and specific to their context]

## What to work on
[Use the growth tips but make them actionable and memorable]

${struggle ? `## Your main challenge\n[Address their specific struggle: "${struggle}" - give real, actionable advice]\n\n` : ""}${curiosity ? `## About your question\n[Respond to their curiosity: "${curiosity}" - be thoughtful and helpful]\n\n` : ""}## Three things to try this week
[Give 3 specific, doable actions based on everything above]

## Bottom line
[Use the final thought but make it personal and memorable]

Write like you're having a real conversation - no corporate speak, no filler. Just honest, helpful advice that sticks. Only add humour if it comes naturally - don't force it.`;
}

const SYSTEM =
  "You are an expert speaking coach who creates personalised, actionable growth plans by combining structured archetype content with personalised insights.";

export async function generatePlan(
  id: ArchetypeId,
  scales: SlidingScales,
  optional: OptionalAnswers
): Promise<{ plan: string; source: "claude" | "openai" | "static" }> {
  const prompt = buildPrompt(id, scales, optional);

  if (process.env.ANTHROPIC_API_KEY) {
    try {
      const anthropic = new Anthropic({ timeout: 50_000, maxRetries: 1 });
      const response = await anthropic.beta.messages.create({
        model: "claude-sonnet-5-5",
        max_tokens: 8000,
        output_config: { effort: "low" },
        betas: ["server-side-fallback-2026-07-01"],
        fallbacks: "default",
        system: SYSTEM,
        messages: [{ role: "user", content: prompt }],
      });
      if (response.stop_reason === "refusal") {
        console.error("Quiz plan: Claude declined", response.stop_details);
      } else {
        const text = response.content
          .map((block) => (block.type === "text" ? block.text : ""))
          .join("")
          .trim();
        if (text) return { plan: text, source: "claude" };
      }
    } catch (error) {
      console.error("Quiz plan: Claude error", error);
    }
  }

  if (process.env.OPENAI_API_KEY) {
    try {
      const openai = new OpenAI({ timeout: 30_000 });
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: SYSTEM },
          { role: "user", content: prompt },
        ],
        max_tokens: 2500,
        temperature: 0.7,
      });
      const text = completion.choices[0]?.message?.content?.trim();
      if (text) return { plan: text, source: "openai" };
    } catch (error) {
      console.error("Quiz plan: OpenAI error", error);
    }
  }

  return { plan: staticPlan(id, optional), source: "static" };
}

// Fixed plan used only when no AI service is available.
export function staticPlan(id: ArchetypeId, optional: OptionalAnswers): string {
  const a = ARCHETYPES[id];
  const struggle = typeof optional.struggle === "string" ? optional.struggle.trim() : "";
  const curiosity = typeof optional.curiosity === "string" ? optional.curiosity.trim() : "";
  const name = a.title.replace(/^The /, "");

  let plan = `# Your Speaker Growth Plan

## Who you are as a speaker

${a.description}

${a.introText}

## Your strengths

${a.strengths.map((s) => `- ${s}`).join("\n")}

## Where it might show up

${a.whereItShowsUp.map((e) => `- ${e}`).join("\n")}

## Where to grow

The real shift for ${name}s is moving from ${a.shift}. Here are three things that help:

${a.growthAreas.map((t) => `- ${t}`).join("\n")}
`;

  if (struggle) {
    plan += `\n## Your main challenge\n\nYou said you struggle most with: "${struggle}". Start with the first growth area above and try it in your next conversation, not just your next big talk. Small, low-stakes reps are what make it stick.\n`;
  }
  if (curiosity) {
    plan += `\n## Your question\n\nYou wondered: "${curiosity}". It's a good one to bring to an intro call if you'd like to dig into it properly.\n`;
  }

  plan += `\n## Final thought\n\n${a.finalThought}`;

  const context = Object.entries(optional)
    .filter(([k, v]) => !k.startsWith("_") && k !== "curiosity" && k !== "struggle" && filled(v))
    .map(([k, v]) => `**${QUESTION_LABELS[k] || k}:** ${Array.isArray(v) ? v.join(", ") : v}`);
  if (context.length) plan += `\n\n## What you shared\n\n${context.join("\n\n")}`;

  return plan;
}
