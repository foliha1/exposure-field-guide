const links = [
  { href: "#intent", label: "Intent" },
  { href: "#voice", label: "Voice" },
  { href: "#identity", label: "Identity" },
  { href: "#type", label: "Type" },
  { href: "#color", label: "Color" },
  { href: "#assets", label: "Assets" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-ex-white/15 bg-ex-black/85 backdrop-blur supports-[backdrop-filter]:bg-ex-black/70">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-12">
        <a href="#top" className="font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-ex-white">
          EXPOSURE <span className="text-ex-white/40">/ 29029</span>
        </a>
        <nav className="hidden gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[10px] font-bold uppercase tracking-[0.22em] text-ex-white/70 transition-colors duration-150 hover:text-ex-red"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#assets"
          className="text-[10px] font-bold uppercase tracking-[0.22em] text-ex-red transition-opacity duration-150 hover:opacity-70"
        >
          ▲ Download
        </a>
      </div>
    </header>
  );
}