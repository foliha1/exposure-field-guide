import { Section } from "./Section";
import triangleMark from "@/assets/logos/29029_Triangle.svg.asset.json";

const principles = [
  {
    n: "01",
    title: "Direct, never loud",
    do: "State the thing. Let the weight of the sentence carry it.",
    dont: "Hype words. Exclamation marks. Stacked superlatives.",
  },
  {
    n: "02",
    title: "Contrarian by evidence",
    do: "Say the unpopular thing when the data backs it.",
    dont: "Contrarian as a pose. Disagreement for attention.",
  },
  {
    n: "03",
    title: "Physical, specific, earned",
    do: "Hour fourteen. Mile thirty-two. Heart rate one-sixty.",
    dont: "Journey. Transformation. Unleash your potential.",
  },
  {
    n: "04",
    title: "Restraint is the premium signal",
    do: "One claim per page. One image per moment.",
    dont: "Decorate. Hedge. Pad with adjectives.",
  },
  {
    n: "05",
    title: "Always plural, always the team",
    do: "Your team. Together. The room at the end of it.",
    dont: "You as hero. Individual transformation arcs.",
  },
];

export function Voice() {
  return (
    <Section
      id="voice"
      number="06"
      label="Voice & Principles"
      variant="dark"
      title={<>How it <em className="italic">sounds</em>.</>}
    >
      <ul className="divide-y divide-ex-white/15 border-y border-ex-white/15">
        {principles.map((p) => (
          <li key={p.n} className="grid grid-cols-12 gap-6 py-8">
            <div className="col-span-12 md:col-span-1">
              <span className="inline-flex items-center gap-2">
                <img src={triangleMark.url} alt="" aria-hidden className="h-5 w-auto" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-ex-white/50">{p.n}</span>
              </span>
            </div>
            <div className="col-span-12 md:col-span-4">
              <h3 className="font-display text-2xl font-light uppercase leading-tight">{p.title}</h3>
            </div>
            <div className="col-span-12 md:col-span-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-ex-red">Do</div>
                <p className="text-sm leading-relaxed text-ex-white/85">{p.do}</p>
              </div>
              <div>
                <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-ex-white/50">Don't</div>
                <p className="text-sm leading-relaxed text-ex-white/50 line-through decoration-ex-white/20">{p.dont}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}