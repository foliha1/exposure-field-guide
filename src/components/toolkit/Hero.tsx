import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-ex-black text-ex-white">
      {/* Thermal gradient — the one expressive moment */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 78% 90%, #CC9933 0%, #E85A1A 22%, #E1251B 42%, #6B1410 62%, #22211F 82%)",
          }}
        />
        <div
          className="absolute inset-0 mix-blend-overlay opacity-70"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 82% 95%, rgba(255,200,80,0.55), transparent 60%)",
          }}
        />
        {/* Film grain via SVG turbulence */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.22] mix-blend-overlay" aria-hidden>
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.9 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-ex-black/70" />
      </div>

      <div className="relative mx-auto flex min-h-[92vh] max-w-[1400px] flex-col justify-between px-6 pb-12 pt-28 lg:px-12 lg:pt-32">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-ex-white/80">
              Exposure · Brand Toolkit · v1.0
            </span>
            <span className="h-px w-16 bg-ex-gold" />
          </div>
        </Reveal>

        <div className="mt-auto max-w-5xl">
          <Reveal delay={0.05}>
            <h1 className="font-display text-[clamp(2.75rem,8vw,8rem)] font-light uppercase leading-[0.95] tracking-[-0.01em]">
              Your team won't <br className="hidden sm:block" />
              be the <em className="italic text-ex-red">same</em>.
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-md text-sm leading-relaxed text-ex-white/75">
                A B2B leadership development program built on endurance training. This toolkit is the working reference — intent, voice, identity, and the approved assets.
              </p>
              <a
                href="#assets"
                className="group inline-flex items-center gap-3 border border-ex-red px-5 py-3 text-[11px] font-bold uppercase tracking-[0.22em] text-ex-red transition-colors duration-150 hover:bg-ex-red hover:text-ex-white"
              >
                <span>Download assets</span>
                <span className="transition-transform duration-150 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}