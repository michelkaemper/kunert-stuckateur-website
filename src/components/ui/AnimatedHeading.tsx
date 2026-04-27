"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { wordReveal } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface AnimatedHeadingProps {
  text: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  once?: boolean;
  baseDelay?: number;
  threshold?: number;
  mountAnimate?: boolean;
}

export function AnimatedHeading({
  text,
  as: Tag = "h2",
  className,
  once = true,
  baseDelay = 0,
  threshold = 0.2,
  mountAnimate = false,
}: AnimatedHeadingProps) {
  const { ref, inView } = useInView({ threshold, triggerOnce: once });

  const lines = text.split("\n");
  let wordIndex = 0;

  return (
    <Tag ref={ref} className={cn("overflow-visible", className)}>
      {lines.map((line, lineIdx) => {
        const words = line.split(" ");
        return (
          <span key={lineIdx} className="block">
            {words.map((word) => {
              const currentIndex = wordIndex++;
              return (
                <span
                  key={currentIndex}
                  className="inline-block overflow-hidden"
                  style={{ marginRight: "0.25em" }}
                >
                  <motion.span
                    className="inline-block"
                    variants={wordReveal}
                    initial="hidden"
                    animate={mountAnimate || inView ? "visible" : "hidden"}
                    custom={baseDelay / 0.06 + currentIndex}
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </span>
        );
      })}
    </Tag>
  );
}
