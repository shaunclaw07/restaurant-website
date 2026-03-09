import { Download, Printer } from "lucide-react";

import menuData from "@/data/menu.json";

type MenuItem = {
  name: string;
  description?: string;
  price: number;
  size?: string;
  note?: string;
};

const formatPrice = (price: number) =>
  new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(price);

export function MenuSection() {
  const { restaurant } = menuData;

  return (
    <section id="speisekarte" className="section-shell py-16 sm:py-24">
      <div className="laurel-divider mb-6 text-sm uppercase tracking-[0.18em]">Speisekarte</div>
      <div className="rounded-2xl bg-white p-6 shadow-soft sm:p-8">
        <div className="mb-8 border-b border-brand-gold/20 pb-6">
          <h2 className="text-3xl font-semibold uppercase tracking-daphne text-brand-charcoal">
            {restaurant.name}
          </h2>
          <p className="mt-2 text-sm uppercase tracking-[0.14em] text-brand-charcoal/70">{restaurant.slogan}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="menu.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-brand-gold px-5 py-2 text-sm font-medium text-brand-gold transition hover:bg-brand-gold hover:text-white"
            >
              <Download size={16} />
              Speisekarte als PDF herunterladen
            </a>
            <a
              href="menu.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-brand-charcoal/20 px-5 py-2 text-sm font-medium text-brand-charcoal transition hover:border-brand-charcoal"
            >
              <Printer size={16} />
              Druckversion öffnen
            </a>
          </div>
        </div>

        <div className="grid gap-7 md:grid-cols-2">
          {restaurant.menu.map((category) => (
            <article key={category.category_id} className="rounded-xl border border-brand-gold/20 bg-brand-light/60 p-5">
              <h3 className="text-lg font-semibold text-brand-charcoal">{category.category_name}</h3>
              {category.category_description ? (
                <p className="mt-1 text-sm text-brand-charcoal/70">{category.category_description}</p>
              ) : null}

              <ul className="mt-4 space-y-3">
                {category.items.map((item: MenuItem) => (
                  <li key={`${category.category_id}-${item.name}-${item.size ?? "default"}`}>
                    <div className="flex items-baseline justify-between gap-3">
                      <p className="font-medium text-brand-charcoal">
                        {item.name}
                        {item.size ? <span className="ml-1 text-sm text-brand-charcoal/70">({item.size})</span> : null}
                      </p>
                      <span className="shrink-0 text-sm font-semibold text-brand-gold">{formatPrice(item.price)}</span>
                    </div>
                    {item.description ? <p className="text-sm text-brand-charcoal/80">{item.description}</p> : null}
                    {item.note ? <p className="text-xs text-brand-charcoal/70">{item.note}</p> : null}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-brand-gold/20 bg-brand-light p-5 text-sm text-brand-charcoal/80">
          <p>{restaurant.legal_notice}</p>
        </div>
      </div>
    </section>
  );
}
