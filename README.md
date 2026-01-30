# Learning By Design – Landing Page

Landing site for **Learning By Design** (LXD): AI-native GTM, product, and education consulting.

## Pages

- **`index.html`** – Main landing page: hero, personas, who I work with, services (5 offers), why LXD, results, how engagements work, FAQ, contact.
- **`revenue-os.html`** – Revenue OS.ai product page: problem, what it is, what’s included, outcomes, fit, sprint phases, about David, apply CTA.

## Design

- **Colors:** black, white, ivory (#fffff0), copper (#b87333), mint (#1bbe90), British racing green (#143b22), bistro brown (#3b2214).
- **Typography:** Lora (serif) for body, DM Sans (sans) for headings and UI.
- **Logo:** LXD mark (stylized X from two V shapes) in `assets/logo-lxd.svg`.

## Run locally

Open `index.html` in a browser, or use a simple static server:

```bash
npx serve .
# or
python3 -m http.server 8000
```

Then visit `http://localhost:3000` (or 8000).

## Customize

- **Contact / booking:** Update CTA links (e.g. `href="https://calendly.com/..."`) in `index.html` and `revenue-os.html`.
- **Testimonials:** Replace placeholder quotes in the “Why Learning By Design” section with real client quotes.
- **Articles / Resources:** Replace the placeholder section with links or a blog when ready.

## Structure

```
├── index.html          # Main landing
├── revenue-os.html      # Revenue OS.ai page
├── css/
│   └── styles.css      # Design system + component styles
├── js/
│   └── main.js         # Mobile nav toggle
├── assets/
│   └── logo-lxd.svg    # LXD logo
└── README.md
```
