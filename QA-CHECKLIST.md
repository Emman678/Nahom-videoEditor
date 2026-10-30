# Final QA checklist (blueprint section 10)

Tested with Chromium (Playwright) at 320, 360, 390, 414, 600, 768, 820, 1024, 1200, 1280, 1440 and 1920 px wide, on a local server and via `file://`. 69 automated checks plus visual review of desktop, tablet and phone screenshots.

| # | Check | Result | How it was checked |
| --- | --- | --- | --- |
| 1 | Hero identifies Nahom and performance-ad focus immediately | PASS | Eyebrow "Video Editor & Creative Strategist", headline, "Performance ads for DTC & e-commerce brands on Meta and TikTok." visible above the fold on desktop, tablet and phone |
| 2 | Navigation anchors and mobile menu work | PASS | Work/About/Services/Contact + both hero CTAs scroll to the right sections; menu opens, closes on link, Escape and outside tap; `aria-expanded` updates; active link highlights |
| 3 | Project filters show correct categories, selected state accessible | PASS | All 8 / UGC Ads 3 / VSLs 2 / Other Creatives 3 / All 8; `aria-pressed`; result count announced in a live region |
| 4 | Project modal opens; Escape and focus return work | PASS | Keyboard Enter opens; focus lands on Close; Escape, close button and backdrop close; focus returns to the originating card; page scroll unlocks |
| 5 | Missing media does not break layout or show internal instructions | PASS | Designed neutral thumbnails, "Coming soon" badge, "Video coming soon" in popup; broken thumbnail path falls back to the placeholder |
| 6 | All client names, metrics, testimonials and links verified | PASS | None shown. Contact/social links render only when configured; non-https and `javascript:` values are rejected |
| 7 | No horizontal overflow on desktop/tablet/mobile | PASS | Measured at 12 widths (320–1920 px): 0 px overflow |
| 8 | Reduced motion disables nonessential animation | PASS | With `prefers-reduced-motion: reduce`, hero is at its final state at once, filters swap instantly, transitions are near zero |
| 9 | Video never autoplays with sound; below-fold media lazy-loaded | PASS | Project/showreel players are created on click and have controls, no autoplay. Optional hero loop is muted, looping and skipped under reduced motion. Images below the fold use `loading="lazy"` |
| 10 | Images have appropriate alt text and dimensions | PASS | Portrait: descriptive alt + width/height. Decorative thumbnails use empty alt (card has its own label) |
| 11 | Primary/secondary CTAs lead to real destinations | PASS | "View My Work", "Let's Talk" (in-page); "Start a Project" sends / opens email / copies brief depending on config; "Message Me" appears only when a messaging link exists. **Add a contact method before launch** (see MISSING-INFO.md) |
| 12 | No dead buttons, fake form success, broken assets, console errors | PASS | Form shows "Sent" only after the server replies OK (simulated 200 vs 500 tested). No console errors or failed requests on a clean load (http and file://) |
| 13 | README and asset mapping included | PASS | `README.md`, `ASSET-MAP.md`, `MISSING-INFO.md` |

Also verified: works with JavaScript disabled (all static content and anchors visible); dynamic text is inserted as text, not HTML (an `<img onerror>` title rendered harmlessly); YouTube links become privacy-enhanced embeds; unsafe video URLs fall back to the "coming soon" state.

Not testable here: real Safari/iOS and Firefox hardware, screen readers (NVDA/VoiceOver). The code uses standard `<dialog>`, `aria-pressed` and landmark patterns that those support, but a quick manual pass on a real phone before launch is recommended.
