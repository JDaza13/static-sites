# static-sites

Monorepo of small static marketing sites. Each top-level folder is one site,
deployed to GitHub Pages at `https://jdaza13.github.io/static-sites/<folder>/`.

## Language rule (important)

**Everything related to development is in English.** That covers identifiers
(variables, functions, components, types), file and folder names inside a
site, comments, CSS tokens and utility names, i18n message *keys*, ids such as
event-type or mood ids, URL fragments (`#services`), localStorage keys, commit
messages, PR descriptions and READMEs.

**Spanish appears only as content**: the *values* in a site's i18n files
(`src/i18n/es.ts`, which is the default language). English (`en.ts`) and
Simplified Chinese (`zh.ts`) are content too. Never add user-visible text
directly in components; put it in the i18n files for every language.

Top-level site folder names (`transportadora`, `promotora`) are public URL
paths and stay as they are.

## Repo layout

- pnpm workspace (`pnpm-workspace.yaml` includes `*`), one `pnpm-lock.yaml` at
  the root. Run `pnpm install` at the root, never `npm install` in a site.
- `scripts/build-all.sh` installs once, builds every folder with a
  `package.json` (output from `dist/`, `build/` or `out/`) and copies
  plain-HTML folders as-is into `_site/<folder>/`, plus a generated index.
- `.github/workflows/pages.yml` runs that script and deploys `_site` on every
  push to `main` (pnpm store cached via `pnpm/action-setup`).
- A site must serve from a sub-path: CI sets `BASE_PATH=/static-sites/<folder>/`
  and Vite configs use `base: process.env.BASE_PATH ?? "/"`. Reference assets
  through Vite (imports, `/public` paths in `index.html`) so the base applies.

## Site conventions

Stack: Vite 8, React 19, TypeScript 6 (typescript-eslint does not support 7
yet), Tailwind CSS 4 via `@tailwindcss/vite`, ESLint 10 flat config.

Each site has:

- `src/config.ts`: non-translated settings (brand, phone, WhatsApp, ids).
- `src/i18n/types.ts`: the `Messages` type. Lists that pair with code (icons,
  ids) are fixed-length tuples or `Record<Id, …>` so a missing translation
  fails the build.
- `src/i18n/{es,en,zh}.ts`: content, each typed as `Messages`.
- `src/i18n/languages.ts`: registry (name, flag, `<html lang>`); first entry is
  the default. Language comes from `?lang=`, then localStorage
  (`<site>:language`, sites share one origin), then the default.
- `src/i18n/I18nProvider.tsx` + `context.ts` (`useI18n()` returns
  `{ language, t, setLanguage }`), `src/LanguagePicker.tsx`, `src/flags.tsx`.
- Design tokens in the `@theme` block of `src/index.css`.

Contact flows are static: requests go out as pre-filled `wa.me` links.

## Checks before pushing

```bash
pnpm install
pnpm --dir <site> build && pnpm --dir <site> lint
REPO_NAME=static-sites bash scripts/build-all.sh   # full CI build
```

Verify layouts at 320px to 1440px in all three languages (no horizontal
overflow) and that `?lang=en` / `?lang=zh` work.
