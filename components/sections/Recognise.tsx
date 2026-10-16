"use client";

import { useReducedMotion } from "framer-motion";
import { recognise } from "@/lib/content";
import { cn } from "@/lib/cn";
import Reveal from "@/components/ui/Reveal";
import ArtPanel from "@/components/ui/ArtPanel";

const variants = ["stage", "ember", "spot", "dusk", "sunset", "ember"] as const;
const widths = ["w-[86vw] sm:w-[560px] lg:w-[720px]", "w-[72vw] sm:w-[360px] lg:w-[380px]", "w-[80vw] sm:w-[480px] lg:w-[540px]"];

/**
 * White section: big heading left, paragraph right, then a row of rounded
 * image cards that bleeds off both edges and drifts slowly sideways.
 */
export default function Recognise() {
  const reduce = useReducedMotion();
  const cards = recognise.items.map((item, i) => (
    <ArtPanel
      key={item.title}
      variant={variants[i % variants.length]}
      seed={i + 3}
      className={cn("h-[380px] shrink-0 rounded-[22px] md:h-[460px]", widths[i % widths.length])}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
        <h3 className="text-sm font-medium uppercase tracking-[0.06em] text-gold-bright">{item.title}</h3>
        <p className="mt-3 max-w-[30ch] text-2xl font-semibold leading-tight tracking-[-0.035em] text-ink md:text-[30px]">
          {item.body}
        </p>
      </div>
    </ArtPanel>
  ));

  return (
    <section className="overflow-hidden bg-paper py-14 text-paper-ink md:py-20">
      <Reveal className="mx-auto grid w-full max-w-[1800px] gap-8 px-5 md:px-14 lg:grid-cols-2 lg:gap-24">
        <div>
          <p className="eyebrow text-paper-ink">{recognise.eyebrow}</p>
          <h2 className="mt-6 max-w-[16ch] text-display-2">{recognise.heading}</h2>
        </div>
        <p className="max-w-[560px] self-center text-lead text-paper-ink lg:justify-self-end">{recognise.sub}</p>
      </Reveal>

      <div className="mt-10 md:mt-12" aria-label="Situations parents tell us about">
        {reduce ? (
          <div className="no-scrollbar flex gap-6 overflow-x-auto px-5 md:px-14">{cards}</div>
        ) : (
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            <div className="flex gap-6 pr-6">{cards}</div>
            <div className="flex gap-6 pr-6" aria-hidden>
              {cards}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
