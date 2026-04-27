"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp, fadeIn, slideInLeft, scaleIn } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { Variants } from "framer-motion";

type RevealVariant = "fadeUp" | "fadeIn" | "slideLeft" | "scaleIn";

const variantMap: Record<RevealVariant, Variants> = {
  fadeUp,
  fadeIn,
  slideLeft: slideInLeft,
  scaleIn,
};

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
  threshold?: number;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  variant = "fadeUp",
  threshold = 0.15,
}: ScrollRevealProps) {
  const { ref, inView } = useInView({ threshold, triggerOnce: true });
  const selectedVariant = variantMap[variant];

  return (
    <motion.div
      ref={ref}
      variants={selectedVariant}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={delay}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
