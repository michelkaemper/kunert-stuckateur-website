"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { NAV_LINKS, COMPANY } from "@/lib/constants";

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 80);
  });

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(14,12,10,0.95)" : "rgba(14,12,10,0)",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(61,53,41,0.5)" : "1px solid transparent",
        }}
      >
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-display font-800 text-xl md:text-2xl text-stone uppercase tracking-[0.15em] hover:text-sand transition-colors"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            {COMPANY.nameShort}
            <span style={{ color: "#c4a882" }}>.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Hauptnavigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="overline hover:text-stone transition-colors"
                  style={{ color: isActive ? "#f2ede6" : "#9e9080" }}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#kontakt"
              className="hidden md:inline-flex items-center bg-sand text-pitch font-display font-bold uppercase tracking-widest text-xs px-5 py-2.5 hover:bg-sand-dark transition-colors"
              style={{
                backgroundColor: "#c4a882",
                color: "#0e0c0a",
                fontFamily: "var(--font-barlow-condensed), sans-serif",
              }}
            >
              Kostenlos anfragen
            </a>
            <button
              className="md:hidden text-stone hover:text-sand transition-colors cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Navigation öffnen"
              aria-expanded={mobileOpen}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              style={{ backgroundColor: "rgba(14,12,10,0.8)", backdropFilter: "blur(4px)" }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 flex flex-col"
              style={{ backgroundColor: "#1a1612", borderLeft: "1px solid #3d3529" }}
              aria-label="Mobile Navigation"
            >
              <div
                className="flex items-center justify-between px-8 py-6"
                style={{ borderBottom: "1px solid #3d3529" }}
              >
                <span
                  className="font-display font-800 text-xl text-stone uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  {COMPANY.nameShort}
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-muted hover:text-stone transition-colors cursor-pointer"
                  aria-label="Navigation schließen"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col gap-1 p-6 flex-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                    className="font-display font-700 text-xl text-stone uppercase tracking-widest py-3 px-2 hover:text-sand transition-colors"
                    style={{
                      borderBottom: "1px solid #3d3529",
                      fontFamily: "var(--font-barlow-condensed), sans-serif",
                    }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <div className="p-6">
                <a
                  href="#kontakt"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center font-display font-bold uppercase tracking-widest py-4 hover:opacity-90 transition-opacity"
                  style={{
                    backgroundColor: "#c4a882",
                    color: "#0e0c0a",
                    fontFamily: "var(--font-barlow-condensed), sans-serif",
                    fontSize: "0.75rem",
                    letterSpacing: "0.15em",
                  }}
                >
                  Kostenlos anfragen
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
