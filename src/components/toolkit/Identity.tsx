import { Section } from "./Section";

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="font-sans text-2xl font-bold uppercase tracking-[0.18em]">EXPOSURE</span>
      <span className="text-ex-red text-xl leading-none">▲</span>
    </div>
  );
}

export function Identity() {
  return (
    <Section
      id="logo"
      number="03"
      label="Logo"
      variant="light"
      title={<>The <em className="italic">mark</em>.</>}
    >
      <div className="grid grid-cols-1 gap-px bg-ex-black/15 md:grid-cols-2">
        {/* Lockup */}
        <div className="bg-ex-white p-10">
          <div className="mb-6 text-[10px] font-bold uppercase tracking-[0.22em] text-ex-black/50">Primary lockup</div>
          <div className="flex h-48 items-center justify-center border border-dashed border-ex-black/20">
            <Wordmark className="text-ex-black" />
          </div>
        </div>
        {/* Clear space */}
        <div className="bg-ex-white p-10">
          <div className="mb-6 text-[10px] font-bold uppercase tracking-[0.22em] text-ex-black/50">Clear space · X = height of ▲</div>
          <div className="flex h-48 items-center justify-center bg-ex-black/[0.04]">
            <div className="border border-dashed border-ex-red p-8">
              <Wordmark className="text-ex-black" />
            </div>
          </div>
        </div>
        {/* Reversed */}
        <div className="bg-ex-black p-10 text-ex-white">
          <div className="mb-6 text-[10px] font-bold uppercase tracking-[0.22em] text-ex-white/50">Reversed</div>
          <div className="flex h-48 items-center justify-center border border-dashed border-ex-white/20">
            <Wordmark />
          </div>
        </div>
        {/* Minimum size */}
        <div className="bg-ex-white p-10">
          <div className="mb-6 text-[10px] font-bold uppercase tracking-[0.22em] text-ex-black/50">Minimum size · 96px digital</div>
          <div className="flex h-48 items-end justify-center gap-8 border border-dashed border-ex-black/20 p-4">
            <div className="text-center">
              <div className="font-sans text-xs font-bold uppercase tracking-[0.18em]">EXPOSURE ▲</div>
              <div className="mt-2 text-[9px] uppercase tracking-[0.22em] text-ex-black/40">96px</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="mb-6 text-[10px] font-bold uppercase tracking-[0.22em] text-ex-black/60">Misuse</div>
        <div className="grid grid-cols-2 gap-px bg-ex-black/15 md:grid-cols-4">
          {[
            { label: "Don't stretch", style: { transform: "scaleX(1.6)" } },
            { label: "Don't recolor", className: "text-ex-gold" },
            { label: "Don't outline", style: { WebkitTextStroke: "1px #22211F", color: "transparent" } as React.CSSProperties },
            { label: "Don't rotate", style: { transform: "rotate(-8deg)" } },
          ].map((m) => (
            <div key={m.label} className="relative bg-ex-white p-8">
              <span className="absolute right-3 top-3 text-ex-red text-xl leading-none">✕</span>
              <div className="flex h-24 items-center justify-center overflow-hidden">
                <span
                  className={`font-sans text-base font-bold uppercase tracking-[0.18em] ${m.className ?? "text-ex-black"}`}
                  style={m.style}
                >
                  EXPOSURE ▲
                </span>
              </div>
              <div className="mt-4 text-[10px] font-bold uppercase tracking-[0.22em] text-ex-black/60">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}