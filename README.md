# Samir Shrestha — Portfolio

Single-page personal portfolio for Samir Shrestha, Support Engineer. Built with React, Tailwind CSS and Framer Motion.

## Running it

```bash
npm install
npm run dev      # development server
npm run build    # production build, written to the repository root
```

## Structure

The Vite project lives in `app/`. `npm run build` writes its output to the
repository root (`index.html`, `assets/`, and the files from `app/public/`),
because GitHub Pages serves this repository from the `main` branch root.
That build output is committed — see Deployment below.

| Path | What it holds |
| --- | --- |
| `app/src/data/profile.js` | All content — profile facts, skills, services, experience, projects, testimonials. Edit copy here, not in the components. |
| `app/src/components/` | One component per section, plus shared primitives. |
| `app/index.html` | Meta title, meta description, Open Graph / Twitter tags and Person structured data. **This is the source**; the `index.html` at the root is generated. |
| `index.html`, `assets/` | Generated build output. Do not edit by hand. |

### Components

- `Navbar` — sticky transparent navbar that gains a blurred background on scroll, with a mobile hamburger menu
- `ScrollProgress` — gradient scroll progress indicator
- `CursorGlow` — pointer glow, desktop only (skipped on touch, small screens and reduced motion)
- `Hero`, `About`, `Skills`, `Services`, `Experience`, `Projects`, `Testimonials`, `Contact`, `Footer`
- `Reveal`, `SectionHeading`, `Counter`, `Icon` — shared primitives

## Placeholders to replace

1. **Profile photo** — the placeholder block in `app/src/components/Hero.jsx`. Drop an image into `app/public/` and swap the block for an `<img>`.
2. **Projects** — all three cards in `projects` (`app/src/data/profile.js`) are placeholders.
3. **Testimonials** — all three cards in `testimonials` are placeholders; replace them only with real feedback you have permission to publish.
4. **Open Graph image** — `app/public/og-image.png` (1200×630) is generated artwork, rendered from `app/public/og-image.svg`. Replace both if you want a photo-based preview card.

## Contact form

Validation is front-end only (required fields, email format, minimum message length). No message is sent anywhere — wire it to a form service or backend endpoint in `app/src/components/Contact.jsx` when you have one.

## Accessibility and motion

Every animation is disabled under `prefers-reduced-motion`: scroll reveals render in place, counters show their final value, the testimonial slider stops auto-advancing, and the cursor glow does not mount.

## Deployment

GitHub Pages serves this repository from **main / root** (Settings → Pages → Deploy from a branch). The build output is therefore committed to the repository root, and the deploy is simply the push.

**To publish a change:**

```bash
npm run build
git add -A
git commit -m "..."
git push
```

The site updates within a minute or so of the push.

- Forgetting `npm run build` means the push changes the source but not the live site. `.github/workflows/build-check.yml` catches this: it rebuilds on every push and fails if the committed output is stale.
- The custom domain is `shresthasamir.name.np`. It lives in **two** places that must stay in sync: the root `CNAME` file (which GitHub maintains) and `app/public/CNAME` (which the build copies to the root). **Do not delete either** — without them Pages drops the custom domain.
- If you ever switch Pages to the "GitHub Actions" source, the committed root build is ignored and you will need a deploy workflow instead. Changing this setting also resets the custom domain, so re-enter it afterwards.
