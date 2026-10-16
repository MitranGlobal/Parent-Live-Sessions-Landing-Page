import { stats, statsIntro } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import { F } from "@/components/ui/Free";

/** Black section: centred two-line headline, centred sub, three huge numbers. */
export default function Stats() {
  return (
    <section className="bg-black py-16 text-center md:py-24">
      <div className="mx-auto max-w-[1400px] px-5 md:px-14">
        <Reveal>
          <h2 className="mx-auto max-w-[18ch] text-display-2 text-ink"><F text={statsIntro.heading} /></h2>
          <p className="mx-auto mt-7 max-w-[60ch] text-lead text-ink/85">{statsIntro.sub}</p>
        </Reveal>

        <Reveal stagger className="mt-12 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-10">
          {stats.map((s) => (
            <div key={s.label} data-reveal-item>
              <div className="text-stat font-semibold text-ink">
                {s.value}
                {s.suffix && <span className="gold-text ml-1">{s.suffix}</span>}
              </div>
              <p className="mx-auto mt-5 max-w-[30ch] text-lg font-medium leading-snug tracking-[-0.01em] text-ink md:text-[22px]">
                <F text={s.label} />
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
