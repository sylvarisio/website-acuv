# acuv Strategy — Website (Next.js + Payload CMS)

Production codebase for acuvstrategy.com. Public site implements the approved redesign
(quiet-luxury teal system with generative brand graphics); content is edited by
non-technical users at `/admin` (Payload CMS). Database is **SQLite** (a single file in
`data/` — Payload has no MySQL/MariaDB adapter, so the Infomaniak MariaDB is not used).

## Stack
- Next.js 15 (App Router) + React 19
- Payload CMS 3 (admin at `/admin`, REST at `/api`), SQLite via `@payloadcms/db-sqlite`
- Node 24

## Local development
```bash
npm install
cp .env.example .env        # set PAYLOAD_SECRET to a long random string
npm run dev                 # http://localhost:3000  /  admin at /admin
```
First visit to `/admin` prompts you to create the first admin user.

## Content model (what editors manage)
- **Announcements** — title, kicker, blurb, PDF, button label, emblem text, and a
  "Feature on homepage" checkbox. The featured one renders as the homepage news band
  (the 10-year anniversary block by default when none is featured).
- **Thoughts** — title, TL number, subtitle, excerpt, cover, rich-text body, optional PDF.
  Renders the whole /thoughts page (first by TL number = featured card).
- **Documents** — title + file, for downloadable PDFs.
- **Media** — uploaded files land in `/media` (gitignored; must persist on the server).
- **Users** — create one limited account per editor.

## Deploy on Infomaniak (Node.js site)
1. Push this repo to GitHub (`sylvarisio/website-acuv`).
2. In the Infomaniak Node site: connect the Git repo, branch `main`.
   - Install/build command: `npm install && npm run build`
   - Start command: `npm start`  (Next respects the `PORT` env Infomaniak provides)
3. Environment variables:
   - `PAYLOAD_SECRET` — long random string (40+ chars)
   - `DATABASE_URI` — `file:./data/payload.db` (or an absolute path on persistent storage)
   - `NEXT_PUBLIC_SERVER_URL` — `https://new.acuvstrategy.com`
4. **Persistence check (important):** `data/` (SQLite) and `media/` (uploads) must survive
   redeploys. If Infomaniak deploys into a fresh directory, point `DATABASE_URI` and the
   media `staticDir` (src/payload.config.ts) at an absolute persistent path, e.g.
   `/home/clients/<id>/persistent/`.
5. Deploy, open `/admin`, create the admin user, add an Editor user, upload the
   anniversary PDF as a featured Announcement, and add the 10 Thoughts.
6. Issue SSL for the subdomain; when validated, point `acuvstrategy.com` here.

## Known TODOs (deliberate)
- **Contact form** is visual only — wire the SEND button to an API route (e.g. nodemailer
  through Infomaniak SMTP) or a form service.
- **Homepage proof cards** (2 thought teasers + 3 success stories) are static markup;
  can be wired to the CMS like the news band if desired.
- **Fonts:** drop licensed Neometric woff2 files into `public/fonts/` (see README there);
  Poppins is the active fallback.
- **Responsive:** desktop-first (`min-width:1200px` on body). Mobile adaptation pending.
- Article detail pages (`/thoughts/[slug]`) not yet implemented — archive rows are
  non-navigating; add when the client wants full articles online.
- This scaffold was generated from the design references and has not been executed;
  `next.config.mjs` disables type/lint build blocking. Expect to fix small issues on the
  first `npm run build`, then tighten.

## Where things live
- `src/payload.config.ts` — CMS collections (Users, Media, Thoughts, Documents, Announcements)
- `src/app/(payload)/` — Payload admin + REST boilerplate (do not edit)
- `src/app/(site)/` — the seven pages (inline-styled JSX ported 1:1 from the approved designs)
- `src/components/animations.tsx` — DotWave / LineWave / Rosette (canvas + CSS motifs)
- `src/components/AnnouncementBand.tsx`, `ThoughtsSection.tsx` — CMS-driven sections
- `src/app/(site)/globals.css` — fonts, body reset, `acv-*` keyframes
