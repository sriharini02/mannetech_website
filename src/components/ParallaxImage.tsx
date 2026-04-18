"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ParallaxImageProps {
  children: ReactNode;
  className?: string;
  amount?: number; // px of parallax travel
}

/**
 * Wrapping container that applies subtle y-axis parallax to its child
 * as the viewport scrolls through it.
 */
export default function ParallaxImage({
  children,
  className = "",
  amount = 60,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="w-full h-full parallax-img">
        {children}
      </motion.div>
    </div>
  );
}
