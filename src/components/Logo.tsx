import React from "react";

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
    return (
      <svg
        viewBox="0 0 64 64"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
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
      </svg>
    );
  }

  if (variant === "horizontal") {
    return (
      <svg
        viewBox="0 0 360 64"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Manne Technologies"
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
          y="24"
          fill={inkColor}
          fontFamily="var(--font-fraunces), Fraunces, Georgia, serif"
          fontWeight="600"
          fontSize="20"
          letterSpacing="0.02em"
        >
          MANNE
        </text>
        <text
          x="78"
          y="47"
          fill={inkColor}
          fontFamily="var(--font-fraunces), Fraunces, Georgia, serif"
          fontWeight="600"
          fontSize="20"
          letterSpacing="0.02em"
        >
          TECHNOLOGIES
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 280 240"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Manne Technologies — Engineering Digital Futures"
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
        x="140"
        y="135"
        textAnchor="middle"
        fill={inkColor}
        fontFamily="var(--font-fraunces), Fraunces, Georgia, serif"
        fontWeight="700"
        fontSize="28"
        letterSpacing="0.02em"
      >
        MANNE
      </text>
      <text
        x="140"
        y="170"
        textAnchor="middle"
        fill={inkColor}
        fontFamily="var(--font-fraunces), Fraunces, Georgia, serif"
        fontWeight="700"
        fontSize="28"
        letterSpacing="0.02em"
      >
        TECHNOLOGIES
      </text>
      <line x1="40" y1="190" x2="240" y2="190" stroke={inkColor} strokeWidth="1" opacity="0.25" />
      <text
        x="140"
        y="215"
        textAnchor="middle"
        fill={inkColor}
        fontFamily="var(--font-jetbrains-mono), JetBrains Mono, monospace"
        fontSize="10"
        letterSpacing="0.28em"
      >
        Engineering Tomorrow's Digital Future
      </text>
    </svg>
  );
}
