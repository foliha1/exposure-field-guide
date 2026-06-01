import { Section } from "./Section";

const files = [
  { name: "Wordmark", file: "exposure-wordmark.svg", format: "SVG", size: "1 KB" },
  { name: "Color tokens", file: "exposure-color-tokens.json", format: "JSON", size: "1 KB" },
  { name: "Full brand kit", file: "exposure-brand-kit.zip", format: "ZIP", size: "1 KB" },
];

export function Assets() {
  return (
    <Section
      id="assets"
      number="07"
      label="Assets"
      variant="dark"
      title={<>Take what you <em className="italic">need</em>.</>}
    >
      <div className="border-y border-ex-white/20">
        <div className="grid grid-cols-12 gap-6 border-b border-ex-white/15 py-4 text-[10px] font-bold uppercase tracking-[0.22em] text-ex-white/50">
          <div className="col-span-6 md:col-span-6">File</div>
          <div className="col-span-2 hidden md:block">Format</div>
          <div className="col-span-2 hidden md:block">Size</div>
          <div className="col-span-6 text-right md:col-span-2">Action</div>
        </div>
        {files.map((f) => (
          <a
            key={f.file}
            href={`/downloads/${f.file}`}
            download
            className="group grid grid-cols-12 items-center gap-6 border-b border-ex-white/10 py-6 transition-colors duration-150 hover:bg-ex-white/[0.03]"
          >
            <div className="col-span-6 md:col-span-6">
              <div className="font-display text-2xl font-light uppercase">{f.name}</div>
              <div className="mt-1 font-mono text-xs text-ex-white/50">{f.file}</div>
            </div>
            <div className="col-span-2 hidden text-xs text-ex-white/70 md:block">{f.format}</div>
            <div className="col-span-2 hidden text-xs text-ex-white/70 md:block">{f.size}</div>
            <div className="col-span-6 text-right md:col-span-2">
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-ex-red transition-transform duration-150 group-hover:-translate-y-px">
                ▲ Download
              </span>
            </div>
          </a>
        ))}
      </div>

      <p className="mt-10 max-w-xl text-sm leading-relaxed text-ex-white/60">
        Use the approved files as shipped. If a use case is not covered here, do not improvise — contact the brand team and we'll add it.
      </p>
    </Section>
  );
}