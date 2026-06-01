import { Section } from "./Section";
import { Reveal } from "./Reveal";

type AssetCard = {
  name: string;
  format: string;
  file: string;
  description: string;
  disabled?: boolean;
};

const assets: AssetCard[] = [
  {
    name: "Logo Pack",
    format: "SVG · PNG",
    file: "logo-pack.zip",
    description: "Wordmark, lockups, and the delta mark. Light and dark variants.",
  },
  {
    name: "Color File",
    format: "ASE · JSON",
    file: "color-file.zip",
    description: "The four-color system as design tokens and a swatch library.",
  },
  {
    name: "Fonts",
    format: "WOFF2 · OTF",
    file: "fonts.zip",
    description: "Canela Light and PP Neue Montreal. Licensed for brand use only.",
  },
  {
    name: "Brand Guide",
    format: "PDF",
    file: "brand-guide.pdf",
    description: "The full field guide — intent, system, usage, and examples.",
  },
];

export function Assets() {
  return (
    <Section
      id="assets"
      number="06"
      label="Assets"
      variant="dark"
      title={<>Take what you <em className="italic">need</em>.</>}
    >
      <div className="grid grid-cols-1 gap-px bg-ex-white/15 sm:grid-cols-2">
        {assets.map((a, i) => (
          <Reveal key={a.file} delay={0.05 + i * 0.04}>
            <article className="group relative flex h-full flex-col justify-between bg-ex-black p-8 md:p-10">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-ex-red">
                  {String(i + 1).padStart(2, "0")} / {a.format}
                </div>
                <h3 className="mt-4 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-light uppercase leading-[1.05] tracking-[-0.01em] text-ex-white">
                  {a.name}
                </h3>
                <p className="mt-4 max-w-sm text-[14px] leading-[1.55] text-ex-white/60">
                  {a.description}
                </p>
              </div>

              <div className="mt-10 flex items-center justify-between gap-4">
                <span className="font-mono text-[11px] text-ex-white/40">{a.file}</span>
                <DownloadButton file={a.file} disabled={a.disabled} />
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <p className="mt-12 max-w-xl text-sm leading-relaxed text-ex-white/55">
        Open access — no email gate. Use the files as shipped. If a use case isn't covered, contact the brand team and we'll add it.
      </p>
    </Section>
  );
}

function DownloadButton({ file, disabled }: { file: string; disabled?: boolean }) {
  if (disabled) {
    return (
      <span
        aria-disabled
        className="inline-flex items-center gap-2 border border-ex-white/15 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.22em] text-ex-white/30"
      >
        ▲ Unavailable
      </span>
    );
  }
  return (
    <a
      href={`/downloads/${file}`}
      download={file}
      className="inline-flex items-center gap-2 border border-ex-white/25 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.22em] text-ex-white transition-colors duration-150 hover:border-ex-red hover:bg-ex-red hover:text-ex-white active:bg-ex-red/80 active:translate-y-px focus-visible:outline-none focus-visible:border-ex-red"
    >
      ▲ Download
    </a>
  );
}