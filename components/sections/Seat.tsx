import { seat } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import RegisterButton from "@/components/ui/RegisterButton";

/** Gold band: huge centred heading + sub, single white pass card with a check-list. */
export default function Seat() {
  return (
    <section id="seat" className="bg-gold py-24 text-paper-ink md:py-32">
      <div className="mx-auto max-w-[1800px] px-5 text-center md:px-14">
        <Reveal>
          <p className="eyebrow">{seat.eyebrow}</p>
          <h2 className="mt-6 text-display-1">{seat.heading}</h2>
          <p className="mx-auto mt-6 max-w-[48ch] text-lead">{seat.sub}</p>
        </Reveal>

        <Reveal className="mx-auto mt-14 max-w-[628px] rounded-[22px] bg-white p-7 text-left shadow-[0_40px_80px_-40px_rgba(8,9,12,0.45)] md:mt-16 md:p-10">
          <h3 className="text-[28px] tracking-[-0.045em] md:text-[34px]">{seat.passName}</h3>
          <p className="mt-1 text-base text-paper-muted">{seat.passSub}</p>
          <p className="mt-4 text-[28px] font-medium tracking-[-0.04em] text-black/45 md:text-[34px]">{seat.price}</p>

          <p className="mt-8 text-lg">Your seat includes:</p>
          <ul className="mt-5 space-y-5">
            {seat.includes.map((it) => (
              <li key={it.title} className="flex gap-4">
                <Icon name="check" className="mt-0.5 h-7 w-7 text-black" strokeWidth={2} />
                <div>
                  <p className="text-lg font-semibold tracking-[-0.02em]">{it.title}</p>
                  {it.body && <p className="mt-0.5 text-base leading-relaxed text-paper-muted md:text-lg">{it.body}</p>}
                </div>
              </li>
            ))}
          </ul>

          <RegisterButton variant="dark" className="mt-10 w-full" />
          <p className="mt-5 text-sm leading-relaxed text-paper-muted">{seat.privacy}</p>
        </Reveal>

        <Reveal className="mx-auto mt-10 max-w-[628px] text-lg">
          <span className="font-semibold">{seat.secondary.label}</span> {seat.secondary.body}
        </Reveal>
      </div>
    </section>
  );
}
