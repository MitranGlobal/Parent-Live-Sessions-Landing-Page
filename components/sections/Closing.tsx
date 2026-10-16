import { LOGO_WHITE, brand, closing, images } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import ArtPanel from "@/components/ui/ArtPanel";
import RegisterButton from "@/components/ui/RegisterButton";
import { F } from "@/components/ui/Free";

/**
 * Closing call to action that is also the page footer: full-bleed gold-washed
 * band with the headline + Register pill, then a slim bar with the MiTran
 * logo, copyright and a one-line disclaimer.
 */
export default function Closing() {
  return (
    <footer>
      <ArtPanel src={images.closing} variant="dusk" seed={31} beams>
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(201,155,58,0.55)_0%,rgba(233,196,106,0.25)_35%,rgba(8,9,12,0.35)_65%,#000_100%)]"
        />

        <div className="relative flex min-h-[56vh] items-center justify-center px-5 py-20 text-center md:py-24">
          <Reveal>
            <h2 className="mx-auto max-w-[17ch] text-display-1 text-ink [text-shadow:0_4px_40px_rgba(0,0,0,0.35)]">
              <F text={closing.heading} />
            </h2>
            <p className="mx-auto mt-6 max-w-[46ch] text-lead text-ink/90">{closing.sub}</p>
            <RegisterButton className="mt-9" />
          </Reveal>
        </div>

        <div className="relative border-t border-white/10">
          <div className="mx-auto flex max-w-[1800px] flex-col items-center gap-4 px-5 py-7 text-center md:flex-row md:justify-between md:px-14 md:text-left">
            <a href="#top" aria-label={`${brand.name} — back to top`} className="shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={LOGO_WHITE} alt={brand.name} className="h-12 w-auto md:h-14" />
            </a>
            <p className="max-w-[60ch] text-xs leading-relaxed text-ink/55 md:text-sm">{closing.disclaimer}</p>
            <p className="shrink-0 text-xs text-ink/55 md:text-sm">
              © {new Date().getFullYear()} {brand.name}
            </p>
          </div>
        </div>
      </ArtPanel>
    </footer>
  );
}
