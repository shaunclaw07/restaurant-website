import { Clock3, Mail, MapPin, Phone } from "lucide-react";

const hours = [
  "Montag - Sonntag: 17:30 - 23:00 Uhr",
  "Küchenzeiten: 17:30 - 22:00 Uhr",
  "Sonntag & Feiertage: 12:00 - 14:30 Uhr (Mittagstisch)"
];

export function InfoSection() {
  return (
    <section id="reservierung" className="bg-white py-16 sm:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-2">
        <div>
          <div className="laurel-divider mb-6 text-sm uppercase tracking-[0.18em]">Über uns</div>
          <h2 className="mb-4 text-2xl font-semibold uppercase tracking-daphne text-brand-charcoal">
            Mediterranean Soul, Bremen Heart
          </h2>
          <p className="leading-7 text-brand-charcoal/80">
            Benannt nach der Nymphe Daphne und inspiriert von der Symbolkraft des Lorbeers verbinden wir
            griechische Gastfreundschaft mit modernem Ambiente. Ob ein ruhiges Abendessen, der Mittagstisch
            am Sonntag oder ein Anlass mit Freunden: Wir gestalten jeden Besuch persönlich und entspannt.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-brand-charcoal/80">
            <li>• Raucherseparée verfügbar</li>
            <li>• Terrasse in den Sommermonaten</li>
            <li>• Private Gruppen bis 10 Personen</li>
            <li>• Größere Feiern auf Anfrage</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-brand-light p-6 shadow-soft sm:p-8">
          <h3 className="text-lg font-semibold uppercase tracking-[0.14em] text-brand-olive">Kontakt & Reservierung</h3>
          <div className="mt-6 space-y-4 text-sm">
            <p className="flex items-center gap-3">
              <Phone size={17} className="text-brand-gold" />
              <a href="tel:+4942193847261" className="hover:text-brand-olive">0421 938 472 61</a>
            </p>
            <p className="flex items-center gap-3">
              <Mail size={17} className="text-brand-gold" />
              <a href="mailto:kontakt.daphne.8472@example.com" className="hover:text-brand-olive">
                kontakt.daphne.8472@example.com
              </a>
            </p>
            <p className="flex items-center gap-3">
              <MapPin size={17} className="text-brand-gold" />
              Standort in Bremen (Details auf Anfrage)
            </p>
          </div>

          <a
            href="mailto:kontakt.daphne.8472@example.com?subject=Reservierungsanfrage%20Restaurant%20Daphne"
            className="mt-7 inline-block rounded-full bg-brand-olive px-7 py-3 text-sm font-medium uppercase tracking-[0.14em] text-white transition hover:bg-brand-brown"
          >
            Reservierung per E-Mail
          </a>

          <div className="mt-8 border-t border-brand-gold/20 pt-6">
            <p className="mb-3 flex items-center gap-2 text-sm font-medium text-brand-charcoal">
              <Clock3 size={16} className="text-brand-gold" /> Öffnungszeiten
            </p>
            <ul className="space-y-2 text-xs text-brand-charcoal/80 sm:text-sm">
              {hours.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
