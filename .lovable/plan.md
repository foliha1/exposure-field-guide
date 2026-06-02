
## Changes

### 1. Logo hover area (Identity.tsx)
- The cursor-none wrapper currently wraps all three logo cells together, so the "Download logo" tag follows the mouse across the gaps between containers.
- Move the `cursor-none` + `mousemove` listeners onto each individual `markCell` container instead of the outer `logoRef` wrapper. The tag only shows while hovering inside a single container, and disappears in the gutter/margin space.

### 2. Hover callout color (red)
- Update both cursor-follow tags to use `bg-ex-red` (instead of `bg-ex-black`) with `text-ex-white`:
  - Identity.tsx "Download logo" tag
  - Color.tsx "Copy Hex" tag

### 3. Color swatches — remove hover highlight (Color.tsx)
- Remove `hover:brightness-105` and the `transition-[filter]` from `SwatchTile`. Swatches stay flat on hover; the cursor tag is the only affordance.

### 4. Simplify section titles
- Replace the stylized titles in `<Section title={...}>` with plain section names. Drop the italic emphasis spans and rephrased phrases.
  - Identity: `The mark.` → `Logo`
  - Color: `Four colors, held in ratio.` → `Color`
  - Typography: current stylized title → `Typography`
  - Imagery: `Real people, real effort.` → `Imagery`
  - Assets: `Take what you need.` → `Assets`
- Blurbs underneath stay the same.

### 5. Remove Intent section
- Delete `src/components/toolkit/Intent.tsx`.
- Remove its import and `<Intent />` usage from `src/routes/index.tsx`.
- Remove any nav entry pointing to `#intent` in `src/components/toolkit/Nav.tsx` (if present).

### 6. Imagery copy (Imagery.tsx)
- Remove the "no grading" mentions:
  - Blurb: drop "No heavy grading, no posed setups, no landscapes as the headline."
  - Tone rule body: drop "no heavy grading, no filters."
- Keep the rest of the tone/stance/subject rules intact.

### 7. Assets download buttons (Assets.tsx)
- Remove the `▲` triangle glyph from the `DownloadButton` and the disabled state, so buttons read just "Download" / "Unavailable" / "Broken link".

## Out of scope
No layout, grid, or container sizing changes. No nav, route, or backend changes beyond removing the Intent reference.
