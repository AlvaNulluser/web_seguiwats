# Feature: Compliance Landing & Legal Hub for Seguiwats

- **Feature Name:** `compliance-landing`
- **Branch:** `main`
- **Design Read:** B2B SaaS landing and compliance hub for business verification (Meta Tech Provider & Google OAuth) and prospective clients, with a clean, high-trust minimalist aesthetic, leaning toward modern Tailwind utilities + semantic HTML5 + subtle glass accents.
- **Dials (taste-skill):** `DESIGN_VARIANCE: 6` | `MOTION_INTENSITY: 3` | `VISUAL_DENSITY: 4`

## Tasks

- [x] **Task 1: Project Scaffolding & Design Foundation**
  - Route: Delegated direct (Writer trigger)
  - Details: Initialize Vite + Tailwind CSS setup, custom typography, high-contrast clean theme, responsive base layout, and assets.
  - Evidence/Commit: `vite.config.js`, `src/style.css`, `src/main.js`, `public/favicon.svg`, `public/robots.txt`, `public/sitemap.xml`, `.gitignore`.

- [x] **Task 2: Main Showcase & Landing Page (`index.html`)**
  - Route: Delegated direct (Writer trigger)
  - Details: Build hero section, interactive Seguiwats voice-to-calendar pipeline visualizer, asymmetric bento grid of capabilities, security/architecture breakdown, and verified integration badges.
  - Evidence/Commit: `index.html` with interactive voice simulation pipeline and Google/Meta verification disclosures.

- [x] **Task 3: Google & Meta Compliant Privacy Policy (`privacy.html`)**
  - Route: Delegated direct (Writer trigger)
  - Details: Full legal privacy policy with explicit Google API Services User Data Policy (Limited Use) clause, WhatsApp Cloud API data handling, retention rules, and zero AI training warranty.
  - Evidence/Commit: `privacy.html` with bilingual Limited Use clause, scope breakdown, and ARCO/GDPR/CCPA rights.

- [x] **Task 4: Terms of Service (`terms.html`) & Data Deletion Instructions (`data-deletion.html`)**
  - Route: Delegated direct (Writer trigger)
  - Details: Comprehensive terms of service and Meta-required user data deletion request instructions and form.
  - Evidence/Commit: `terms.html` with acceptable use and WhatsApp policy, `data-deletion.html` with 3-step deletion protocol and interactive form.

- [x] **Task 5: Verification, Build & Compliance Audit**
  - Route: Direct inline
  - Details: Run production build, verify static asset generation, validate semantic markup, link integrity, and responsive accessibility.
  - Evidence/Commit: `npm run build` cleanly passed in 143ms producing all 4 pages and assets in `dist/`.

## Log

### L1 — Static hosting without a build step (2026-10-26)

User request: after publishing the repository to GitHub, proceed with everything judged pertinent.

- Production site moved to `site/` and served directly by nginx; `docker-compose.yml` volume now points to `./site` instead of `./dist`.
- Removed the Vite toolchain (`vite.config.js`, `package.json`, `package-lock.json`, `src/`, `node_modules`, `dist`). The build only minified inline CSS (~400 bytes per page) because Tailwind loads from `cdn.tailwindcss.com` and no page referenced `src/`.
- Added `site/nav.js` with the mobile navigation toggle (`#mobile-menu-btn` / `#mobile-menu`). The desktop nav is `hidden md:flex` and had no mobile fallback, leaving the anchors unreachable on phones.
- Replaced the dangling `/favicon.svg` reference (the file never existed) with the existing `favicon-32x32.png` and `favicon-16x16.png`.
- Deploy becomes `git pull` plus `docker compose up -d` to remount the volume. No Node on the VPS.
- Follow-up, not done: replace the Tailwind Play CDN with compiled CSS.
