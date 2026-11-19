import { ImageResponse } from "next/og";
import { ARCHETYPES } from "@/lib/quiz/archetypes";
import { ARCHETYPE_IDS, type ArchetypeId } from "@/lib/quiz/questions";

// Social preview card for a shared speaker type (/speaker-quiz/og/rambler),
// or for the quiz itself (/speaker-quiz/og/quiz).

export const runtime = "edge";

// Literal paths so the build bundles the font files with the route.
const load = (url: URL) => fetch(url).then((r) => r.arrayBuffer());
const fonts = () =>
  Promise.all([
    load(new URL("../../../../../lib/quiz/og/jakarta-800.woff", import.meta.url)),
    load(new URL("../../../../../lib/quiz/og/jakarta-500.woff", import.meta.url)),
    load(new URL("../../../../../lib/quiz/og/caveat-600.woff", import.meta.url)),
  ]);

const BERRY = "#c8245a";
const INK = "#171b28";
const MUTED = "#575c6b";
const PAPER = "#fbf9f5";
const GRADIENT = "linear-gradient(90deg, #c8245a 0%, #e85d2c 55%, #c98500 100%)";

// The opening of the type description: one sentence, or two if the first is very short.
function firstSentence(text: string) {
  const sentences = text.match(/[^.!?]+[.!?]+(\s|$)/g) ?? [text];
  let out = sentences[0].trim();
  if (out.length < 50 && sentences[1] && out.length + sentences[1].length < 170) out += " " + sentences[1].trim();
  return out;
}

export async function GET(_req: Request, { params }: { params: { type: string } }) {
  const id = (ARCHETYPE_IDS as readonly string[]).includes(params.type) ? (params.type as ArchetypeId) : null;
  const a = id ? ARCHETYPES[id] : null;

  const [heavy, regular, hand] = await fonts();

  const eyebrow = a ? "My speaker type" : "Speaker quiz";
  const title = a ? a.title : "What kind of speaker are you?";
  const line = a ? firstSentence(a.description) : "Ten quick questions, one of eight speaker types, and a growth plan for yours.";

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: PAPER, padding: "72px 80px 0" }}>
        <div style={{ display: "flex", fontFamily: "Caveat", fontSize: 52, color: BERRY, transform: "rotate(-2deg)", marginBottom: 8 }}>
          {eyebrow}
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "Jakarta",
            fontWeight: 800,
            fontSize: a ? 112 : 88,
            lineHeight: 1.05,
            letterSpacing: "-0.035em",
            backgroundImage: GRADIENT,
            backgroundClip: "text",
            color: "transparent",
            paddingBottom: 12,
          }}
        >
          {title}
        </div>
        <div style={{ display: "flex", fontFamily: "Jakarta", fontWeight: 500, fontSize: 34, lineHeight: 1.4, color: MUTED, marginTop: 20, maxWidth: 980 }}>
          {line}
        </div>
        <div style={{ flex: 1 }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 44 }}>
          <div style={{ display: "flex", fontFamily: "Jakarta", fontWeight: 800, fontSize: 30, color: INK }}>
            {a ? "What kind of speaker are you?" : "Alistair Webster"}
          </div>
          <div style={{ display: "flex", fontFamily: "Jakarta", fontWeight: 500, fontSize: 28, color: MUTED }}>
            alistairwebster.com/speaker-quiz
          </div>
        </div>
        <div style={{ display: "flex", height: 14, margin: "0 -80px", backgroundImage: GRADIENT }} />
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Jakarta", data: heavy, weight: 800, style: "normal" },
        { name: "Jakarta", data: regular, weight: 500, style: "normal" },
        { name: "Caveat", data: hand, weight: 600, style: "normal" },
      ],
      headers: { "Cache-Control": "public, max-age=86400, s-maxage=604800" },
    }
  );
}
