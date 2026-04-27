"use client";

import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const USPS = [
  "Inhabergeführter Betrieb seit über 25 Jahren",
  "Eingetragener Meisterbetrieb — geprüfte Qualität",
  "Zuverlässig, termingerecht und transparent",
  "Ihre Region: Wetter, Hagen, Ennepe-Ruhr-Kreis",
];

export function UeberUnsSection() {
  return (
    <section
      id="ueber-uns"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#0e0c0a" }}
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Left: Image with editorial clip */}
          <ScrollReveal variant="slideLeft" className="relative">
            <div
              className="relative overflow-hidden aspect-[4/5] md:aspect-[3/4]"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%)",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1761986757577-140af8859587?w=900&q=80&auto=format"
                alt="Stuckateur verputzt Wand mit Kelle – Kunert Handwerksbetrieb"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Dark overlay for depth */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 60%, rgba(14,12,10,0.6) 100%)",
                }}
              />
            </div>

            {/* Floating stat box */}
            <div
              className="absolute bottom-8 -right-4 md:right-4 bg-sand text-pitch px-6 py-5 shadow-2xl"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 92% 100%, 0 100%)" }}
            >
              <div className="font-display font-800 text-4xl leading-none">25<span className="text-2xl">+</span></div>
              <div className="font-body text-xs uppercase tracking-widest font-600 mt-1 opacity-80">
                Jahre<br />Erfahrung
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Text */}
          <ScrollReveal variant="fadeUp" delay={0.15}>
            <SectionLabel>Über uns</SectionLabel>
            <AnimatedHeading
              text={"QUALITÄT\nAUS\nÜBERZEUGUNG"}
              as="h2"
              className="font-display text-display-lg text-stone mt-2 mb-8"
              threshold={0.2}
            />

            <p className="font-body text-muted text-base md:text-lg leading-relaxed mb-6">
              Als inhabergeführter Handwerksbetrieb in Wetter/Volmarstein stehen
              wir seit über 25 Jahren für handwerkliche Präzision und
              verlässliche Ausführung. Jedes Projekt ist für uns ein Auftrag mit
              Verantwortung — gegenüber unseren Kunden und gegenüber dem
              Handwerk selbst.
            </p>
            <p className="font-body text-muted text-base leading-relaxed mb-10">
              Von der WDVS-Fassade bis zur Kernlochbohrung: Wir decken sieben
              Fachbereiche ab und bieten Ihnen damit einen echten
              Komplettservice aus einer Hand. Kein Subunternehmer,
              keine Ausreden — nur saubere Arbeit.
            </p>

            {/* USP List */}
            <ul className="space-y-3 mb-10" role="list">
              {USPS.map((usp) => (
                <li key={usp} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: "#c4a882" }}
                    aria-hidden="true"
                  />
                  <span className="font-body text-stone text-sm">{usp}</span>
                </li>
              ))}
            </ul>

            <a
              href="#kontakt"
              className="inline-flex items-center gap-3 border border-sand text-sand font-display font-bold uppercase tracking-widest text-sm px-8 py-4 hover:bg-sand hover:text-pitch transition-colors"
            >
              Gespräch anfragen
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
