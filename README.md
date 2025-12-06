# GovCon Giants - Programmatic Procurement Pages

A Next.js-based programmatic content generation system for SEO-optimized government procurement pages. Built to capture 135,000+ monthly searches for government procurement keywords.

## Project Overview

This project implements the **PRD for Programmatic Government Procurement Content Pages**, targeting high-volume procurement keywords with low competition.

### Key Features

- **Programmatic Page Generation**: Dynamic routing for location, industry, and certification variations
- **SEO-Optimized**: Complete meta tags, schema markup, sitemap, robots.txt
- **Performance-First**: Image optimization, lazy loading, Core Web Vitals optimization
- **Conversion-Focused**: Strategic CTAs, lead magnets, community engagement
- **Mobile-Responsive**: Fully responsive design with Tailwind CSS
- **Type-Safe**: Built with TypeScript

## Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **SEO**: Built-in sitemap, robots.txt, schema markup

## Getting Started

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Page Routes

### Base Routes
- `/` - Homepage
- `/procurement` - Main government procurement guide (3,000-5,000 words)

### Programmatic Routes

**Location-Based:**
- `/procurement/california`
- `/procurement/texas`
- `/procurement/florida`

**Industry-Based:**
- `/procurement/technology`
- `/procurement/construction`
- `/procurement/consulting`

## Project Structure

```
app/
├── layout.tsx              # Root layout with SEO metadata
├── procurement/
│   ├── page.tsx           # Main procurement page
│   └── [slug]/page.tsx    # Dynamic programmatic pages
├── sitemap.ts             # Dynamic sitemap
└── robots.ts              # Robots.txt

lib/data/
└── procurement-content.ts  # Content data structure

types/
└── content.ts             # TypeScript definitions
```

## Adding New Pages

### Location-Based

Edit `app/procurement/[slug]/page.tsx`:

```typescript
'government-procurement-new-york': generateLocationVariation('New York', 'NY'),
```

### Industry-Based

```typescript
'government-procurement-healthcare': generateIndustryVariation('Healthcare', ['621111']),
```

## SEO Features

- **Meta Tags**: Title, description, keywords, Open Graph, Twitter Cards
- **Schema Markup**: Article, FAQPage, Organization
- **Sitemap**: Auto-generated at `/sitemap.xml`
- **Robots.txt**: Configured at `/robots.txt`

## Analytics Setup

Replace `G-XXXXXXXXXX` in `app/layout.tsx` with your Google Analytics 4 ID.

## Deployment

### Deploy to Vercel (Recommended)

```bash
git init
git add .
git commit -m "Initial commit"
git push
```

Then import your repository at [vercel.com](https://vercel.com).

### Update Domain

After deployment, update `metadataBase` in `app/layout.tsx` with your production URL.

## Success Metrics

### Traffic Goals
- Month 3: 1,000+ monthly organic visitors
- Month 6: Top 10 rankings for primary keywords

### Engagement Goals
- Average session: 3+ minutes
- Bounce rate: < 40%
- Pages per session: 2+

### Conversion Goals
- Email signups: 5% conversion rate
- Community joins: 2% conversion rate

## Performance Targets

- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1
- **Lighthouse Score**: 90+

## License

Proprietary - GovCon Giants © 2025

---

**Last Updated**: December 6, 2025
**Version**: 1.0.0
