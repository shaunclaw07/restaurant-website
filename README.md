# Hello World Starter (Next.js 16)

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
├── tailwind.config.ts
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
