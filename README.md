# Stonegarth Landscapes & Driveways demo site

Single-page conversion site for a (fictional) Warrington landscaping firm, built with
[Astro](https://astro.build) as a static site. This repo doubles as the **template for
real client sites**: see "Re-skinning for a new client" below.

## Commands

| Command                | Action                                    |
| :--------------------- | :---------------------------------------- |
| `npm install`          | Install dependencies                      |
| `astro dev --background` | Start the dev server (see `astro dev logs` / `stop` / `status`) |
| `npm run build`        | Build the static site to `./dist/`        |
| `npm run preview`      | Preview the production build locally      |

## Where everything lives

- **`src/data/site.ts`**: ALL content and settings: business name, phone, email,
  services, gallery, reviews, towns, opening hours, Formspree endpoint, analytics token.
- **`src/styles/global.css`**: design tokens (colours, fonts, spacing) at the top of
  the file, plus shared patterns (`.btn`, `.section`, `.section-title`).
- **`src/assets/images/`**: photos. Currently labelled SVG placeholders.
- **`src/components/`**: one component per page section, in page order.

## Connecting the external services

Nothing below blocks local development; the site runs fine with placeholders.

### 1. Photos (11 needed)

Source from Unsplash/Pexels/Pixabay and drop into `src/assets/images/` with these exact
basenames (as `.jpg`, `.jpeg`, `.png` or `.webp`). Each real photo automatically
replaces its `.svg` placeholder, no code changes. Prefer UK-looking gardens.

| File | Subject |
| :--- | :--- |
| `hero.jpg` | Finished driveway/patio with house visible, daylight (≥1920px wide) |
| `service-driveways.jpg` | Block-paved or resin driveway (~1200×900) |
| `service-patios.jpg` | Indian stone or porcelain patio |
| `service-turfing.jpg` | Fresh striped lawn / new turf |
| `service-fencing.jpg` | Timber fence or garden wall |
| `gallery-before.jpg` | Rough overgrown garden ("before") |
| `gallery-after.jpg` | Finished garden ("after", pairs with before) |
| `gallery-driveway.jpg` | Driveway, different from the service shot |
| `gallery-patio.jpg` | Patio with garden furniture |
| `gallery-garden.jpg` | Full garden transformation |
| `gallery-walling.jpg` | Garden wall, steps or raised beds |

After adding real photos, update the `imageAlt` fields in `site.ts` to describe what's
actually in them.

### 2. Contact form: Formspree (~5 min)

1. Create a free account at [formspree.io](https://formspree.io) → **+ New form**.
2. Copy the endpoint (`https://formspree.io/f/xxxxxxxx`).
3. Paste it into `formspreeEndpoint` in `src/data/site.ts`.

Until then, submitting the form shows a friendly demo message instead. Free tier = 50
submissions/month.

### 3. Deploy: Cloudflare Pages (~10 min)

1. Push this repo to GitHub.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Pick the repo, framework preset **Astro**, deploy.
4. Update `site` in `astro.config.mjs` to the URL you get (fixes canonical/OG tags).

### 4. Analytics: Cloudflare Web Analytics (~2 min, after deploy)

1. Cloudflare dashboard → **Web Analytics** → add the site.
2. Copy the beacon token into `analyticsToken` in `src/data/site.ts` and push.

The script only renders when a token is set, so local builds stay clean. Cookieless, so
no UK cookie-consent banner needed.

## Re-skinning for a new client

1. Replace the contents of `src/data/site.ts` (name, phone, copy, towns, reviews…).
2. Edit the token block at the top of `src/styles/global.css` (accent colour, fonts).
3. Swap the photos in `src/assets/images/` (keep the basenames, or update `site.ts`).
4. Update `site` in `astro.config.mjs` and the favicon colour/letter in
   `public/favicon.svg`.
5. New Formspree form + analytics token per client.
