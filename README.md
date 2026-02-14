# Jim Jin — Developer Portfolio

A clean, recruiter-friendly portfolio built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4**.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Where to Edit Content

All project data lives in a single file:

```
src/data/projects.ts
```

Each project in the `projects` array has:

| Field       | Type                                      | Description                          |
| ----------- | ----------------------------------------- | ------------------------------------ |
| `id`        | `string`                                  | Unique slug                          |
| `title`     | `string`                                  | Project name                         |
| `summary`   | `string`                                  | One-line description                 |
| `bullets`   | `string[]`                                | 3 achievement bullets                |
| `techStack` | `string[]`                                | Tech chips shown on the card         |
| `links`     | `{ label: string; url: string }[]`        | Live site / GitHub / etc.            |
| `tags`      | `string[]`                                | Searchable tags                      |
| `image`     | `string` (optional)                       | Path to screenshot                   |
| `category`  | `"opensource" \| "freelance" \| "project"` | Controls which section it appears in |

Site-wide info (name, email, GitHub, LinkedIn, resume URL) is in the `siteConfig` object in the same file.

## Adding Screenshots

1. Drop images into `public/images/` (e.g. `public/images/hublyst.png`).
2. Set the `image` field on the project: `image: "/images/hublyst.png"`.
3. The card will render the image instead of the placeholder.

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Tailwind imports + global styles
│   ├── layout.tsx         # Root layout (Nav + Footer)
│   └── page.tsx           # Home page (assembles all sections)
├── components/
│   ├── Nav.tsx            # Fixed top navigation (mobile + desktop)
│   ├── Hero.tsx           # Hero section with CTA buttons
│   ├── WorkSection.tsx    # Featured Work (all projects grid)
│   ├── OpenSourceSection.tsx  # Lichess + Stockfish placeholder
│   ├── FreelanceSection.tsx   # Hublyst case study
│   ├── ProjectsSection.tsx    # Personal projects
│   ├── AboutSection.tsx       # Bio + skills chips
│   ├── ContactSection.tsx     # Email / GitHub / LinkedIn
│   ├── ProjectCard.tsx        # Reusable project card
│   ├── SectionHeading.tsx     # Reusable section header
│   └── Footer.tsx             # Site footer
└── data/
    └── projects.ts        # ← All content lives here
```

## Deploy

```bash
npm run build   # produces .next/
npm start       # production server
```

Or deploy to Vercel: connect the repo and it auto-detects Next.js.
