import type { Testimonial } from "@/lib/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const initials = testimonial.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <article className="bg-surface border border-border p-8 flex flex-col h-full min-w-[85vw] md:min-w-0 snap-center">
      {/* Decorative quote mark */}
      <div
        className="font-display font-800 text-7xl leading-none mb-4 select-none"
        style={{ color: "rgba(196,168,130,0.2)" }}
        aria-hidden="true"
      >
        &ldquo;
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-5" aria-label={`${testimonial.rating} von 5 Sternen`}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#c4a882" aria-hidden="true">
            <path d="M7 1l1.545 4.26H13l-3.636 2.644 1.38 4.248L7 9.52 3.256 12.152l1.38-4.248L1 5.26h4.455L7 1z" />
          </svg>
        ))}
      </div>

      {/* Quote text */}
      <blockquote className="font-body text-stone text-base italic leading-relaxed flex-1 mb-6">
        &ldquo;{testimonial.text}&rdquo;
      </blockquote>

      {/* Separator */}
      <div className="h-px mb-6" style={{ backgroundColor: "rgba(196,168,130,0.2)" }} />

      {/* Author */}
      <div className="flex items-center gap-4">
        {/* Avatar with initials */}
        <div
          className="w-10 h-10 rounded-none flex items-center justify-center font-display font-700 text-sm text-pitch shrink-0"
          style={{ backgroundColor: "#c4a882" }}
          aria-hidden="true"
        >
          {initials}
        </div>
        <div>
          <div className="font-display font-700 text-stone text-base uppercase tracking-wide">
            {testimonial.name}
          </div>
          <div className="font-body text-muted text-xs">
            {testimonial.location} · {testimonial.service}
          </div>
        </div>
      </div>
    </article>
  );
}
