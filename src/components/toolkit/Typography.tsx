import { Section } from "./Section";

export function Typography() {
  return (
    <Section
      id="type"
      number="04"
      label="Typography"
      variant="dark"
      title={<>Two voices, <em className="italic">used quietly</em>.</>}
    >
      <div className="space-y-16">
        {/* Display */}
        <div className="border-t border-ex-white/15 pt-8">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-3">
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-ex-red">Display</div>
              <div className="mt-2 text-xs text-ex-white/60">Canela Light · Light Italic</div>
              <div className="mt-1 text-xs text-ex-white/60">All caps. Italic on emphasis.</div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <p className="font-display text-[clamp(2rem,5vw,5rem)] font-light uppercase leading-[0.98] tracking-[-0.01em]">
                Hour <em className="italic">fourteen</em>. The team is still moving.
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="border-t border-ex-white/15 pt-8">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-3">
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-ex-red">Text</div>
              <div className="mt-2 text-xs text-ex-white/60">PP Neue Montreal Medium · Bold</div>
            </div>
            <div className="col-span-12 md:col-span-9 space-y-4">
              <p className="text-base leading-relaxed text-ex-white/85">
                The mountain is the medium, not the message. We use sustained physical load to expose how a team actually decides, communicates, and recovers under pressure. The week is built around three controlled exposures, each one harder than the last.
              </p>
              <p className="text-sm leading-relaxed text-ex-white/60">
                Caption / secondary — 14px, 1.6 line-height. Used for footnotes, asset metadata, and supporting facts.
              </p>
            </div>
          </div>
        </div>

        {/* Eyebrow */}
        <div className="border-t border-ex-white/15 pt-8">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-3">
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-ex-red">Eyebrow / Label</div>
              <div className="mt-2 text-xs text-ex-white/60">PP Neue Montreal Bold · tracked +220</div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-ex-white">
                Section · Module · Field label
              </div>
            </div>
          </div>
        </div>

        {/* Scale */}
        <div className="grid grid-cols-2 gap-px bg-ex-white/15 sm:grid-cols-4">
          {[
            ["Display L", "96 / 96"],
            ["Display M", "64 / 64"],
            ["Body L", "18 / 28"],
            ["Body S", "14 / 22"],
          ].map(([k, v]) => (
            <div key={k} className="bg-ex-black p-6">
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-ex-white/50">{k}</div>
              <div className="mt-2 font-display text-2xl font-light text-ex-white">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}