"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { GALLERY_IMAGES } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TextureOverlay } from "@/components/ui/TextureOverlay";

export function ReferenzenSection() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState("");

  const featured = GALLERY_IMAGES.find((img) => img.featured);
  const rest = GALLERY_IMAGES.filter((img) => !img.featured);

  return (
    <section
      id="referenzen"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#252017" }}
    >
      <TextureOverlay opacity={0.04} />

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <ScrollReveal variant="fadeUp">
            <SectionLabel>Unsere Arbeiten</SectionLabel>
            <AnimatedHeading
              text={"REFERENZEN"}
              as="h2"
              className="font-display text-display-xl text-stone mt-2"
              threshold={0.2}
            />
            <p className="font-body text-muted text-base mt-6 leading-relaxed">
              Jedes Bild erzählt von einem Auftrag, der mit Sorgfalt ausgeführt
              wurde. Klicken Sie auf ein Bild für eine größere Ansicht.
            </p>
          </ScrollReveal>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {/* Featured image spans 2 rows */}
          {featured && (
            <motion.button
              className="relative md:row-span-2 overflow-hidden cursor-zoom-in group focus:outline-none"
              style={{ minHeight: "400px" }}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              onClick={() => {
                setLightboxSrc(featured.src);
                setLightboxAlt(featured.alt);
              }}
              aria-label={`Referenzbild vergrößern: ${featured.alt}`}
            >
              <Image
                src={featured.src}
                alt={featured.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                style={{ backgroundColor: "rgba(196,168,130,0.15)" }}
              >
                <span className="text-sand font-display font-700 text-3xl">+</span>
              </div>
            </motion.button>
          )}

          {/* Rest of images */}
          {rest.map((img, i) => (
            <motion.button
              key={img.id}
              className="relative overflow-hidden cursor-zoom-in group focus:outline-none"
              style={{ minHeight: "196px" }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.01 }}
              onClick={() => {
                setLightboxSrc(img.src);
                setLightboxAlt(img.alt);
              }}
              aria-label={`Referenzbild vergrößern: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                style={{ backgroundColor: "rgba(196,168,130,0.15)" }}
              >
                <span className="text-sand font-display font-700 text-3xl">+</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Dialog.Root open={!!lightboxSrc} onOpenChange={(open) => !open && setLightboxSrc(null)}>
        <AnimatePresence>
          {lightboxSrc && (
            <Dialog.Portal forceMount>
              <Dialog.Overlay asChild>
                <motion.div
                  className="fixed inset-0 z-50 bg-pitch/95 backdrop-blur-sm flex items-center justify-center p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Dialog.Content asChild>
                    <motion.div
                      className="relative max-w-5xl w-full max-h-[90vh] outline-none"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    >
                      <Dialog.Title className="sr-only">{lightboxAlt}</Dialog.Title>
                      <div className="relative aspect-[16/9] w-full overflow-hidden">
                        <Image
                          src={lightboxSrc.replace("w=800", "w=1600")}
                          alt={lightboxAlt}
                          fill
                          className="object-contain"
                          sizes="90vw"
                        />
                      </div>
                      <p className="text-muted font-body text-sm mt-3 text-center">{lightboxAlt}</p>
                      <Dialog.Close asChild>
                        <button
                          className="absolute -top-4 -right-4 w-10 h-10 bg-surface border border-border text-stone hover:text-sand hover:border-sand transition-colors flex items-center justify-center cursor-pointer"
                          aria-label="Schließen"
                        >
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M14 4L4 14M4 4l10 10" strokeLinecap="round" />
                          </svg>
                        </button>
                      </Dialog.Close>
                    </motion.div>
                  </Dialog.Content>
                </motion.div>
              </Dialog.Overlay>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>
    </section>
  );
}
