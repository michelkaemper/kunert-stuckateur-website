"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES } from "@/lib/constants";

type FormState = "idle" | "submitting" | "success" | "error";

interface FormData {
  name: string;
  phone: string;
  email: string;
  leistung: string;
  nachricht: string;
  datenschutz: boolean;
}

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [data, setData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    leistung: "",
    nachricht: "",
    datenschutz: false,
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value, type } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState("submitting");
    // Simulated async submit — replace with actual endpoint
    await new Promise((res) => setTimeout(res, 900));
    setFormState("success");
  }

  const inputClass =
    "w-full bg-transparent border-0 border-b border-border text-stone font-body text-base py-3 px-0 placeholder:text-ghost focus:outline-none focus:border-sand transition-colors duration-200";

  const labelClass = "overline block mb-2";

  return (
    <AnimatePresence mode="wait">
      {formState === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="flex flex-col items-center justify-center py-16 text-center"
        >
          <div
            className="w-16 h-16 flex items-center justify-center mb-6"
            style={{ backgroundColor: "rgba(196,168,130,0.15)", border: "1px solid #c4a882" }}
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#c4a882" strokeWidth="2">
              <path d="M5 14l7 7L23 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="font-display font-700 text-display-md text-stone uppercase mb-3">
            Vielen Dank!
          </h3>
          <p className="font-body text-muted text-base">
            Wir haben Ihre Anfrage erhalten und melden<br />uns in Kürze bei Ihnen.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          noValidate
          className="space-y-8"
        >
          {/* Row 1: Name + Telefon */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <label htmlFor="name" className={labelClass}>
                Name <span className="text-sand" aria-hidden="true">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={data.name}
                onChange={handleChange}
                required
                placeholder="Max Mustermann"
                className={inputClass}
                autoComplete="name"
              />
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>
                Telefon
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={data.phone}
                onChange={handleChange}
                placeholder="+49 XXXX XXXXXX"
                className={inputClass}
                autoComplete="tel"
              />
            </div>
          </div>

          {/* Row 2: E-Mail + Leistung */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <label htmlFor="email" className={labelClass}>
                E-Mail <span className="text-sand" aria-hidden="true">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={data.email}
                onChange={handleChange}
                required
                placeholder="max@beispiel.de"
                className={inputClass}
                autoComplete="email"
              />
            </div>
            <div>
              <label htmlFor="leistung" className={labelClass}>
                Leistung
              </label>
              <select
                id="leistung"
                name="leistung"
                value={data.leistung}
                onChange={handleChange}
                className={`${inputClass} appearance-none cursor-pointer`}
              >
                <option value="" className="bg-surface">Bitte wählen...</option>
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.id} className="bg-surface">
                    {s.title}
                    {s.subtitle ? ` (${s.subtitle})` : ""}
                  </option>
                ))}
                <option value="sonstiges" className="bg-surface">Sonstiges</option>
              </select>
            </div>
          </div>

          {/* Nachricht */}
          <div>
            <label htmlFor="nachricht" className={labelClass}>
              Ihre Nachricht <span className="text-sand" aria-hidden="true">*</span>
            </label>
            <textarea
              id="nachricht"
              name="nachricht"
              value={data.nachricht}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Beschreiben Sie kurz Ihr Vorhaben..."
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Datenschutz */}
          <div className="flex items-start gap-4">
            <button
              type="button"
              role="checkbox"
              aria-checked={data.datenschutz}
              onClick={() =>
                setData((prev) => ({ ...prev, datenschutz: !prev.datenschutz }))
              }
              className="mt-0.5 w-5 h-5 border border-border shrink-0 flex items-center justify-center hover:border-sand transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-sand"
              style={{ backgroundColor: data.datenschutz ? "#c4a882" : "transparent" }}
            >
              {data.datenschutz && (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#0e0c0a" strokeWidth="2">
                  <path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
            <p className="font-body text-muted text-sm leading-relaxed">
              Ich habe die{" "}
              <a href="#" className="text-sand hover:underline">
                Datenschutzerklärung
              </a>{" "}
              gelesen und stimme der Verarbeitung meiner Daten zur
              Bearbeitung meiner Anfrage zu.{" "}
              <span className="text-sand" aria-hidden="true">*</span>
            </p>
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={formState === "submitting" || !data.datenschutz}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-sand text-pitch font-display font-bold uppercase tracking-widest text-sm px-10 py-4 hover:bg-sand-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {formState === "submitting" ? (
              <>
                <svg className="animate-spin" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="6" stroke="#0e0c0a" strokeWidth="2" strokeDasharray="28" strokeDashoffset="8" />
                </svg>
                Wird gesendet...
              </>
            ) : (
              <>
                Anfrage absenden
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </>
            )}
          </motion.button>

          <p className="font-body text-ghost text-xs">
            <span className="text-sand">*</span> Pflichtfelder
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
