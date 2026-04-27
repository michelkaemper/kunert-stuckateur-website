import type { Service, Testimonial, NavLink, StatItem } from "./types";

export const COMPANY = {
  name: "Kunert Stuckateur- und Handwerksbetrieb GmbH",
  nameShort: "Kunert",
  tagline: "Handwerk, das spricht für sich.",
  founded: "1998",
  address: {
    street: "Arndtstr. 10",
    zip: "58300",
    city: "Wetter/Volmarstein",
    country: "Deutschland",
  },
  phone: "+49 2335 XXXXXX",
  email: "info@kunert-stuckateur.de",
  openingHours: [
    { days: "Mo – Fr", hours: "07:00 – 17:00 Uhr" },
    { days: "Sa", hours: "Nach Vereinbarung" },
  ],
};

export const NAV_LINKS: NavLink[] = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Referenzen", href: "#referenzen" },
  { label: "Rezensionen", href: "#rezensionen" },
  { label: "Kontakt", href: "#kontakt" },
];

export const SERVICES: Service[] = [
  {
    id: "wdvs",
    title: "WDVS",
    subtitle: "Wärmedämmverbundsysteme",
    description:
      "Energieeffiziente Fassadendämmung für Neubau und Bestand — normgerecht ausgeführt und dauerhaft schützend.",
    icon: "wdvs",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&auto=format",
  },
  {
    id: "putze",
    title: "Innen- & Außenputze",
    subtitle: "inkl. Lehmputze",
    description:
      "Mineralische und natürliche Putze in höchster Handwerksqualität — von der glatten Innenoberfläche bis zum strukturierten Außenputz.",
    icon: "putze",
    image:
      "https://images.unsplash.com/photo-1577200080776-fe8b6c5559dc?w=800&q=80&auto=format",
  },
  {
    id: "spachtel",
    title: "Dekorative Spachteltechniken",
    subtitle: "und Lasuren",
    description:
      "Venezianischer Putz, Marmorino, Microcement — jede Technik ein Unikat. Handwerkliche Oberflächen mit echtem Charakter.",
    icon: "spachtel",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format",
  },
  {
    id: "naturstein",
    title: "Natursteinarbeiten",
    subtitle: "",
    description:
      "Verlegung, Restaurierung und Pflege von Naturstein — Sandstein, Kalkstein, Schiefer. Für Böden, Fassaden und dekorative Elemente.",
    icon: "naturstein",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&q=80&auto=format",
  },
  {
    id: "trockenbau",
    title: "Trockenbauarbeiten",
    subtitle: "inkl. Brandschutz",
    description:
      "Systemwände, Unterdecken, Schachtverkleidungen — inklusive zertifizierter Brandschutzlösungen nach DIN 4102.",
    icon: "trockenbau",
    image:
      "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=800&q=80&auto=format",
  },
  {
    id: "fliesen",
    title: "Fliesen- & Plattenverlegung",
    subtitle: "",
    description:
      "Präzise Verlegung von Fliesen und Platten in Bad, Küche, Außen- und Gewerbebereichen — großformatig bis Mosaikdetail.",
    icon: "fliesen",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80&auto=format",
  },
  {
    id: "kernloch",
    title: "Kernlochbohrungen",
    subtitle: "bis 230 mm",
    description:
      "Diamantbohrungen in Beton, Mauerwerk und Stahlbeton — sauber, lärm- und staubarm. Bis 230 mm Durchmesser.",
    icon: "kernloch",
    image:
      "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&q=80&auto=format",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Michael S.",
    location: "Wetter",
    service: "WDVS-Fassade",
    rating: 5,
    text: "Die WDVS-Fassade wurde sauber und termingerecht fertiggestellt. Herr Kunert hat uns transparent beraten — das Ergebnis überzeugt auf ganzer Linie.",
  },
  {
    id: 2,
    name: "Familie Wagner",
    location: "Hagen",
    service: "Venezianischer Putz",
    rating: 5,
    text: "Wir haben venezianischen Putz im Wohnzimmer gewählt — ein absolutes Highlight. Die handwerkliche Präzision ist beeindruckend, das Ergebnis wirkt wie aus dem Designmagazin.",
  },
  {
    id: 3,
    name: "Petra K.",
    location: "Herdecke",
    service: "Naturstein Eingangsbereich",
    rating: 5,
    text: "Der Eingangsbereich mit Naturstein ist ein echter Hingucker. Fachliche Beratung, pünktliche Ausführung und ein tadelloses Ergebnis. Absolute Empfehlung.",
  },
];

export const STATS: StatItem[] = [
  { value: 25, suffix: "+", label: "Jahre Erfahrung" },
  { value: 300, suffix: "+", label: "Projekte realisiert" },
  { value: 7, suffix: "", label: "Fachbereiche" },
];

export const GALLERY_IMAGES = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80&auto=format",
    alt: "Fassadenarbeiten – Außenputz und WDVS",
    featured: true,
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80&auto=format",
    alt: "Innenputz – Handwerksarbeit in Perfektion",
    featured: false,
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format",
    alt: "Dekorativer Putz – Spachteltechnik",
    featured: false,
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&q=80&auto=format",
    alt: "Natursteinarbeit – Präzision im Detail",
    featured: false,
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80&auto=format",
    alt: "Fliesenverlegung – sauber und präzise",
    featured: false,
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1475113548492-c65b8ed50da8?w=800&q=80&auto=format",
    alt: "Innenausbau – Trockenbau und Verkleidung",
    featured: false,
  },
];
