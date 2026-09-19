# Design System: Seguiwats (Google Stitch Specification)

Semantic design system specification optimized for Google Stitch (`labs.google/stitch`), generated under the `taste-skill` and `stitch-design-taste` guidelines.

---

## 1. Visual Theme & Atmosphere
* **Mood:** High-trust, restrained B2B engineering SaaS. A confident, dark-mode technical platform balancing developer precision with consumer simplicity — like Linear combined with Apple Enterprise ergonomics.
* **Density:** `Daily App Balanced` (Value: 4/10). Generous whitespace around legal disclosures and dense information architecture inside the interactive simulator.
* **Variance:** `Offset Asymmetric` (Value: 6/10). Asymmetric Bento grids, two-column split screen demo, left-aligned architectural hierarchy.
* **Motion Intensity:** `Fluid CSS & Spring Physics` (Value: 3/10). Restrained, non-distracting micro-interactions. Respects `prefers-reduced-motion`.

---

## 2. Color Palette & Functional Roles
* **Obsidian Canvas** (`#0B0F19`) — Primary dark background surface.
* **Elevated Slate Surface** (`#111827`, with `backdrop-filter: blur(16px)`) — Cards, interactive demo container, and glass headers.
* **WhatsApp Emerald** (`#10B981`) — Primary brand accent. Used for primary CTAs, live connection pings, WhatsApp message bubbles, and success indicators.
* **WhatsApp Emerald Hover** (`#059669`) — Interactive pressed and hover states.
* **Google Royal Blue** (`#2563EB`) — Secondary functional accent. Dedicated strictly to Google Calendar event pills, OAuth verification badges, and Google API disclosures.
* **Crisp Titanium** (`#F8FAFC`) — Primary headlines and active labels.
* **Muted Zinc** (`#94A3B8`) — Secondary body copy, technical descriptions, and metadata.
* **Subtle Glass Border** (`rgba(255, 255, 255, 0.08)`) — Structural 1px border lines separating panels.
* **Banned Colors:** AI-purple/fuchsia gradients, neon lime glows, pure white backgrounds on dark mode, pure black (`#000000`).

---

## 3. Typography Architecture
* **Display / Headlines:** `Geist Sans` or `Satoshi` (Weight: 700/800, tracking: `-0.025em`). Weight-driven hierarchy; scales responsively using `clamp()`.
* **Body Copy:** `Geist Sans` or `Plus Jakarta Sans` (Weight: 400/500, leading: 1.6, max line length: 65ch).
* **Monospace & Code:** `Geist Mono` or `JetBrains Mono` (Weight: 400/600). Used for API scopes (`extendedProperties.shared`), HTTP methods, latencies, and metadata.
* **Banned Typography:** Generic `Inter` as default, system default serif fonts, Comic Sans, decorative scripts.

---

## 4. Component Stylings

### A. The Hero Section
* **Structure:** Left-aligned or balanced split with technical trust badges placed above the main H1.
* **Badges:** Pill-shaped (`border-radius: 9999px`) with 10% opacity accent backgrounds (`#10B9811A`, `#2563EB1A`) and 1px matching border. Includes a pulsing status dot.
* **CTAs:** Single dominant primary button (WhatsApp Emerald fill, white text, subtle shadow `0 10px 25px -5px rgba(16, 185, 129, 0.2)`). Secondary outline buttons with subtle glass hover.

### B. Interactive Voice-to-Calendar Simulator
* **Layout:** Two-column split card (7 columns for WhatsApp chat stream + 5 columns for live Google Calendar view).
* **Step Tracker:** Horizontal 4-node progress track (Inbound WhatsApp → Whisper ASR → LLM Extraction → Calendar API v3).
* **Simulation Flow:** Tactile audio button triggers a realistic 7-second voice note, displays instant transcription, and animates a calendar event into the right-hand panel.

### C. Asymmetric Bento Grid
* **Card 1 (Span 7 cols):** Voice note input showcase with ambient emerald glow and latency counter (`< 2.5s`).
* **Card 2 (Span 5 cols):** Google Calendar single source of truth with native notification badge and checkmark list.
* **Card 3 (Span 6 cols):** Docker multi-tenant isolated container architecture specs with Traefik TLS badge.
* **Card 4 (Span 6 cols):** 9:00 AM proactive morning briefing preview.

### D. Compliance & Verification Box
* **Visual Treatment:** Highlighted callout card with a 20% opacity Google Blue border and subtle alert styling.
* **Content Integrity:** Must prominently display the exact Google Limited Use disclosure and granular Calendar scopes.

---

## 5. Inviolable Legal & Verification Contracts (DO NOT REMOVE OR MUTATE)
When redesigning or generating screens in Stitch, the following content blocks are **strictly mandatory** to maintain Meta Tech Provider and Google OAuth verification compliance:

1. **Google Limited Use Clause:** Must preserve verbatim:
   > *"Seguiwats' use and transfer to any other app of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements."*
2. **Explicit Google Calendar Scopes:**
   - `https://www.googleapis.com/auth/calendar.events`
   - `https://www.googleapis.com/auth/calendar`
3. **WhatsApp Meta Cloud API v21.0 Context:** Must state that WhatsApp messaging is used exclusively for seller dictations and authorized schedule summaries, with zero spam and strict opt-in.
4. **Data Privacy Guarantees:** Clear statement that data is NEVER sold and NEVER used to train general-purpose AI/LLM models.
5. **Footer Legal Links:** Direct navigation links to `/privacy.html`, `/terms.html`, `/data-deletion.html` and corporate email `soporte@seguiwats.com`.

---

## 6. Anti-Patterns (Explicit Bans)
* ❌ NO AI-purple / fuchsia gradients or multi-colored neon meshes.
* ❌ NO 3-column equal feature rows (must use asymmetric Bento Grid).
* ❌ NO generic placeholder names ("Acme Corp", "John Doe"). Use real Seguiwats workflows (Josy, Carlos Gómez).
* ❌ NO deletion of legal disclosures for the sake of "minimalist aesthetic".
* ❌ NO overlapping text over images or absolute-position stacking.
* ❌ NO generic circular loading spinners (use skeleton shimmers matching component bounds).
* ❌ NO `h-screen` viewport units (use `min-h-[100dvh]`).
