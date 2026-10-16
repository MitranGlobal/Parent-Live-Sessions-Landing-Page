import { LOGO_WHITE, brand, footer } from "@/lib/content";
import { F } from "@/components/ui/Free";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-ink">
      <div className="mx-auto max-w-[1800px] px-5 py-12 md:px-14 md:py-14">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO_WHITE} alt={brand.name} className="h-16 w-auto" />
            <div className="mt-8 flex flex-wrap gap-3">
              {footer.social.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 px-4 py-2 text-sm text-ink-muted transition-colors hover:border-gold hover:text-gold"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-5 text-base leading-relaxed text-ink-muted md:text-lg">
            <p><F text={footer.disclaimer} /></p>
            {footer.safety.map((s) => (
              <p key={s.number}>
                {s.text}{" "}
                <a href={`tel:${s.number}`} className="font-semibold text-ink underline-offset-4 hover:underline">
                  {s.number}
                </a>
                .
              </p>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-ink-faint md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
          <nav aria-label="Legal" className="flex gap-6">
            {footer.links.map((l) => (
              <a key={l.label} href={l.url} className="transition-colors hover:text-ink">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
