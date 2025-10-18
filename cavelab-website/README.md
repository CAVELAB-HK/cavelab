# CAVELAB Website

Modern, minimalist website for CAVELAB Ltd - a Hong Kong-based healthcare technology startup.

## Tech Stack

- Next.js 15 with App Router
- TypeScript
- Tailwind CSS 4
- Framer Motion for animations
- Static site generation for optimal performance

## Design Philosophy

- Scandinavian minimalist aesthetic
- Charcoal grey color palette
- Inter font family
- Single-page scrolling experience with smooth navigation

## Development

```bash
cd cavelab-website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build

```bash
npm run build
```

This generates a static export in the `out` directory.

## Deployment

The site is configured for automatic deployment to www.cavelab.hk via GitHub Actions.

Push to the `main` branch to trigger deployment.

## Project Structure

```
cavelab-website/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main page composition
│   └── globals.css      # Global styles and theme
├── components/
│   ├── Navigation.tsx   # Sticky header with scroll-spy
│   ├── Hero.tsx         # Hero section
│   ├── Vision.tsx       # Vision & Mission
│   ├── Problem.tsx      # Problem statement
│   ├── Approach.tsx     # Technology approach
│   ├── Products.tsx     # Product showcase
│   ├── Roadmap.tsx      # Development roadmap
│   ├── About.tsx        # About the team
│   ├── Contact.tsx      # Contact information
│   └── Footer.tsx       # Site footer
└── public/
    └── favicon.svg      # Site icon
```

## Color Palette

- Background: #1E1E1E
- Charcoal: #2D2D2D
- Dark Grey: #4A4A4A
- Mid Grey: #707070
- Light Grey: #A0A0A0
- Foreground: #F5F5F5
- Accent Blue: #4A90E2

## Contact

Email: cavelabltd@outlook.com
Location: Hong Kong

