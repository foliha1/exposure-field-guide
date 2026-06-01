import { Section } from "./Section";

export function Intent() {
  return (
    <Section
      id="intent"
      number="01"
      label="Intent"
      variant="light"
      title={<>What <em className="italic">Exposure</em> is.</>}
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <p className="max-w-md text-base leading-relaxed text-ex-black/80">
          EXPOSURE is a leadership development program built on endurance training. We put teams under sustained physical and decision-making load, then return them to work changed. It is not a retreat. It is not a workshop. It is a controlled exposure that compounds.
        </p>
        <div className="space-y-6 text-sm leading-relaxed text-ex-black/70">
          <p>
            <span className="mr-3 text-[10px] font-bold uppercase tracking-[0.22em] text-ex-red">For</span>
            Executive teams, founding teams, and operating leaders who need their people to perform together when the conditions get worse, not better.
          </p>
          <p>
            <span className="mr-3 text-[10px] font-bold uppercase tracking-[0.22em] text-ex-red">Against</span>
            Comfort-grade offsites. Trust falls. Anything that asks less of people than the work already does.
          </p>
        </div>
      </div>
      <blockquote className="mt-20 border-l-2 border-ex-red pl-6 font-display text-[clamp(1.5rem,3vw,2.5rem)] font-light italic leading-[1.15] text-ex-black">
        "The point is not the mountain. The point is who you are with each other at hour fourteen."
      </blockquote>
    </Section>
  );
}