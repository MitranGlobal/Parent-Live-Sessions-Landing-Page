import { more } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import ArtPanel from "@/components/ui/ArtPanel";
import Icon from "@/components/ui/Icon";

const variants = ["stage", "ember", "spot", "dusk", "sunset"] as const;

/** Black "blog" row: heading + "Explore all", then a scrollable row of cards. */
export default function More() {
  return (
    <section className="bg-black py-24 md:py-32">
      <Reveal className="mx-auto flex max-w-[1800px] items-end justify-between gap-6 px-5 md:px-14">
        <h2 className="text-display-2 text-ink">{more.heading}</h2>
        <a href={more.exploreUrl} className="btn-ghost btn-md shrink-0 px-6 py-3">
          {more.exploreLabel}
        </a>
      </Reveal>

      <div className="no-scrollbar mt-12 flex snap-x snap-mandatory scroll-px-5 gap-6 overflow-x-auto px-5 pb-2 md:mt-16 md:scroll-px-14 md:px-14">
        {more.items.map((m, i) => (
          <a
            key={m.title}
            href={m.url}
            target="_blank"
            rel="noreferrer"
            className="group w-[78vw] shrink-0 snap-start sm:w-[360px] lg:w-[400px]"
          >
            <ArtPanel variant={variants[i % variants.length]} seed={41 + i} className="aspect-[4/3] rounded-[18px]">
              <span className="absolute left-5 top-5 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-ink backdrop-blur-md">
                {m.tag}
              </span>
              <span className="absolute bottom-5 right-5 grid h-11 w-11 place-items-center rounded-full bg-ink text-black transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                <Icon name="arrowUpRight" strokeWidth={2} />
              </span>
            </ArtPanel>
            <p className="mt-5 text-xl font-semibold tracking-[-0.03em] text-ink transition-colors group-hover:text-gold md:text-2xl">
              {m.title}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
