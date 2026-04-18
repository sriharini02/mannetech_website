import React from "react";

/**
 * HAN Solutions wordmark logo.
 * Recreated as inline SVG so it scales cleanly and inherits color.
 * - The "H" with a crescent swoosh underneath (ink navy)
 * - The small orbiting gold dot
 */
interface LogoProps {
  className?: string;
  variant?: "full" | "mark" | "horizontal";
  inkColor?: string;
  goldColor?: string;
  hColor?: string;
}

export default function Logo({
  className = "",
  variant = "mark",
  inkColor = "currentColor",
  goldColor = "#F4B942",
  hColor = "#FBF6EB",
}: LogoProps) {
  if (variant === "mark") {
    // Just the circular H mark
    return (
      <svg
        viewBox="0 0 64 64"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Navy circle */}
        <circle cx="32" cy="32" r="30" fill={inkColor} />
        {/* Crescent swoosh (behind H) — gold arc sweeping from bottom-left to top-right */}
        <path
          d="M 14 48 Q 10 32 22 20 Q 34 10 48 14"
          stroke={goldColor}
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
        />
        {/* H letter (ivory) */}
        <path
          d="M 20 18 L 20 46 M 20 32 L 38 32 M 38 18 L 38 46"
          stroke={hColor}
          strokeWidth="4"
          strokeLinecap="square"
          fill="none"
        />
        {/* Little orbiting dot, top right */}
        <circle cx="49" cy="16" r="3" fill={goldColor} />
      </svg>
    );
  }

  if (variant === "horizontal") {
    // Mark + wordmark in a row
    return (
      <svg
        viewBox="0 0 260 64"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Han Solutions"
      >
        <g>
          <circle cx="32" cy="32" r="30" fill={inkColor} />
          <path
            d="M 14 48 Q 10 32 22 20 Q 34 10 48 14"
            stroke={goldColor}
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.9"
          />
          <path
            d="M 20 18 L 20 46 M 20 32 L 38 32 M 38 18 L 38 46"
            stroke={hColor}
            strokeWidth="4"
            strokeLinecap="square"
            fill="none"
          />
          <circle cx="49" cy="16" r="3" fill={goldColor} />
        </g>
        <text
          x="78"
          y="28"
          fill={inkColor}
          fontFamily="var(--font-fraunces), Fraunces, Georgia, serif"
          fontWeight="600"
          fontSize="22"
          letterSpacing="0.02em"
        >
          HAN
        </text>
        <text
          x="78"
          y="52"
          fill={inkColor}
          fontFamily="var(--font-fraunces), Fraunces, Georgia, serif"
          fontWeight="600"
          fontSize="22"
          letterSpacing="0.02em"
        >
          SOLUTIONS
        </text>
      </svg>
    );
  }

  // Full logo with tagline (for footer / about hero)
  return (
    <svg
      viewBox="0 0 220 240"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Han Solutions — Empowering Your Businesses"
    >
      <g transform="translate(70, 10)">
        <circle cx="40" cy="40" r="38" fill={inkColor} />
        <path
          d="M 18 60 Q 12 40 26 24 Q 42 10 60 16"
          stroke={goldColor}
          strokeWidth="4.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 26 22 L 26 58 M 26 40 L 48 40 M 48 22 L 48 58"
          stroke={hColor}
          strokeWidth="5"
          strokeLinecap="square"
          fill="none"
        />
        <circle cx="62" cy="18" r="4" fill={goldColor} />
      </g>
      <text
        x="110"
        y="135"
        textAnchor="middle"
        fill={inkColor}
        fontFamily="var(--font-fraunces), Fraunces, Georgia, serif"
        fontWeight="700"
        fontSize="32"
        letterSpacing="0.02em"
      >
        HAN
      </text>
      <text
        x="110"
        y="170"
        textAnchor="middle"
        fill={inkColor}
        fontFamily="var(--font-fraunces), Fraunces, Georgia, serif"
        fontWeight="700"
        fontSize="32"
        letterSpacing="0.02em"
      >
        SOLUTIONS
      </text>
      <line x1="50" y1="190" x2="170" y2="190" stroke={inkColor} strokeWidth="1" opacity="0.25" />
      <text
        x="110"
        y="215"
        textAnchor="middle"
        fill={inkColor}
        fontFamily="var(--font-jetbrains-mono), JetBrains Mono, monospace"
        fontSize="10"
        letterSpacing="0.28em"
      >
        EMPOWERING YOUR BUSINESSES
      </text>
    </svg>
  );
}
