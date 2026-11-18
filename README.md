# Samir Shrestha — Portfolio

Single-page personal portfolio for Samir Shrestha, Support Engineer. Built with React, Tailwind CSS and Framer Motion.

## Running it

```bash
npm install
npm run dev      # development server
npm run build    # production build into dist/
npm run preview  # serve the production build
```

## Structure

| Path | What it holds |
| --- | --- |
| `src/data/profile.js` | All content — profile facts, skills, services, experience, projects, testimonials. Edit copy here, not in the components. |
| `src/components/` | One component per section, plus shared primitives. |
| `index.html` | Meta title, meta description, Open Graph / Twitter tags and Person structured data. |

### Components

- `Navbar` — sticky transparent navbar that gains a blurred background on scroll, with a mobile hamburger menu
- `ScrollProgress` — gradient scroll progress indicator
- `CursorGlow` — pointer glow, desktop only (skipped on touch, small screens and reduced motion)
- `Hero`, `About`, `Skills`, `Services`, `Experience`, `Projects`, `Testimonials`, `Contact`, `Footer`
- `Reveal`, `SectionHeading`, `Counter`, `Icon` — shared primitives

## Placeholders to replace

1. **Profile photo** — the placeholder block in `src/components/Hero.jsx`. Drop an image into `public/` and swap the block for an `<img>`.
2. **Projects** — all three cards in `projects` (`src/data/profile.js`) are placeholders.
3. **Testimonials** — all three cards in `testimonials` are placeholders; replace them only with real feedback you have permission to publish.
4. **Open Graph image** — `public/og-image.png` (1200×630) is generated artwork, rendered from `public/og-image.svg`. Replace both if you want a photo-based preview card.

## Contact form

Validation is front-end only (required fields, email format, minimum message length). No message is sent anywhere — wire it to a form service or backend endpoint in `src/components/Contact.jsx` when you have one.

## Accessibility and motion

Every animation is disabled under `prefers-reduced-motion`: scroll reveals render in place, counters show their final value, the testimonial slider stops auto-advancing, and the cursor glow does not mount.

## Deployment

The site deploys to GitHub Pages via `.github/workflows/deploy.yml` on every push to `main`: it runs `npm ci`, `npm run build`, and publishes `dist/`.

- The custom domain lives in `public/CNAME` (`shresthasamir.name.np`), which Vite copies into `dist/` on each build. **Do not delete it** — without it GitHub Pages drops the custom domain.
- The repository's Pages source must be **GitHub Actions** (Settings → Pages → Build and deployment → Source). The workflow tries to set this automatically via `actions/configure-pages` with `enablement: true`.
