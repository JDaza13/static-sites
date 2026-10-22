# Promotora

Landing page for Promotora Rumba, an event planner: company parties, weddings,
raves, birthdays, graduations and quinceañeras.

Visitors describe their event in one sentence: **event type, mood, area and
number of guests** (plus an optional date). The company finds the exact venue
in that area. Food and drink suggestions change with the event type, and the
request is sent as a pre-filled WhatsApp message.

Stack: Vite 8, React 19, TypeScript 6, Tailwind CSS 4, ESLint 10.

```bash
pnpm install    # run once at the repo root (pnpm workspace)
pnpm dev        # local dev at /
pnpm build      # production build in dist/
pnpm lint
```

## Where things live

| File | What it holds |
| --- | --- |
| `src/config.ts` | Brand, WhatsApp number, the list of event types and moods, form defaults |
| `src/i18n/es.ts`, `en.ts`, `zh.ts` | All text, including each event type's food and drink lists |
| `src/i18n/types.ts` | The `Messages` shape every language must follow |
| `src/i18n/idiomas.ts` | Language registry (Spanish is the default) |
| `src/Pedido.tsx` | The request sentence, validation and the WhatsApp message |

- **Change a menu:** edit `tipos.<type>.comida` / `bebida` in each language file.
- **Add an event type or mood:** add its id to `tipos` or `ambientes` in
  `src/config.ts`; the build then lists each language file missing its text.
- **The request sentence** is `pedido.frase` in each language. It must keep the
  four slots `{tipo}`, `{ambiente}`, `{zona}`, `{personas}`, in any order.

Languages work as in transportadora: picker in the header, `?lang=en` /
`?lang=zh` links, choice remembered per browser.
