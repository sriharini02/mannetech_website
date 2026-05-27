"use client";

import { ReactNode } from "react";

export default function Marquee({
  children,
  speed = 15,
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
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className={`flex w-max ${pauseOnHover ? "marquee-track" : ""}`}
        style={{
          animation: `marquee ${speed}s linear infinite ${reverse ? "reverse" : ""}`,
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
