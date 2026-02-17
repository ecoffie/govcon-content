# CLAUDE.md - Project Context for Claude Code

## Project Overview

**GovCon Procurement Pages** - SEO content system for [GovCon Giants](https://govcongiants.org), the #1 community for federal contractors.

**GitHub Repo:** https://github.com/ecoffie/govcon-content

## Quick Commands

```bash
# Run dev server
npm run dev

# Build for production
npm run build

# Push to GitHub
git add . && git commit -m "message" && git push origin main
```

## Project Structure

```
govcon-procurement-pages/
├── app/                    # Next.js app router pages
├── components/             # React components
├── lib/                    # Utilities and data
├── public/                 # Static assets (contractor-database.html)
├── framer-content/         # JSON content for Framer CMS
├── resources-site/         # CAGE Code pages (Next.js)
├── scripts/                # Sync scripts
└── strategy docs:
    ├── keyword-research.md         # Full keyword strategy
    ├── strategy-notes.md           # DataForSEO validation & priorities
    ├── cagecode-programmatic-prd.md
    └── framer-cms-implementation-guide.md
```

## SEO Strategy Summary

### Priority 1: CAGE Code (Quick Win)
- **Volume:** 9,900/month
- **Difficulty:** 8 (very low!)
- **CPC:** $6.59
- **Target:** Rank #1-3, 10,000+ monthly visitors

CAGE Code pages built:
- `/cage-code` - Main hub
- `/what-is-a-cage-code`
- `/how-to-get-cage-code`
- `/cage-code-lookup`
- `/cage-code-requirements`
- `/cage-code-vs-duns-number`

### Priority 2: Government Procurement
- **Volume:** 135,000/month
- **Target:** 1,000-6,750 monthly visitors by Month 3

### Other High-Value Keywords
| Keyword | Volume | Difficulty |
|---------|--------|------------|
| government contracts | 18,100 | 65 |
| sam.gov registration | 5,400 | 47 |
| 8(a) certification | 1,900 | 52 |
| vosb certification | 1,300 | 20 |
| hubzone certification | 1,000 | 23 |

## Brand Colors

- **Primary Blue:** #0066ff
- **Accent Green:** #00fd9e
- **Light Blue BG:** #e8f1ff
- **Dark Charcoal:** #131517

## Key Files

| File | Purpose |
|------|---------|
| `keyword-research.md` | 50+ keyword opportunities with search intent analysis |
| `strategy-notes.md` | DataForSEO validated data, 30-day action plan |
| `public/contractor-database.html` | Searchable database of 3,502 federal contractors |
| `vercel.json` | Redirects (includes /funding partner redirect) |

## Recent Changes

### February 2026
- Updated contractor database to 3,502 entries ($430B contract data)
- Added /funding redirect to Encore Funding partner

### December 2025
- Initial CAGE Code pages created
- Keyword research completed via Perplexity Deep Research
- DataForSEO validation of search volumes
- Framer CMS content JSON files created

## Related Projects

- **GovCon Giants:** https://govcongiants.org
- **OpnGovIQ:** https://opngoviq.com (AI platform)
- **Federal Help Center:** https://govcongiants.org/fhc

## Session History Notes

- CAGE code identified as #1 quick-win keyword (difficulty 8, 9,900 searches)
- Strategy follows 4-phase implementation roadmap (see keyword-research.md)
- Contractor database is a key lead magnet tool
- Framer CMS integration via GitHub-hosted JSON files

---

*Last updated: February 17, 2026*
