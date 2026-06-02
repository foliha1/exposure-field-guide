import { Section } from "./Section";
import { Reveal } from "./Reveal";
import video from "@/assets/textures/EXPOSURE_Texture_Horiz.mp4.asset.json";
import t1 from "@/assets/textures/Textures.jpg.asset.json";
import t2 from "@/assets/textures/Textures2.jpg.asset.json";
import t3 from "@/assets/textures/Textures3.jpg.asset.json";
import t4 from "@/assets/textures/Textures4.jpg.asset.json";
import t5 from "@/assets/textures/Textures5.jpg.asset.json";
import t6 from "@/assets/textures/Textures6.jpg.asset.json";
import t7 from "@/assets/textures/Textures7.jpg.asset.json";

const stills = [
  { src: t1.url },
  { src: t2.url },
  { src: t3.url },
  { src: t4.url },
  { src: t5.url },
  { src: t6.url },
  { src: t7.url },
];

const rules = [
  {
    eyebrow: "Application",
    body: "Use for backgrounds and key art. Behind text, keep the gradient dark enough to read.",
  },
  {
    eyebrow: "Grain",
    body: "Always keep the grain. A clean gradient is off-brand.",
  },
  {
    eyebrow: "Restraint",
    body: "Use one texture at a time. Don't stack them or let them fight the content.",
  },
];

export function Textures() {
  return (
    <Section
      id="textures"
      number="05"
      label="Textures"
      variant="dark"
      title="Textures"
      blurb="The thermal gradient and grain are EXPOSURE's signature surface: heat moving from off-black through red and gold, always grainy."
    >
      {/* Hero motion texture */}
      <Reveal>
        <div className="relative aspect-video w-full overflow-hidden bg-ex-white/5">
          <video
            src={video.url}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </Reveal>

      {/* Stills grid */}
      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        {stills.map((s, i) => (
          <Reveal key={s.src} delay={0.05 + i * 0.04}>
            <figure className="m-0">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-ex-white/5">
                <img
                  src={s.src}
                  alt={s.caption}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.22em] text-ex-white/50">
                <span>{String(i + 1).padStart(2, "0")} · {s.caption}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      {/* Rules */}
      <div className="mt-16 grid max-w-3xl gap-8 md:grid-cols-3 md:gap-10">
        {rules.map((r, i) => (
          <Reveal key={r.eyebrow} delay={0.15 + i * 0.05}>
            <div>
              <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.28em] text-ex-red">
                {r.eyebrow}
              </div>
              <p className="text-[15px] leading-[1.55] text-ex-white/80">{r.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Download */}
      <Reveal delay={0.2}>
        <div className="mt-16 flex items-center gap-6">
          <a
            href="/downloads/EXPOSURE%20Textures.zip"
            download="EXPOSURE Textures.zip"
            className="inline-flex items-center gap-2 border border-ex-white/25 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.22em] text-ex-white transition-colors duration-150 hover:border-ex-red hover:bg-ex-red hover:text-ex-white active:bg-ex-red/80 active:translate-y-px focus-visible:outline-none focus-visible:border-ex-red"
          >
            Download texture pack
          </a>
          <span className="font-mono text-[11px] text-ex-white/40">EXPOSURE Textures.zip · PNG</span>
        </div>
      </Reveal>
    </Section>
  );
}
