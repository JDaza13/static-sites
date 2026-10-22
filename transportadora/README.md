# Transportadora

Landing page for Transporte Chaparral (Tauramena, Casanare): school routes,
private personnel transport for the oil sector, and helicopter or small-plane
(up to 3 passengers) flights on special request.

Stack: Vite 8, React 19, TypeScript 6, Tailwind CSS 4 (`@tailwindcss/vite`), ESLint 10.

```bash
pnpm install    # run once at the repo root (pnpm workspace)
pnpm dev        # local dev at /
pnpm build      # production build in dist/
pnpm lint
```

## Languages

Spanish (default), English and Simplified Chinese. No i18n library: each
language is a typed object.

| File | What it holds |
| --- | --- |
| `src/i18n/types.ts` | The `Messages` shape every language must follow |
| `src/i18n/es.ts`, `en.ts`, `zh.ts` | The text for each language |
| `src/i18n/languages.ts` | Registry: name, flag and `<html lang>` per language; first entry is the default |
| `src/config.ts` | Things that don't change by language: brand, phone, WhatsApp, e-mail |

- **Edit text:** change it in the language file. All three use the same keys.
- **Add a piece of text:** add the key to `types.ts`, then `pnpm build`
  lists every language file that is missing it.
- **Add a language:** copy `en.ts` to `<code>.ts`, translate it, and add one
  entry (with a flag component from `src/flags.tsx`) to `languages.ts`.

The chosen language is remembered in the browser and reflected in the URL, so
`?lang=en` or `?lang=zh` links open the page in that language. Changing
language also updates `<html lang>`, the page title and the meta description.

## Other notes

- **Contact:** set `contacto.email` in `src/config.ts` to show an e-mail address.
- **Design tokens** (colors, font, route animation) are in the `@theme` block of
  `src/index.css`.
- **Deploy:** the repo workflow builds this folder with
  `BASE_PATH=/static-sites/transportadora/` and publishes it to GitHub Pages.
