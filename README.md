# yakships.dev

Portfolio site for Steve Sikoryak — Freelance Shopify Developer & Full-Stack Builder.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** CSS Modules + CSS Variables
- **Fonts:** Sora (display) + Outfit (body) via Google Fonts
- **Deployment:** Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel auto-detects Next.js — click Deploy
4. Add your custom domain (yakships.dev) in Project Settings → Domains
5. Update DNS at your registrar with the records Vercel provides

## Project Structure

```
yakships/
├── app/
│   ├── layout.js          # Root layout with metadata & SEO
│   └── page.js            # Home page composing all sections
├── components/
│   ├── ui.js              # Shared components (FadeIn, Counter)
│   ├── Navbar.js          # Fixed navigation
│   ├── Hero.js            # Hero section with stats
│   ├── Marquee.js         # Scrolling tech ticker
│   ├── Projects.js        # Project showcase cards
│   ├── Tools.js           # Tech stack grid
│   ├── Testimonials.js    # Client testimonials
│   ├── FAQ.js             # Accordion FAQ
│   ├── Footer.js          # Contact CTA + footer
│   └── *.module.css       # Component styles
├── styles/
│   └── globals.css        # Global styles, variables, animations
├── public/                # Static assets (add your logo here)
├── next.config.js
├── package.json
└── README.md
```

## Customization

- **Content:** Edit the data arrays at the top of each component file (Projects.js, Tools.js, etc.)
- **Colors:** Update CSS variables in `styles/globals.css`
- **Email:** Update the mailto link in `components/Footer.js`
- **Metadata/SEO:** Update `app/layout.js`
- **Logo:** Add your SVG to `public/` and import it in `Navbar.js`

## TODO

- [ ] Add project detail pages with screenshots
- [ ] Add a proper yak logo
- [ ] Set up contact form (Formspree / Resend)
- [ ] Add blog section
- [ ] Set up analytics (Vercel Analytics / Plausible)
- [ ] Replace placeholder testimonials
