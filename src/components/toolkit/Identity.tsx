import { useState } from "react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import exposureLight from "@/assets/logos/EXPOSURE_Light.svg.asset.json";
import exposureDark from "@/assets/logos/EXPOSURE_Dark.svg.asset.json";
import lockupLight from "@/assets/logos/EXPOSURE_Lockup_Light.svg.asset.json";
import lockupDark from "@/assets/logos/EXPOSURE_Lockup_Dark.svg.asset.json";
import lockupTriLight from "@/assets/logos/EXPOSURE_Lockup-Tri_Light.svg.asset.json";
import lockupTriDark from "@/assets/logos/EXPOSURE_Lockup-Tri_Dark.svg.asset.json";
import triangle from "@/assets/logos/29029_Triangle.svg.asset.json";

function DownloadStub() {
  return (
    <span className="absolute bottom-4 right-4 text-[10px] font-bold uppercase tracking-[0.22em] text-ex-white/0 transition-colors duration-300 group-hover:text-ex-white/50">
      Download
    </span>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-ex-red">
      {children}
    </span>
  );
}

function UsageNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-2 text-sm leading-relaxed text-ex-white/65">
      {children}
    </p>
  );
}

export function Identity() {
  const [mode, setMode] = useState<"dark" | "light">("dark");
  const isLight = mode === "light";
  const cellBg = isLight ? "bg-ex-white" : "bg-transparent";
  const cellBorder = isLight ? "border-ex-black/10 hover:border-ex-black/25" : "border-ex-white/15 hover:border-ex-white/30";
  const lockupSrc = isLight ? lockupDark.url : lockupLight.url;
  const wordmarkSrc = isLight ? exposureDark.url : exposureLight.url;
  const lockupTriSrc = isLight ? lockupTriDark.url : lockupTriLight.url;
  return (
    <Section
      id="logo"
      number="02"
      label="Logo"
      variant="dark"
      title={<>The <em className="italic">mark</em>.</>}
      blurb="Two approved marks: the primary lockup and the wordmark. The triangle is a graphic device — used for texture, pattern, and system identity — not a standalone logo. Keep one triangle-height of clearspace on every side of any mark."
    >
      {/* Dark / Light toggle */}
      <Reveal>
        <div className="flex justify-end">
          <div
            role="group"
            aria-label="Mark background"
            className="inline-flex items-center gap-1 rounded-full border border-ex-white/15 p-1"
          >
            {(["dark", "light"] as const).map((m) => {
              const active = mode === m;
              return (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMode(m)}
                  aria-pressed={active}
                  className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.22em] transition-colors duration-200 ${
                    active
                      ? "bg-ex-white text-ex-black"
                      : "text-ex-white/55 hover:text-ex-white"
                  }`}
                >
                  {m}
                </button>
              );
            })}
          </div>
        </div>
      </Reveal>

      {/* 1. Primary lockup */}
      <Reveal>
        <div className="mt-4">
          <Label>Primary Lockup</Label>
          <div className={`group relative mt-3 flex items-center justify-center border p-14 md:p-20 transition-colors duration-300 ${cellBg} ${cellBorder}`}>
            <img
              src={lockupSrc}
              alt="EXPOSURE by 29029 — primary lockup"
              className="w-[220px] md:w-[280px] h-auto"
            />
            <DownloadStub />
          </div>
          <UsageNote>The primary mark. Use it at the top of any layout.</UsageNote>
        </div>
      </Reveal>

      {/* 2. Wordmark + 3. Lockup + Triangle */}
      <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
        <Reveal delay={0.05}>
          <div>
            <Label>Wordmark</Label>
            <div className={`group relative mt-3 flex items-center justify-center border p-14 md:p-20 transition-colors duration-300 ${cellBg} ${cellBorder}`}>
              <img
                src={wordmarkSrc}
                alt="EXPOSURE wordmark"
                className="w-[220px] md:w-[280px] h-auto"
              />
              <DownloadStub />
            </div>
            <UsageNote>Secondary, for tight or supporting placements where the 29029 endorsement isn't needed.</UsageNote>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            <Label>Lockup + Triangle</Label>
            <div className={`group relative mt-3 flex items-center justify-center border p-14 md:p-20 transition-colors duration-300 ${cellBg} ${cellBorder}`}>
              <img
                src={lockupTriSrc}
                alt="EXPOSURE lockup + triangle mark"
                className="w-[220px] md:w-[280px] h-auto"
              />
              <DownloadStub />
            </div>
            <UsageNote>Use only when EXPOSURE needs to read as part of 29029 — external decks, sponsorships, co-branded placements. Not for EXPOSURE's own marketing.</UsageNote>
          </div>
        </Reveal>
      </div>

      {/* Graphic device */}
      <Reveal delay={0.15}>
        <div className="mt-14">
          <Label>Graphic Device</Label>
          <div className="mt-3 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Note */}
            <div className="flex flex-col justify-center">
              <p className="text-sm leading-relaxed text-ex-white/65">
                The 29029 triangle is a graphic device, not a standalone logo.
                In EXPOSURE's own materials it caps a layout: the primary
                lockup sits at the top, content sits between, and the
                triangle closes it at the bottom. The lockup and triangle are
                used together but kept separate — top and bottom — never
                combined into one mark here.
              </p>
            </div>

            {/* Diagram */}
            <div className="group relative flex flex-col items-center border border-ex-white/15 bg-ex-black/40 px-8 py-10 md:px-12 md:py-14">
              {/* Top: small lockup */}
              <img
                src={lockupLight.url}
                alt="EXPOSURE by 29029 — top cap"
                className="h-6 w-auto opacity-80"
              />

              {/* Middle: content placeholder */}
              <div className="my-10 flex flex-col items-center gap-2 md:my-14">
                <div className="h-px w-24 bg-ex-white/10" />
                <div className="h-px w-16 bg-ex-white/10" />
                <div className="h-px w-20 bg-ex-white/10" />
              </div>

              {/* Bottom: triangle */}
              <img
                src={triangle.url}
                alt="29029 triangle — bottom cap"
                className="h-5 w-auto"
                style={{ filter: "invert(18%) sepia(95%) saturate(6494%) hue-rotate(353deg) brightness(97%) contrast(92%)" }}
              />

              <DownloadStub />
            </div>
          </div>
        </div>
      </Reveal>

      {/* Clearspace & don'ts */}
      <Reveal delay={0.15}>
        <div className="mt-14 space-y-5">
          <p className="flex items-start gap-4 text-sm leading-relaxed text-ex-white/65">
            <span className="shrink-0 pt-0.5 text-[10px] font-bold uppercase tracking-[0.22em] text-ex-red">
              Clearspace
            </span>
            Minimum one triangle-height of empty space on every side of the mark. No type, imagery, or borders should intrude.
          </p>
          <p className="flex items-start gap-4 text-sm leading-relaxed text-ex-white/65">
            <span className="shrink-0 pt-0.5 text-[10px] font-bold uppercase tracking-[0.22em] text-ex-red">
              Color
            </span>
            Never recolor the mark. Use the light version on dark grounds and the dark version on light. No gradients, no overlays.
          </p>
          <p className="flex items-start gap-4 text-sm leading-relaxed text-ex-white/65">
            <span className="shrink-0 pt-0.5 text-[10px] font-bold uppercase tracking-[0.22em] text-ex-red">
              Proportion
            </span>
            Never stretch, compress, rotate, or distort. Scale uniformly from the center only.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
