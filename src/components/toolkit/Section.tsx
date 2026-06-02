import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  id,
  number,
  label,
  title,
  blurb,
  variant = "light",
  children,
}: {
  id: string;
  number: string;
  label: string;
  title: ReactNode;
  blurb?: string;
  variant?: "light" | "dark";
  children: ReactNode;
}) {
  const dark = variant === "dark";
  const muted = dark ? "text-ex-white/60" : "text-ex-black/60";
  return (
    <section
      id={id}
      className={
        dark
          ? "border-t border-ex-white/10 bg-ex-black text-ex-white"
          : "border-t border-ex-black/10 bg-ex-white text-ex-black"
      }
    >
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-12 lg:py-28">
        {/* Eyebrow */}
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-ex-red">
              {number}
            </span>
            <span className={`text-[10px] font-bold uppercase tracking-[0.28em] ${muted}`}>
              {label}
            </span>
          </div>
        </Reveal>

        {/* Title + Blurb */}
        <Reveal delay={0.03}>
          <div className="mt-6 grid grid-cols-12 gap-6">
            <h2 className="col-span-12 md:col-span-5 font-display text-[clamp(1.5rem,2.5vw,2.25rem)] font-light leading-[1.15] tracking-[-0.01em]">
              {title}
            </h2>
            {blurb && (
              <p className={`col-span-12 md:col-span-6 md:col-start-7 text-[15px] leading-[1.55] ${muted}`}>
                {blurb}
              </p>
            )}
          </div>
        </Reveal>

        {/* Content */}
        <Reveal delay={0.06}>
          <div className="mt-10">{children}</div>
        </Reveal>
      </div>
    </section>
  );
}
