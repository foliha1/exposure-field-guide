import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { useEffect, useState } from "react";

type AssetCard = {
  name: string;
  format: string;
  file: string;
  description: string;
  disabled?: boolean;
};

const assets: AssetCard[] = [
  {
    name: "Logos",
    format: "SVG \u00b7 PNG",
    file: "EXPOSURE Logos.zip",
    description: "Wordmark, lockups, and the triangle. Light and dark.",
  },
  {
    name: "Textures",
    format: "PNG",
    file: "EXPOSURE Textures.zip",
    description: "Thermal gradient and grain textures for backgrounds and key art.",
  },
  {
    name: "Typefaces",
    format: "WOFF2 \u00b7 OTF",
    file: "EXPOSURE Typefaces.zip",
    description: "Canela Light and PP Neue Montreal. For brand use only.",
  },
];

export function Assets() {
  const [brokenFiles, setBrokenFiles] = useState<Set<string>>(new Set());
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const broken = new Set<string>();
      await Promise.all(
        assets.map(async (a) => {
          const url = `/downloads/${encodeURIComponent(a.file)}`;
          try {
            const res = await fetch(url, { method: "HEAD" });
            if (!res.ok) broken.add(a.file);
          } catch {
            broken.add(a.file);
          }
        }),
      );
      if (!cancelled) {
        setBrokenFiles(broken);
        setChecked(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Section
      id="assets"
      number="06"
      label="Assets"
      variant="dark"
      title="Assets"
      blurb="Every brand file in one place: logos, textures, and typefaces. Open access, no sign-up."
    >
      {checked && brokenFiles.size > 0 && (
        <div
          role="alert"
          className="mb-8 border border-ex-red bg-ex-red/10 p-5 text-[13px] leading-[1.55] text-ex-white"
        >
          <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-ex-red">
            Download error
          </div>
          <p className="mt-2">
            {brokenFiles.size === 1 ? "This file is" : "These files are"} unreachable:{" "}
            <span className="font-mono text-ex-white/80">
              {Array.from(brokenFiles).join(", ")}
            </span>
            . Check that the file exists in <span className="font-mono">/public/downloads/</span> and the href is URL-encoded.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 gap-px bg-ex-white/15 sm:grid-cols-3">
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
                <DownloadButton
                  file={a.file}
                  disabled={a.disabled || brokenFiles.has(a.file)}
                  broken={brokenFiles.has(a.file)}
                />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function DownloadButton({
  file,
  disabled,
  broken,
}: {
  file: string;
  disabled?: boolean;
  broken?: boolean;
}) {
  if (disabled) {
    return (
      <span
        aria-disabled
        className="inline-flex items-center gap-2 border border-ex-white/15 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.22em] text-ex-white/30"
      >
        {broken ? "Broken link" : "Unavailable"}
      </span>
    );
  }
  return (
    <a
      href={`/downloads/${encodeURIComponent(file)}`}
      download={file}
      className="inline-flex items-center gap-2 border border-ex-white/25 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.22em] text-ex-white transition-colors duration-150 hover:border-ex-red hover:bg-ex-red hover:text-ex-white active:bg-ex-red/80 active:translate-y-px focus-visible:outline-none focus-visible:border-ex-red"
    >
      Download
    </a>
  );
}