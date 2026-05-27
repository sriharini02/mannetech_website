"use client";

import { ReactNode } from "react";

interface VerticalMarqueeProps {
  children: ReactNode[];
  direction?: "up" | "down";
  speed?: number;
  className?: string;
}

export default function VerticalMarquee({
  children,
  direction = "up",
  speed = 30,
  className = "",
}: VerticalMarqueeProps) {
  const animClass = direction === "up" ? "marquee-vertical-up" : "marquee-vertical-down";

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className={animClass}
        style={{ animationDuration: `${speed}s` }}
      >
        <div className="flex flex-col shrink-0">{children}</div>
        <div className="flex flex-col shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
