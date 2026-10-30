# NAHOM — Video Editor & Creative Strategist (portfolio website)

Plain HTML, CSS and vanilla JavaScript. No build step, no frameworks, no third-party scripts.
Built to the "Nahom Video Editor Portfolio Blueprint": dark cinematic charcoal (`#071016`) with electric lime (`#B5FF4D`).

## 1. Run it locally

**Easiest:** double-click `index.html`. It works straight from the folder (fonts are embedded for exactly this reason).

**Recommended while editing** (closer to a real host):

```bash
cd nahom-portfolio
python3 -m http.server 8000
# open http://localhost:8000
```

## 2. Flat project layout

All site code, images, videos, icons, fonts, and licences live directly beside `index.html`; there are no nested project folders.

```
index.html              page structure, SEO + Open Graph tags
fonts.css               embedded Bricolage Grotesque + Hanken Grotesk
styles.css              design tokens and all section styles
site-config.js          contact links, form, showreel and hero video
projects.js             one object per project in the work grid
main.js                 behaviour: navigation, filters, videos and form
Media files             images, videos, icons, fonts and licences in this folder
ASSET-MAP.md             what each supplied file is used for
QA-CHECKLIST.md          pass/fail results against the blueprint
MISSING-INFO.md          what is still needed to go live
```

## 3. Add or change projects (projects.js)

Each project is one object. Copy a line, change the values, save. The grid, the filter buttons and the popup update by themselves.

```js
{
  id: "ugc-skincare-01",            // unique, no spaces
  title: "Skincare launch ad",      // shown on card + popup
  category: "UGC Ads",              // "UGC Ads" | "VSLs" | "Other Creatives"
  aspectRatio: "9:16",              // "9:16", "16:9", "1:1", "4:5" ...
  thumbnail: "ugc-skincare-01.jpg",   // poster image (optional)
  videoUrl: "ugc-skincare-01.mp4",    // local mp4/webm, YouTube or Vimeo link
  captions: "",                     // optional .vtt for local videos
  summary: "One line of context.",  // optional
  role: "Edit, hook, captions",     // optional
  client: "",                       // only with permission
  deliverables: ["9:16 cut", "Captions"],           // optional
  featured: true                    // true = shown first in "All"
}
```

* Empty optional fields are simply not shown. Nothing is guessed.
* A card with no `videoUrl` shows a quiet "Coming soon" badge and a neutral designed thumbnail.
* The entries called **UGC Ad 01–03, VSL 01–02, Creative 01–03 are temporary labels** copied from the source PDF layout. They are not real client work. Replace or delete them.
* Videos load only when a card is opened (and never autoplay). Use a thumbnail for every card: it is what visitors see first.
* Aim for web copies of videos: H.264 `.mp4`, 1080p or less, ideally under 20 MB each. Keep your originals elsewhere.
* New category? Add it to `window.NAHOM_CATEGORIES` at the top of `projects.js`; a filter button appears automatically.

## 4. Contact, social links, form (site-config.js)

Fill in only what is confirmed. Anything left `""` is hidden everywhere (contact section, footer, "Message Me").

| Key | Format |
| --- | --- |
| `email` | `name@example.com` (adds an Email link and lets the form open the visitor's email app) |
| `whatsapp` | digits with country code (`251911000000`) or a full `https://wa.me/...` link |
| `instagram`, `tiktok`, `linkedin`, `upwork` | full `https://...` profile URLs (anything else is rejected) |
| `formEndpoint` | a form service URL (Formspree, Getform, Basin or your own API) |

How the "Start a Project" form behaves, in order:

1. **`formEndpoint` set** → sends the message there. It only says "Sent" if the server answers OK; otherwise it says it didn't send.
2. **else `email` set** → opens the visitor's email app with a prepared message. Subject: *Video editing project inquiry*.
3. **else** → copies the message to the visitor's clipboard and says so. (This keeps the button honest while no contact method exists. **Set at least one of the first two before launch.**)

The form never claims a message was sent unless the server confirmed it.

## 5. Replace hero / portrait media

* **Portrait:** replace `nahom-portrait-853.jpg/.webp` (853×1280) and `-480.jpg/.webp` (480×720) keeping the same names. The original supplied file is kept untouched as `nahom-portrait-original.jpg`. The supplied portrait is a designed poster with "VIDEO EDITOR" and software icons baked in. A plain portrait photo will also work: the frame is 2:3.
* **Editing-room footage (optional):** keep a short muted clip next to `index.html` and set `hero.videoUrl` in `site-config.js`. It plays silently on a loop inside the portrait frame, with the portrait as poster. It is skipped for visitors who prefer reduced motion.
* **About photo:** same image, cropped by CSS (`.about__still img`), shown in black and white.

## 6. Showreel

Set `showreel.videoUrl` (local file, YouTube or Vimeo) and optionally `showreel.poster` and `showreel.captions`. Visitors see the poster and press play; it never autoplays. With no video the section shows a quiet "Showreel coming soon" panel with no fake play button.

## 7. SEO and sharing

* Title, description, Open Graph and Twitter tags are in `<head>` of `index.html`. A share image is included (`og-share.jpg`, 1200×630).
* **When the domain is known:** (1) change `og:image` and `twitter:image` to absolute URLs, e.g. `https://yourdomain.com/og-share.jpg`; (2) uncomment and fill the `canonical` link.
* Favicon: `favicon.svg` (a lime "N"). Swap it for a real logo if one exists.

## 8. Deploy

Upload the whole folder to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages). No server code is needed. For Netlify, drag the folder onto the Deploys page.

## 9. Design tokens (styles.css, `:root`)

`--bg #071016` · `--surface #0B141B` · `--lime #B5FF4D` · `--text #F4F8FA` · `--muted #9CB0BE`.
Type: Bricolage Grotesque (display, narrow and heavy) + Hanken Grotesk (body). Lime is used only for primary actions, selected states and small highlights.

## 10. Accessibility and performance notes

* Skip link, landmarks, one `h1`, ordered headings, labelled icon buttons, visible lime focus rings.
* Filters are real buttons with `aria-pressed`; changes are announced to screen readers.
* The project popup is a native `<dialog>`: Escape and the close button work, focus is trapped while open, and focus returns to the card that opened it.
* `prefers-reduced-motion` turns off the hero sequence and all transitions.
* No video autoplays with sound. Below-the-fold images are lazy-loaded; project players are created only when opened.
* Dynamic text is inserted with `textContent` (never as HTML); only `https://` outside links are accepted.

## 11. Credits

Fonts: Bricolage Grotesque and Hanken Grotesk, SIL Open Font License 1.1 (licence files in the project folder).
