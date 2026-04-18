# Han Solutions

An editorial, design-led website for **HAN Solutions LLC** — a forward-thinking technology partner based in Edison, NJ.

## Stack

- **Next.js 14** — App Router, React 18, TypeScript
- **TailwindCSS** — custom editorial theme (cream + navy ink + gold accent)
- **Framer Motion** — word-by-word hero reveals, scroll-triggered staggers, magnetic buttons
- **Lenis** — buttery-smooth scrolling
- **Lucide** — line icons
- **Nodemailer** — SMTP for contact / apply / appointment forms
- **Fraunces** (display serif) + **Inter** (body) + **JetBrains Mono** (labels) via `next/font/google`

## Design

Editorial-luxe direction inspired by premium magazines and boutique agencies. Warm cream background, deep navy ink with a gold accent (matching the HAN brand). Large serif display type, italicized emphasis, mono-font eyebrows, asymmetric layouts, quiet micro-interactions, and a persistent ambient grain texture.

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment variables

Copy `.env.local.example` to `.env.local` and fill in:

```
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
SMTP_FROM=no-reply@hansolutions.com
CONTACT_TO=info@hansolutions.com
```

Without SMTP configured, form submissions succeed in dev mode (no actual email sent — check the server console).

## Pages

- `/` — Home
- `/about` — Philosophy, principles, stats, testimonials
- `/services` — Editorial services index
- `/services/[slug]` — Service detail (11 services)
- `/it-staffing` — Staffing offerings
- `/careers` — Open positions list
- `/careers/[slug]` — Job detail
- `/apply` — Job application form
- `/book-appointment` — Calendar & time-slot booking
- `/contact` — Contact form + studio info
- `/privacy-policy`, `/terms-of-service` — Legal

## Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Lint
```

## License

Copyright © HAN Solutions LLC. All rights reserved.
