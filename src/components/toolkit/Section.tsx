import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  id,
  number,
  label,
  title,
  variant = "light",
  children,
}: {
  id: string;
  number: string;
  label: string;
  title: ReactNode;
  variant?: "light" | "dark";
  children: ReactNode;
}) {
  const dark = variant === "dark";
  return (
    <section
      id={id}
      className={
        dark
          ? "border-t border-ex-white/10 bg-ex-black text-ex-white"
          : "border-t border-ex-black/10 bg-ex-white text-ex-black"
      }
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-6 py-24 lg:px-12 lg:py-32">
        <Reveal className="col-span-12 md:col-span-3">
          <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-4">
            <span className={`text-[10px] font-bold uppercase tracking-[0.28em] ${dark ? "text-ex-red" : "text-ex-red"}`}>
              {number}
            </span>
            <span className={`text-[10px] font-bold uppercase tracking-[0.28em] ${dark ? "text-ex-white/60" : "text-ex-black/60"}`}>
              {label}
            </span>
          </div>
        </Reveal>
        <div className="col-span-12 md:col-span-9">
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,4.5vw,4rem)] font-light uppercase leading-[1.02] tracking-[-0.01em]">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-12">{children}</div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}