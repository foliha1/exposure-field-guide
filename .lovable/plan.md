## Goal

Make every downloadable surface on the site real and functional. Today only the Assets section and the Textures section's pack button work; the rest is either a misleading hover tag, a missing button, or a placeholder file.

## Changes

### 1. Logo section — clickable mark downloads
- Wrap each of the three mark cells (Wordmark, Primary Lockup, Lockup + Triangle) in an `<a download href={…svg}>` so clicking the cell downloads the SVG for the **currently selected dark/light variant**.
- Keep the cursor-following "Download logo" tag — it now reflects real behavior.
- Source files: the six existing assets already imported (`EXPOSURE_Light/Dark`, `EXPOSURE_Lockup_Light/Dark`, `EXPOSURE_Lockup-Tri_Light/Dark`). Download filenames will match those original SVG filenames.
- Add `cursor-pointer` and a keyboard-focusable affordance so it's accessible, not just a hover toy.

### 2. Color section — token pack
- Generate `public/downloads/EXPOSURE Color Tokens.zip` containing:
  - `colors.json` — array of `{ name, hex, rgb }` for the 4 brand colors.
  - `colors.css` — `:root { --ex-off-black: #22211F; … }` matching the names used in `src/styles.css`.
  - `README.txt` — one-paragraph usage note.
- Add a small "Download color tokens" button below the swatch grid, styled like the Textures download button (bordered, uppercase 11px), with a mono filename caption.

### 3. Typography section — typeface pack button
- Add a "Download typefaces" button + filename caption at the bottom of the Typography section, pointing at the existing `EXPOSURE Typefaces.zip`. Same visual pattern as the Textures download.

### 4. Hero — brand guide CTA + real PDF
- Generate a real multi-page `public/downloads/EXPOSURE Brand Guide.pdf` (replacing the 348-byte placeholder) using reportlab. Pages: cover, intent/voice, logo, color, typography, imagery, textures, assets index. Brand colors and type names sourced from the existing components so it stays in sync with the site copy. QA each page as images per the PDF skill.
- Add a single primary CTA below the hero subtitle: "Download brand guide" → `EXPOSURE Brand Guide.pdf`. Styled to match the existing download buttons but on the dark hero (light border, red hover).

### 5. Cleanup
- Delete the three stub files: `public/downloads/color-file.zip`, `fonts.zip`, `logo-pack.zip`.
- Rename old placeholder `brand-guide.pdf` → replaced by the new `EXPOSURE Brand Guide.pdf`; remove the old file.
- Update the Assets section's HEAD-check (already in place) so it continues to flag any broken file at runtime — no code change needed, just verify the new filenames are listed if/when added to the Assets grid. (Not adding new Assets tiles unless you want them; current 3-tile grid stays.)

## Files touched

- `src/components/toolkit/Identity.tsx` — wrap mark cells in anchors with `download`.
- `src/components/toolkit/Color.tsx` — add token download button.
- `src/components/toolkit/Typography.tsx` — add typeface download button.
- `src/components/toolkit/Hero.tsx` — add brand-guide CTA.
- `public/downloads/` — add `EXPOSURE Color Tokens.zip`, add real `EXPOSURE Brand Guide.pdf`, delete 3 stubs + old placeholder PDF.

## Not in scope

- No new tiles in the Assets grid (it already shows the three packs). If you want the brand guide and color tokens as Assets tiles too, say the word and I'll extend the grid.
- No per-mark PNG variants (you picked SVG-only on click).
- No backend/storage changes — everything stays as static files under `/public/downloads/`.
