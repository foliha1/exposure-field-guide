import { useState, useCallback } from "react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const colors = [
  { name: "EX Off-Black", hex: "#22211F", fr: 40, fg: "#E7E6E1" },
  { name: "EX Off-White", hex: "#E7E6E1", fr: 40, fg: "#22211F" },
  { name: "EX Red", hex: "#E1251B", fr: 15, fg: "#E7E6E1" },
  { name: "EX Gold", hex: "#CC9933", fr: 5, fg: "#22211F" },
];

function SwatchTile({
  name,
  hex,
  fg,
  copied,
  onCopy,
}: {
  name: string;
  hex: string;
  fr: number;
  fg: string;
  copied: boolean;
  onCopy: () => void;
}) {
  return (
    <button
      onClick={onCopy}
      className="group relative flex cursor-pointer flex-col justify-between border-0 p-5 text-left transition-[filter,transform] duration-200 hover:brightness-105 focus:outline-none md:p-7"
      style={{
        backgroundColor: hex,
        color: fg,
      }}
    >
      <span className="text-[10px] font-bold uppercase tracking-[0.28em] opacity-60 transition-opacity duration-200 group-hover:opacity-100">
        {name}
      </span>

      <div className="mt-10 md:mt-14">
        <span
          className={`block font-sans text-lg font-medium leading-[1.2] tracking-normal transition-opacity duration-150 md:text-xl ${copied ? "opacity-0" : "opacity-100"}`}
        >
          {hex}
        </span>
        <span
          className={`absolute bottom-5 left-5 text-[10px] font-bold uppercase tracking-[0.28em] transition-opacity duration-150 md:bottom-7 md:left-7 ${copied ? "opacity-100" : "opacity-0"}`}
        >
          Copied
        </span>
      </div>
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
        <div className="flex h-1.5 w-full">
          {colors.map((c) => (
            <div key={c.hex} style={{ width: `${c.fr}%`, backgroundColor: c.hex }} />
          ))}
        </div>
      </Reveal>

      {/* Swatch tiles */}
      <Reveal delay={0.06}>
        <div className="mt-6 grid h-[220px] w-full grid-cols-4 md:h-[280px]">
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
