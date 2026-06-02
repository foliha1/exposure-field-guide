import { Section } from "./Section";
import { Reveal } from "./Reveal";
import p1 from "@/assets/photos/photo-style-1.jpg.asset.json";
import p2 from "@/assets/photos/photo-style-2.jpg.asset.json";
import triangleMark from "@/assets/logos/29029_Triangle.svg.asset.json";

const frames = [
  { src: p1.url, caption: "Hands · field" },
  { src: p2.url, caption: "Faces · effort" },
];

const rules = [
  {
    eyebrow: "Tone",
    body: "Warm and natural. Daylight, dusk, firelight — never fluorescent.",
  },
  {
    eyebrow: "Stance",
    body: "Candid over posed. Photograph the moment, not the setup. If it looks art-directed, recompose or cut it.",
  },
  {
    eyebrow: "Subject",
    body: "People in the work. Hands, huddles, faces mid-effort. Landscapes only as context — never the headline.",
  },
];

export function Imagery() {
  return (
    <Section
      id="imagery"
      number="04"
      label="Imagery"
      variant="light"
      title="Imagery"
      blurb="Warm, natural, candid. Photograph people in the work — hands, huddles, faces mid-effort — in daylight, dusk, or firelight."
    >
      <div className="grid grid-cols-2 gap-4 md:gap-6">
        {frames.map((f, i) => (
          <Reveal key={f.src} delay={0.05 + i * 0.05}>
            <figure className="m-0">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-ex-black/5">
                <img
                  src={f.src}
                  alt={f.caption}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.22em] text-ex-black/50">
                <span>{String(i + 1).padStart(2, "0")} · {f.caption}</span>
                <img src={triangleMark.url} alt="" aria-hidden className="h-2.5 w-auto" />
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 grid max-w-3xl gap-8 md:grid-cols-3 md:gap-10">
        {rules.map((r, i) => (
          <Reveal key={r.eyebrow} delay={0.15 + i * 0.05}>
            <div>
              <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.28em] text-ex-red">
                {r.eyebrow}
              </div>
              <p className="text-[15px] leading-[1.55] text-ex-black/80">{r.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}