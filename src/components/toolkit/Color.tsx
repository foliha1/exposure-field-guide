import { Section } from "./Section";

const swatches = [
  { name: "EX Off-Black", hex: "#22211F", rgb: "34 · 33 · 31", role: "Primary ground", token: "--ex-black", fg: "#E7E6E1" },
  { name: "EX Off-White", hex: "#E7E6E1", rgb: "231 · 230 · 225", role: "Primary ground", token: "--ex-white", fg: "#22211F" },
  { name: "EX Red", hex: "#E1251B", rgb: "225 · 37 · 27", role: "Accent · CTA · ▲", token: "--ex-red", fg: "#E7E6E1" },
  { name: "EX Gold", hex: "#CC9933", rgb: "204 · 153 · 51", role: "Rare · once per surface", token: "--ex-gold", fg: "#22211F" },
];

export function ColorSection() {
  return (
    <Section
      id="color"
      number="03"
      label="Color"
      variant="light"
      title={<>Four colors, <em className="italic">held in ratio</em>.</>}
    >
      <div className="grid grid-cols-1 gap-px bg-ex-black/15 sm:grid-cols-2 lg:grid-cols-4">
        {swatches.map((s) => (
          <div key={s.hex} className="bg-ex-white">
            <div className="aspect-[4/3] p-6" style={{ backgroundColor: s.hex, color: s.fg }}>
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] opacity-70">{s.token}</div>
              <div className="mt-auto" />
            </div>
            <div className="space-y-2 p-6">
              <div className="font-display text-xl font-light uppercase">{s.name}</div>
              <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-ex-black/60">{s.role}</div>
              <div className="pt-2 text-xs text-ex-black/70">{s.hex}</div>
              <div className="text-xs text-ex-black/50">RGB {s.rgb}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-ex-black/60">
          Ratio · 40 / 40 / 15 / 5
        </div>
        <div className="flex h-3 w-full overflow-hidden">
          <div className="h-full" style={{ width: "40%", backgroundColor: "#22211F" }} />
          <div className="h-full" style={{ width: "40%", backgroundColor: "#E7E6E1", boxShadow: "inset 0 0 0 1px rgba(34,33,31,0.15)" }} />
          <div className="h-full" style={{ width: "15%", backgroundColor: "#E1251B" }} />
          <div className="h-full" style={{ width: "5%", backgroundColor: "#CC9933" }} />
        </div>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-ex-black/70">
          Off-black and off-white are co-equal grounds — alternate between them. Red is functional: CTAs, the delta mark, rules. Gold is rare. A single considered touch per surface.
        </p>
      </div>
    </Section>
  );
}