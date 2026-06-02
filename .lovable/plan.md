## Logo section (Identity.tsx)

- Make the Primary Lockup container match the size/padding of the Wordmark and Lockup+Triangle cells so all three frames feel like one clean grid. Keep the Primary Lockup full-width above, but reduce its padding (`p-14 md:p-20`) and logo size (`w-[220px] md:w-[280px]`) to match the two cells underneath.
- Wire all three mark cells to a single shared dark/light toggle (small pill in the top-right of the marks block, labeled "Dark" / "Light"). When toggled:
  - "Dark" mode (default): cells stay on the section's ex-black ground, using the `*_Light.svg` (light-on-dark) variants currently shown.
  - "Light" mode: each cell's inner background flips to ex-off-white with a faint border, and the marks swap to the `*_Dark.svg` variants (EXPOSURE_Dark, EXPOSURE_Lockup_Dark, EXPOSURE_Lockup-Tri_Dark).
  - Border, hover treatment, and Download stub behavior preserved in both states.
- Graphic device diagram, clearspace/color/proportion rules, blurb: unchanged.

## Color section (Color.tsx)

- Remove the small "40 / 40 / 15 / 5" eyebrow tag above the bar.
- Remove the "Red is exact — do not approximate" note.
- Move the ratio bar so it sits **below** the 4 swatch tiles (currently above).
- Above the ratio bar, add a small secondary title block: eyebrow "Color Ratio" + a 1–2 line blurb explaining the 40/40/15/5 hold (e.g. "Roughly equal off-black and off-white grounds, a measured amount of red, and only a touch of gold — held across any surface.").
- Keep swatch tiles, copy-on-click behavior, and the bottom caption paragraph as-is.

## Typography section (Typography.tsx)

- Character-set specimen: change each typeface block to list all uppercase letters first on one line, then all lowercase on the next line, then numerals/punctuation. Currently they're interleaved (`A a B b C c …`).
  - Canela Light: `A B C D … Z` / `a b c d … z` / `0 1 2 … 9 & . , ; : ! ? — / ( )`
  - PP Neue Montreal Regular: same structure.
- Hierarchy scale H2 row:
  - Change spec label to "Canela Light · 40–48px / 1.05".
  - Remove the `uppercase` class so the specimen renders sentence case ("Where teams find their edge").
  - Adjust the size clamp to land in the 40–48px range (e.g. `clamp(2.5rem, 3.5vw, 3rem)`).
- Remove the Pull Quote row entirely from the hierarchy scale list.
- In-use block, character set Canela block, all other rows: unchanged.

## Technical notes

- Toggle: local `useState<'dark' | 'light'>` in `Identity`, no new deps. Cell background uses conditional class (`bg-transparent` vs `bg-ex-white`) and border tone adapts (`border-ex-white/15` vs `border-ex-black/10`). Mark image source switches via the imported Dark variants.
- The Graphic Device diagram cell is intentionally left outside the toggle (it's a layout illustration, not a mark sample).
