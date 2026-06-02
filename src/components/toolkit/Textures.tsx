import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { useRef } from "react";
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
  const scrollerRef = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const delta = el.clientWidth * 0.6 * dir;
    el.scrollBy({ left: delta, behavior: "smooth" });
  };
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

      {/* Stills carousel */}
      <Reveal delay={0.06}>
        <div className="relative mt-6">
          <div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:gap-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            style={{ scrollPaddingLeft: "0px" }}
          >
            {stills.map((s) => (
              <div
                key={s.src}
                className="relative aspect-[4/3] w-[78%] flex-none snap-start overflow-hidden bg-ex-white/5 sm:w-[48%] md:w-[32%]"
              >
                <img
                  src={s.src}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-ex-off-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-ex-off-black to-transparent" />
          {/* Prev / Next */}
          <div className="mt-4 flex items-center justify-end gap-2">
            <button
              type="button"
              aria-label="Previous textures"
              onClick={() => scrollBy(-1)}
              className="inline-flex h-9 w-9 items-center justify-center border border-ex-white/25 text-ex-white transition-colors duration-150 hover:border-ex-red hover:bg-ex-red focus-visible:outline-none focus-visible:border-ex-red"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M9 1L3 7l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next textures"
              onClick={() => scrollBy(1)}
              className="inline-flex h-9 w-9 items-center justify-center border border-ex-white/25 text-ex-white transition-colors duration-150 hover:border-ex-red hover:bg-ex-red focus-visible:outline-none focus-visible:border-ex-red"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M5 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
              </svg>
            </button>
          </div>
        </div>
      </Reveal>

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
