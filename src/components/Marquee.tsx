"use client";

import { ReactNode } from "react";

/**
 * Infinite horizontal marquee. Pause on hover. CSS-driven for perf.
 */
export default function Marquee({
  children,
  speed = 45,
  className = "",
  reverse = false,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
  reverse?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="flex w-max"
        style={{
          animation: `marquee ${speed}s linear infinite ${reverse ? "reverse" : ""}`,
        }}
      >
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
