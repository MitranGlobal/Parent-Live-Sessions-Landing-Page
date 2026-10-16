import { takeaways } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import RegisterButton from "@/components/ui/RegisterButton";
import { F } from "@/components/ui/Free";

/** Solid gold band (the reference's colour band) with a 3×2 benefits grid. */
export default function Takeaways() {
  return (
    <section id="takeaways" className="bg-gold py-14 text-paper-ink md:py-20">
      <div className="mx-auto max-w-[1800px] px-5 md:px-14">
        <Reveal className="grid gap-8 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="eyebrow">{takeaways.eyebrow}</p>
            <h2 className="mt-6 max-w-[16ch] text-display-2">{takeaways.heading}</h2>
          </div>
          <p className="max-w-[560px] self-end text-lead lg:justify-self-end"><F text={takeaways.sub} tone="dark" /></p>
        </Reveal>

        <Reveal stagger className="mt-10 grid gap-x-12 gap-y-10 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
          {takeaways.items.map((t) => (
            <div key={t.title} data-reveal-item className="border-t border-black/20 pt-6">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-black text-gold">
                <Icon name={t.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-2xl tracking-[-0.035em] md:text-[28px]"><F text={t.title} tone="dark" /></h3>
              <p className="mt-2 text-lg leading-relaxed text-black/75">{t.body}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-10 md:mt-12">
          <RegisterButton variant="dark" />
        </Reveal>
      </div>
    </section>
  );
}
