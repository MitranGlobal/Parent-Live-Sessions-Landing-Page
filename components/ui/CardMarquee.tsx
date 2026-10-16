import { cn } from "@/lib/cn";
import ArtPanel from "./ArtPanel";

type Item = { title: string; body: string; image?: string };
type Variant = "sunset" | "stage" | "ember" | "dusk" | "spot";

// Card shapes repeat wide → tall → square-ish
const widths = [
  "w-[78vw] sm:w-[440px] lg:w-[560px]",
  "w-[64vw] sm:w-[280px] lg:w-[300px]",
  "w-[72vw] sm:w-[380px] lg:w-[420px]",
];

/**
 * Endless, always-moving row of rounded image cards with a text overlay.
 * The row is rendered twice so the loop is seamless. It never pauses
 * (slower when the device asks for reduced motion — see globals.css).
 */
export default function CardMarquee({
  items,
  variants,
  label,
  reverse = false,
  marker,
  seedOffset = 0,
}: {
  items: Item[];
  variants: readonly Variant[];
  label: string;
  reverse?: boolean;
  /** Optional symbol shown before each card title, e.g. "✦" */
  marker?: string;
  seedOffset?: number;
}) {
  const cards = items.map((item, i) => (
    <ArtPanel
      key={item.title}
      src={item.image}
      variant={variants[i % variants.length]}
      seed={i + 3 + seedOffset}
      className={cn("h-[300px] shrink-0 rounded-[20px] md:h-[360px]", widths[i % widths.length])}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
        <h3 className="text-xs font-medium uppercase tracking-[0.06em] text-gold-bright md:text-[13px]">
          {marker && <span aria-hidden className="mr-1.5">{marker}</span>}
          {item.title}
        </h3>
        <p className="mt-2.5 max-w-[30ch] text-xl font-semibold leading-tight tracking-[-0.03em] text-ink md:text-[24px]">
          {item.body}
        </p>
      </div>
    </ArtPanel>
  ));

  return (
    <div aria-label={label} role="region">
      <div className={cn("flex w-max", reverse ? "animate-marquee-reverse" : "animate-marquee")}>
        <div className="flex gap-5 pr-5">{cards}</div>
        <div className="flex gap-5 pr-5" aria-hidden>
          {cards}
        </div>
      </div>
    </div>
  );
}
