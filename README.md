# Analog Obsession Directory

Static Astro site for the Analog Obsession plugin directory.

## Requirements

- Node.js 22.12+
- npm

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

The production build keeps the existing public URLs (`equalization.html`, `dynamics.html`, etc.) through Astro's `build.format: "file"` option.

## Structure

```text
src/
├── components/       Shared site and catalog components
├── data/             Typed category/plugin data
├── layouts/          Shared HTML shell
├── pages/            Home, FAQ and generated category routes
└── styles/           Shared styles + Home-only styles
public/
└── assets/images/    Static logo assets
```

## Adding a plugin

Add one object to `src/data/catalog.ts`. The category page, unit count and card markup are generated automatically.

## Adding a category

Add the category metadata to `categories` and its plugin entries to `plugins` in `src/data/catalog.ts`. The `[category].astro` route generates the page at build time.

No React, client-side router, database or CMS is required for the current site.

## Shared header

`src/components/Header.astro` is the single header used by the entire site. It is mounted once by `src/layouts/BaseLayout.astro`, so Home, FAQ and all generated category pages share the same markup and navigation. Header styles live in `src/styles/global.css`; `home.css` contains only Home-specific sections.
