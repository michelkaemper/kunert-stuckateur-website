"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function RezensionenSection() {
  return (
    <section
      id="rezensionen"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#1a1612" }}
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        {/* Header centered */}
        <div className="text-center mb-16">
          <ScrollReveal variant="fadeUp">
            <SectionLabel>Was Kunden sagen</SectionLabel>
            <AnimatedHeading
              text={"KUNDENSTIMMEN"}
              as="h2"
              className="font-display text-display-xl text-stone mt-2"
              threshold={0.2}
            />
          </ScrollReveal>
        </div>

        {/* Desktop: 3-column grid | Mobile: horizontal scroll */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <TestimonialCard testimonial={t} />
            </motion.div>
          ))}
        </div>

        {/* Mobile: horizontal scroll with snap */}
        <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 scrollbar-hide">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="shrink-0">
              <TestimonialCard testimonial={t} />
            </div>
          ))}
        </div>

        {/* Google-Bewertung Hinweis */}
        <ScrollReveal variant="fadeUp" className="mt-12 text-center">
          <p className="font-body text-muted text-sm">
            Alle Bewertungen sind authentisch von unseren Kunden.
            <span className="text-sand mx-2">·</span>
            <a href="#kontakt" className="text-sand hover:text-sand-dark transition-colors underline underline-offset-4">
              Kontakt aufnehmen
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
