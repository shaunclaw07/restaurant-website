import { Leaf } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-brand-gold/20 bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(184,134,11,0.13),transparent_60%)]" />
      <div className="section-shell relative flex min-h-[70vh] flex-col items-center justify-center py-20 text-center sm:py-28">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-olive/20 bg-brand-olive/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.16em] text-brand-olive">
          <Leaf size={14} />
          Griechisches Restaurant in Bremen
        </p>
        <h1 className="mb-6 text-4xl font-semibold uppercase tracking-daphne text-brand-charcoal sm:text-6xl">
          Restaurant Daphne
        </h1>
        <p className="max-w-2xl text-base text-brand-charcoal/80 sm:text-lg">
          Offen und sonnendurchflutet bei Tag, gemütlich bei Nacht, ist das Restaurant Daphne ein Ort,
          an dem Freunde bei gutem Essen und Trinken gern zusammenkommen.
        </p>
        <a
          href="#reservierung"
          className="mt-10 rounded-full bg-brand-gold px-8 py-3 text-sm font-medium uppercase tracking-[0.14em] text-white transition hover:bg-brand-brown"
        >
          Tisch anfragen
        </a>
      </div>
    </section>
  );
}
