"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { STATS, COMPANY } from "@/lib/constants";
import { StatCounter } from "@/components/ui/StatCounter";
import { TextureOverlay } from "@/components/ui/TextureOverlay";
import { wordReveal } from "@/lib/motion";

const H1_LINES = ["HANDWERK.", "DAS SPRICHT", "FÜR SICH."];

export function HeroSection() {
  let wordIndex = 0;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-pitch"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80&auto=format"
          alt="Handwerkliche Fassadenarbeiten – Kunert Stuckateur"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, #0e0c0a 45%, rgba(14,12,10,0.75) 70%, rgba(14,12,10,0.2) 100%)",
        }}
      />

      {/* Grain texture */}
      <TextureOverlay opacity={0.06} />

      {/* Top editorial line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-sand/30" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 md:px-12 pt-28 pb-20">
        <div className="max-w-3xl">

          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <span className="overline">
              Stuckateur &amp; Handwerk · {COMPANY.address.city}
            </span>
          </motion.div>

          {/* H1 Word-Reveal */}
          <h1 className="font-display text-display-2xl text-stone mt-6 mb-0 leading-none tracking-tight">
            {H1_LINES.map((line, lineIdx) => {
              const words = line.split(" ");
              return (
                <span key={lineIdx} className="block">
                  {words.map((word) => {
                    const i = wordIndex++;
                    return (
                      <span
                        key={i}
                        className="inline-block overflow-hidden"
                        style={{ marginRight: "0.2em" }}
                      >
                        <motion.span
                          className="inline-block"
                          variants={wordReveal}
                          initial="hidden"
                          animate="visible"
                          custom={i + 3}
                        >
                          {word === "HANDWERK." ? (
                            <>
                              HANDWERK
                              <span className="text-sand">.</span>
                            </>
                          ) : (
                            word
                          )}
                        </motion.span>
                      </span>
                    );
                  })}
                </span>
              );
            })}
          </h1>

          {/* Subtitle */}
          <motion.p
            className="font-body text-muted text-base md:text-lg mt-8 tracking-widest uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            WDVS · Putze · Naturstein · Trockenbau · Fliesen · Kernlochbohrungen
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href="#leistungen"
              className="inline-flex items-center gap-3 bg-sand text-pitch font-display font-bold uppercase tracking-widest text-sm px-8 py-4 hover:bg-sand-dark transition-colors"
            >
              Leistungen entdecken
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-3 border border-sand text-sand font-display font-bold uppercase tracking-widest text-sm px-8 py-4 hover:bg-sand hover:text-pitch transition-colors"
            >
              Anfrage stellen
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex gap-10 mt-16 pt-10 border-t border-border"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="text-left">
                <StatCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  className="items-start text-left"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-muted"
          aria-hidden="true"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M7 15l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
