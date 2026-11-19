// Builds the personalised results email. Server only.

import { addAttribution, INTRO_CALL_URL, type Attribution } from "./attribution";

export function escapeHtml(value: string): string {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const INK = "#171b28";
const MUTED = "#575c6b";
const BERRY = "#c8245a";
const LINE = "#e6e0d6";
const FONT = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

const STYLES = {
  h1: `color: ${INK}; margin: 22px 0 10px; font-size: 21px; line-height: 1.3; font-weight: 800;`,
  h2: `color: ${BERRY}; margin: 22px 0 8px; font-size: 17px; font-weight: 700; line-height: 1.3;`,
  h3: `color: ${INK}; margin: 16px 0 6px; font-size: 15px; font-weight: 700; line-height: 1.3;`,
  p: `margin: 0 0 12px; font-size: 15px; line-height: 1.6; color: ${INK};`,
  list: `margin: 0 0 12px; padding-left: 22px; font-size: 15px; line-height: 1.6; color: ${INK};`,
  li: "margin: 0 0 6px;",
  hr: `border: none; border-top: 1px solid ${LINE}; margin: 16px 0;`,
  strong: `color: ${INK};`,
};

function inline(text: string): string {
  return escapeHtml(text)
    .replace(/\*\*(.+?)\*\*/g, `<strong style="${STYLES.strong}">$1</strong>`)
    .replace(/(^|[^*\w])\*(?!\s)(.+?)\*(?!\w)/g, "$1<em>$2</em>")
    .replace(/(^|[^_\w])_(?!\s)(.+?)_(?!\w)/g, "$1<em>$2</em>");
}

// Turns the written plan (markdown) into email-safe HTML with inline styles.
// Handles what the model writes: headings, paragraphs, lists, rules, bold, italics.
export function planToHtml(markdown: string): string {
  const html: string[] = [];
  let paragraph: string[] = [];
  let list: { tag: "ul" | "ol"; items: string[] } | null = null;

  const flushParagraph = () => {
    if (paragraph.length) html.push(`<p style="${STYLES.p}">${paragraph.map(inline).join("<br>")}</p>`);
    paragraph = [];
  };
  const flushList = () => {
    if (list) {
      const items = list.items.map((item) => `<li style="${STYLES.li}">${inline(item)}</li>`).join("");
      html.push(`<${list.tag} style="${STYLES.list}">${items}</${list.tag}>`);
    }
    list = null;
  };

  for (const raw of markdown.replace(/\r\n/g, "\n").split("\n")) {
    const line = raw.trim();
    if (!line) {
      flushParagraph();
      continue;
    }
    const heading = line.match(/^(#{1,6})\s+(.*)$/);
    if (heading) {
      flushParagraph();
      flushList();
      const level = Math.min(heading[1].length, 3) as 1 | 2 | 3;
      html.push(`<h${level + 1} style="${STYLES[`h${level}`]}">${inline(heading[2].replace(/\*\*/g, ""))}</h${level + 1}>`);
      continue;
    }
    if (/^(-{3,}|\*{3,}|_{3,})$/.test(line)) {
      flushParagraph();
      flushList();
      html.push(`<hr style="${STYLES.hr}">`);
      continue;
    }
    const bullet = line.match(/^[-*•]\s+(.*)$/);
    const numbered = line.match(/^\d+[.)]\s+(.*)$/);
    if (bullet || numbered) {
      flushParagraph();
      const tag = bullet ? "ul" : "ol";
      if (list && list.tag !== tag) flushList();
      if (!list) list = { tag, items: [] };
      list.items.push((bullet || numbered)![1]);
      continue;
    }
    flushList();
    paragraph.push(line);
  }
  flushParagraph();
  flushList();
  return html.join("\n");
}

export function resultsEmail(opts: {
  firstName: string;
  title: string;
  plan: string;
  sharedExtra: boolean;
  newsletterOptIn: boolean;
  attribution: Attribution;
}): { subject: string; html: string } {
  const subject = `Your speaker growth plan: ${opts.title}`;
  const booking = escapeHtml(addAttribution(INTRO_CALL_URL, opts.attribution));
  const html = `
<div style="font-family: ${FONT}; max-width: 600px; margin: 0 auto; padding: 24px 20px; color: ${INK}; background: #ffffff;">
  <p style="margin: 0 0 24px; font-size: 20px; font-weight: 800; letter-spacing: -0.02em; color: ${INK};">Alistair Webster</p>

  <p style="${STYLES.p} font-size: 16px;">Hi ${escapeHtml(opts.firstName)},</p>
  <p style="${STYLES.p} font-size: 16px;">
    Thanks for taking the speaker quiz. Your answers point to <strong>${escapeHtml(opts.title)}</strong>.
    Below is your growth plan, written automatically from your quiz answers${opts.sharedExtra ? " and what you shared" : ""}.
  </p>

  <div style="border-left: 4px solid ${BERRY}; padding: 4px 0 4px 20px; margin: 20px 0;">
    ${planToHtml(opts.plan)}
  </div>

  <div style="border: 1px solid ${LINE}; border-radius: 16px; padding: 22px; margin: 28px 0; text-align: center;">
    <p style="margin: 0 0 8px; font-size: 18px; font-weight: 700; color: ${INK};">Want to talk it through?</p>
    <p style="margin: 0 0 16px; font-size: 15px; line-height: 1.5; color: ${MUTED};">I offer free 45-minute intro calls to go through your results and what you&rsquo;d like to work on.</p>
    <a href="${booking}" style="display: inline-block; background: ${INK}; color: #faf7f2; padding: 14px 24px; border-radius: 999px; text-decoration: none; font-weight: 600; font-size: 15px;">Book a free 45-minute intro call</a>
  </div>

  <p style="${STYLES.p}">Best,<br><strong>Alistair</strong></p>
  ${
    opts.newsletterOptIn
      ? `<p style="margin: 20px 0 0; padding-top: 12px; border-top: 1px solid ${LINE}; font-size: 12px; line-height: 1.5; color: ${MUTED};">You also asked for occasional speaking emails from me. Every one has an unsubscribe link.</p>`
      : ""
  }
</div>`;
  return { subject, html };
}
