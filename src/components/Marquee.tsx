"use client";

import { ReactNode } from "react";

export default function Marquee({
  children,
  speed = 35,
  className = "",
  reverse = false,
  pauseOnHover = true,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      {...(pauseOnHover ? { onMouseEnter: (e) => { (e.currentTarget.firstChild as HTMLElement)?.style?.setProperty?.("animation-play-state", "paused"); }, onMouseLeave: (e) => { (e.currentTarget.firstChild as HTMLElement)?.style?.setProperty?.("animation-play-state", "running"); } } : {})}
    >
      <div
        className="flex w-max"
        style={{
          animation: `marquee ${speed}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
