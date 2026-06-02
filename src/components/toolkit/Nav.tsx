import { useEffect, useState } from "react";
import exposureLight from "@/assets/logos/EXPOSURE_Light.svg.asset.json";

const links = [
  { id: "logo", label: "Logo" },
  { id: "color", label: "Color" },
  { id: "type", label: "Type" },
  { id: "imagery", label: "Imagery" },
  { id: "textures", label: "Textures" },
  { id: "assets", label: "Assets" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-ex-white/10 bg-ex-black/80 backdrop-blur supports-[backdrop-filter]:bg-ex-black/60"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="flex items-center" aria-label="EXPOSURE — top">
          <img src={exposureLight.url} alt="EXPOSURE" className="h-3 w-auto" />
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
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center text-ex-white md:hidden"
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute left-0 right-0 h-px bg-ex-white transition-transform duration-200 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 right-0 top-1.5 h-px bg-ex-white transition-transform duration-200 ${
                open ? "-rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>
      {open && (
        <div className="absolute inset-x-0 top-full border-t border-ex-white/10 bg-ex-black md:hidden">
          <nav className="mx-auto flex max-w-[1400px] flex-col px-6 py-2">
            {links.map((l) => {
              const isActive = active === l.id;
              return (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className={`flex min-h-11 items-center border-b border-ex-white/5 text-[11px] font-bold uppercase tracking-[0.28em] transition-colors duration-150 ${
                    isActive ? "text-ex-red" : "text-ex-white/70 hover:text-ex-white"
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
