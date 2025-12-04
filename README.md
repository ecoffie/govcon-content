# GovCon Giants - Marketing Content & Framer CMS

Content repository for [govcongiants.org](https://govcongiants.org) - The #1 Community for Federal Contractors.

## 📁 Repository Structure

```
├── framer-content/           # JSON content for Framer CMS
│   ├── cage-code-pages.json  # All CAGE Code pages
│   └── [page-slug].json      # Individual page content
├── scripts/
│   └── sync-to-framer.js     # Content sync script
├── strategy-notes.md         # Marketing strategy
├── cagecode-programmatic-prd.md  # CAGE Code PRD
└── FRAMER-SETUP.md           # Framer integration guide
```

## 🚀 Quick Start

### Fetch Content in Framer

```javascript
// In your Framer project
const response = await fetch(
  'https://[username].github.io/govcon-content/framer-content/cage-code-pages.json'
);
const content = await response.json();
```

### Update Content

1. Edit `scripts/sync-to-framer.js`
2. Run `node scripts/sync-to-framer.js`
3. Commit and push changes
4. GitHub Pages auto-deploys

## 📄 Pages Included

| Page | Target Keyword | Difficulty |
|------|---------------|------------|
| CAGE Code Main Hub | cage code | 8 |
| CAGE Code Lookup | cage code lookup | 10-15 |
| What is a CAGE Code | what is a cage code | 5-10 |
| How to Get CAGE Code | how to get cage code | 10-15 |
| CAGE Code Requirements | cage code requirements | 10-15 |
| CAGE Code vs DUNS | cage code vs duns | 10-15 |

## 📊 SEO Targets

- **Primary keyword:** cage code (9,900 searches/mo, difficulty 8)
- **Target traffic:** 5,000-7,000 monthly visitors by Month 3
- **Conversion goal:** 50+ email captures/month

## 🔗 Related

- [GovCon Giants](https://govcongiants.org)
- [OpnGovIQ](https://opngoviq.com)
- [Federal Help Center](https://govcongiants.org/fhc)

---

*Part of the GovCon Giants vibe marketing strategy*

