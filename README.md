# kartik-portfolio

Personal portfolio site — **React 19.2 + Vite + TypeScript**, styled with **CSS Modules**.

Live at **https://kartikrocks.github.io/**.

Production-grade setup: strict TypeScript, type-checked ESLint, Prettier, Husky
pre-commit + pre-push hooks, lint-staged, GitHub Actions CI, and automated
deployment to GitHub Pages.

## Requirements

- Node.js 24 LTS (see `.nvmrc`)
- npm

## Getting started

```bash
nvm use            # picks up Node 24 from .nvmrc
npm install        # also installs Husky git hooks via the prepare script
npm run dev        # http://localhost:5173
```

## Scripts

| Script               | What it does                                    |
| -------------------- | ----------------------------------------------- |
| `npm run dev`        | Start Vite dev server with HMR                  |
| `npm run build`      | Type-check then build production bundle (dist/) |
| `npm run preview`    | Serve the production build locally              |
| `npm run typecheck`  | Run `tsc -b --noEmit`                           |
| `npm run lint`      | Run ESLint (type-checked rules)                 |
| `npm run lint:fix`  | Auto-fix lint issues                            |
| `npm run format`    | Format the whole repo with Prettier             |
| `npm run format:check` | Check formatting without writing             |

## Git hooks

Husky is configured via the `prepare` script (runs on `npm install`):

- **pre-commit** — runs `lint-staged` (ESLint --fix + Prettier on staged files)
- **pre-push** — runs `npm run typecheck`

If you bypass with `--no-verify`, CI will still enforce these on the PR.

## Project structure

```
src/
  components/   # ErrorBoundary, Nav, Footer
  sections/     # Hero, Projects, Skills, Contact
  data/         # Centralized site content (portfolio.ts)
  types.ts      # Shared TypeScript types
  App.tsx       # Composition root
  main.tsx      # Bootstrap (StrictMode + createRoot)
  index.css     # Globals + design tokens (CSS variables)
```

To customize content, edit `src/data/portfolio.ts` — every section reads from
there.

## Code quality

- **Strict TypeScript** — `strict`, `noUncheckedIndexedAccess`,
  `exactOptionalPropertyTypes`, `verbatimModuleSyntax`, and more (see
  `tsconfig.app.json`).
- **Type-checked ESLint** — `recommendedTypeChecked` + `stylisticTypeChecked`
  rulesets.
- **Prettier** — single source of truth for formatting (`.prettierrc.json`).
- **EditorConfig** — consistent whitespace across editors.
- **Accessibility** — semantic landmarks, skip-link, `aria-labelledby` on
  sections, focus-visible outlines, `prefers-reduced-motion` support.
- **SEO** — title, description, Open Graph, and Twitter card meta in
  `index.html`.
- **Error boundary** — wraps the main content tree.

## Deployment (GitHub Pages)

This repo deploys as a **root user site** at
**https://kartikrocks.github.io/**.

1. Push this project to the `main` branch of the repo named
   `KARTIKrocks.github.io`.
2. In the repo settings → **Pages**, set **Source** to **GitHub Actions**.
3. Every push to `main` runs `.github/workflows/deploy.yml` which lints,
   type-checks, format-checks, builds, and publishes `dist/`.

Because it's a root site, no `base` path is needed in `vite.config.ts`.
