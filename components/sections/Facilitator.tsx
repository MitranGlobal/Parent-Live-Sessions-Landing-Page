import { facilitator, images } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import ArtPanel from "@/components/ui/ArtPanel";
import Lockup from "@/components/ui/Lockup";
import RegisterButton from "@/components/ui/RegisterButton";

/**
 * "Your time is now" layout from the reference: a gold lock-up tile top-left
 * whose bottom-right corner flows (concave fillets) into a large rounded
 * media panel below-right; heading top-right, copy + soft pill bottom-left.
 */
export default function Facilitator() {
  return (
    <section id="facilitator" className="bg-paper pb-24 pt-6 text-paper-ink md:pb-36 md:pt-10">
      <div className="mx-auto max-w-[1800px] px-5 md:px-14">
        <Reveal className="relative grid lg:grid-cols-[minmax(0,600px)_minmax(0,1fr)]">
          {/* Lock-up tile */}
          <div className="flex items-center justify-center rounded-[22px] bg-gold px-8 py-12 lg:rounded-br-none lg:py-16">
            <Lockup tone="gold" size="md" />
          </div>

          {/* Heading */}
          <div className="flex flex-col justify-center py-10 lg:py-0 lg:pl-14">
            <p className="eyebrow">{facilitator.eyebrow}</p>
            <h2 className="mt-5 text-display-1">{facilitator.name}</h2>
          </div>

          {/* Copy */}
          <div className="order-last pt-10 lg:order-none lg:pr-14 lg:pt-20">
            <p className="max-w-[30ch] text-lead text-paper-ink">{facilitator.bio}</p>
            <p className="mt-5 text-sm text-paper-muted">{facilitator.credentials}</p>
            <RegisterButton variant="dark" size="md" className="mt-10 px-8 py-4" />
          </div>

          {/* Media panel + fillets that join it to the tile */}
          <div className="relative">
            <span
              aria-hidden
              className="absolute -top-6 left-0 hidden h-6 w-6 bg-gold lg:block"
              style={{ WebkitMaskImage: "radial-gradient(circle at 100% 0, transparent 24px, #000 24.5px)", maskImage: "radial-gradient(circle at 100% 0, transparent 24px, #000 24.5px)" }}
            />
            <span
              aria-hidden
              className="absolute -left-6 top-0 hidden h-6 w-6 bg-gold lg:block"
              style={{ WebkitMaskImage: "radial-gradient(circle at 0 100%, transparent 24px, #000 24.5px)", maskImage: "radial-gradient(circle at 0 100%, transparent 24px, #000 24.5px)" }}
            />
            <ArtPanel
              src={images.facilitator}
              alt={facilitator.name}
              variant="spot"
              seed={21}
              className="aspect-[4/3] w-full rounded-[22px] lg:aspect-[16/10] lg:rounded-tl-none"
            >
              {/* Gold wash from the tile into the panel, as in the reference */}
              <div aria-hidden className="absolute inset-0 bg-[linear-gradient(115deg,rgba(233,196,106,1)_0%,rgba(233,196,106,0.4)_22%,transparent_45%)]" />
              {!images.facilitator && (
                <>
                  <span
                    aria-hidden
                    className="absolute inset-0 grid place-items-center text-[clamp(7rem,18vw,16rem)] font-semibold tracking-[-0.08em] text-ink/90"
                  >
                    VG
                  </span>
                  <span className="absolute right-5 top-5 text-xs text-ink/60">{facilitator.photoNote}</span>
                </>
              )}
              <span className="absolute bottom-5 left-1/2 inline-flex w-max max-w-[calc(100%-2rem)] -translate-x-1/2 items-center gap-3 rounded-full bg-black/35 px-5 py-3 text-sm font-medium md:px-6 md:py-3.5 md:text-base text-ink backdrop-blur-md md:bottom-8 md:text-lg">
                <span className="h-2 w-2 shrink-0 rounded-full bg-gold" aria-hidden />
                {facilitator.name} · Founder, MiTran Global
              </span>
            </ArtPanel>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
