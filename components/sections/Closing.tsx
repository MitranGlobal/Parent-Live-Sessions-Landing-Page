import { closing, images } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import ArtPanel from "@/components/ui/ArtPanel";
import RegisterButton from "@/components/ui/RegisterButton";
import { F } from "@/components/ui/Free";

/** Full-bleed photo band washed in the accent colour, centred headline + pill, fading to black. */
export default function Closing() {
  return (
    <ArtPanel src={images.closing} variant="dusk" seed={31} beams className="min-h-[60vh]">
      <section className="relative flex min-h-[60vh] items-center justify-center px-5 py-20 text-center md:py-24">
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(201,155,58,0.55)_0%,rgba(233,196,106,0.25)_35%,rgba(8,9,12,0.15)_60%,#000_100%)]"
        />
        <Reveal className="relative">
          <h2 className="mx-auto max-w-[17ch] text-display-1 text-ink [text-shadow:0_4px_40px_rgba(0,0,0,0.35)]">
            <F text={closing.heading} />
          </h2>
          <p className="mx-auto mt-6 max-w-[46ch] text-lead text-ink/90">{closing.sub}</p>
          <RegisterButton className="mt-9" />
        </Reveal>
      </section>
    </ArtPanel>
  );
}
