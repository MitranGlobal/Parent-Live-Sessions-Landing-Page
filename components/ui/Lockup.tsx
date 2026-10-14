import { cn } from "@/lib/cn";

/**
 * Event lock-up: a stacked, condensed-caps title block, like the
 * "TONY ROBBINS / UNLEASH / THE POWER / WITHIN" tile on the reference page.
 */
export default function Lockup({
  tone = "dark",
  className,
  size = "md",
}: {
  tone?: "dark" | "gold";
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const big = size === "lg" ? "text-[clamp(3.5rem,7vw,6rem)]" : size === "sm" ? "text-[2.6rem]" : "text-[clamp(2.75rem,5vw,4rem)]";
  const mid = size === "lg" ? "text-[clamp(1.6rem,3.1vw,2.7rem)]" : size === "sm" ? "text-[1.15rem]" : "text-[clamp(1.25rem,2.25vw,1.8rem)]";
  const top = size === "sm" ? "text-[11px]" : "text-sm md:text-base";

  return (
    <div
      className={cn(
        "flex flex-col items-center text-center uppercase leading-none",
        tone === "dark" ? "text-ink" : "text-paper-ink",
        className
      )}
      aria-label="MiTran Global — Beneath Fine — Parent Live Sessions"
      role="img"
    >
      <span className={cn("font-sans font-semibold tracking-[0.22em]", top)}>MiTran Global</span>
      <span className={cn("mt-3 font-lockup font-bold tracking-[0.01em]", big)}>Beneath</span>
      <span className={cn("font-lockup font-bold tracking-[0.01em]", big, tone === "dark" && "gold-text")}>
        “Fine”
      </span>
      <span className={cn("mt-2 font-sans font-black tracking-[-0.01em]", mid)}>Parent Live Sessions</span>
    </div>
  );
}
