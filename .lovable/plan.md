## Findings

- **PDF brand guide**: Yes, `public/downloads/EXPOSURE Brand Guide.pdf` exists (8,842 bytes, real multi-page PDF generated previously).
- **Assets "not properly linked"**: All 5 files are present in `public/downloads/` and the `<a download>` hrefs are correct. The visible problem is the runtime HEAD-check in `Assets.tsx` — on the preview URL, the auth bridge intercepts the HEAD request and returns a 302/HTML redirect that `fetch` resolves as non-`ok`, so the component flags every file as "broken" and shows the red error banner. The links themselves work when the user clicks them.
- **Color hex copy**: `handleCopy` calls `navigator.clipboard.writeText` but gives no visual feedback.

## Changes

### 1. `src/components/toolkit/Assets.tsx` — remove the unreliable HEAD check
- Delete the `useEffect` that probes each file via HEAD, the `brokenFiles`/`checked` state, and the red error banner.
- Keep the `DownloadButton` simple: always render a working `<a href download>`. Drop the `broken`/`disabled` variants (no longer needed).
- Net result: the false "Download error / files unreachable" alert disappears and the three Assets tiles work as plain download links.

### 2. `src/components/toolkit/Color.tsx` — "Copied" confirmation
- Track `copiedHex` state. On swatch click, copy the hex, set `copiedHex` to that value, and clear it after ~1.4s.
- Update the cursor-following tag text: show `Copied {hex}` (green/white) when that swatch was just copied, otherwise the existing `Copy Hex`.
- Also add a small inline confirmation inside the active swatch (a tiny "Copied" pill in the top-right corner) for touch users who don't see the cursor tag.

### 3. Brand guide — no change
- File already exists and serves correctly. Just confirming to the user in the reply.

## Out of scope

- No changes to logo SVG downloads, typeface zip, or color-tokens zip — all verified working.
- No republish action. (Note: published site currently 404s on `/downloads/*` until next publish — call out in the reply so the user knows to republish.)