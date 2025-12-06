# Framer CMS Integration Setup

## Overview

This guide explains how to sync your local content to your Framer production site at govcongiants.org.

---

## Option A: JSON + Framer Code Override (Recommended)

### Step 1: Generate Content JSON

```bash
cd scripts
node sync-to-framer.js
```

This creates JSON files in `/framer-content/`:
- `cage-code-pages.json` - All pages
- Individual page files (`cage-code.json`, etc.)

### Step 2: Host Your JSON

**Option 1: GitHub Pages (Free)**
1. Push your project to GitHub
2. Enable GitHub Pages in repository settings
3. Your JSON will be available at: `https://yourusername.github.io/govcon_project/framer-content/cage-code-pages.json`

**Option 2: Vercel (Free)**
1. Connect your repo to Vercel
2. Deploy
3. Access JSON at your Vercel URL

**Option 3: Direct Upload**
Upload JSON files to your existing hosting

### Step 3: Fetch in Framer

In your Framer project, create a Code Override to fetch content:

```tsx
// In Framer: Assets > Code > New Override

import { useEffect, useState } from "react"

const CONTENT_URL = "https://your-host.com/framer-content/cage-code-pages.json"

export function withCMSContent(Component): ComponentType {
    return (props) => {
        const [content, setContent] = useState(null)
        
        useEffect(() => {
            fetch(CONTENT_URL)
                .then(res => res.json())
                .then(data => setContent(data))
                .catch(err => console.error(err))
        }, [])
        
        if (!content) return <Component {...props} />
        
        // Find the page content based on current path
        const page = content.items.find(p => 
            window.location.pathname.includes(p.slug)
        )
        
        return <Component {...props} pageContent={page} />
    }
}
```

### Step 4: Connect to Components

Apply the override to your page components to receive dynamic content.

---

## Option B: Direct CMS Entry (Simpler)

If you prefer manual control:

### Step 1: Run the Script

```bash
cd scripts
node sync-to-framer.js
```

### Step 2: Open Generated JSON

Look at `/framer-content/cage-code.json` for the main page content.

### Step 3: Copy to Framer CMS

1. Open Framer (framer.com)
2. Open your GovCon Giants project
3. Go to CMS (database icon)
4. Create "CAGE Code Pages" collection
5. Add a new item
6. Copy values from JSON to each field

### Field Mapping

| JSON Field | Framer CMS Field |
|------------|------------------|
| `title` | Title (Plain Text) |
| `slug` | Slug |
| `pageType` | Page Type (Single Option) |
| `subtitle` | Subtitle (Plain Text) |
| `metaTitle` | Meta Title (Plain Text) |
| `metaDescription` | Meta Description (Long Text) |
| `focusKeyword` | Focus Keyword (Plain Text) |
| `quickDefinition` | Quick Definition (Long Text) |
| `keyPoints[0]` | Key Point 1 (Plain Text) |
| `keyPoints[1]` | Key Point 2 (Plain Text) |
| `keyPoints[2]` | Key Point 3 (Plain Text) |
| `keyPoints[3]` | Key Point 4 (Plain Text) |
| `sections[0].heading` | Section 1 Heading (Plain Text) |
| `sections[0].content` | Section 1 Content (Rich Text) |
| ... | ... |

---

## Updating Content

### Workflow

1. **Edit content** in `scripts/sync-to-framer.js`
2. **Run** `node sync-to-framer.js` to regenerate JSON
3. **Deploy** updated JSON to your host
4. **Framer fetches** new content automatically (Option A)
   OR
   **Copy** updated content to Framer CMS (Option B)

### What to Edit

In `sync-to-framer.js`, find the `cageCodePages` array and edit:

```javascript
const cageCodePages = [
  {
    id: "cage-code-main",
    slug: "cage-code",
    title: "Your New Title Here",  // ← Edit this
    // ... more fields
  }
]
```

---

## File Structure

```
govcon_project/
├── scripts/
│   ├── sync-to-framer.js    ← Main sync script
│   └── package.json
├── framer-content/          ← Generated JSON (after running script)
│   ├── cage-code-pages.json
│   ├── cage-code.json
│   ├── cage-code-lookup.json
│   └── ...
├── FRAMER-SETUP.md          ← This file
└── ... other docs
```

---

## Framer CMS Collection Setup

### Create Collection: "CAGE Code Pages"

**Slug:** `cage-code-pages`

**Fields to Add:**

| Field Name | Type | Required |
|------------|------|----------|
| Title | Plain Text | Yes |
| Slug | Slug | Yes |
| Page Type | Single Option | Yes |
| Subtitle | Plain Text | Yes |
| Status | Single Option | Yes |
| Meta Title | Plain Text | Yes |
| Meta Description | Long Text | Yes |
| Focus Keyword | Plain Text | Yes |
| Primary CTA Text | Plain Text | Yes |
| Primary CTA URL | Plain Text | Yes |
| Quick Definition | Long Text | Yes |
| Key Point 1 | Plain Text | Yes |
| Key Point 2 | Plain Text | Yes |
| Key Point 3 | Plain Text | Yes |
| Key Point 4 | Plain Text | No |
| Section 1 Heading | Plain Text | Yes |
| Section 1 Content | Rich Text | Yes |
| Section 2 Heading | Plain Text | Yes |
| Section 2 Content | Rich Text | Yes |
| Section 3 Heading | Plain Text | No |
| Section 3 Content | Rich Text | No |
| Section 4 Heading | Plain Text | No |
| Section 4 Content | Rich Text | No |
| Section 5 Heading | Plain Text | No |
| Section 5 Content | Rich Text | No |
| Lead Magnet Title | Plain Text | No |
| Lead Magnet Description | Long Text | No |
| Show OpnGovIQ Callout | Toggle | No |
| Show FHC Callout | Toggle | No |

---

## Quick Start Commands

```bash
# Generate content JSON
cd scripts && node sync-to-framer.js

# View generated content
cat ../framer-content/cage-code-pages.json | head -50
```

---

## Need Help?

1. Check `framer-cms-implementation-guide.md` for detailed Framer setup
2. Check `framer-content-checklist.md` for manual copy workflow
3. Review generated JSON in `/framer-content/` folder

---

*Last Updated: December 4, 2025*

