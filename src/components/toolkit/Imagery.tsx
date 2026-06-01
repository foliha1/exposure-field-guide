import { Section } from "./Section";
import t1 from "@/assets/textures/Textures.jpg.asset.json";
import t2 from "@/assets/textures/Textures2.jpg.asset.json";
import t3 from "@/assets/textures/Textures3.jpg.asset.json";
import t4 from "@/assets/textures/Textures4.jpg.asset.json";
import t5 from "@/assets/textures/Textures5.jpg.asset.json";
import t6 from "@/assets/textures/Textures6.jpg.asset.json";
import t7 from "@/assets/textures/Textures7.jpg.asset.json";
import horiz from "@/assets/textures/EXPOSURE_Texture_Horiz.mp4.asset.json";

const textures = [t1, t2, t3, t4, t5, t6, t7];

export function Imagery() {
  return (
    <Section
      id="imagery"
      number="05"
      label="Imagery"
      variant="dark"
      title={<>Heat, grain, <em className="italic">evidence</em>.</>}
    >
      {/* Hero texture — moving */}
      <div className="relative aspect-[21/9] w-full overflow-hidden bg-ex-black">
        <video
          src={horiz.url}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-[10px] font-bold uppercase tracking-[0.22em] text-ex-white/80">
          <span>Texture · Horizontal</span>
          <span className="text-ex-red">▲ Brand motion</span>
        </div>
      </div>

      <p className="mt-12 max-w-xl text-sm leading-relaxed text-ex-white/70">
        The imagery system is thermal: documentary, heat-mapped, evidence of effort. Grain is welcome. Polish is not. Use the approved textures as backgrounds, dividers, or full-bleed moments — one per surface.
      </p>

      <div className="mt-12 grid grid-cols-2 gap-px bg-ex-white/15 md:grid-cols-4">
        {textures.map((t, i) => (
          <div key={t.url} className="relative aspect-square overflow-hidden bg-ex-black">
            <img
              src={t.url}
              alt={`Brand texture ${i + 1}`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
            <div className="absolute left-3 top-3 text-[10px] font-bold uppercase tracking-[0.22em] text-ex-white/80">
              {String(i + 1).padStart(2, "0")}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}