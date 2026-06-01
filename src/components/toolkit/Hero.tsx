import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate -mt-[68px] overflow-hidden bg-ex-black text-ex-white"
    >
      {/* Thin thermal accent strip along the bottom edge */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-1"
        style={{
          background:
            "linear-gradient(90deg, #CC9933, #E8731A, #E1251B, #6B1410)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative mx-auto flex max-w-[1400px] flex-col items-start px-6 pb-14 pt-28 lg:px-10 lg:pt-32"
      >
        {/* Eyebrow */}
        <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-ex-white/45">
          V1
        </span>

        {/* Title */}
        <h1 className="mt-4 font-display text-[clamp(1.75rem,4vw,3.25rem)] font-light uppercase leading-[0.95] tracking-[0.04em] text-ex-white">
          EXPOSURE — BRAND TOOLKIT
        </h1>

        {/* Functional subtitle */}
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-ex-white/60">
          Brand guidelines and downloadable assets: intent, identity, type, color, imagery, and files.
        </p>
      </motion.div>
    </section>
  );
}
