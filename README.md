# Personal Portfolio

React + Bulma site, served by GitHub Pages from `docs/`.

## Editing content

- **Cards** (projects, talks, blogs…): edit the JSON files in `public/assets/json/`. Each entry is
  `{ "title", "subtitle", "body", "img", "tags", "url"? }`. Cards are split into groups of 10 by dividers automatically.
- **Page headers** (title, tagline, intro text, header image, card icon): `src/content.tsx`.
  Adding an entry there creates the route and the navbar link; list a path in `hidden` to keep a page offline.
- **Home page**: `src/pages/Home.tsx` (the highlight cards are plain arrays at the top).
- **Styles**: everything lives in `src/styles.css` (desktop first, then tablet ≤1024px and phone ≤768px overrides).

## Scripts

- `npm start` – dev server (Node 16+)
- `npm run build` – production build into `docs/` (commit it to publish)
