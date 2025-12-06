# GovCon Giants - Content Repository

Marketing content and programmatic page systems for [govcongiants.org](https://govcongiants.org) - The #1 Community for Federal Contractors.

## 📁 Repository Structure

```
├── framer-content/              # JSON content for Framer CMS
│   ├── cage-code-pages.json     # CAGE Code pages
│   └── [page-slug].json         # Individual page content
├── procurement-pages/           # Next.js Procurement Pages (this project)
│   ├── app/                     # Next.js app directory
│   ├── components/              # React components
│   └── lib/                     # Utilities and data
├── scripts/
│   └── sync-to-framer.js        # Content sync script
└── strategy-notes.md            # Marketing strategy
```

---

## 🚀 Procurement Pages (Next.js App)

A Next.js-based programmatic content generation system for SEO-optimized government procurement pages. Built to capture 135,000+ monthly searches for government procurement keywords.

### Key Features

- **Programmatic Page Generation**: Dynamic routing for location, industry, and certification variations
- **SEO-Optimized**: Complete meta tags, schema markup, sitemap, robots.txt
- **Performance-First**: Image optimization, lazy loading, Core Web Vitals optimization
- **Conversion-Focused**: Strategic CTAs, lead magnets, community engagement
- **GovCon Giants Brand**: Official color palette and design system
- **Type-Safe**: Built with TypeScript

### Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with GovCon Giants brand colors
- **SEO**: Built-in sitemap, robots.txt, schema markup

### Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Page Routes

- `/` - Homepage (redirects to /procurement)
- `/procurement` - Main government procurement guide (3,000-5,000 words)
- `/procurement/[state]` - Location-based variations (California, Texas, Florida, etc.)
- `/procurement/[industry]` - Industry-based variations (Technology, Construction, etc.)

### Brand Colors

- **Primary Blue**: `#0066ff`
- **Accent Green**: `#00fd9e`
- **Light Blue Background**: `#e8f1ff`
- **Dark Charcoal**: `#131517`

### SEO Targets

- **Primary keyword**: government procurement (135,000 searches/mo, LOW competition)
- **Target traffic**: 1,000-6,750 monthly organic visitors by Month 3
- **Conversion goal**: 5% conversion rate

---

## 📄 CAGE Code Pages (Framer CMS)

Content repository for CAGE Code programmatic pages.

### Fetch Content in Framer

```javascript
const response = await fetch(
  'https://ecoffie.github.io/govcon-content/framer-content/cage-code-pages.json'
);
const content = await response.json();
```

### Pages Included

| Page | Target Keyword | Difficulty |
|------|---------------|------------|
| CAGE Code Main Hub | cage code | 8 |
| CAGE Code Lookup | cage code lookup | 10-15 |
| What is a CAGE Code | what is a cage code | 5-10 |
| How to Get CAGE Code | how to get cage code | 10-15 |

---

## 🔗 Related

- [GovCon Giants](https://govcongiants.org)
- [OpnGovIQ](https://opngoviq.com)
- [Federal Help Center](https://govcongiants.org/fhc)

---

## 📊 Combined SEO Strategy

This repository contains two major SEO initiatives:
1. **Procurement Pages** (135K monthly searches)
2. **CAGE Code Pages** (9.9K monthly searches)

Combined target: **10,000+ monthly organic visitors** by Month 6

---

**Last Updated**: December 6, 2025
**Version**: 1.0.0

*Part of the GovCon Giants marketing strategy*
