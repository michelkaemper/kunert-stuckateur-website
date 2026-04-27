import { COMPANY, NAV_LINKS, SERVICES } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative border-t"
      style={{ backgroundColor: "#0e0c0a", borderColor: "#3d3529" }}
      aria-label="Seitenfooter"
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

          {/* Col 1: Brand */}
          <div className="md:col-span-1">
            <div
              className="font-display font-800 text-4xl md:text-5xl text-stone uppercase tracking-tight leading-none mb-1"
            >
              KUNERT
              <span style={{ color: "#c4a882" }}>.</span>
            </div>
            <p className="font-body text-muted text-xs uppercase tracking-widest mb-6">
              Stuckateur & Handwerk
            </p>
            <address className="font-body text-muted text-sm not-italic leading-relaxed">
              {COMPANY.address.street}<br />
              {COMPANY.address.zip} {COMPANY.address.city}<br />
              <br />
              <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="hover:text-sand transition-colors">
                {COMPANY.phone}
              </a><br />
              <a href={`mailto:${COMPANY.email}`} className="hover:text-sand transition-colors break-all">
                {COMPANY.email}
              </a>
            </address>
          </div>

          {/* Col 2: Leistungen */}
          <div>
            <h3 className="overline mb-5">Leistungen</h3>
            <ul className="space-y-2.5" role="list">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#leistungen"
                    className="font-body text-muted text-sm hover:text-sand transition-colors"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Unternehmen */}
          <div>
            <h3 className="overline mb-5">Unternehmen</h3>
            <ul className="space-y-2.5" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-muted text-sm hover:text-sand transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#" className="font-body text-muted text-sm hover:text-sand transition-colors">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" className="font-body text-muted text-sm hover:text-sand transition-colors">
                  Datenschutz
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Kontakt / Öffnungszeiten */}
          <div>
            <h3 className="overline mb-5">Öffnungszeiten</h3>
            <dl className="space-y-2">
              {COMPANY.openingHours.map((h) => (
                <div key={h.days} className="flex gap-4">
                  <dt className="font-body text-muted text-sm w-16 shrink-0">{h.days}</dt>
                  <dd className="font-body text-stone text-sm">{h.hours}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8">
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 border border-sand text-sand font-display font-bold uppercase tracking-widest text-xs px-5 py-3 hover:bg-sand hover:text-pitch transition-colors"
              >
                Anfrage stellen
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t"
          style={{ borderColor: "#3d3529" }}
        >
          <p className="font-body text-ghost text-xs">
            © {year} {COMPANY.name}. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-body text-ghost text-xs hover:text-sand transition-colors">
              Impressum
            </a>
            <a href="#" className="font-body text-ghost text-xs hover:text-sand transition-colors">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
