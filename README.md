# Restaurant Daphne Website

Modern, responsive website rework for **Restaurant Daphne (Bremen)** built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Project Overview

This repository contains a static-first frontend redesign focused on:

- Minimalist Mediterranean visual language
- Brand-driven Gold/Green/Brown color palette
- Mobile-first responsive layout
- Fast static deployment via GitHub Pages
- Reusable component architecture

The site is implemented as a one-page experience with modular sections:

- **Hero**
- **Menu** (inline PDF viewer + open-in-new-tab action)
- **Info / Reservation**
- **Footer** (opening times, legal links, map)

---

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/)
- GitHub Actions for CI/CD

---

## Folder Structure

```text
.
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── InfoSection.tsx
│   └── MenuSection.tsx
├── public/
│   └── menu.pdf
├── .github/workflows/
│   └── deploy-gh-pages.yml
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Design System

Brand colors are configured in `tailwind.config.ts`:

- `brand.gold`: `#B8860B`
- `brand.olive`: `#556B2F`
- `brand.brown`: `#887355`
- `brand.light`: `#F5F5F5`
- `brand.charcoal`: `#2F2F2F`

Typography and spacing are optimized for an elegant, airy look with generous heading letter spacing.

---

## Developer Guide (Run Locally)

### 1) Prerequisites

- **Node.js 20+** (recommended)
- **npm 9+**

Check versions:

```bash
node -v
npm -v
```

### 2) Install dependencies

```bash
npm install
```

### 3) Start development server

```bash
npm run dev
```

Open in browser:

- <http://localhost:3000>

### 4) Lint the project

```bash
npm run lint
```

### 5) Create production build

```bash
npm run build
```

### 6) Run production server locally

```bash
npm run start
```

---

## Static Export & GitHub Pages

This project is configured for static export in `next.config.ts`:

- `output: "export"`
- `trailingSlash: true`
- `images.unoptimized: true`
- GitHub Actions-aware `basePath` / `assetPrefix`

GitHub workflow:

- `.github/workflows/deploy-gh-pages.yml`
- Deploys on push to `main` / `master`
- Uses GitHub Pages actions to upload `out/` and publish

### Required repository settings

In GitHub repository settings:

1. Go to **Settings → Pages**
2. Under **Build and deployment**, choose **GitHub Actions**

---
### Initial GitHub Pages configuration (required once per repository)

Repository owners need to do the following initial setup before the workflow can publish successfully:

1. **Push the workflow to the default branch** (`main` or `master`).
2. In GitHub, open **Settings → Pages**.
3. In **Build and deployment**, set **Source** to **GitHub Actions**.
4. Open **Settings → Actions → General** and ensure Actions are allowed to run for the repository.
5. Open **Settings → Environments → github-pages** (created automatically after first run) and verify no blocking protection rule prevents deployment.
6. Ensure the repository is public, or if private, that your GitHub plan includes Pages for private repositories.

### First deployment checklist

- Trigger deployment by pushing to `main`/`master` (or run the workflow manually from **Actions**).
- Confirm the workflow run succeeds in **Actions → Deploy Next.js site to GitHub Pages**.
- After deployment, GitHub will show the site URL under **Settings → Pages**.

### Repository name note (important)

`next.config.ts` currently uses `restaurant-website` as the GitHub Pages subpath:

- `basePath: /restaurant-website`
- `assetPrefix: /restaurant-website/`

If you rename the repository, update `repoName` in `next.config.ts` accordingly, otherwise CSS/JS assets may 404 in production.

---

## Content & Assets

- `public/menu.pdf` is currently a placeholder and should be replaced with the real menu file.
- Footer legal links (`Impressum`, `Datenschutz`) currently use placeholder anchors and should be mapped to final routes/pages.

---

## Future Improvements

- Add dedicated pages for events and reservations
- Replace placeholder PDF with final branded menu
- Add SEO enhancements (Open Graph, structured data)
- Add image optimization workflow and compressed media assets
- Add test automation (unit/integration)

---

## License

Private project / All rights reserved unless specified otherwise by repository owner.
