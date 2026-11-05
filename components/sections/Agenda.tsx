import { EVENT_FORMAT, event, images, sessions, sessionsIntro } from "@/lib/content";
import { cn } from "@/lib/cn";
import Reveal from "@/components/ui/Reveal";
import ArtPanel from "@/components/ui/ArtPanel";
import Icon from "@/components/ui/Icon";
import { F } from "@/components/ui/Free";

type Session = (typeof sessions)[number];

/**
 * Agenda. Layout follows EVENT_FORMAT in lib/content.ts:
 *  - "two-day": hairline rows, one per evening (label · text · dated image)
 *  - "one-day": one date banner built from both images, then the two parts
 */
export default function Agenda() {
  return (
    <section id="sessions" className="bg-paper py-14 text-paper-ink md:py-20">
      <div className="mx-auto max-w-[1800px] px-5 md:px-14">
        <Reveal>
          <p className="eyebrow">{sessionsIntro.eyebrow}</p>
          <h2 className="mt-7 max-w-[20ch] text-display-1"><F text={sessionsIntro.heading} /></h2>
          <p className="mt-7 max-w-[56ch] text-lead text-paper-muted"><F text={sessionsIntro.sub} /></p>
        </Reveal>

        {EVENT_FORMAT === "one-day" ? <OneDay /> : <TwoDay />}
      </div>
    </section>
  );
}

function Points({ s }: { s: Session }) {
  return (
    <>
      <h3 className="text-display-3">{s.title}</h3>
      <p className="mt-4 text-lead text-paper-ink">{s.question}</p>
      <ul className="mt-7 space-y-4">
        {s.points.map((p) => (
          <li key={p} className="flex gap-4 text-lg leading-snug">
            <Icon name="check" className="mt-0.5 h-6 w-6 text-gold-deep" strokeWidth={2.2} />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

/* ─────────────────────────── One evening, two parts ─────────────────────────── */

// Vertical framing of both banner photos: 50% = centred, lower = photo sits lower (more of the top shows)
const BANNER_PHOTO_POSITION = "50% 15%";

function OneDay() {
  const b = event.banner;
  // Diagonal split: top/bottom on phones, left/right from sm up. The line runs
  // through the centre either way, so the joining badge sits at 50% / 50%.
  const halves = [
    {
      src: images.session1,
      variant: "stage" as const,
      shift: "sm:-left-[20%]", // Part 1 photo moves left — its left edge is cut off
      clip: "[clip-path:polygon(0_0,100%_0,100%_42%,0_58%)] sm:[clip-path:polygon(0_0,58%_0,42%_100%,0_100%)]",
    },
    {
      src: images.session2,
      variant: "ember" as const,
      shift: "sm:left-[20%]", // Part 2 photo moves right
      clip: "[clip-path:polygon(0_58%,100%_42%,100%_100%,0_100%)] sm:[clip-path:polygon(58%_0,100%_0,100%_100%,42%_100%)]",
    },
  ];

  return (
    <>
      <Reveal className="relative mt-10 aspect-[4/5] w-full overflow-hidden rounded-[22px] bg-bg sm:aspect-[16/9] md:mt-12 lg:aspect-[21/8]">
        {halves.map((h, i) => (
          // Outer layer holds the diagonal cut; the photo inside is nudged sideways
          // (from sm up) so each half shows the people rather than the edges.
          <div key={i} className={cn("absolute inset-0 overflow-hidden", h.clip)}>
            <ArtPanel src={h.src} variant={h.variant} seed={i + 11} beams={i === 0} position={BANNER_PHOTO_POSITION} className={cn("absolute inset-y-0 left-0 w-full", h.shift)} />
          </div>
        ))}

        {/* Gold seam along the diagonal */}
        <svg aria-hidden viewBox="0 0 100 100" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full">
          <line x1="0" y1="58" x2="100" y2="42" className="stroke-gold sm:hidden" strokeWidth="3" vectorEffect="non-scaling-stroke" />
          <line x1="58" y1="0" x2="42" y2="100" className="hidden stroke-gold sm:block" strokeWidth="3" vectorEffect="non-scaling-stroke" />
        </svg>

        {/* Legibility shade */}
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/25" />

        {/* Part labels on each half */}
        <span className="absolute left-4 top-4 inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-black/45 px-4 py-2 text-xs font-medium text-ink backdrop-blur-md sm:left-6 sm:top-6 sm:text-sm">
          <span className="font-semibold text-gold-bright">Part 1</span>
          <span className="hidden sm:inline">· {sessions[0].title}</span>
        </span>
        <span className="absolute right-4 top-[61%] inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-black/45 px-4 py-2 text-xs font-medium text-ink backdrop-blur-md sm:right-6 sm:top-6 sm:text-sm">
          <span className="font-semibold text-gold-bright">Part 2</span>
          <span className="hidden sm:inline">· {sessions[1].title}</span>
        </span>

        {/* Joining badge on the seam */}
        <span
          aria-hidden
          className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gold-gradient text-black shadow-glow md:h-14 md:w-14"
        >
          <Icon name="arrow" className="h-5 w-5 rotate-90 sm:rotate-0 md:h-6 md:w-6" strokeWidth={2.4} />
        </span>

        {/* Date */}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-ink sm:p-7">
          <div>
            <p className="text-sm uppercase tracking-[0.08em] text-ink/80">{b.weekday}</p>
            <p className="text-[clamp(3.5rem,8vw,6.5rem)] font-semibold leading-none tracking-[-0.06em]">
              {b.day}
              <span className="ml-2 text-[0.4em] tracking-[-0.02em] text-gold-bright">{b.month}</span>
            </p>
            <p className="mt-2 text-sm font-medium text-ink/90 md:text-base">{b.time}</p>
          </div>
          <span className="hidden rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur-md sm:inline-flex">
            {b.pill}
          </span>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-10 md:mt-12 lg:grid-cols-2 lg:gap-14">
        {sessions.map((s) => (
          <Reveal key={s.title} className="border-t border-paper-line pt-8">
            <div className="mb-5 flex items-baseline gap-4">
              <p className="text-[32px] font-medium tracking-[-0.04em] text-black/35 md:text-[36px]">{s.short}</p>
              <p className="text-sm font-semibold uppercase tracking-[0.06em] text-paper-ink">{s.time}</p>
            </div>
            <Points s={s} />
          </Reveal>
        ))}
      </div>
    </>
  );
}

/* ─────────────────────────── Two evenings ─────────────────────────── */
function TwoDay() {
  return (
    <div className="mt-10 md:mt-12">
      {sessions.map((s, i) => (
        <Reveal
          key={s.title}
          className="grid gap-6 border-t border-paper-line py-9 last:pb-0 md:py-11 md:last:pb-0 lg:grid-cols-[220px_minmax(0,1fr)_minmax(0,490px)] lg:gap-12"
        >
          <div>
            <p className="text-[32px] font-medium tracking-[-0.04em] text-black/35 md:text-[36px]">{s.short}</p>
            <p className="mt-1 text-sm uppercase tracking-[0.06em] text-paper-muted">{s.date}</p>
            <p className="mt-1 text-sm font-semibold uppercase tracking-[0.06em] text-paper-ink">{s.time}</p>
          </div>

          <div className="max-w-[640px]">
            <Points s={s} />
          </div>

          <ArtPanel
            src={i === 0 ? images.session1 : images.session2}
            variant={i === 0 ? "stage" : "ember"}
            seed={i + 11}
            beams={i === 0}
            className="aspect-[490/245] w-full self-start rounded-[18px]"
          >
            {/* Date overlay always shows; a bottom shade keeps it legible over photos */}
            {(i === 0 ? images.session1 : images.session2) && (
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            )}
            <div className="absolute inset-0 flex items-end justify-between p-6 text-ink md:p-7">
              <div>
                <p className="text-sm uppercase tracking-[0.08em] text-ink/80">{s.weekday}</p>
                <p className="text-[clamp(3.5rem,7vw,5.5rem)] font-semibold leading-none tracking-[-0.06em]">
                  {s.day}
                  <span className="ml-2 text-[0.4em] tracking-[-0.02em] text-gold-bright">{s.month}</span>
                </p>
              </div>
              <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur-md">
                Session {i + 1} · 7–8:30 pm
              </span>
            </div>
          </ArtPanel>
        </Reveal>
      ))}
    </div>
  );
}
