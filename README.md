# Sloth & Messenger — cafe site

Astro + GSAP landing page, with a mock Shopify data layer ready to swap
for the real Storefront API.

## Run it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
```

## Where everything lives

| What | File |
| --- | --- |
| All copy (name, hours, address, special…) | `src/data/site.js` |
| Colors, fonts, spacing tokens | `src/styles/global.css` |
| GSAP animations (hero, scroll reveals, ticker, stat count-up) | `src/layouts/Base.astro` |
| Shopify data layer (mocks now, real API later) | `src/lib/shopify.js` |
| Placeholder logo | `src/components/Logo.astro` |
| Photos to add | `public/images/README.md` |

## Swapping in the real content

1. **Copy** — edit `src/data/site.js` only. The Portland address, hours,
   and phone are mockup placeholders.
2. **Photos** — drop images into `public/images/` (names listed in the
   README there), then uncomment the `url(...)` background lines flagged
   with comments in `Hero.astro`, `Story.astro`, and `Visit.astro`.
3. **Logo** — replace the SVG in `src/components/Logo.astro`.

## Connecting Shopify (when you get access)

Open `src/lib/shopify.js`:

1. Set `SHOPIFY_DOMAIN` and `STOREFRONT_TOKEN` (or provide
   `SHOPIFY_DOMAIN` / `SHOPIFY_STOREFRONT_TOKEN` env vars in a `.env`
   file).
2. Flip `USE_MOCKS` to `false`.

Components already consume the Storefront API shape, so nothing else
changes. To test before you have the real store, create a free dev store
via the Shopify Partners program and point the same two constants at it.

## Animations

All motion respects `prefers-reduced-motion` — with it enabled, content
appears instantly and the ticker stays static. The hero runs one
orchestrated load timeline; sections fade up once on scroll; story stats
count up when they enter view.
