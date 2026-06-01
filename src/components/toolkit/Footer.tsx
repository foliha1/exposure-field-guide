export function Footer() {
  return (
    <footer className="bg-ex-black text-ex-white">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="h-px w-full bg-ex-gold" />
        <div className="grid grid-cols-12 gap-6 py-10 text-[10px] font-bold uppercase tracking-[0.22em] text-ex-white/60">
          <div className="col-span-12 md:col-span-4">EXPOSURE by 29029</div>
          <div className="col-span-6 md:col-span-4">Brand Toolkit · v1.0 · Updated 2026</div>
          <div className="col-span-6 text-right md:col-span-4">
            <a href="mailto:brand@29029.com" className="hover:text-ex-red transition-colors duration-150">
              brand@29029.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}