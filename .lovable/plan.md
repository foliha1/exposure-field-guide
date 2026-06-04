## What's actually happening

I inspected the four ZIPs in `public/downloads/` directly on the server. All four are **valid, well-formed archives** with the right contents:

- `EXPOSURE Logos.zip` — 14 entries, SVG + PNG folders
- `EXPOSURE Textures.zip` — 7 JPGs + 2 MP4s
- `EXPOSURE Typefaces.zip` — Canela + PP Neue Montreal woff2s
- `EXPOSURE Color Tokens.zip` — colors.json, colors.css, README.txt

So the files themselves are fine. The reason your downloads won't open is that **the browser isn't actually downloading the ZIPs** — it's downloading an HTML error page that's been saved with a `.zip` extension. macOS / Windows then say "unsupported format" because the file is HTML, not a zip.

I confirmed this with HEAD requests:

- Published site (`exposure-brand-toolkit.lovable.app/downloads/EXPOSURE Logos.zip`) → **HTTP 404, content-type text/html**
- Preview site → **HTTP 302 to the auth-bridge** (also HTML)

The favicon (which was in `public/` at the last publish) returns 200 from the same published host, so static-asset serving works in general. The `/downloads/*` files just aren't in the deployed build yet — they were added after the most recent publish.

## Fix

**Republish the project.** That's the entire fix — no code changes needed. Once the new deployment ships, `https://exposure-brand-toolkit.lovable.app/downloads/EXPOSURE%20Logos.zip` will return the real zip with `content-type: application/zip` and downloads will open normally.

```text
<presentation-actions>
  <presentation-open-publish>Publish your app</presentation-open-publish>
</presentation-actions>
```

## What about the preview URL?

The preview host (`id-preview--…lovable.app`) sits behind the Lovable auth-bridge, which 302-redirects unauthenticated requests for static files to an HTML login page. If you test downloads from the preview while signed out (or in a different browser session), you'll get the same "unsupported format" symptom even after republish. **Always test the download links on the published URL**, not the preview URL.

## Out of scope

- No changes to component code, hrefs, or the fetch-to-blob shim — those are all correct.
- No changes to the zip contents — verified valid.
