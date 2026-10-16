import type { Config } from "tailwindcss";

/**
 * Design tokens are taken from the main MiTran Global site
 * (github.com/MitranGlobal/MiTranGlobalPage → tailwind.config.ts) so this
 * landing page sits inside the same brand: near-black stage, warm ivory ink,
 * and the MiTran gold as the single accent colour.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#08090c",
          soft: "#0e1015",
          card: "#12141a",
          elev: "#171a22",
        },
        ink: {
          DEFAULT: "#f5f4ef",
          muted: "#a3a5ad",
          faint: "#6b6d76",
        },
        gold: {
          DEFAULT: "#e9c46a",
          bright: "#f5d17a",
          deep: "#c99b3a",
        },
        // Light "paper" surface = the MiTran ink colour used as a background,
        // with the MiTran near-black as text on it.
        paper: {
          DEFAULT: "#f5f4ef",
          deep: "#ebe8df",
          line: "rgba(8,9,12,0.10)",
          ink: "#08090c",
          muted: "#4a4c55",
        },
        line: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        // One grotesk family for everything (headlines + body), like the reference.
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        // Condensed caps used only inside the event lock-up tile.
        lockup: ["var(--font-lockup)", "Impact", "sans-serif"],
      },
      fontSize: {
        "display-hero": ["clamp(2.6rem, 4.6vw, 6rem)", { lineHeight: "0.98", letterSpacing: "-0.05em" }],
        "display-1": ["clamp(2.5rem, 5.6vw, 5.25rem)", { lineHeight: "1", letterSpacing: "-0.05em" }],
        "display-2": ["clamp(2.1rem, 4.4vw, 4.5rem)", { lineHeight: "1.02", letterSpacing: "-0.048em" }],
        "display-3": ["clamp(1.5rem, 2.4vw, 2.25rem)", { lineHeight: "1.1", letterSpacing: "-0.035em" }],
        "stat": ["clamp(3.75rem, 7.5vw, 6rem)", { lineHeight: "1", letterSpacing: "-0.06em" }],
        "lead": ["clamp(1.125rem, 1.6vw, 1.5rem)", { lineHeight: "1.55", letterSpacing: "-0.01em" }],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #f5d17a 0%, #e9c46a 40%, #c99b3a 100%)",
      },
      boxShadow: {
        glow: "0 0 60px -12px rgba(233,196,106,0.35)",
        "glow-lg": "0 0 120px -20px rgba(233,196,106,0.45)",
        card: "0 1px 0 rgba(255,255,255,0.04) inset, 0 20px 40px -20px rgba(0,0,0,0.6)",
        paper: "0 1px 0 rgba(255,255,255,0.7) inset, 0 18px 40px -24px rgba(8,9,12,0.25)",
      },
      animation: {
        marquee: "marquee 34s linear infinite",
        "marquee-reverse": "marquee 34s linear infinite reverse",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.45", transform: "scale(0.8)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
