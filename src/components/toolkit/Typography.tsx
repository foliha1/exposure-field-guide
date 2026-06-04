import { Section } from "./Section";
import { Reveal } from "./Reveal";


export function Typography() {
  return (
    <Section
      id="type"
      number="03"
      label="Typography"
      variant="light"
      title="Typography"
      blurb="Two typefaces. Use Canela Light for titles and pull quotes. Use PP Neue Montreal for everything else — body text, labels, and buttons."
    >
      {/* Typeface specimen */}
      <Reveal>
        <div className="bg-ex-black text-ex-white">
          <div className="px-6 py-16 md:px-12 md:py-24 lg:py-32">
            <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-12">
              {/* Canela */}
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-ex-white/40">
                  Canela
                </span>
                <div className="mt-10 space-y-10">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-ex-white/40 block mb-4">
                      Canela Light
                    </span>
                    <p className="font-display text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1.05] tracking-[-0.02em]">
                      Exposure
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-ex-white/40 block mb-4">
                      Canela Light Italic
                    </span>
                    <p className="font-display text-[clamp(2.5rem,5vw,4rem)] font-light italic leading-[1.05] tracking-[-0.02em]">
                      Exposure
                    </p>
                  </div>
                </div>
              </div>

              {/* PP Neue Montreal */}
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-ex-white/40">
                  PP Neue Montreal
                </span>
                <div className="mt-10 space-y-10">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-ex-white/40 block mb-4">
                      PP Neue Montreal Regular
                    </span>
                    <p className="text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.05] tracking-[-0.02em]">
                      Exposure
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-ex-white/40 block mb-4">
                      PP Neue Montreal Bold
                    </span>
                    <p className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.02em]">
                      Exposure
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
      {/* Character set specimen */}
      <Reveal delay={0.04}>
        <div className="mt-10 border-t border-ex-black/10 pt-10 md:pt-14">
          <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-12">
            {/* Canela */}
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-ex-black/40 block mb-6">
                Canela Light
              </span>
              <p className="font-display text-[clamp(1.125rem,2.5vw,1.5rem)] font-light leading-[1.65] tracking-[0.04em] text-ex-black">
                A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
              </p>
              <p className="mt-4 font-display text-[clamp(1.125rem,2.5vw,1.5rem)] font-light leading-[1.65] tracking-[0.04em] text-ex-black">
                a b c d e f g h i j k l m n o p q r s t u v w x y z
              </p>
              <p className="mt-4 font-display text-[clamp(1.125rem,2.5vw,1.5rem)] font-light leading-[1.65] tracking-[0.04em] text-ex-black">
                0 1 2 3 4 5 6 7 8 9 &amp; . , ; : ! ? — / ( )
              </p>
            </div>

            {/* PP Neue Montreal */}
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-ex-black/40 block mb-6">
                PP Neue Montreal Regular
              </span>
              <p className="text-[clamp(1.125rem,2.5vw,1.5rem)] font-normal leading-[1.65] tracking-[0.04em] text-ex-black">
                A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
              </p>
              <p className="mt-4 text-[clamp(1.125rem,2.5vw,1.5rem)] font-normal leading-[1.65] tracking-[0.04em] text-ex-black">
                a b c d e f g h i j k l m n o p q r s t u v w x y z
              </p>
              <p className="mt-4 text-[clamp(1.125rem,2.5vw,1.5rem)] font-normal leading-[1.65] tracking-[0.04em] text-ex-black">
                0 1 2 3 4 5 6 7 8 9 &amp; . , ; : ! ? — / ( )
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Hierarchy scale */}
      <Reveal delay={0.04}>
        <div className="mt-10 border-t border-ex-black/10 pt-10 md:pt-14">
          <div className="divide-y divide-ex-black/5">
            {/* H1 / Hero */}
            <div className="grid grid-cols-1 items-start gap-2 py-4 md:grid-cols-12 md:gap-6 md:py-5">
              <div className="md:col-span-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-ex-black">
                  H1 / Hero
                </span>
                <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.28em] text-ex-black/40">
                  Canela Light · 72px / 1.0
                </span>
              </div>
              <div className="md:col-span-9">
                <p className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-light uppercase leading-[1.0] tracking-[-0.02em] text-ex-black">
                  Your team <em className="italic">won't</em> be the same
                </p>
              </div>
            </div>

            {/* H2 / Section Head */}
            <div className="grid grid-cols-1 items-start gap-2 py-4 md:grid-cols-12 md:gap-6 md:py-5">
              <div className="md:col-span-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-ex-black">
                  H2 / Section Head
                </span>
                <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.28em] text-ex-black/40">
                  Canela Light · 40–48px / 1.05
                </span>
              </div>
              <div className="md:col-span-9">
                <p className="font-display text-[clamp(2.5rem,3.5vw,3rem)] font-light leading-[1.05] tracking-[-0.02em] text-ex-black">
                  Where teams find their <em className="italic">edge</em>
                </p>
              </div>
            </div>

            {/* H3 / Block Title */}
            <div className="grid grid-cols-1 items-start gap-2 py-4 md:grid-cols-12 md:gap-6 md:py-5">
              <div className="md:col-span-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-ex-black">
                  H3 / Block Title
                </span>
                <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.28em] text-ex-black/40">
                  PP Neue Montreal Bold · 22px / 1.3
                </span>
              </div>
              <div className="md:col-span-9">
                <p className="text-[22px] font-bold leading-[1.3] tracking-[-0.01em] text-ex-black">
                  Built on the 29029 method
                </p>
              </div>
            </div>

            {/* Eyebrow / Label */}
            <div className="grid grid-cols-1 items-start gap-2 py-4 md:grid-cols-12 md:gap-6 md:py-5">
              <div className="md:col-span-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-ex-black">
                  Eyebrow / Label
                </span>
                <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.28em] text-ex-black/40">
                  PP Neue Montreal Bold · 13px / 1.4 · tracked 0.28em
                </span>
              </div>
              <div className="md:col-span-9">
                <p className="text-[13px] font-bold uppercase leading-[1.4] tracking-[0.28em] text-ex-black">
                  EXPOSURE BY 29029
                </p>
              </div>
            </div>

            {/* Body */}
            <div className="grid grid-cols-1 items-start gap-2 py-4 md:grid-cols-12 md:gap-6 md:py-5">
              <div className="md:col-span-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-ex-black">
                  Body
                </span>
                <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.28em] text-ex-black/40">
                  PP Neue Montreal Regular · 17px / 1.6
                </span>
              </div>
              <div className="md:col-span-9">
                <p className="max-w-2xl text-[17px] leading-[1.6] tracking-[-0.01em] text-ex-black/80">
                  EXPOSURE puts teams under real, sustained load — not to break them, but to show them what they can do together. The shift holds long after the event ends.
                </p>
              </div>
            </div>

            {/* Caption / Attribution */}
            <div className="grid grid-cols-1 items-start gap-2 py-4 md:grid-cols-12 md:gap-6 md:py-5">
              <div className="md:col-span-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-ex-black">
                  Caption / Attribution
                </span>
                <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.28em] text-ex-black/40">
                  PP Neue Montreal Regular · 13px / 1.5
                </span>
              </div>
              <div className="md:col-span-9">
                <p className="text-[13px] leading-[1.5] text-ex-black/50">
                  Field Guide — Typography, v1
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* In use */}
      <Reveal delay={0.04}>
        <div className="mt-10 border-t border-ex-black/10 pt-10 md:pt-14">
          <div className="mb-6 flex flex-col gap-1 md:mb-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-ex-red">
              In use
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-ex-black/40">
              Canela Light + PP Neue Montreal
            </span>
          </div>
          <p className="font-display text-[clamp(2rem,5vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em] text-ex-black">
            Where teams find their <em className="italic">edge</em>
          </p>
          <p className="mt-6 max-w-2xl text-[17px] leading-[1.6] tracking-[-0.01em] text-ex-black/80">
            We put teams under sustained physical and decision-making load — not to break them, but to reveal what they are capable of together.
          </p>
          <p className="mt-4 text-[13px] leading-[1.5] text-ex-black/50">
            EXPOSURE BY 29029 — DEVELOP LEADERS THROUGH ENDURANCE
          </p>
        </div>
      </Reveal>

      {/* Download */}
      <Reveal delay={0.08}>
        <div className="mt-14 flex items-center gap-6">
          <a
            href="/downloads/EXPOSURE%20Typefaces.zip"
            download="EXPOSURE Typefaces.zip"
            className="inline-flex items-center gap-2 border border-ex-black/25 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.22em] text-ex-black transition-colors duration-150 hover:border-ex-red hover:bg-ex-red hover:text-ex-white active:bg-ex-red/80 active:translate-y-px focus-visible:outline-none focus-visible:border-ex-red"
          >
            Download typefaces
          </a>
          <span className="font-mono text-[11px] text-ex-black/40">EXPOSURE Typefaces.zip · WOFF2 · OTF</span>
        </div>
      </Reveal>
    </Section>
  );
}
