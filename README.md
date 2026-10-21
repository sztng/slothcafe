# Sloth & Messenger — cafe site

A landing page for Sloth & Messenger, a coffee shop. Built with
[Astro](https://astro.build) and animated with [GSAP](https://gsap.com),
with a mock Shopify data layer ready to swap for the real Storefront API.

🔗 **Live site:** _coming soon_

## Tech stack

**Frontend**

![Astro](https://img.shields.io/badge/Astro-5.7-BC52EE?style=flat-square&logo=astro&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?style=flat-square&logo=greensock&logoColor=white)
![Font Awesome](https://img.shields.io/badge/Font_Awesome-7.3-528DD7?style=flat-square&logo=fontawesome&logoColor=white)
![Fontsource](https://img.shields.io/badge/Fontsource-self--hosted_fonts-0A0A0A?style=flat-square&logo=googlefonts&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS-vanilla-1572B6?style=flat-square&logo=css3&logoColor=white)

**Commerce**

![Shopify](https://img.shields.io/badge/Shopify_Storefront_API-mocked_locally-7AB55C?style=flat-square&logo=shopify&logoColor=white)

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
| Logo | `src/components/Header.astro` (`public/images/logoSmallText.png`) |
| Photos to add | `public/images/README.md` |

## Swapping in the real content

1. **Copy** — edit `src/data/site.js` only. The Portland address, hours,
   and phone are mockup placeholders.
2. **Photos** — drop images into `public/images/` (names listed in the
   README there), then uncomment the `url(...)` background lines flagged
   with comments in `Hero.astro`, `Story.astro`, and `Visit.astro`.
3. **Logo** — swap `public/images/logoSmallText.png` (and `logoBigText.png`)
   for the real thing, referenced in `src/components/Header.astro`.

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
