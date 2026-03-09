# AGENTS.md

## Projektüberblick
- Projektstatus: **Clean Restart / Starter-Projekt**.
- Ziel: Solide Ausgangsbasis für ein modernes Webdevelopment-Projekt.
- Aktueller Scope: Eine statische, bewusst minimale "Hello World"-Seite ohne Business-Logik.

## Verbindliche Produktvorgaben
- **Keine dynamischen Inhalte** (kein API-Fetching, keine CMS-Anbindung, keine serverseitige Datenlogik).
- **Keine domänenspezifischen Inhalte** aus dem alten Restaurant-Kontext.
- Fokus auf klare, wartbare Basisstruktur für spätere Iterationen.

## Tech-Stack
- Node.js 22+
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS

## Architektur (aktuell)
- `app/layout.tsx`: Globales Layout und Metadaten.
- `app/page.tsx`: Statische Startseite (Hello World).
- `app/globals.css`: Basisstyles und Tailwind-Includes.
- `next.config.mjs`: Static Export + GitHub-Pages-kompatible Pfadlogik.

## Entwicklungsrichtlinien (modernes Webdevelopment)
- Kleine, klar abgegrenzte Commits statt großem Refactoring in einem Schritt.
- TypeScript strikt und konsistent nutzen.
- Komponenten logisch, semantisch und barrierearm strukturieren.
- Styling mobile-first und mit konsistenten Tailwind-Konventionen.
- Performance beachten (leichte UI, keine unnötigen Dependencies).
- Keine toten Dateien, Altlasten oder ungenutzten Assets im Repo belassen.

## Deployment-Hinweise
- Deployment-Ziel bleibt **GitHub Pages**.
- `next.config.mjs` nutzt:
  - `output: "export"`
  - `trailingSlash: true`
  - GitHub-Actions-spezifisches `basePath` und `assetPrefix`
- Bei Repo-Umbenennung `repoName` in `next.config.mjs` aktualisieren.

## Vor Abschluss jeder Änderung
- `npm run lint` ausführen.
- Wenn möglich zusätzlich `npm run build` ausführen.
- Kurz prüfen, dass die Seite statisch bleibt und keine dynamischen Inhalte eingebaut wurden.

## Erwartung an Commit-/PR-Qualität
- Commit-Message: prägnant, mit **was** und **warum**.
- PR-Beschreibung enthält:
  - Motivation
  - Konkrete Änderungen
  - Testergebnisse / bekannte Limitierungen
