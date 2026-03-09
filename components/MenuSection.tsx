import { FileText } from "lucide-react";

export function MenuSection() {
  return (
    <section id="speisekarte" className="section-shell py-16 sm:py-24">
      <div className="laurel-divider mb-6 text-sm uppercase tracking-[0.18em]">Speisekarte</div>
      <div className="grid gap-8 rounded-2xl bg-white p-6 shadow-soft sm:p-8 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <h2 className="mb-4 text-2xl font-semibold uppercase tracking-daphne text-brand-charcoal">
            Unsere Küche
          </h2>
          <p className="text-sm leading-7 text-brand-charcoal/80">
            Unsere Speisen werden mit viel Liebe und Sorgfalt täglich frisch zubereitet. Wir legen großen
            Wert auf Frische und haben einen hohen Qualitätsanspruch an die verwendeten Produkte.
          </p>
          <a
            href="menu.pdf"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-gold px-5 py-2 text-sm font-medium text-brand-gold transition hover:bg-brand-gold hover:text-white"
          >
            <FileText size={16} />
            Speisekarte als PDF öffnen
          </a>
        </div>
        <div className="overflow-hidden rounded-xl border border-brand-gold/20 bg-brand-light">
          <iframe
            title="Speisekarte PDF"
            src="menu.pdf"
            className="h-[420px] w-full"
          />
        </div>
      </div>
    </section>
  );
}
