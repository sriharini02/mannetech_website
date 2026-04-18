"use client";

import { motion, useInView, Variants } from "framer-motion";
import { ReactNode, useRef } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  animation?: "fade-up" | "fade-left" | "fade-right" | "fade" | "scale" | "blur-up";
  amount?: number;
  once?: boolean;
  as?: "div" | "section" | "article" | "span" | "header" | "footer" | "li";
}

const variants: Record<string, Variants> = {
  "fade-up": {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, delay: i, ease: [0.22, 1, 0.36, 1] },
    }),
  },
  "fade-left": {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, delay: i, ease: [0.22, 1, 0.36, 1] },
    }),
  },
  "fade-right": {
    hidden: { opacity: 0, x: 50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, delay: i, ease: [0.22, 1, 0.36, 1] },
    }),
  },
  fade: {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: { duration: 1.1, delay: i, ease: [0.22, 1, 0.36, 1] },
    }),
  },
  scale: {
    hidden: { opacity: 0, scale: 0.94 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 1, delay: i, ease: [0.22, 1, 0.36, 1] },
    }),
  },
  "blur-up": {
    hidden: { opacity: 0, y: 30, filter: "blur(12px)" },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.1, delay: i, ease: [0.22, 1, 0.36, 1] },
    }),
  },
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  animation = "fade-up",
  amount = 0.15,
  once = true,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount });

  const MotionTag = motion[as] as any;

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={delay}
      variants={variants[animation]}
    >
      {children}
    </MotionTag>
  );
}

/* ─── RevealText: word-by-word stagger for display headlines ─── */
export function RevealText({
  text,
  className = "",
  delay = 0,
  once = true,
  as = "h1",
}: {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
  as?: keyof JSX.IntrinsicElements;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount: 0.2 });

  const words = text.split(" ");

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: delay,
        staggerChildren: 0.08,
      },
    },
  };

  const word: Variants = {
    hidden: { y: "110%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const Tag = as as any;

  return (
    <Tag ref={ref} className={className}>
      <motion.span
        style={{ display: "inline" }}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={container}
      >
        {words.map((w, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              overflow: "hidden",
              paddingBottom: "0.06em",
              paddingTop: "0.06em",
              verticalAlign: "top",
            }}
          >
            <motion.span
              variants={word}
              style={{ display: "inline-block", whiteSpace: "pre" }}
            >
              {w}
              {i < words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
