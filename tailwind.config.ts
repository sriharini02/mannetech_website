import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Editorial palette — warm cream + navy ink + gold accent
        cream: "#F4EEE0",        // primary page background
        bone: "#FBF6EB",          // slightly lighter — cards
        ivory: "#FFFBF2",         // elevated surfaces
        ink: "#0B2545",           // deep navy (HAN logo base)
        "ink-deep": "#061B39",   // deepest navy
        "ink-soft": "#1E3A62",    // softer navy for hover states
        gold: "#F4B942",          // HAN accent gold/yellow
        "gold-deep": "#D99A1F",  // darker gold for hover
        "gold-soft": "#FADDA1",  // soft gold
        charcoal: "#0F1419",      // primary text
        graphite: "#5A6677",      // secondary text
        hairline: "#E3DCCB",      // thin lines / borders
        "hairline-soft": "#EEE6D4",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Fraunces", "Georgia", "serif"],
        body: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "JetBrains Mono", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 9vw, 9rem)", { lineHeight: "0.94", letterSpacing: "-0.035em" }],
        "display-lg": ["clamp(2.75rem, 6vw, 6rem)", { lineHeight: "0.96", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(2.25rem, 4.5vw, 4.25rem)", { lineHeight: "1", letterSpacing: "-0.025em" }],
      },
      animation: {
        "orbit-slow": "orbit 22s linear infinite",
        "pulse-soft": "pulseSoft 4s ease-in-out infinite",
        "marquee": "marquee 40s linear infinite",
        "shimmer": "shimmer 2.4s ease-in-out infinite",
      },
      keyframes: {
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(14px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(14px) rotate(-360deg)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.8" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.7'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;
