import { outcomes } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import CardMarquee from "@/components/ui/CardMarquee";

const variants = ["sunset", "dusk", "spot", "sunset", "stage", "dusk"] as const;

/**
 * The positive mirror of "Sound familiar?": the same six situations,
 * turned into what can change after the sessions. Moves the opposite way.
 */
export default function Outcomes() {
  return (
    <section id="outcomes" className="overflow-hidden bg-paper py-14 text-paper-ink md:py-20">
      <Reveal className="mx-auto grid w-full max-w-[1800px] gap-8 px-5 md:px-14 lg:grid-cols-2 lg:gap-24">
        <div>
          <p className="eyebrow text-gold-deep">{outcomes.eyebrow}</p>
          <h2 className="mt-6 max-w-[16ch] text-display-2">{outcomes.heading}</h2>
        </div>
        <p className="max-w-[560px] self-center text-lead text-paper-ink lg:justify-self-end">{outcomes.sub}</p>
      </Reveal>

      <div className="mt-10 md:mt-12">
        <CardMarquee items={outcomes.items} variants={variants} label="What can change after the sessions" reverse marker="✦" seedOffset={20} />
      </div>
    </section>
  );
}
