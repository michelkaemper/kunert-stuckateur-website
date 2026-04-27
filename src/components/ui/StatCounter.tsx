"use client";

import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { animate } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatCounterProps {
  value: number;
  suffix: string;
  label: string;
  duration?: number;
  className?: string;
}

export function StatCounter({
  value,
  suffix,
  label,
  duration = 2,
  className,
}: StatCounterProps) {
  const displayRef = useRef<HTMLSpanElement>(null);
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (inView && !hasAnimated.current && displayRef.current) {
      hasAnimated.current = true;
      const node = displayRef.current;
      const controls = animate(0, value, {
        duration,
        ease: "easeOut",
        onUpdate(latest) {
          node.textContent = String(Math.round(latest));
        },
      });
      return () => controls.stop();
    }
  }, [inView, value, duration]);

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <div className="font-display font-800 text-display-lg text-stone leading-none">
        <span ref={displayRef}>0</span>
        <span className="text-sand">{suffix}</span>
      </div>
      <div className="overline mt-2">{label}</div>
    </div>
  );
}
