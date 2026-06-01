import { motion } from "framer-motion";
import lockupTriLight from "@/assets/logos/EXPOSURE_Lockup-Tri_Light.svg.asset.json";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate -mt-[68px] overflow-hidden bg-ex-black text-ex-white"
    >
      {/* Thermal gradient — the single expressive moment */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 75% 60% at 78% 92%, #CC9933 0%, #E8731A 18%, #E1251B 38%, #6B1410 60%, #22211F 82%)",
          }}
        />
        <div
          className="absolute inset-0 mix-blend-screen opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 45% 35% at 82% 96%, rgba(255,210,90,0.55), transparent 65%)",
          }}
        />
        {/* Film grain */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.22] mix-blend-overlay"
          aria-hidden
        >
          <filter id="hero-grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="2"
              stitchTiles="stitch"
            />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.95 0"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#hero-grain)" />
        </svg>
        {/* Soft vignette into next section */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-ex-black/40" />
      </div>

      <div className="relative mx-auto flex max-w-[1400px] flex-col items-center px-6 pb-16 pt-32 text-center lg:px-10 lg:pt-36 lg:pb-20">
        {/* Lockup + triangle — the brand mark */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <img
            src={lockupTriLight.url}
            alt="EXPOSURE by 29029"
            className="h-auto w-[220px] sm:w-[280px]"
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="mt-16 max-w-5xl font-display text-[clamp(2.5rem,7vw,6.5rem)] font-light uppercase leading-[0.98] tracking-[-0.01em] text-ex-white sm:mt-20"
        >
          Your team <em className="italic">won't</em> be the same
        </motion.h1>

        {/* Supporting line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
          className="mt-10 max-w-xl text-base leading-relaxed text-ex-white/80 sm:text-lg"
        >
          The EXPOSURE brand, codified. Intent, system, and assets in one place.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
          className="mt-20 flex flex-col items-center gap-6 sm:mt-24"
        >
          {/* Scroll cue */}
          <div className="flex flex-col items-center gap-2 text-[10px] font-bold uppercase tracking-[0.32em] text-ex-white/45">
            <span>Scroll</span>
            <span className="h-8 w-px animate-pulse bg-ex-white/30" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}