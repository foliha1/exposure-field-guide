export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ex-white/10 bg-ex-black text-ex-white">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-6 px-6 py-12 text-center lg:px-12 md:flex-row md:justify-between md:text-left">
        <div className="flex items-center gap-3">
          <svg
            aria-hidden
            viewBox="0 0 12 10"
            className="h-2.5 w-3 fill-ex-red"
          >
            <polygon points="6,0 12,10 0,10" />
          </svg>
          <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-ex-white/60">
            A 29029 Experience
          </span>
        </div>
        <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-ex-white/40">
          © {year} EXPOSURE by 29029
        </div>
      </div>
    </footer>
  );
}