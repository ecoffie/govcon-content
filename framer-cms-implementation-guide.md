# CAGE Code Pages - Framer CMS Implementation Guide
**Project:** GovCon Giants CAGE Code Programmatic Pages
**Platform:** Framer CMS
**Target:** govcongiants.org/resources/cage-code
**Timeline:** 2-3 weeks to launch

---

## Overview

This guide will walk you through building your CAGE Code programmatic pages using Framer's built-in CMS. By the end, you'll have:

✅ A reusable page template for CAGE Code content
✅ 6-9 variation pages (main hub, lookup, how-to, etc.)
✅ Full SEO optimization with schema markup
✅ Lead capture forms and conversion elements
✅ Live on govcongiants.org in production

---

## Phase 1: Framer CMS Setup (30 minutes)

### Step 1: Access Your Framer Project

1. Open your Framer project at framer.com
2. Navigate to your GovCon Giants website project
3. Look for the **CMS** icon in the left sidebar (database icon)

### Step 2: Create New CMS Collection

1. Click **"+ New Collection"** in the CMS panel
2. Name it: **"CAGE Code Pages"**
3. Collection slug: `cage-code-pages` (this will be used in URLs)

### Step 3: Define Collection Fields

Add these fields to your collection:

#### Basic Information Fields

| Field Name | Field Type | Required | Notes |
|------------|-----------|----------|-------|
| **Title** | Plain Text | Yes | H1 heading (e.g., "CAGE Code Complete Guide") |
| **Slug** | Slug | Yes | URL path (auto-generated from title) |
| **Page Type** | Single Option | Yes | Options: Hub, Lookup, How-To, Definition, Checklist |
| **Subtitle** | Plain Text | Yes | Hero subtitle (45-60 chars) |
| **Status** | Single Option | Yes | Options: Draft, Published |

#### SEO Fields

| Field Name | Field Type | Required | Notes |
|------------|-----------|----------|-------|
| **Meta Title** | Plain Text | Yes | 50-60 characters |
| **Meta Description** | Long Text | Yes | 150-160 characters |
| **Focus Keyword** | Plain Text | Yes | Primary keyword for this page |
| **OG Image** | Image | No | Social sharing image (1200x630px) |

#### Hero Section Fields

| Field Name | Field Type | Required | Notes |
|------------|-----------|----------|-------|
| **Hero Image** | Image | Yes | Background image (1920x600px) |
| **Primary CTA Text** | Plain Text | Yes | Button text (e.g., "Download Free Guide") |
| **Primary CTA URL** | Plain Text | Yes | Link destination |

#### Quick Answer Box

| Field Name | Field Type | Required | Notes |
|------------|-----------|----------|-------|
| **Quick Definition** | Long Text | Yes | 40-60 words concise answer |
| **Key Point 1** | Plain Text | Yes | Bullet point |
| **Key Point 2** | Plain Text | Yes | Bullet point |
| **Key Point 3** | Plain Text | Yes | Bullet point |
| **Key Point 4** | Plain Text | No | Bullet point (optional) |

#### Main Content

| Field Name | Field Type | Required | Notes |
|------------|-----------|----------|-------|
| **Section 1 Heading** | Plain Text | Yes | H2 heading |
| **Section 1 Content** | Rich Text | Yes | Main content with formatting |
| **Section 2 Heading** | Plain Text | Yes | H2 heading |
| **Section 2 Content** | Rich Text | Yes | Main content |
| **Section 3 Heading** | Plain Text | Yes | H2 heading |
| **Section 3 Content** | Rich Text | Yes | Main content |
| **Section 4 Heading** | Plain Text | No | H2 heading |
| **Section 4 Content** | Rich Text | No | Main content |
| **Section 5 Heading** | Plain Text | No | H2 heading |
| **Section 5 Content** | Rich Text | No | Main content |

#### Conversion Elements

| Field Name | Field Type | Required | Notes |
|------------|-----------|----------|-------|
| **Lead Magnet Title** | Plain Text | No | E.g., "Download CAGE Code Checklist" |
| **Lead Magnet Description** | Long Text | No | Value proposition |
| **Lead Magnet PDF URL** | Plain Text | No | Link to downloadable PDF |
| **Show OpnGovIQ Callout** | Toggle | No | Show product pitch? |
| **Show FHC Callout** | Toggle | No | Show community pitch? |

#### FAQ Section

| Field Name | Field Type | Required | Notes |
|------------|-----------|----------|-------|
| **FAQ Items** | Multi-Reference | No | Link to separate FAQ collection |

**Note:** You may need to create a separate "FAQ" collection with Question/Answer fields and reference it here.

---

## Phase 2: Design the Page Template (2-3 hours)

### Step 1: Create Collection Page

1. In Framer, go to **Pages** panel
2. Click **"+ New Page"**
3. Choose **"Collection Page"**
4. Select your "CAGE Code Pages" collection
5. Name the page: `[slug]` (this creates dynamic URLs)

### Step 2: Design Hero Section

**Layout:**
```
┌──────────────────────────────────────┐
│  [Hero Background Image with Overlay]│
│                                       │
│  H1: {Title}                         │
│  Subtitle: {Subtitle}                │
│  [Primary CTA Button]                │
│  Trust Badges: Members | Contracts   │
└──────────────────────────────────────┘
```

**Framer Instructions:**
1. Add a **Section** component (full width)
2. Set background to CMS field: `{Hero Image}`
3. Add dark green overlay (opacity 0.85)
4. Add **Text** component for H1
   - Connect to CMS: `{Title}`
   - Font size: 48px (desktop), 32px (mobile)
   - Color: White
   - Font weight: Bold
5. Add **Text** component for Subtitle
   - Connect to CMS: `{Subtitle}`
   - Font size: 20px (desktop), 16px (mobile)
   - Color: White
6. Add **Button** component
   - Text: Connect to CMS: `{Primary CTA Text}`
   - Link: Connect to CMS: `{Primary CTA URL}`
   - Style: Dark green background, white text
   - Size: 180px wide, 50px tall
7. Add trust indicators (static):
   - "5,000+ Members | $1B+ in Contracts Won"

### Step 3: Quick Answer Box

**Layout:**
```
┌──────────────────────────────────────┐
│  💡 Quick Answer                     │
│                                       │
│  {Quick Definition}                  │
│                                       │
│  • {Key Point 1}                     │
│  • {Key Point 2}                     │
│  • {Key Point 3}                     │
│  • {Key Point 4}                     │
└──────────────────────────────────────┘
```

**Framer Instructions:**
1. Add a **Frame** component
2. Style:
   - Background: Light gray (#F5F5F5)
   - Border: 2px solid dark green
   - Border radius: 8px
   - Padding: 30px
   - Max width: 800px
   - Center aligned
3. Add icon (lightbulb or checkmark)
4. Add **Text** component for definition
   - Connect to CMS: `{Quick Definition}`
   - Font size: 18px
   - Line height: 1.6
5. Add **List** with 4 items
   - Connect each to CMS: `{Key Point 1}`, `{Key Point 2}`, etc.
   - Font size: 16px
   - Bullet style: Circle or checkmark

### Step 4: Table of Contents (Optional)

**Layout:**
```
┌──────────────────────────────┐
│  Table of Contents           │
│  ─────────────────────────   │
│  • {Section 1 Heading}       │
│  • {Section 2 Heading}       │
│  • {Section 3 Heading}       │
│  • {Section 4 Heading}       │
└──────────────────────────────┘
```

**Framer Instructions:**
1. Add **Frame** (sidebar or full-width)
2. Make sticky on scroll (Framer's sticky position)
3. Add links that scroll to each section
4. Style: Simple, clean design

### Step 5: Main Content Sections

**Layout (Repeat for each section):**
```
┌──────────────────────────────────────┐
│  H2: {Section X Heading}             │
│  ─────────────────────────────────   │
│                                       │
│  {Section X Content}                 │
│  [Rich text with formatting]         │
│                                       │
└──────────────────────────────────────┘
```

**Framer Instructions:**
1. Add **Text** component for H2
   - Connect to CMS: `{Section 1 Heading}`
   - Font size: 36px
   - Font weight: Bold
   - Margin: 40px top
2. Add **Rich Text** component
   - Connect to CMS: `{Section 1 Content}`
   - Font size: 18px
   - Line height: 1.7
   - Max width: 800px
3. Repeat for Sections 2, 3, 4, 5
4. Use conditional visibility:
   - Hide sections if heading is empty

### Step 6: Lead Magnet Box (After Section 2)

**Layout:**
```
┌──────────────────────────────────────┐
│  📥 {Lead Magnet Title}              │
│                                       │
│  {Lead Magnet Description}           │
│                                       │
│  [Email Input Field]                 │
│  [Download Button]                   │
└──────────────────────────────────────┘
```

**Framer Instructions:**
1. Add **Frame** component
2. Style:
   - Background: White
   - Border: 1px solid light gray
   - Box shadow: Subtle
   - Padding: 30px
   - Max width: 600px
3. Add **Text** for title
   - Connect to CMS: `{Lead Magnet Title}`
   - Font size: 24px
   - Font weight: Bold
4. Add **Text** for description
   - Connect to CMS: `{Lead Magnet Description}`
   - Font size: 16px
5. Add **Form** component (Framer Forms)
   - Email input field
   - Submit button: "Download Free Checklist"
   - Form action: Connect to your email marketing platform
6. Add conditional visibility:
   - Show only if `{Lead Magnet Title}` is not empty

### Step 7: Product Callouts (OpnGovIQ & FHC)

**OpnGovIQ Callout (After Section 4):**
```
┌──────────────────────────────────────┐
│  🚀 Track CAGE Code Status in        │
│     OpnGovIQ                         │
│                                       │
│  • Benefit 1                         │
│  • Benefit 2                         │
│  • Benefit 3                         │
│                                       │
│  [Start Free Trial Button]           │
└──────────────────────────────────────┘
```

**Framer Instructions:**
1. Add **Frame** component
2. Style:
   - Background: Light green (#E8F5E9)
   - Border-left: 4px solid dark green
   - Padding: 40px
3. Add product screenshot (300x200px)
4. Add heading: "Track CAGE Code Status in OpnGovIQ"
5. Add 3 benefit bullet points
6. Add CTA button: "Start Free Trial"
7. Add conditional visibility:
   - Connect to CMS: `{Show OpnGovIQ Callout}`

**FHC Callout (After Section 6):**
Similar layout but with:
- Title: "Get Expert Help with CAGE Code Questions"
- Community benefits
- CTA: "Join Federal Help Center"
- Conditional: `{Show FHC Callout}`

### Step 8: FAQ Section

**Layout:**
```
┌──────────────────────────────────────┐
│  Frequently Asked Questions          │
│  ─────────────────────────────────   │
│                                       │
│  ▼ Question 1                        │
│     Answer 1 (collapsed/expanded)    │
│                                       │
│  ▼ Question 2                        │
│     Answer 2                         │
└──────────────────────────────────────┘
```

**Framer Instructions:**
1. Add **Accordion** component (or manual with interactions)
2. Connect to FAQ collection if using Multi-Reference
3. Or manually add 10-15 static FAQs for MVP
4. Style: Clean, expandable accordions
5. Add FAQ schema markup (Framer SEO settings)

### Step 9: Related Content Grid

**Layout:**
```
┌───────────┬───────────┬───────────┐
│  Article 1│ Article 2 │ Article 3 │
│  [Image]  │ [Image]   │ [Image]   │
│  Title    │ Title     │ Title     │
│  Desc     │ Desc      │ Desc      │
└───────────┴───────────┴───────────┘
```

**Framer Instructions:**
1. Add **Grid** component (3 columns)
2. Add 4-6 article cards
3. Each card:
   - Thumbnail image (400x250px)
   - Title (H3)
   - Short description
   - Link to related page
4. Manually curate or use CMS references

### Step 10: Final CTA Section

**Layout:**
```
┌──────────────────────────────────────┐
│  Ready to Win Government Contracts?  │
│                                       │
│  [Start Free Trial] [Join FHC]       │
└──────────────────────────────────────┘
```

**Framer Instructions:**
1. Add **Section** with dark green background
2. Center-aligned content
3. Heading: "Ready to Win Government Contracts?"
4. Two CTA buttons side-by-side
5. Padding: 60px top/bottom

---

## Phase 3: Mobile Responsive Design (30 minutes)

### Framer Breakpoints

1. **Desktop (1024px+):**
   - 2-column layout (TOC sidebar + content)
   - Full-width hero (600px height)
   - Grid: 3 columns for related content

2. **Tablet (768px - 1023px):**
   - Single column layout
   - Hero: 500px height
   - Grid: 2 columns for related content

3. **Mobile (< 768px):**
   - Single column, full width
   - Hero: 400px height
   - Grid: 1 column (stacked cards)
   - Buttons: Full width
   - Font sizes: Reduce by 30-40%

**Framer Instructions:**
1. Click on each component
2. Adjust properties per breakpoint using Framer's responsive controls
3. Test on Preview mode for each device size

---

## Phase 4: SEO Setup (30 minutes)

### Step 1: Meta Tags

1. Select the Collection Page
2. Open **Page Settings** (⚙️ icon)
3. Set dynamic meta tags:
   - **Page Title:** `{Meta Title}`
   - **Meta Description:** `{Meta Description}`
   - **OG Image:** `{OG Image}`
   - **Twitter Card:** Summary Large Image

### Step 2: Canonical URL

Set canonical URL pattern:
```
https://govcongiants.org/resources/{slug}
```

### Step 3: Schema Markup

Add custom code to page `<head>`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "{Title}",
  "description": "{Meta Description}",
  "author": {
    "@type": "Person",
    "name": "Eric Coffie"
  },
  "publisher": {
    "@type": "Organization",
    "name": "GovCon Giants",
    "logo": {
      "@type": "ImageObject",
      "url": "https://govcongiants.org/logo.png"
    }
  },
  "datePublished": "{Created Date}",
  "dateModified": "{Updated Date}"
}
</script>
```

**Note:** Replace `{...}` with actual CMS field connections in Framer's Custom Code panel.

### Step 4: URL Structure

Ensure your collection page creates URLs like:
- `govcongiants.org/resources/{slug}`

Example URLs:
- `govcongiants.org/resources/cage-code`
- `govcongiants.org/resources/cage-code-lookup`
- `govcongiants.org/resources/what-is-a-cage-code`

---

## Phase 5: Create Content (2-3 hours per page)

### Entry 1: Main Hub Page

**CMS Entry Values:**

| Field | Value |
|-------|-------|
| **Title** | CAGE Code Complete Guide: Everything Federal Contractors Need to Know |
| **Slug** | cage-code |
| **Page Type** | Hub |
| **Subtitle** | Your complete resource for understanding, obtaining, and using your CAGE Code |
| **Status** | Published |
| **Meta Title** | CAGE Code Guide 2025: Complete Resource for Federal Contractors |
| **Meta Description** | Learn everything about CAGE Codes: what they are, how to get one, requirements, and how to use it for federal contracting. Free checklist included. |
| **Focus Keyword** | cage code |
| **Quick Definition** | A CAGE (Commercial and Government Entity) Code is a 5-character identifier assigned to suppliers doing business with the federal government. It's required for SAM.gov registration and bidding on federal contracts. |
| **Key Point 1** | Required for all federal contractors |
| **Key Point 2** | Issued by DLA (Defense Logistics Agency) |
| **Key Point 3** | Free to obtain through SAM.gov |
| **Key Point 4** | Valid as long as SAM.gov registration is active |
| **Section 1 Heading** | What is a CAGE Code? |
| **Section 1 Content** | [Write 200-300 words explaining CAGE Code in detail] |
| **Section 2 Heading** | CAGE Code Requirements |
| **Section 2 Content** | [Write 200-300 words about requirements] |
| **Section 3 Heading** | How to Get Your CAGE Code |
| **Section 3 Content** | [Write 300-400 words with step-by-step process] |
| **Section 4 Heading** | Using Your CAGE Code |
| **Section 4 Content** | [Write 200-300 words about use cases] |
| **Section 5 Heading** | Common CAGE Code Questions |
| **Section 5 Content** | [Write 200-300 words addressing common concerns] |
| **Lead Magnet Title** | Download: CAGE Code Application Checklist |
| **Lead Magnet Description** | Get our step-by-step checklist to ensure you have everything you need for a smooth CAGE Code application. Save time and avoid mistakes. |
| **Show OpnGovIQ Callout** | Yes |
| **Show FHC Callout** | Yes |

### Entry 2: CAGE Code Lookup

| Field | Value |
|-------|-------|
| **Title** | CAGE Code Lookup & Verification Tool - Free Search |
| **Slug** | cage-code-lookup |
| **Page Type** | Lookup |
| **Subtitle** | Search and verify CAGE Codes for any federal contractor |
| **Meta Title** | CAGE Code Lookup Tool - Free Search & Verification |
| **Meta Description** | Search for any company's CAGE Code. Free CAGE Code lookup and verification tool with detailed company information. |
| **Focus Keyword** | cage code lookup |
| (Continue with other sections...) |

### Entry 3: What is a CAGE Code

| Field | Value |
|-------|-------|
| **Title** | What is a CAGE Code? Definition, Purpose & Requirements |
| **Slug** | what-is-a-cage-code |
| **Page Type** | Definition |
| **Meta Title** | What is a CAGE Code? Complete Guide for Beginners 2025 |
| **Focus Keyword** | what is a cage code |
| (Continue with other sections...) |

### Entry 4: How to Get CAGE Code

| Field | Value |
|-------|-------|
| **Title** | How to Get a CAGE Code in 5 Simple Steps |
| **Slug** | how-to-get-cage-code |
| **Page Type** | How-To |
| **Meta Title** | How to Get a CAGE Code: 5 Easy Steps (2025 Guide) |
| **Focus Keyword** | how to get cage code |
| (Continue with other sections...) |

### Entry 5: CAGE Code Requirements

| Field | Value |
|-------|-------|
| **Title** | CAGE Code Requirements: Complete Checklist for 2025 |
| **Slug** | cage-code-requirements |
| **Page Type** | Checklist |
| **Meta Title** | CAGE Code Requirements: What You Need to Apply (2025) |
| **Focus Keyword** | cage code requirements |
| (Continue with other sections...) |

### Entry 6: CAGE Code vs DUNS

| Field | Value |
|-------|-------|
| **Title** | CAGE Code vs DUNS Number: Key Differences Explained |
| **Slug** | cage-code-vs-duns-number |
| **Page Type** | Definition |
| **Meta Title** | CAGE Code vs DUNS Number: What's the Difference? |
| **Focus Keyword** | cage code vs duns number |
| (Continue with other sections...) |

---

## Phase 6: Forms & Lead Capture (1 hour)

### Step 1: Set Up Framer Forms

1. Add **Form** component to lead magnet box
2. Configure form fields:
   - Email (required)
   - Name (optional)
3. Form submission settings:
   - Choose integration: Mailchimp, ConvertKit, or HubSpot
   - Or use Framer's native form handling

### Step 2: Connect Email Marketing

**Option A: ConvertKit Integration**
1. Go to Framer Settings → Integrations
2. Connect ConvertKit account
3. Select form → Choose ConvertKit form
4. Map email field

**Option B: Zapier Integration**
1. Use Framer Forms webhook
2. Connect to Zapier
3. Create Zap: Framer → Your CRM
4. Add tag: "CAGE Code Guide"

### Step 3: Lead Magnet PDF

1. Create CAGE Code Checklist PDF (use Canva or Figma)
2. Upload to Framer Assets or external hosting
3. Set up download flow:
   - User submits email → Gets PDF link via email
   - Or redirect to thank you page with PDF download

---

## Phase 7: Analytics & Tracking (30 minutes)

### Step 1: Google Analytics 4

1. Go to Framer Settings → Analytics
2. Add your GA4 Measurement ID
3. Enable enhanced measurement

### Step 2: Google Search Console

1. Verify your domain in GSC
2. Submit sitemap: `govcongiants.org/sitemap.xml`
3. Monitor indexing status

### Step 3: Event Tracking

Set up events to track:
- **Form submissions:** Lead magnet downloads
- **Button clicks:** CTA clicks (OpnGovIQ, FHC)
- **Scroll depth:** How far users read
- **Outbound links:** Clicks to SAM.gov, etc.

**Framer Instructions:**
1. Use Framer's built-in event tracking
2. Or add custom GA4 events via Custom Code:

```html
<script>
gtag('event', 'lead_magnet_download', {
  'event_category': 'Lead Generation',
  'event_label': 'CAGE Code Checklist'
});
</script>
```

---

## Phase 8: Testing & Launch (1-2 hours)

### Pre-Launch Checklist

**Content:**
- [ ] All 6+ pages have complete content
- [ ] No lorem ipsum placeholder text
- [ ] All images optimized (WebP format)
- [ ] All links work correctly
- [ ] No spelling/grammar errors

**Design:**
- [ ] Mobile responsive on iPhone, Android, iPad
- [ ] All CTAs visible and clickable
- [ ] Forms work on all devices
- [ ] Images load properly
- [ ] Spacing/alignment looks professional

**SEO:**
- [ ] Meta titles unique per page (50-60 chars)
- [ ] Meta descriptions unique (150-160 chars)
- [ ] All images have alt text
- [ ] Schema markup added
- [ ] URLs are clean (no weird characters)
- [ ] Canonical tags set

**Functionality:**
- [ ] Forms submit successfully
- [ ] Email confirmations sent
- [ ] CRM integration working
- [ ] Analytics tracking verified
- [ ] No console errors (check browser dev tools)

### Launch Steps

1. **Set all pages to "Published" status in CMS**
2. **Publish site in Framer**
3. **Test live URLs:**
   - govcongiants.org/resources/cage-code
   - govcongiants.org/resources/cage-code-lookup
   - etc.
4. **Submit to Google Search Console**
5. **Share on social media:**
   - LinkedIn post
   - Twitter/X post
   - Email to existing subscribers
6. **Monitor first 24 hours:**
   - Check analytics for traffic
   - Test forms are capturing leads
   - Fix any issues immediately

---

## Phase 9: Post-Launch Optimization (Ongoing)

### Week 1 After Launch

**Daily Tasks:**
- Check Google Search Console for indexing status
- Monitor keyword rankings (use free tool: Google Search Console)
- Check analytics: Traffic, bounce rate, time on page
- Review form submissions

**Actions:**
- Fix any broken links or errors
- Respond to user feedback
- Make minor content tweaks based on data

### Week 2-4 After Launch

**Weekly Tasks:**
- Track keyword rankings for "cage code" and variations
- Review heatmaps (add Hotjar if available)
- Analyze which pages get most traffic
- Test A/B variations of CTAs

**Optimization Actions:**
- Update content based on Google Search Console queries
- Add new FAQs based on user questions
- Improve underperforming pages
- Add more internal links

### Month 2-3 After Launch

**Goals:**
- Rank in top 10 for "cage code"
- 3,000+ monthly visitors
- 50+ email captures

**Actions:**
- Build backlinks (guest posts, partnerships)
- Create shareable infographic
- Expand to more variation pages
- Add video content (YouTube embeds)

---

## Content Writing Guidelines

When writing content for each page, follow these rules:

### Tone & Voice
- **Professional but approachable:** Not stuffy or overly formal
- **Clear and concise:** Avoid government jargon
- **Educational, not salesy:** Help first, sell second
- **Empowering:** "You can do this" attitude

### Structure
- **Short paragraphs:** 2-4 sentences max
- **Use bullet points:** For lists and key points
- **Subheadings:** Every 200-300 words
- **Bold important terms:** But don't overdo it

### SEO Best Practices
- **Primary keyword in:**
  - H1 title
  - First paragraph (first 100 words)
  - One H2 subheading
  - Meta description
  - URL slug
  - Alt text of main image
- **Keyword density:** 0.5-2% (natural usage)
- **LSI keywords:** Related terms naturally distributed
- **Internal links:** 5-10 per page to other GovCon Giants pages
- **External links:** 3-5 to authoritative sources (.gov preferred)

### Example Opening Paragraph (Good)

> "Getting a **CAGE Code** is the first essential step for any business wanting to win federal contracts. This 5-character identifier, issued by the Defense Logistics Agency (DLA), is required before you can register in SAM.gov or bid on government opportunities. In this complete guide, you'll learn exactly what a CAGE Code is, how to get one for free, and how to use it to grow your federal contracting business."

**Why this works:**
✅ Primary keyword in first sentence
✅ Explains what it is clearly
✅ Sets expectations for the guide
✅ Natural, conversational tone
✅ Includes LSI terms (federal contracts, SAM.gov, DLA)

---

## Troubleshooting Common Issues

### Issue 1: CMS Fields Not Showing

**Problem:** Dynamic content not appearing on page
**Solution:**
1. Check field is connected to CMS
2. Verify CMS entry has content in that field
3. Check conditional visibility settings
4. Preview mode vs. published: Test both

### Issue 2: Mobile Layout Broken

**Problem:** Content overlaps or doesn't fit on mobile
**Solution:**
1. Check padding/margins on mobile breakpoint
2. Set max-widths on text containers
3. Change grid to 1 column on mobile
4. Reduce font sizes appropriately

### Issue 3: Forms Not Submitting

**Problem:** Form submissions fail or don't capture leads
**Solution:**
1. Check integration connection (ConvertKit, etc.)
2. Verify email field is marked as "email" type
3. Test with different email addresses
4. Check for JavaScript errors in console
5. Ensure form is inside Form component wrapper

### Issue 4: Pages Not Indexing

**Problem:** Google isn't indexing your pages
**Solution:**
1. Check robots.txt allows crawling
2. Submit sitemap to Google Search Console
3. Verify pages are set to "Published" not "Draft"
4. Check canonical URLs are correct
5. Request indexing via GSC (manual)

### Issue 5: Slow Page Load

**Problem:** Pages load slowly, bad Lighthouse score
**Solution:**
1. Optimize images: Compress to WebP, max 200KB
2. Reduce number of custom fonts
3. Remove unnecessary animations
4. Enable Framer's performance optimizations
5. Use lazy loading for images below fold

---

## Success Metrics to Track

### Week 1 Goals
- [ ] All pages published and indexed
- [ ] 100+ page views
- [ ] 5+ email captures
- [ ] No critical errors

### Month 1 Goals
- [ ] Rank in top 50 for "cage code"
- [ ] 500+ organic visitors
- [ ] 10+ email captures
- [ ] 2+ minutes average time on page

### Month 3 Goals
- [ ] Rank in top 10 for "cage code"
- [ ] 3,000+ organic visitors
- [ ] 50+ email captures
- [ ] 5+ demo requests
- [ ] Featured snippet for "what is a cage code"

### Month 12 Goals
- [ ] Rank #1-3 for "cage code"
- [ ] 7,000+ organic visitors
- [ ] 150+ email captures
- [ ] Template replicated to certifications

---

## Next Steps

### Immediate Actions (This Week)

1. **Day 1:** Set up Framer CMS collection with all fields
2. **Day 2-3:** Design page template (hero, sections, forms, CTAs)
3. **Day 4-5:** Write main hub page content (2,500 words)
4. **Day 6:** Test responsive design on all devices
5. **Day 7:** Launch main hub page to production

### Short-Term (Week 2-3)

1. Create 3-5 variation pages:
   - CAGE Code Lookup
   - What is a CAGE Code
   - How to Get CAGE Code
2. Set up analytics and form tracking
3. Test everything thoroughly
4. Launch all pages

### Medium-Term (Month 2-3)

1. Monitor keyword rankings and traffic
2. Optimize based on data
3. Build backlinks
4. A/B test CTAs and lead magnets
5. Expand to more topics (certifications)

---

## Resources & Tools

### Design Assets
- **Icons:** Heroicons, FontAwesome (via Framer)
- **Images:** Unsplash (free), Pexels (free)
- **Illustrations:** unDraw (free)

### Content Writing
- **Hemingway App:** Check readability (aim for grade 8-9)
- **Grammarly:** Proofread for errors
- **ChatGPT/Claude:** Draft content assistance

### SEO Tools
- **Google Search Console:** Free keyword tracking
- **Google Analytics 4:** Free traffic analytics
- **Lighthouse:** Free performance audit (Chrome DevTools)
- **Schema Markup Validator:** https://validator.schema.org/

### Lead Magnet Creation
- **Canva:** Free PDF design tool
- **Figma:** More advanced design
- **Google Docs:** Simple text-based checklist

---

## Questions?

As you implement this, you may have questions. Common ones:

**Q: How long does it take to rank?**
A: Typically 1-3 months to reach top 10 for low-competition keywords like "cage code" (difficulty 8).

**Q: Can I edit content after publishing?**
A: Yes! Framer CMS lets you edit anytime. Just update the CMS entry and changes are live immediately.

**Q: Do I need to know code?**
A: No! This entire implementation is no-code using Framer's visual editor and CMS.

**Q: What if I get stuck?**
A: Framer has great documentation and community support. Also happy to help troubleshoot specific issues.

---

**Ready to start? Begin with Step 1: Set up your Framer CMS collection!**


