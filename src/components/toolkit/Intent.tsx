import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Intent() {
  return (
    <Section
      id="intent"
      number="01"
      label="Intent"
      variant="light"
      title={<>Leadership is earned under <em className="italic">real</em> pressure.</>}
      blurb="EXPOSURE is the leadership program from 29029 — a controlled, sustained exposure to physical and decision-making load. It traces back to the core 29029 belief that growth happens under real pressure, not simulated pressure."
    >
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="text-lg leading-relaxed tracking-[-0.01em] text-ex-black/80 md:text-xl md:leading-[1.6]">
            EXPOSURE exists to develop leaders through endurance and transformation. We put teams under sustained physical and decision-making load — not to break them, but to reveal what they are capable of together. The program is a controlled exposure that compounds: each stage builds on the last, and the effect persists long after the event ends.
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="mt-6 text-lg leading-relaxed tracking-[-0.01em] text-ex-black/80 md:text-xl md:leading-[1.6]">
            This work traces directly to the 29029 core belief: growth happens under real pressure. Not simulated pressure. Not workshop pressure. The kind that arrives uninvited in the form of weather, fatigue, terrain, and time. We design conditions where teams must coordinate, decide, and endure — then we bring those same people back to their organizations changed.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-6 text-lg leading-relaxed tracking-[-0.01em] text-ex-black/80 md:text-xl md:leading-[1.6]">
            The audience is executive teams, founding teams, and operating leaders who need their people to perform together when conditions get worse, not better. The output is not a certificate. It is a shared reference point — a memory of who they were at hour fourteen that reshapes how they operate at hour one back at work.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-20 border-t border-ex-black/10 pt-10">
            <p className="font-display text-[clamp(1.5rem,3.5vw,2.75rem)] font-light leading-[1.15] tracking-[-0.02em] text-ex-black">
              The point is not the mountain. The point is who you are with each other at hour&nbsp;fourteen.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
