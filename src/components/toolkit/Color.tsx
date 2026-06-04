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
  copied,
}: {
  name: string;
  hex: string;
  rgb: string;
  fg: string;
  onCopy: () => void;
  copied: boolean;
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
      {/* Copied confirmation pill (top-right) */}
      <span
        aria-live="polite"
        className={`absolute right-3 top-3 select-none whitespace-nowrap px-2 py-1 font-sans text-[10px] font-medium uppercase tracking-[0.22em] transition-opacity duration-150 md:right-4 md:top-4 ${copied ? "opacity-100" : "opacity-0"}`}
        style={{
          backgroundColor: fg,
          color: hex,
          borderRadius: 9999,
        }}
      >
        Copied
      </span>
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
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
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
      setCopiedHex(hex);
      window.setTimeout(() => {
        setCopiedHex((current) => (current === hex ? null : current));
      }, 1400);
    },
    []
  );

  return (
    <Section
      id="color"
      number="02"
      label="Color"
      variant="light"
      title="Color"
      blurb="Four colors. Off-black and off-white are the main grounds. Red is for emphasis, gold for rare accents. Keep the 40 / 40 / 15 / 5 mix on any surface."
    >
      {/* Swatch tiles — equal flat blocks, 2x2 on small, 4 across on md+ */}
      <Reveal>
        <div ref={gridRef} className="grid w-full grid-cols-2 md:grid-cols-4 [&_*]:cursor-none md:cursor-none">
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
        className={`pointer-events-none fixed left-0 top-0 z-50 hidden select-none whitespace-nowrap px-2.5 py-1 font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-ex-white transition-[opacity,background-color] duration-150 md:block ${tagVisible ? "opacity-100" : "opacity-0"} ${copiedHex ? "bg-ex-black" : "bg-ex-red"}`}
        style={{ borderRadius: 9999 }}
      >
        {copiedHex ? `Copied ${copiedHex}` : "Copy Hex"}
      </div>

      {/* Caption */}
      <Reveal delay={0.12}>
        <p className="mt-10 max-w-xl text-sm leading-relaxed text-ex-black/70">
          Use off-black and off-white as your main backgrounds, and switch between them to keep things fresh. Save red for buttons, the mark, and emphasis. Use gold rarely — one small touch per surface.
        </p>
      </Reveal>

      {/* Download */}
      <Reveal delay={0.16}>
        <div className="mt-10 flex items-center gap-6">
          <a
            href="/downloads/EXPOSURE-Color-Tokens.zip"
            download="EXPOSURE-Color-Tokens.zip"
            className="inline-flex items-center gap-2 border border-ex-black/25 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.22em] text-ex-black transition-colors duration-150 hover:border-ex-red hover:bg-ex-red hover:text-ex-white active:bg-ex-red/80 active:translate-y-px focus-visible:outline-none focus-visible:border-ex-red"
          >
            Download color tokens
          </a>
          <span className="font-mono text-[11px] text-ex-black/40">EXPOSURE-Color-Tokens.zip · JSON · CSS</span>
        </div>
      </Reveal>
    </Section>
  );
}
