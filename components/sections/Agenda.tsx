import { images, sessions, sessionsIntro } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import ArtPanel from "@/components/ui/ArtPanel";
import Icon from "@/components/ui/Icon";
import { F } from "@/components/ui/Free";

const dates = [
  { d: "21", m: "Oct", w: "Wednesday" },
  { d: "22", m: "Oct", w: "Thursday" },
];

/** White agenda: "● AGENDA", huge heading, then hairline-separated rows
 *  (grey day label · title + text · rounded image). */
export default function Agenda() {
  return (
    <section id="sessions" className="bg-paper py-14 text-paper-ink md:py-20">
      <div className="mx-auto max-w-[1800px] px-5 md:px-14">
        <Reveal>
          <p className="eyebrow">{sessionsIntro.eyebrow}</p>
          <h2 className="mt-7 max-w-[20ch] text-display-1"><F text={sessionsIntro.heading} /></h2>
          <p className="mt-7 max-w-[56ch] text-lead text-paper-muted"><F text={sessionsIntro.sub} /></p>
        </Reveal>

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
                    <p className="text-sm uppercase tracking-[0.08em] text-ink/80">{dates[i].w}</p>
                    <p className="text-[clamp(3.5rem,7vw,5.5rem)] font-semibold leading-none tracking-[-0.06em]">
                      {dates[i].d}
                      <span className="ml-2 text-[0.4em] tracking-[-0.02em] text-gold-bright">{dates[i].m}</span>
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
      </div>
    </section>
  );
}
