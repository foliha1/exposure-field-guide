import { Section } from "./Section";
import { Reveal } from "./Reveal";

function Specimen({
  label,
  spec,
  family,
  children,
  delay = 0,
}: {
  label: string;
  spec: string;
  family: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="group border-t border-ex-black/10 pt-10 md:pt-14">
        <div className="mb-6 flex flex-col gap-1 md:mb-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-ex-red">
            {label}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-ex-black/40">
            {family} · {spec}
          </span>
        </div>
        {children}
      </div>
    </Reveal>
  );
}

export function Typography() {
  return (
    <Section
      id="type"
      number="04"
      label="Typography"
      variant="light"
      title={<>Two voices, <em className="italic">used quietly</em>.</>}
      blurb="Two typefaces. Canela Light carries display and editorial moments — titles, pull quotes, the rare statement. PP Neue Montreal handles everything else: body copy, UI, labels, and tracked uppercase eyebrows."
    >
      {/* Typeface specimen */}
      <Reveal>
        <div className="bg-ex-black text-ex-white">
          <div className="px-6 py-16 md:px-12 md:py-24 lg:py-32">
            <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-12">
              {/* Canela */}
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-ex-white/40">
                  Canela
                </span>
                <div className="mt-10 space-y-10">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-ex-white/40 block mb-4">
                      Canela Light
                    </span>
                    <p className="font-display text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1.05] tracking-[-0.02em]">
                      Exposure
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-ex-white/40 block mb-4">
                      Canela Light Italic
                    </span>
                    <p className="font-display text-[clamp(2.5rem,5vw,4rem)] font-light italic leading-[1.05] tracking-[-0.02em]">
                      Exposure
                    </p>
                  </div>
                </div>
              </div>

              {/* PP Neue Montreal */}
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-ex-white/40">
                  PP Neue Montreal
                </span>
                <div className="mt-10 space-y-10">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-ex-white/40 block mb-4">
                      PP Neue Montreal Regular
                    </span>
                    <p className="text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.05] tracking-[-0.02em]">
                      Exposure
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-ex-white/40 block mb-4">
                      PP Neue Montreal Bold
                    </span>
                    <p className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.02em]">
                      Exposure
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="space-y-2 mt-10">
        {/* H1 / Hero */}
        <Specimen
          label="H1 / Hero"
          spec="72px / 1.0"
          family="Canela Light"
        >
          <p className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-light uppercase leading-[1.0] tracking-[-0.02em] text-ex-black">
            Your team won't be the <em className="italic">same</em>
          </p>
        </Specimen>

        {/* H2 / Section heads */}
        <Specimen
          label="H2 / Section Head"
          spec="48px / 1.05"
          family="Canela Light"
          delay={0.04}
        >
          <p className="font-display text-[clamp(1.75rem,4vw,3rem)] font-light uppercase leading-[1.05] tracking-[-0.02em] text-ex-black">
            Four colors, <em className="italic">held in ratio</em>
          </p>
        </Specimen>

        {/* Pull quote */}
        <Specimen
          label="Pull Quote"
          spec="32px / 1.2"
          family="Canela Light"
          delay={0.08}
        >
          <p className="font-display text-[clamp(1.25rem,2.5vw,2rem)] font-light leading-[1.2] tracking-[-0.01em] text-ex-black">
            The point is not the mountain. The point is who you are with each other at <em className="italic">hour fourteen</em>.
          </p>
        </Specimen>

        {/* H3 / Block titles */}
        <Specimen
          label="H3 / Block Title"
          spec="22px / 1.3"
          family="PP Neue Montreal Bold"
          delay={0.12}
        >
          <p className="text-[22px] font-bold leading-[1.3] tracking-[-0.01em] text-ex-black">
            Exposure exists to develop leaders through endurance
          </p>
        </Specimen>

        {/* Eyebrow / Label */}
        <Specimen
          label="Eyebrow / Label"
          spec="13px / 1.4 · tracked 0.28em"
          family="PP Neue Montreal Bold"
          delay={0.16}
        >
          <p className="text-[13px] font-bold uppercase leading-[1.4] tracking-[0.28em] text-ex-black">
            Exposure by 29029
          </p>
        </Specimen>

        {/* Body */}
        <Specimen
          label="Body"
          spec="17px / 1.6"
          family="PP Neue Montreal Regular"
          delay={0.20}
        >
          <p className="max-w-2xl text-[17px] leading-[1.6] tracking-[-0.01em] text-ex-black/80">
            We put teams under sustained physical and decision-making load — not to break them, but to reveal what they are capable of together. The program compounds: each stage builds on the last, and the effect persists long after the event ends.
          </p>
        </Specimen>

        {/* Caption / Attribution */}
        <Specimen
          label="Caption / Attribution"
          spec="13px / 1.5"
          family="PP Neue Montreal Regular"
          delay={0.24}
        >
          <p className="text-[13px] leading-[1.5] text-ex-black/50">
            The 29029 core belief: growth happens under real pressure. Not simulated. Not workshop-grade.
          </p>
        </Specimen>
      </div>
    </Section>
  );
}
