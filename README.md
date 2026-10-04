# surbhiguha.com

Personal site — React + Vite + Tailwind, deployed to GitHub Pages at
<https://surbhiguha.com>.

## Local development

```
npm install
npm run dev
```

## Editing content

All copy lives in `src/content/` — `journey.ts`, `work.ts`, `outside.ts` — plus
the short text blocks in `src/components/About.tsx`, `Strengths.tsx` and
`Contact.tsx`. Images and the résumé are served from `public/`.

## Design system

Tokens live as CSS custom properties in `src/index.css` and are exposed to
Tailwind in `tailwind.config.js` as `paper`, `surface`, `ink`, `muted`, `faint`,
`rule` and `accent`. Home-page sections use `src/components/Section.tsx`, which
provides the sticky numbered rail and the content column.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes it to GitHub Pages. `public/CNAME` pins the custom domain.

One-time setup:

1. In the repo's **Settings → Pages**, set **Source** to **GitHub Actions** and
   set the custom domain to `surbhiguha.com`; tick **Enforce HTTPS** once the
   certificate is issued.
2. At the DNS provider for `surbhiguha.com`, add `A` records for the apex
   pointing at `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and
   `185.199.111.153`, and a `CNAME` for `www` pointing at
   `surbhisguha.github.io`.
