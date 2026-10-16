import { Fragment } from "react";
import { cn } from "@/lib/cn";

/**
 * "Free" emphasis.
 *
 * <F> renders any string and turns every "free" in it into a highlighted
 * chip, so copy in lib/content.ts can just say "Free live session" and the
 * word is emphasised wherever it appears.
 *
 * tone="gold" (default) → gold chip with black text, for dark and ivory backgrounds
 * tone="dark"           → black chip with gold text, for the gold bands
 */
type Tone = "gold" | "dark";

const chip: Record<Tone, string> = {
  gold: "bg-gold-gradient text-black",
  dark: "bg-black text-gold-bright",
};

export function FreeMark({ children = "Free", tone = "gold", className }: { children?: React.ReactNode; tone?: Tone; className?: string }) {
  return (
    <span
      className={cn(
        "mx-[0.06em] inline-block rounded-[0.28em] px-[0.24em] font-bold uppercase leading-[1.12] tracking-[0.02em] [box-decoration-break:clone]",
        chip[tone],
        className
      )}
    >
      {children}
    </span>
  );
}

export function F({ text, tone = "gold" }: { text: string; tone?: Tone }) {
  const parts = text.split(/\b(free)\b/i);
  return (
    <>
      {parts.map((p, i) =>
        i % 2 === 1 ? (
          <FreeMark key={i} tone={tone}>
            {p}
          </FreeMark>
        ) : (
          <Fragment key={i}>{p}</Fragment>
        )
      )}
    </>
  );
}

/** Standalone "FREE" badge (e.g. next to session labels). */
export function FreeBadge({ tone = "gold", className, label = "Free" }: { tone?: Tone; className?: string; label?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.14em]",
        chip[tone],
        className
      )}
    >
      <span aria-hidden>✦</span>
      {label}
    </span>
  );
}
