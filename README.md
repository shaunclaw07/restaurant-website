# Hello World Starter (Next.js 16)

[![Deploy Next.js site to GitHub Pages](https://github.com/shaunclaw07/restaurant-website/actions/workflows/deploy-gh-pages.yml/badge.svg)](https://github.com/shaunclaw07/restaurant-website/actions/workflows/deploy-gh-pages.yml)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D22-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

Minimaler Neustart auf Basis von **Next.js 16**, **React 19**, **TypeScript** und **Tailwind CSS**.

Die Seite ist absichtlich leer gehalten und zeigt nur eine statische "Hello World"-Ansicht.
Es gibt **keine Restaurant-Inhalte**, **keine dynamischen Datenquellen** und **keine Feature-Logik**.

## Ziel

- Saubere Basis für einen kompletten Neuaufbau
- Moderner Tech-Stack bleibt erhalten
- Statischer Export für GitHub Pages bleibt möglich

## Tech-Stack

- Node.js 22+
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS

## Projektstruktur

```text
.
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── .github/workflows/
│   └── deploy-gh-pages.yml
├── next.config.mjs
├── postcss.config.js
├── tsconfig.json
├── eslint.config.mjs
└── package.json
```

## Lokale Entwicklung

1. Abhängigkeiten installieren:
   - `npm install`
2. Dev-Server starten:
   - `npm run dev`
3. Linting ausführen:
   - `npm run lint`
4. Build prüfen:
   - `npm run build`
5. Produktionsserver lokal starten:
   - `npm run start`

## GitHub Pages

Die Konfiguration in `next.config.mjs` ist auf statischen Export ausgelegt (`output: "export"`) und nutzt bei GitHub Actions automatisch `basePath`/`assetPrefix` mit dem Repo-Namen.

Wenn sich der Repository-Name ändert, muss `repoName` in `next.config.mjs` angepasst werden.
