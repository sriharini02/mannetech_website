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
        primary: "#0E3B4A",
        "primary-dark": "#0A2D39",
        "primary-light": "#123847",
        navy: "#1A2A38",
        accent: "#4E7A88",
        "accent-light": "#6A9AA8",
        "accent-dark": "#3A6672",
        surface: "#F3F4F4",
        card: "#DCE3E5",
        border: "#294B57",
        "border-soft": "rgba(41,75,87,0.5)",
        "text-primary": "#FFFFFF",
        "text-secondary": "#AFC0C7",
        "text-dark": "#1A2A38",
        // Legacy aliases — map to new palette
        cream: "#F3F4F4",
        bone: "#DCE3E5",
        ivory: "#FFFFFF",
        ink: "#0E3B4A",
        "ink-deep": "#0A2D39",
        "ink-soft": "#123847",
        gold: "#4E7A88",
        "gold-deep": "#3A6672",
        "gold-soft": "#6A9AA8",
        charcoal: "#FFFFFF",
        graphite: "#AFC0C7",
        hairline: "#294B57",
        "hairline-soft": "rgba(41,75,87,0.5)",
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
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #0E3B4A 0%, #123847 50%, #1A2A38 100%)",
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      animation: {
        "orbit-slow": "orbit 22s linear infinite",
        "pulse-soft": "pulseSoft 4s ease-in-out infinite",
        "marquee": "marquee 40s linear infinite",
        "shimmer": "shimmer 2.4s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
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
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
