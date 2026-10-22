# static-sites

Each top-level folder is its own static site on GitHub Pages:
`https://jdaza13.github.io/static-sites/<folder>/`.

| Site | What it is | URL |
| --- | --- | --- |
| `transportadora` | Transporte Chaparral: school, oil-sector and air transport | https://jdaza13.github.io/static-sites/transportadora/ |
| `promotora` | Promotora Rumba: event planning | https://jdaza13.github.io/static-sites/promotora/ |

The repo is a pnpm workspace with a single `pnpm-lock.yaml` at the root.

```bash
pnpm install    # installs every site's dependencies
pnpm build      # builds every site into _site/, as CI does
```

To add a site, create a top-level folder that either:

- has a `package.json` with a `build` script writing to `dist/` (or `build/`,
  `out/`) and uses `BASE_PATH` as its base URL
  (Vite: `base: process.env.BASE_PATH ?? "/"`), then run `pnpm install`; or
- is plain HTML with an `index.html` at its root.

Push to `main` and `.github/workflows/pages.yml` deploys everything.
