# AGENTS.md

## Projektüberblick
- Projekt: **Restaurant Daphne Website** (Next.js 14, App Router, TypeScript, Tailwind CSS).
- Ziel: Statische, performante Landingpage mit GitHub-Pages-Deployment.
- Wichtige Bereiche: Hero, Speisekarte (PDF-Link + Embed), Info/Reservierung, Footer.

## Tech-Stack
- Node.js 20+
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Lucide React

## Lokale Entwicklung
1. Abhängigkeiten installieren:
   - `npm install`
2. Dev-Server starten:
   - `npm run dev`
3. Linting:
   - `npm run lint`
4. Build prüfen:
   - `npm run build`
5. Production-Server lokal testen:
   - `npm run start`

## Architektur & wichtige Dateien
- `app/layout.tsx`: Globales Layout/Metadaten.
- `app/page.tsx`: Zusammensetzen der Hauptsektionen.
- `components/Hero.tsx`: Hero-Bereich.
- `components/MenuSection.tsx`: Menüsektion inkl. PDF-Link/Embed.
- `components/InfoSection.tsx`: Infos/Reservierung.
- `components/Footer.tsx`: Footer-Inhalte.
- `public/menu.pdf`: PDF-Datei der Speisekarte.
- `next.config.mjs`: Static Export + GitHub-Pages-Konfiguration.

## Deployment-Hinweise (kritisch)
- Deployment-Ziel ist **GitHub Pages**.
- `next.config.mjs` verwendet bei GitHub Actions:
  - `output: "export"`
  - `trailingSlash: true`
  - `basePath: /restaurant-website`
  - `assetPrefix: /restaurant-website/`
- Bei Assets/Links auf Pfade achten:
  - Root-absolute Pfade (`/datei`) können unter Subpath-Deployments fehlschlagen.
  - Pfade müssen mit `basePath`/Export kompatibel sein.
- Wenn Repo-Name geändert wird, `repoName` in `next.config.mjs` anpassen.

## Code- und Änderungsrichtlinien für AI-Agenten
- Bestehende Struktur und Komponentenstil beibehalten.
- Kleine, fokussierte Änderungen statt großer Refactorings.
- TypeScript-Typen und Tailwind-Konventionen konsistent halten.
- Keine toten Links oder Platzhalter einführen, ohne sie klar zu kennzeichnen.
- Bei UI-Änderungen auf responsives Verhalten achten (mobile-first).

## Content-/Business-Kontext
- Markenwirkung: mediterran, elegant, hochwertig.
- Sprache/Content primär deutsch.
- Visuelle Konsistenz mit Brandfarben und bestehenden Klassen sicherstellen.

## Vor dem Abschluss einer Änderung
- `npm run lint` ausführen.
- Wenn möglich: `npm run build` prüfen.
- Relevante manuelle Funktionsprüfung kurz dokumentieren (z. B. PDF-Link, Navigation, Responsiveness).

## Häufige Fehlerquellen
- Falsche Pfade unter GitHub Pages (`basePath` nicht berücksichtigt).
- Änderungen an `next.config.mjs` ohne Prüfung des Export-Workflows.
- Unbeabsichtigte Design-Brüche durch inkonsistente Tailwind-Klassen.

## Erwartung an Commit-/PR-Qualität
- Aussagekräftige Commit-Message (was + warum).
- PR-Beschreibung mit:
  - Motivation
  - Konkreten Änderungen
  - Testergebnissen/Limitierungen
