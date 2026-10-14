import { REGISTER_URL, brand } from "@/lib/content";
import { cn } from "@/lib/cn";

type Props = {
  size?: "md" | "lg";
  /** light = ivory pill (on dark / gold), dark = black pill (on light), gold = gold pill */
  variant?: "light" | "dark" | "gold";
  className?: string;
  label?: string;
};

// Literal class names so Tailwind keeps them in the build.
const variants = { light: "btn-light", dark: "btn-dark", gold: "btn-gold" } as const;

/** Every "Register now" on the page goes to the MiTran Hub checkout. */
export default function RegisterButton({ size = "lg", variant = "light", className, label = brand.ctaLabel }: Props) {
  return (
    <a
      href={REGISTER_URL}
      className={cn(variants[variant], size === "lg" ? "btn-lg" : "btn-md", className)}
    >
      {label}
    </a>
  );
}
