
## EXPOSURE by 29029 — Brand Toolkit (single page)

A working reference page for the internal team and partners. Field-guide register: scannable, utilitarian, premium by restraint. One expressive moment (the thermal hero), everything else flat and clean.

### Page structure (single route `/`, anchored top nav)

1. **Top nav (sticky)** — wordmark left, in-page jump links right: Intent · Voice · Identity · Type · Color · Assets. Tracked uppercase, off-white on off-black.
2. **Hero** — full-viewport off-black canvas with the grainy thermal gradient motif (off-black → red → orange → gold + film grain). Display headline in Canela Light ALL CAPS with italic emphasis: "YOUR TEAM WON'T BE THE *SAME*." Small eyebrow "EXPOSURE / BRAND TOOLKIT / V1". One quiet red CTA → "Download assets" jumps to §Assets.
3. **§Intent** — off-white section. Two-column field-guide layout: left label "01 / INTENT", right body: what EXPOSURE is, who it's for, why it exists. Pull-quote in Canela Light italic.
4. **§Voice & Principles** — off-black section. Numbered list (01–05) of voice rules with do/don't pairs. Red delta (▲) mark as the bullet.
5. **§Identity** — off-white. Wordmark lockup, clear-space diagram, minimum size, misuse grid (✕ in red). Static SVG specimens.
6. **§Typography** — off-black. Canela Light specimen (display), PP Neue Montreal specimen (text), eyebrow specimen. Live samples using the bundled webfonts.
7. **§Color** — off-white. Four swatches with HEX / RGB / role. Small 40/40/15/5 ratio bar. One restrained gold mention.
8. **§Assets / Downloads** — off-black. Table-style list (Name · Format · Size · Download). Logo SVG/PNG, color tokens JSON, type specimen PDF placeholder, full brand kit ZIP. Red download links.
9. **Footer** — version, last updated, contact line. Single gold rule.

### Visual system

- Co-equal off-black `#22211F` and off-white `#E7E6E1` grounds, alternating section to section.
- Red `#E1251B` reserved for CTAs, the ▲ delta mark, misuse ✕, and downloads.
- Gold `#CC9933` used once in the footer rule and once as a hairline accent under the hero eyebrow.
- Hairline 1px dividers, generous whitespace, left-aligned, 12-col implicit grid via Tailwind.
- Thermal hero: layered radial/linear gradients + an SVG turbulence/noise filter for grain. Pure CSS+SVG, no images.

### Type

- Self-host the 4 bundled woff2 files (Canela Light, Canela Light Italic, PP Neue Montreal Medium, PP Neue Montreal Bold) under `src/assets/fonts/` via `@font-face` in `styles.css`.
- Note: the upload contains PP Neue Montreal **Medium** and **Bold** (no "Regular"). Medium will be used as the body weight; this is the closest match and reads cleanly at body sizes. Flagging here so you can swap in Regular later if you have it.
- Display: Canela Light, predominantly ALL CAPS, italic on emphasis words.
- Body: PP Neue Montreal Medium. Eyebrows/labels: PP Neue Montreal Bold, tracked uppercase, small.

### Motion (Framer Motion, restrained)

- Section headings + first paragraph: 200ms fade + 8px rise, triggered once on enter via `whileInView`.
- Links/buttons: 150ms color/opacity hover only.
- No parallax, no smooth-scroll library — native CSS `scroll-behavior: smooth` for nav anchors.

### Assets to ship in the downloads section

Placeholder static files generated in-repo (so the page is functional immediately):
- `exposure-wordmark.svg`
- `exposure-color-tokens.json`
- `exposure-brand-kit.zip` (built locally containing the above)

Real assets can be swapped in later by replacing the files in `public/downloads/`.

### Technical details

- TanStack Start, single route `src/routes/index.tsx` (replace placeholder). Page composed of small section components under `src/components/toolkit/` (Nav, Hero, Intent, Voice, Identity, Typography, Color, Assets, Footer).
- Design tokens added to `src/styles.css` under `:root` in `oklch` equivalents of the four brand hex values, plus `--font-display` and `--font-sans` CSS vars. Tailwind utilities used via the existing `@theme inline` mapping; add `--color-ex-black`, `--color-ex-white`, `--color-ex-red`, `--color-ex-gold`.
- Fonts loaded via `@font-face` with `font-display: swap`. The four woff2 files are imported from `src/assets/fonts/` so Vite fingerprints them.
- Update root `head()` meta: title "EXPOSURE — Brand Toolkit", description, og tags. Single H1 in the hero.
- No backend, no Cloud needed.

### Out of scope

- Auth / gated downloads (can be added later with Lovable Cloud if partners need access control).
- CMS for editing copy — content lives in the route file.
- Multiple pages — strictly single-page anchored.
