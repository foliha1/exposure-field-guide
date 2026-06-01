import { Section } from "./Section";
import exposureDark from "@/assets/logos/EXPOSURE_Dark.svg.asset.json";
import exposureLight from "@/assets/logos/EXPOSURE_Light.svg.asset.json";
import lockupDark from "@/assets/logos/EXPOSURE_Lockup_Dark.svg.asset.json";
import lockupLight from "@/assets/logos/EXPOSURE_Lockup_Light.svg.asset.json";
import lockupTriDark from "@/assets/logos/EXPOSURE_Lockup-Tri_Dark.svg.asset.json";
import lockupTriLight from "@/assets/logos/EXPOSURE_Lockup-Tri_Light.svg.asset.json";

const variants = [
  { label: "Wordmark", note: "Default mark. Use at small sizes and in horizontal lockups.", light: exposureLight.url, dark: exposureDark.url, size: "w-[180px]" },
  { label: "Lockup", note: "Wordmark with 'BY 29029'. Use when context for the parent brand is needed.", light: lockupLight.url, dark: lockupDark.url, size: "w-[180px]" },
  { label: "Lockup + Triangle", note: "The full mark with the delta. Reserved for moments — covers, openings, signature pages.", light: lockupTriLight.url, dark: lockupTriDark.url, size: "w-[150px]" },
];

export function Identity() {
  return (
    <Section
      id="logo"
      number="03"
      label="Logo"
      variant="light"
      title={<>The <em className="italic">mark</em>.</>}
    >
      <div className="space-y-px bg-ex-black/15">
        {variants.map((v) => (
          <div key={v.label} className="grid grid-cols-1 gap-px bg-ex-black/15 md:grid-cols-3">
            <div className="bg-ex-white p-8">
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-ex-red">
                {v.label}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ex-black/70">{v.note}</p>
            </div>
            <div className="flex items-center justify-center bg-ex-white p-10">
              <img src={v.dark} alt={`${v.label} — dark on light`} className={`${v.size} h-auto`} />
            </div>
            <div className="flex items-center justify-center bg-ex-black p-10">
              <img src={v.light} alt={`${v.label} — light on dark`} className={`${v.size} h-auto`} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 text-sm leading-relaxed text-ex-black/75 md:grid-cols-2">
        <p>
          <span className="mr-3 text-[10px] font-bold uppercase tracking-[0.22em] text-ex-red">Clear space</span>
          A minimum of the triangle's height on every side. The mark needs air.
        </p>
        <p>
          <span className="mr-3 text-[10px] font-bold uppercase tracking-[0.22em] text-ex-red">Minimum size</span>
          96px wide on digital, 24mm in print. Below that, switch to the wordmark only.
        </p>
      </div>
    </Section>
  );
}