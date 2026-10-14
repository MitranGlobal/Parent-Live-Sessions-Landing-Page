import { cn } from "@/lib/cn";

/**
 * Photo slot with a built-in fallback.
 *
 * The reference page is photo-led (stage shots, crowds, sunsets). Until real
 * MiTran photography is added (see `images` in lib/content.ts) this renders
 * warm "stage light" art in the MiTran gold palette: a horizon glow, light
 * beams and soft bokeh, so the layout reads the same either way.
 */
type Variant = "sunset" | "stage" | "ember" | "dusk" | "spot";

const looks: Record<Variant, string> = {
  sunset:
    "radial-gradient(70% 60% at 72% 62%, rgba(245,209,122,0.95), rgba(233,196,106,0.55) 22%, rgba(201,155,58,0.35) 40%, transparent 66%)," +
    "radial-gradient(60% 50% at 95% 15%, rgba(201,155,58,0.55), transparent 60%)," +
    "linear-gradient(180deg, #120f0b 0%, #2a1d0c 38%, #6b4914 64%, #241808 82%, #08090c 100%)",
  stage:
    "radial-gradient(45% 70% at 50% -10%, rgba(245,209,122,0.75), rgba(233,196,106,0.25) 40%, transparent 70%)," +
    "radial-gradient(80% 40% at 50% 110%, rgba(201,155,58,0.45), transparent 70%)," +
    "linear-gradient(180deg, #1a140b 0%, #0b0b0d 100%)",
  ember:
    "radial-gradient(60% 60% at 25% 75%, rgba(245,209,122,0.85), rgba(201,155,58,0.35) 35%, transparent 65%)," +
    "radial-gradient(50% 50% at 85% 20%, rgba(233,196,106,0.35), transparent 60%)," +
    "linear-gradient(135deg, #1b1309 0%, #3a2709 50%, #0d0c0b 100%)",
  dusk:
    "radial-gradient(70% 55% at 50% 100%, rgba(233,196,106,0.8), rgba(201,155,58,0.3) 40%, transparent 70%)," +
    "linear-gradient(180deg, #0d0d10 0%, #1c160d 55%, #3d2a0d 100%)",
  spot:
    "radial-gradient(40% 50% at 70% 35%, rgba(245,209,122,0.65), transparent 70%)," +
    "radial-gradient(60% 60% at 15% 90%, rgba(201,155,58,0.4), transparent 70%)," +
    "linear-gradient(160deg, #15110a 0%, #0a0a0c 100%)",
};

// Deterministic bokeh so server and client render the same markup.
function bokeh(seed: number, count = 18) {
  let x = seed * 9301 + 49297;
  const rnd = () => {
    x = (x * 9301 + 49297) % 233280;
    return x / 233280;
  };
  return Array.from({ length: count }, () => ({
    left: `${rnd() * 100}%`,
    top: `${35 + rnd() * 60}%`,
    size: 4 + rnd() * 26,
    o: 0.15 + rnd() * 0.5,
  }));
}

export default function ArtPanel({
  src,
  alt = "",
  variant = "stage",
  seed = 1,
  beams = false,
  className,
  children,
}: {
  src?: string;
  alt?: string;
  variant?: Variant;
  seed?: number;
  beams?: boolean;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("relative overflow-hidden bg-bg", className)}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <div className="absolute inset-0" style={{ background: looks[variant] }} aria-hidden>
          {beams && <div className="beams absolute inset-0" />}
          {bokeh(seed).map((b, i) => (
            <span
              key={i}
              className="absolute rounded-full bg-gold-bright blur-[2px]"
              style={{ left: b.left, top: b.top, width: b.size, height: b.size, opacity: b.o * 0.6 }}
            />
          ))}
          <div className="grain absolute inset-0" />
        </div>
      )}
      {children}
    </div>
  );
}
