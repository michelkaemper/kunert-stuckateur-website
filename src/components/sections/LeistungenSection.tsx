"use client";

import { SERVICES } from "@/lib/constants";
import { LeistungCard } from "@/components/ui/LeistungCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TextureOverlay } from "@/components/ui/TextureOverlay";

export function LeistungenSection() {
  return (
    <section
      id="leistungen"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#1a1612" }}
    >
      <TextureOverlay opacity={0.04} />

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end gap-10 md:gap-20 mb-16">
          {/* Left: heading (35%) */}
          <div className="md:w-[35%] shrink-0">
            <ScrollReveal variant="fadeUp">
              <SectionLabel>Was wir anbieten</SectionLabel>
              <AnimatedHeading
                text={"UNSERE\nLEISTUNGEN"}
                as="h2"
                className="font-display text-display-xl text-stone mt-2"
                threshold={0.2}
              />
            </ScrollReveal>
          </div>

          {/* Right: descriptor */}
          <ScrollReveal variant="fadeUp" delay={0.15} className="md:w-[65%] md:pb-2">
            <div
              className="border-l-2 pl-6"
              style={{ borderColor: "#c4a882" }}
            >
              <p className="font-body text-muted text-base md:text-lg leading-relaxed">
                Sieben Fachbereiche. Ein Ansprechpartner. Alles aus einer Hand —
                von der Wärmedämmung bis zur Kernlochbohrung. Kompetent,
                termingerecht und mit dem Anspruch des Meisters.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className={`bg-pitch ${
                index === SERVICES.length - 1 && SERVICES.length % 2 !== 0
                  ? "md:col-span-2"
                  : ""
              }`}
            >
              <LeistungCard
                service={service}
                index={index}
                spanFull={
                  index === SERVICES.length - 1 && SERVICES.length % 2 !== 0
                }
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal variant="fadeUp" className="mt-12 text-center">
          <p className="font-body text-muted mb-6">
            Alle Leistungen auf einen Blick — wir beraten Sie gerne persönlich.
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-3 bg-sand text-pitch font-display font-bold uppercase tracking-widest text-sm px-8 py-4 hover:bg-sand-dark transition-colors"
          >
            Kostenlos anfragen
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
