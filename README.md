# Big Little Brain

A small, free, gently-designed website that helps families and carers understand
dementia in plain language — what's happening in the brain, why behaviours change,
answers to common questions, and printable caregiver toolkit sheets.

> **Educational information only — not medical advice.** See the in-site
> *Disclaimer & safety* page. In an emergency call **999** (UK) or your local number.

---

## What this is

A **static website**. There is no build step, no server, and no framework install.
The pages are plain HTML/CSS, and the interactive app is React compiled **in the
browser** by Babel Standalone. That means you can host the folder anywhere that
serves static files (Vercel, Netlify, GitHub Pages, etc.).

## Project structure

```
index.html        ← entry point (Vercel serves this at /) + meta/OG tags
favicon.svg       ← site icon (the brain mark)
og-image.png      ← social share preview image
styles.css        ← design tokens, base styles, accessibility (focus, skip link, reduced motion)
app.css           ← layout, footer, disclaimer, library, about, start, search, components
content.js        ← all editorial content (articles, FAQ, toolkit, library) — plain data
icons.jsx         ← line icons + keyboard-accessible click helper
brain.jsx         ← the explorable hand-drawn brain
views.jsx         ← section pages, reader, FAQ, toolkit, library, disclaimer, about, start, search
tweaks-panel.jsx  ← design-time controls (hidden on the live site)
app.jsx           ← app shell: nav (text-size + search), home, routing, footer
```

**Before you publish:** the About page lists a placeholder contact address
(`hello@biglittlebrain.org`) — change it (in `views.jsx`, `AboutPage`) to a real
inbox, and personalise the "Our story" paragraph with your own words. The
"Information last reviewed" date lives in `content.js` (`REVIEWED`).

`big little brain.html` is the original copy of `index.html` and can be deleted —
it's kept only for reference.

---

## Run it locally

Because the browser fetches the `.jsx`/`.js` files, you need a tiny local server
(opening `index.html` directly with `file://` will be blocked by the browser).

```bash
# any one of these, from the project folder:
npx serve .
# or
python3 -m http.server 8000
```

Then open the URL it prints (e.g. http://localhost:8000).

---

## Publish with GitHub + Vercel

1. **Create the repo and push:**
   ```bash
   git init
   git add .
   git commit -m "Big Little Brain"
   git branch -M main
   git remote add origin https://github.com/<your-username>/big-little-brain.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com) → **Add New… → Project**
   - Import your `big-little-brain` repo
   - Framework Preset: **Other**
   - Build Command: *(leave empty)*
   - Output Directory: *(leave empty / `.`)*
   - Click **Deploy**

   Vercel detects it as a static site and serves `index.html` automatically.
   Every push to `main` redeploys.

---

## Editing content

Almost all wording lives in **`content.js`** — articles, the FAQ list, and the
toolkit sheets are plain data objects. You can edit copy there without touching
the React code.

---

## A note on performance

The in-browser Babel compile is fine for a site this size, but it adds a small
startup cost and downloads React's development build. If you later want a faster,
production-optimised version, it can be converted to a proper Vite + React build —
ask and it can be set up.

---

© 2026 Big Little Brain. All rights reserved. Personal, non-commercial use —
including printing the toolkit sheets — is welcome. Please don't republish or
resell the content without permission.
