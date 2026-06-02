import { useState, useCallback, useEffect, useRef } from "react";
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
  onCopy,
}: {
  name: string;
  hex: string;
  rgb: string;
  fg: string;
  onCopy: () => void;
}) {
  return (
    <button
      onClick={onCopy}
      className="group relative aspect-square cursor-pointer border-0 p-4 text-left focus:outline-none md:p-5"
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
    </button>
  );
}

export function ColorSection() {
  const tagRef = useRef<HTMLDivElement>(null);
  const [tagVisible, setTagVisible] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none)").matches) return;
    const grid = gridRef.current;
    if (!grid) return;

    const onMove = (e: MouseEvent) => {
      const el = tagRef.current;
      if (!el) return;
      el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, calc(-100% - 14px))`;
    };
    const onEnter = () => setTagVisible(true);
    const onLeave = () => setTagVisible(false);

    grid.addEventListener("mousemove", onMove);
    grid.addEventListener("mouseenter", onEnter);
    grid.addEventListener("mouseleave", onLeave);
    return () => {
      grid.removeEventListener("mousemove", onMove);
      grid.removeEventListener("mouseenter", onEnter);
      grid.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const handleCopy = useCallback(
    (hex: string) => {
      navigator.clipboard.writeText(hex).catch(() => {});
    },
    []
  );

  return (
    <Section
      id="color"
      number="03"
      label="Color"
      variant="light"
      title="Color"
      blurb="A four-color system: off-black and off-white as co-equal grounds, red for emphasis, gold used sparingly. Hold the 40 / 40 / 15 / 5 ratio across any surface — roughly equal black and white, a measured amount of red, only a touch of gold."
    >
      {/* Swatch tiles — equal flat blocks, 2x2 on small, 4 across on md+ */}
      <Reveal>
        <div ref={gridRef} className="grid w-full grid-cols-2 md:grid-cols-4 [&_*]:cursor-none md:cursor-none">
          {colors.map((c) => (
            <SwatchTile
              key={c.hex}
              {...c}
              onCopy={() => handleCopy(c.hex)}
            />
          ))}
        </div>
      </Reveal>

      {/* Color ratio */}
      <Reveal delay={0.06}>
        <div className="mt-14 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-ex-red">
              Color Ratio
            </span>
            <p className="mt-3 text-sm leading-relaxed text-ex-black/65">
              Roughly equal off-black and off-white grounds, a measured amount of red, and only a touch of gold — held across any surface.
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
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
          </div>
        </div>
      </Reveal>

      {/* Cursor-following tag (hidden on touch) */}
      <div
        ref={tagRef}
        aria-hidden="true"
        className={`pointer-events-none fixed left-0 top-0 z-50 hidden select-none whitespace-nowrap bg-ex-red px-2.5 py-1 font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-ex-white transition-opacity duration-150 md:block ${tagVisible ? "opacity-100" : "opacity-0"}`}
        style={{ borderRadius: 9999 }}
      >
        Copy Hex
      </div>

      {/* Caption */}
      <Reveal delay={0.12}>
        <p className="mt-10 max-w-xl text-sm leading-relaxed text-ex-black/70">
          Off-black and off-white are co-equal grounds — alternate between them to create rhythm across surfaces. Red is functional: CTAs, the delta mark, rules, and emphasis only. Gold is rare. One considered touch per surface, never decorative.
        </p>
      </Reveal>
    </Section>
  );
}
