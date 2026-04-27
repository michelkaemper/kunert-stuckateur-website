"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ContactForm } from "@/components/ui/ContactForm";
import { COMPANY } from "@/lib/constants";

export function KontaktSection() {
  return (
    <section
      id="kontakt"
      className="relative py-24 md:py-32"
      style={{ backgroundColor: "#0e0c0a" }}
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

          {/* Left: Contact Info */}
          <ScrollReveal variant="slideLeft">
            <SectionLabel>Kontakt aufnehmen</SectionLabel>

            <div className="mt-4 mb-10">
              <h2
                className="font-display font-800 text-display-lg uppercase leading-none"
                style={{ color: "#c4a882" }}
              >
                BEREIT,
                <br />
                WENN SIE
                <br />
                ES SIND.
              </h2>
            </div>

            <div
              className="border-l-2 pl-6 space-y-8"
              style={{ borderColor: "rgba(196,168,130,0.4)" }}
            >
              {/* Address */}
              <div>
                <div className="overline mb-2">Adresse</div>
                <address className="font-body text-stone text-base not-italic leading-relaxed">
                  {COMPANY.name}<br />
                  {COMPANY.address.street}<br />
                  {COMPANY.address.zip} {COMPANY.address.city}
                </address>
              </div>

              {/* Phone */}
              <div>
                <div className="overline mb-2">Telefon</div>
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                  className="font-body text-stone text-base hover:text-sand transition-colors flex items-center gap-3"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M6 1H3a1 1 0 00-1 1v12a1 1 0 001 1h10a1 1 0 001-1V9a1 1 0 00-1-1H9m-3-7v3m0 0a2 2 0 012 2v0a2 2 0 01-2 2H3" strokeLinecap="round" />
                  </svg>
                  {COMPANY.phone}
                </a>
              </div>

              {/* Email */}
              <div>
                <div className="overline mb-2">E-Mail</div>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="font-body text-stone text-base hover:text-sand transition-colors flex items-center gap-3 break-all"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <rect x="1" y="3" width="14" height="10" rx="1" />
                    <path d="M1 4l7 5 7-5" strokeLinecap="round" />
                  </svg>
                  {COMPANY.email}
                </a>
              </div>

              {/* Opening hours */}
              <div>
                <div className="overline mb-2">Öffnungszeiten</div>
                <dl className="space-y-1">
                  {COMPANY.openingHours.map((h) => (
                    <div key={h.days} className="flex gap-4">
                      <dt className="font-body text-muted text-sm w-16 shrink-0">{h.days}</dt>
                      <dd className="font-body text-stone text-sm">{h.hours}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Form */}
          <ScrollReveal variant="fadeUp" delay={0.15}>
            <AnimatedHeading
              text={"IHRE\nANFRAGE"}
              as="h2"
              className="font-display text-display-lg text-stone mb-10"
              threshold={0.2}
            />
            <ContactForm />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
