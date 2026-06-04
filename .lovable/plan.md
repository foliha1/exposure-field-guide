## Changes

### 1. Identity.tsx — logo hover tag
Change the cursor-following tag text from "Download logo" to "DOWNLOAD SVG".

### 2. Color.tsx — copy hover + swatch tweaks
- Cursor tag: always show "COPIED" when copied (currently shows `Copied ${hex}`) — drop the hex.
- Remove the "Copied" pill in the top-right of each swatch tile.

### 3. Color.tsx — color ratio layout
Make the ratio bar full width with the explanatory copy stacked below it (instead of the 3/9 side-by-side grid).

### 4. Password gate for the entire site
Add a lightweight branded password screen that protects the toolkit. Password: `EXPOSUREKIT26`.

Implementation:
- New component `src/components/toolkit/PasswordGate.tsx`:
  - Full-screen EX-branded screen (ex-black bg, ex-white text, EXPOSURE wordmark, single password input, ex-red submit button, minimal "Restricted — internal use" label).
  - Client-only check: compares input to `EXPOSUREKIT26`. On success, sets `localStorage["ex-toolkit-unlocked"] = "1"` and renders children.
  - On mount, reads the localStorage flag to skip the gate for returning users.
  - SSR-safe: until mounted (state hydrated from localStorage), render nothing / minimal shell to avoid flashing protected content.
- Wrap `<main>` contents in `src/routes/index.tsx` with `<PasswordGate>...</PasswordGate>`.

Note: this is a client-side gate (not server-enforced auth). It keeps the page out of casual view but anyone determined can bypass it via devtools. Calling out so expectations are clear — if you want true protection, that would require a server-side auth flow (separate, larger task). Confirm client-side is fine, or I'll switch to server-enforced.
