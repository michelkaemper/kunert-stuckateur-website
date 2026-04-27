"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ServiceIcon } from "@/components/icons/ServiceIcons";
import type { Service } from "@/lib/types";
import { scaleIn } from "@/lib/motion";
import { useInView } from "react-intersection-observer";

interface LeistungCardProps {
  service: Service;
  index: number;
  spanFull?: boolean;
}

export function LeistungCard({ service, index, spanFull }: LeistungCardProps) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.article
      ref={ref}
      variants={scaleIn}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay: index * 0.08 }}
      className={`group relative bg-surface border border-border overflow-hidden flex flex-col hover:border-sand/40 transition-all duration-300 ${
        spanFull ? "md:col-span-2" : ""
      }`}
      style={{
        boxShadow: "0 0 0 0 rgba(196,168,130,0)",
        transition: "border-color 0.3s, box-shadow 0.3s",
      }}
      whileHover={{
        boxShadow: "0 0 0 1px rgba(196,168,130,0.2)",
      }}
    >
      {/* Image strip */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Sand gradient fade at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16"
          style={{
            background: "linear-gradient(to top, #2e2820, transparent)",
          }}
        />
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start gap-4 mb-4">
          <div className="text-muted group-hover:text-sand transition-colors duration-300 mt-1 shrink-0">
            <ServiceIcon id={service.icon} className="w-8 h-8" />
          </div>
          <div>
            <h3 className="font-display font-700 text-stone text-xl uppercase tracking-wide leading-tight">
              {service.title}
            </h3>
            {service.subtitle && (
              <p className="font-body text-sand text-sm italic mt-0.5">
                {service.subtitle}
              </p>
            )}
          </div>
        </div>

        <p className="font-body text-muted text-sm leading-relaxed flex-1">
          {service.description}
        </p>

        {/* Hover reveal */}
        <div className="overflow-hidden h-0 group-hover:h-8 transition-all duration-300 mt-2">
          <a
            href="#kontakt"
            className="overline text-sand flex items-center gap-2 hover:gap-3 transition-all"
            aria-label={`Mehr über ${service.title}`}
          >
            Mehr erfahren
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </motion.article>
  );
}
