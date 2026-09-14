# wraythx — Portfolio

Portfolio of **Sandeep. C** — graphic and visual designer (branding, motion graphics, video editing, graphic design, social media, packaging). Built with Next.js 16 + React 19 + Tailwind 4 + GSAP.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export → out/
```

## Deploy

Static export (`output: "export"`) → GitHub Pages at `/wraythx` via `.github/workflows/deploy.yml`. `NEXT_PUBLIC_BASE_PATH` + `NEXT_PUBLIC_SITE_URL` set in CI.

## Content

- `lib/projects.ts` — 18 projects (title/category/year/tools/summary/image/link) + featured list. Thumbnails link out to Behance.
- `public/assets/project-thumbnails/` — keep covers ≤200KB (WebP preferred), kebab-case names.
- `public/og.png` — 1200×630 social card.

## Notes

- Sharp corners only, no rounded UI. Bio emphasis = italic emerald.
- After any change: `npx tsc --noEmit`, `npm run lint`, `npm run build` — then commit + push (one commit per task).
