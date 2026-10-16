import { recognise } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import CardMarquee from "@/components/ui/CardMarquee";

const variants = ["stage", "ember", "spot", "dusk", "sunset", "ember"] as const;

/**
 * "Sound familiar?" — the pain points. Heading left, paragraph right,
 * then an always-moving row of image cards.
 */
export default function Recognise() {
  return (
    <section className="overflow-hidden bg-paper py-14 text-paper-ink md:py-20">
      <Reveal className="mx-auto grid w-full max-w-[1800px] gap-8 px-5 md:px-14 lg:grid-cols-2 lg:gap-24">
        <div>
          <p className="eyebrow text-paper-ink">{recognise.eyebrow}</p>
          <h2 className="mt-6 max-w-[16ch] text-display-2">{recognise.heading}</h2>
        </div>
        <p className="max-w-[560px] self-center text-lead text-paper-ink lg:justify-self-end">{recognise.sub}</p>
      </Reveal>

      <div className="mt-10 md:mt-12">
        <CardMarquee items={recognise.items} variants={variants} label="Situations parents tell us about" />
      </div>
    </section>
  );
}
