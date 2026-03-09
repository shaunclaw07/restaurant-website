export function Footer() {
  return (
    <footer className="border-t border-brand-gold/20 bg-brand-charcoal py-12 text-brand-light">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-brand-gold">Restaurant Daphne</p>
          <p className="mt-3 text-sm text-brand-light/80">Standort in Bremen (Details auf Anfrage)</p>
          <p className="text-sm text-brand-light/80">Geschäftsführung: anonymisiert</p>
          <p className="text-sm text-brand-light/80">Steuer-ID: anonymisiert</p>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.14em] text-brand-gold">Öffnungszeiten</h4>
          <ul className="mt-3 space-y-2 text-sm text-brand-light/80">
            <li>Mo - So: 17:30 - 23:00</li>
            <li>Küche: 17:30 - 22:00</li>
            <li>So & Feiertage: 12:00 - 14:30</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.14em] text-brand-gold">Anfahrt</h4>
          <iframe
            title="Google Maps Restaurant in Bremen"
            className="mt-3 h-40 w-full rounded-lg border-0"
            loading="lazy"
            src="https://www.google.com/maps?q=Bremen&output=embed"
          />
        </div>
      </div>
      <div className="section-shell mt-10 flex flex-wrap gap-5 border-t border-brand-light/20 pt-6 text-xs text-brand-light/70">
        <a href="#" className="hover:text-brand-gold">Impressum</a>
        <a href="#" className="hover:text-brand-gold">Datenschutz</a>
      </div>
    </footer>
  );
}
