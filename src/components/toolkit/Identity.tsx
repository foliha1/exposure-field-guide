import { Section } from "./Section";
import { Reveal } from "./Reveal";
import exposureLight from "@/assets/logos/EXPOSURE_Light.svg.asset.json";
import lockupLight from "@/assets/logos/EXPOSURE_Lockup_Light.svg.asset.json";
import lockupTriLight from "@/assets/logos/EXPOSURE_Lockup-Tri_Light.svg.asset.json";
import triangle from "@/assets/logos/29029_Triangle.svg.asset.json";

function DownloadStub() {
  return (
    <span className="absolute bottom-4 right-4 text-[10px] font-bold uppercase tracking-[0.22em] text-ex-white/0 transition-colors duration-300 group-hover:text-ex-white/50">
      Download
    </span>
  );
}

export function Identity() {
  return (
    <Section
      id="logo"
      number="02"
      label="Logo"
      variant="dark"
      title={<>The <em className="italic">mark</em>.</>}
      blurb="Three approved marks: the EXPOSURE wordmark, the lockup with 29029, and the standalone delta. Whichever you reach for, keep one triangle-height of clearspace on every side — that single rule outranks the others."
    >
      {/* Primary lockup — large */}
      <Reveal>
        <div className="group relative flex items-center justify-center border border-ex-white/15 p-16 md:p-24">
          <img
            src={lockupLight.url}
            alt="EXPOSURE by 29029 — primary lockup"
            className="w-[280px] md:w-[380px] h-auto"
          />
          <DownloadStub />
        </div>
      </Reveal>

      {/* Row of marks */}
      <div className="mt-4 grid grid-cols-1 gap-px md:grid-cols-3">
        <Reveal delay={0.05}>
          <div className="group relative flex items-center justify-center border border-ex-white/15 p-14 md:p-20 hover:border-ex-white/30 transition-colors duration-300">
            <img
              src={exposureLight.url}
              alt="EXPOSURE wordmark"
              className="w-[220px] md:w-[280px] h-auto"
            />
            <DownloadStub />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="group relative flex items-center justify-center border border-ex-white/15 p-14 md:p-20 hover:border-ex-white/30 transition-colors duration-300">
            <img
              src={lockupTriLight.url}
              alt="EXPOSURE lockup + triangle mark"
              className="w-[220px] md:w-[280px] h-auto"
            />
            <DownloadStub />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="group relative flex items-center justify-center border border-ex-white/15 p-14 md:p-20 hover:border-ex-white/30 transition-colors duration-300">
            <img
              src={triangle.url}
              alt="29029 triangle mark"
              className="h-12 w-auto md:h-14"
            />
            <DownloadStub />
          </div>
        </Reveal>
      </div>

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
