import { useState, useCallback } from "react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const colors = [
  { name: "EX Off-Black", hex: "#22211F", fr: 40, fg: "#E7E6E1", rgb: "34 33 31" },
  { name: "EX Off-White", hex: "#E7E6E1", fr: 40, fg: "#22211F", rgb: "231 230 225" },
  { name: "EX Red", hex: "#E1251B", fr: 15, fg: "#E7E6E1", rgb: "225 37 27" },
  { name: "EX Gold", hex: "#CC9933", fr: 5, fg: "#22211F", rgb: "204 153 51" },
];

function SwatchTile({
  name,
  hex,
  rgb,
  fg,
  copied,
  onCopy,
}: {
  name: string;
  hex: string;
  rgb: string;
  fg: string;
  copied: boolean;
  onCopy: () => void;
}) {
  return (
    <button
      onClick={onCopy}
      className="group relative aspect-square cursor-pointer border-0 p-4 text-left transition-[filter] duration-200 hover:brightness-105 focus:outline-none md:p-5"
      style={{
        backgroundColor: hex,
        color: fg,
      }}
    >
      {/* Bottom-left spec stack */}
      <div className="absolute bottom-4 left-4 md:bottom-5 md:left-5">
        <div className="flex flex-col gap-[3px] font-sans text-[11px] leading-[1.35]">
          <div className="flex gap-1.5">
            <span className="opacity-50">Name</span>
            <span>{name}</span>
          </div>
          <div className="flex gap-1.5">
            <span className="opacity-50">HEX</span>
            <span>{hex}</span>
          </div>
          <div className="flex gap-1.5">
            <span className="opacity-50">RGB</span>
            <span>{rgb}</span>
          </div>
        </div>
      </div>

      {/* Copied confirmation */}
      <span
        className={`absolute bottom-4 right-4 text-[10px] font-bold uppercase tracking-[0.28em] transition-opacity duration-150 md:bottom-5 md:right-5 ${copied ? "opacity-100" : "opacity-0"}`}
      >
        Copied
      </span>
    </button>
  );
}

export function ColorSection() {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopy = useCallback(
    (hex: string) => {
      navigator.clipboard.writeText(hex).catch(() => {});
      setCopiedHex(hex);
      window.setTimeout(() => setCopiedHex((current) => (current === hex ? null : current)), 1200);
    },
    []
  );

  return (
    <Section
      id="color"
      number="03"
      label="Color"
      variant="light"
      title={<>Four colors, <em className="italic">held in ratio</em>.</>}
    >
      {/* Ratio bar */}
      <Reveal>
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-ex-black/50">
            40 / 40 / 15 / 5
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-ex-red">
            Red is exact — do not approximate
          </span>
        </div>
        <div className="flex h-10 w-full overflow-hidden">
          {colors.map((c) => (
            <div
              key={c.hex}
              className="flex items-center justify-center"
              style={{ width: `${c.fr}%`, backgroundColor: c.hex }}
            >
              <span
                className="text-xs font-bold tabular-nums tracking-wider"
                style={{ color: c.fg }}
              >
                {c.fr}%
              </span>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Swatch tiles — equal flat blocks, 2x2 on small, 4 across on md+ */}
      <Reveal delay={0.06}>
        <div className="mt-6 grid w-full grid-cols-2 md:grid-cols-4">
          {colors.map((c) => (
            <SwatchTile
              key={c.hex}
              {...c}
              copied={copiedHex === c.hex}
              onCopy={() => handleCopy(c.hex)}
            />
          ))}
        </div>
      </Reveal>

      {/* Caption */}
      <Reveal delay={0.12}>
        <p className="mt-10 max-w-xl text-sm leading-relaxed text-ex-black/70">
          Off-black and off-white are co-equal grounds — alternate between them to create rhythm across surfaces. Red is functional: CTAs, the delta mark, rules, and emphasis only. Gold is rare. One considered touch per surface, never decorative.
        </p>
      </Reveal>
    </Section>
  );
}
