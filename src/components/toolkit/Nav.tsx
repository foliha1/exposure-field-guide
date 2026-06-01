import { useEffect, useState } from "react";

const links = [
  { id: "intent", label: "Intent" },
  { id: "logo", label: "Logo" },
  { id: "color", label: "Color" },
  { id: "type", label: "Type" },
  { id: "imagery", label: "Imagery" },
  { id: "territories", label: "Territories" },
  { id: "voice", label: "Voice" },
  { id: "assets", label: "Assets" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => !!el);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-ex-white/10 bg-ex-black/80 backdrop-blur supports-[backdrop-filter]:bg-ex-black/60"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-10">
        <a
          href="#top"
          className="font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-ex-white"
        >
          EXPOSURE <span className="text-ex-white/40">/ 29029</span>
        </a>
        <nav className="hidden gap-7 md:flex">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`relative pb-1 text-[10px] font-bold uppercase tracking-[0.22em] transition-colors duration-150 ${
                  isActive ? "text-ex-white" : "text-ex-white/65 hover:text-ex-white"
                }`}
              >
                {l.label}
                <span
                  className={`pointer-events-none absolute -bottom-0.5 left-0 h-px bg-ex-red transition-all duration-200 ${
                    isActive ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}