# Transportadora

Landing page (in Spanish) for a transport company: school routes, private
personnel transport for the oil sector, and helicopter flights on special
request.

Stack: Vite 8, React 19, TypeScript 6, Tailwind CSS 4 (`@tailwindcss/vite`), ESLint 10.

```bash
npm install
npm run dev     # local dev at /
npm run build   # production build in dist/
npm run lint
```

- **Copy and contact details** live in `src/content.ts`. The brand name, phone,
  e-mail and city are placeholders and must be replaced.
- **Design tokens** (colors, font, route animation) are in the `@theme` block of
  `src/index.css`.
- **Deploy:** the repo workflow builds this folder with
  `BASE_PATH=/static-sites/transportadora/` and publishes it to GitHub Pages.
