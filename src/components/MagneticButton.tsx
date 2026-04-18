"use client";

import { motion } from "framer-motion";
import { useRef, useState, ReactNode, MouseEvent } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  as?: "button" | "a" | "div";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

/**
 * Magnetic hover effect — subtle pull toward cursor.
 * Works for anchors, buttons, and div containers.
 */
export default function MagneticButton({
  children,
  className = "",
  strength = 0.3,
  as = "button",
  href,
  onClick,
  type = "button",
  disabled,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    setPos({ x, y });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  const MotionTag = motion[as] as any;

  return (
    <MotionTag
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 180, damping: 18, mass: 0.35 }}
      type={as === "button" ? type : undefined}
      disabled={disabled}
    >
      {children}
    </MotionTag>
  );
}
