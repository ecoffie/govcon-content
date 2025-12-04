# Framer Code Components

These components fetch content from your GitHub-hosted JSON and display it in Framer.

## Setup Instructions

### Step 1: Open Framer

1. Go to [framer.com](https://framer.com)
2. Open your GovCon Giants project

### Step 2: Add Code Components

1. In the left sidebar, click **Assets**
2. Click the **Code** tab
3. Click **+** to create a new file
4. Name it `CageCodeContent.tsx`
5. Copy the contents of `CageCodeContent.tsx` from this folder
6. Paste into Framer and save

### Step 3: Use Components

After adding the code, you'll see new components in your Assets:

| Component | Use For |
|-----------|---------|
| `CageCodePage` | Full page with all sections |
| `HeroSection` | Just the hero banner |
| `QuickAnswerBox` | Featured snippet box |
| `ContentSection` | Individual content section |
| `LeadMagnetBox` | Email capture form |
| `OpnGovIQCallout` | Product callout |
| `FHCCallout` | Community callout |

### Step 4: Add to Your Page

1. In Framer, create a new page or open existing
2. From Assets > Code, drag `CageCodePage` onto your canvas
3. In the properties panel (right side), select which page to display
4. The component will fetch and display your content!

## Component Properties

### CageCodePage
- **slug**: Which page to display
  - `cage-code` - Main Hub
  - `cage-code-lookup` - Lookup Tool
  - `what-is-a-cage-code` - Definition
  - `how-to-get-cage-code` - How To
  - `cage-code-requirements` - Requirements
  - `cage-code-vs-duns-number` - Comparison

### HeroSection, QuickAnswerBox, ContentSection, LeadMagnetBox
- **slug**: Page slug (same options as above)

### ContentSection
- **sectionIndex**: Which section (0, 1, 2, 3, 4)

## Creating Individual Pages

For SEO, you'll want separate Framer pages for each slug. Here's how:

### Page 1: /resources/cage-code
1. Create new page in Framer
2. Set path to `/resources/cage-code`
3. Add `CageCodePage` component
4. Set slug to `cage-code`

### Page 2: /resources/cage-code-lookup
1. Create new page
2. Set path to `/resources/cage-code-lookup`
3. Add `CageCodePage` component
4. Set slug to `cage-code-lookup`

Repeat for all 6 pages.

## Alternative: Use Collection Pages

For truly dynamic pages:

1. Create CMS Collection in Framer called "CAGE Code Pages"
2. Add a slug field
3. Create Collection Page
4. Use the slug from the CMS to fetch the right content

## Content Source

Your content is fetched from:
```
https://ecoffie.github.io/govcon-content/framer-content/cage-code-pages.json
```

## Updating Content

1. Edit `scripts/sync-to-framer.js` in your local project
2. Run `node sync-to-framer.js`
3. Commit and push to GitHub
4. Content updates automatically (no Framer changes needed!)

## Customizing Styles

The components use inline styles. To customize:

1. Open `CageCodeContent.tsx` in Framer
2. Find the component you want to style
3. Edit the `style` objects
4. Save

Or override with Framer's styling:
1. Select the component on canvas
2. Use the properties panel to adjust
3. Framer styles override component styles

