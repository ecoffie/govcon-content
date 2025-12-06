# Product Requirements Document (PRD)
## CAGE Code Programmatic Page Template - GovCon Giants

**Document Version:** 1.0
**Created:** December 3, 2025
**Owner:** Eric Coffie
**Status:** Ready for Development

---

## Executive Summary

This PRD outlines the requirements for building GovCon Giants' first programmatic page template focused on **CAGE Code** content. This template will serve as the foundation for a scalable content strategy that captures with mies 9,900 monthly searchnimal competition (difficulty 8).

### Why CAGE Code First?

✅ **Low Hanging Fruit:** Difficulty score of 8 (easiest keyword in our portfolio)
✅ **High Relevance:** Essential requirement for every federal contractor
✅ **Strong Volume:** 9,900 monthly searches ($6.59 CPC)
✅ **Content Depth:** Can create comprehensive, valuable guides
✅ **Programmatic Potential:** Multiple related query variations

**Expected Impact:**
- 5,000-7,000 monthly organic visitors within 3 months
- Establish authority on fundamental GovCon topic
- Generate qualified leads for OpnGovIQ and FHC membership
- Foundation for scaling to other certification/requirement pages

---

## Product Overview

### What We're Building

A **programmatic page template system** that generates comprehensive, SEO-optimized pages for CAGE Code-related queries. The template will support multiple content variations while maintaining consistency and quality.

### Core Pages to Generate

**Primary Landing Page:**
1. **"CAGE Code" (Main Hub)** - Comprehensive guide targeting primary keyword

**Programmatic Variations:**
2. "CAGE Code Lookup" - Tool/resource page
3. "CAGE Code Search" - Search functionality page
4. "What is a CAGE Code" - Informational/definitional
5. "How to Get a CAGE Code" - Process guide
6. "CAGE Code Requirements" - Requirements checklist
7. "CAGE Code Verification" - Verification process
8. "CAGE Code vs DUNS Number" - Comparison guide
9. "NCAGE Code" (NATO variant) - International contractors

### Template Architecture

```
┌─────────────────────────────────────┐
│   Master CAGE Code Template         │
│   (Flexible Content Blocks)         │
└─────────────────────────────────────┘
            ↓
    ┌───────┴───────┬───────────┐
    ↓               ↓           ↓
[Primary Page]  [Lookup Tool]  [How-To Guide]
```

---

## Goals & Success Metrics

### Business Goals

1. **Traffic Acquisition:** Capture 5,000-7,000 monthly organic visitors
2. **Lead Generation:** Convert 2-5% of visitors to email captures or demo requests
3. **Authority Building:** Establish GovCon Giants as authoritative CAGE Code resource
4. **Template Validation:** Prove programmatic content model for scaling to certifications

### Success Metrics

#### Phase 1 (Month 1-3): Quick Win Validation
- [ ] Rank in top 10 for "cage code" (difficulty 8)
- [ ] 3,000+ monthly organic visitors to CAGE Code pages
- [ ] 50+ email captures or demo requests from CAGE Code funnel
- [ ] <30 second average page load time
- [ ] >2 minutes average time on page

#### Phase 2 (Month 4-6): Authority Establishment
- [ ] Rank in top 5 for "cage code"
- [ ] Rank top 10 for 5+ CAGE Code variations
- [ ] 5,000+ monthly organic visitors
- [ ] 100+ leads from CAGE Code pages
- [ ] Featured snippet for "what is a cage code"

#### Phase 3 (Month 7-12): Market Leadership
- [ ] Rank #1-2 for "cage code"
- [ ] 7,000+ monthly organic visitors
- [ ] 150+ leads from CAGE Code pages
- [ ] 10+ quality backlinks from .gov or industry sites
- [ ] Template replicated to 3+ other topics (certifications)

---

## Target Audience

### Primary Audience

**New Federal Contractors**
- Business owners exploring government contracting
- Just learned about CAGE Code requirement
- Need clear, step-by-step guidance
- Not yet registered in SAM.gov
- Pain points: confusion, intimidation, complexity

**Profile:**
- Small business owner (1-50 employees)
- 0-2 years government contracting experience
- Annual revenue: $500K - $10M
- Industries: IT services, professional services, construction, manufacturing
- Goals: Win first federal contract, understand requirements

### Secondary Audience

**Active Federal Contractors**
- Need CAGE Code lookup/verification
- Helping subcontractors understand requirements
- Updating company information
- International contractors (NCAGE)

**Profile:**
- 2+ years government contracting experience
- Already SAM.gov registered
- Managing multiple contracts
- Goals: Verify info, help partners, stay compliant

### User Intent Mapping

| Search Query | User Intent | Content Type | CTA Priority |
|--------------|-------------|--------------|--------------|
| "cage code" | Research/Learn | Comprehensive guide | Email capture |
| "cage code lookup" | Verification | Tool/database | Tool usage → Email |
| "what is a cage code" | Definition | FAQ/Explainer | OpnGovIQ demo |
| "how to get cage code" | Action/Process | Step-by-step guide | FHC membership |
| "cage code requirements" | Preparation | Checklist | Download PDF |

---

## Keyword Strategy

### Primary Target Keyword

**"cage code"**
- Monthly searches: 9,900
- CPC: $6.59
- Difficulty: 8
- Intent: Informational/Commercial
- Current top results: SAM.gov, beta.SAM.gov, Dun & Bradstreet

### Secondary Target Keywords (Programmatic Variations)

| Keyword | Monthly Volume | Difficulty | Intent | Template Type |
|---------|---------------|------------|--------|---------------|
| "cage code lookup" | Est. 1,000-2,000 | 10-15 | Transactional | Tool/Search |
| "what is a cage code" | Est. 800-1,500 | 5-10 | Informational | Definition |
| "how to get cage code" | Est. 500-1,000 | 10-15 | Transactional | Process Guide |
| "cage code search" | Est. 500-1,000 | 10-15 | Transactional | Tool/Search |
| "ncage code" | Est. 300-600 | 5-10 | Informational | Variant Guide |
| "cage code requirements" | Est. 200-500 | 10-15 | Informational | Checklist |

### Related Terms to Include (On-Page SEO)

- SAM.gov registration
- Commercial and Government Entity Code
- DUNS number
- UEI (Unique Entity Identifier)
- Federal contractor registration
- NATO CAGE Code (NCAGE)
- DLA (Defense Logistics Agency)

---

## Page Template Structure

### Content Blocks (Modular System)

Each page should use these reusable, programmatically-generated blocks:

#### 1. Hero Section
```
Components:
- H1: Primary keyword + context
- Subtitle: Value proposition (45-60 chars)
- Primary CTA button
- Trust indicators (members, contracts won, years)
- Background: Professional gradient/image
```

**Variants by Page Type:**
- Main hub: "CAGE Code Complete Guide: Everything Federal Contractors Need to Know"
- Lookup tool: "CAGE Code Lookup & Verification Tool - Free Search"
- How-to: "How to Get a CAGE Code in 5 Simple Steps"

#### 2. Quick Answer Box (Featured Snippet Target)
```
Components:
- Concise definition (40-60 words)
- 3-4 bullet points with key facts
- "Read full guide" link
- Schema markup (FAQPage)
```

**Example:**
> **What is a CAGE Code?**
> A CAGE (Commercial and Government Entity) Code is a 5-character identifier assigned to suppliers doing business with the federal government. Required for SAM.gov registration and bidding on federal contracts.
>
> - Required for all federal contractors
> - Issued by DLA (Defense Logistics Agency)
> - Free to obtain through SAM.gov
> - Valid as long as SAM.gov registration is active

#### 3. Table of Contents (Sticky Nav)
```
Components:
- Auto-generated from H2 headings
- Sticky on scroll (desktop)
- Progress indicator
- Jump links with smooth scroll
```

#### 4. Main Content Sections (Programmatic)

**Section 1: Comprehensive Definition**
- What is a CAGE Code (150-200 words)
- Why it matters for contractors
- Who issues it (DLA)
- History/background (brief)

**Section 2: Requirements**
- Prerequisites for getting CAGE Code
- Documents needed
- Eligibility criteria
- Timeline expectations

**Section 3: Process Guide**
- Step-by-step instructions (5-10 steps)
- Screenshots or visuals
- Common pitfalls to avoid
- Tips for faster processing

**Section 4: Use Cases**
- When you need your CAGE Code
- How to use it in proposals
- Verification by contracting officers
- Subcontractor requirements

**Section 5: Comparison Table**
- CAGE Code vs DUNS Number
- CAGE Code vs UEI
- NCAGE (NATO) vs CAGE Code

**Section 6: Advanced Topics**
- Multiple CAGE Codes (multiple locations)
- International contractors (NCAGE)
- Updates and changes
- Expiration/renewal

**Section 7: FAQs**
- 10-15 most common questions
- Schema markup (FAQPage)
- Expandable accordions

**Section 8: Tools & Resources**
- CAGE Code lookup tool (link/embed)
- Official SAM.gov link
- DLA contact information
- GovCon Giants resources

#### 5. Conversion Sections (Interspersed)

**Lead Magnet #1** (After Section 2)
```
Component: Content upgrade box
- "Download: CAGE Code Application Checklist PDF"
- Email capture form
- Benefit: Save time, avoid mistakes
```

**OpnGovIQ Pitch** (After Section 4)
```
Component: Product callout box
- "Track CAGE Code Status in OpnGovIQ"
- 2-3 key benefits
- "Start Free Trial" CTA
- Visual: Platform screenshot
```

**FHC Community** (After Section 6)
```
Component: Community callout
- "Get Expert Help with CAGE Code Questions"
- Social proof: member count, testimonial
- "Join Federal Help Center" CTA
```

#### 6. Related Content Grid
```
Components:
- 4-6 related articles/pages
- Thumbnail images
- Titles + short descriptions
- Internal linking for SEO
```

**Related Content:**
- SAM.gov Registration Guide
- 8(a) Certification Overview
- How to Find Government Contracts
- Federal Contractor Requirements Checklist

#### 7. Schema Markup (Structured Data)

Required schema types:
- Article schema
- FAQPage schema
- BreadcrumbList schema
- Organization schema (GovCon Giants)
- HowTo schema (for process pages)

---

## Content Requirements

### Writing Guidelines

**Tone & Voice:**
- Professional but approachable
- Clear and concise (avoid government jargon when possible)
- Educational, not salesy
- Empowering and encouraging

**Content Quality Standards:**
- Minimum 2,500 words for main hub page
- 1,500-2,000 words for variation pages
- Grade level: 8th-9th grade (use Hemingway app)
- Short paragraphs (2-4 sentences max)
- Bulleted lists for scannability
- Subheadings every 200-300 words

**SEO Writing Best Practices:**
- Primary keyword in H1, first paragraph, and conclusion
- LSI keywords naturally distributed (5-10 mentions)
- Internal links: 5-10 per page
- External links: 3-5 authoritative sources (.gov preferred)
- Alt text on all images with keyword variants
- Meta description: 150-160 characters, includes primary keyword

### Content Sourcing Strategy

**Phase 1: Manual Content Creation** (First 3 pages)
1. CAGE Code (main hub) - Written by expert/content writer
2. CAGE Code Lookup - Hybrid (tool integration + content)
3. What is a CAGE Code - Written by expert

**Phase 2: Template-Driven** (Next 6 pages)
- Use main hub content as base
- Programmatically modify for each variation
- Human editorial review before publishing

**Phase 3: AI-Assisted Scaling** (Future)
- AI generates first draft using template
- Human expert reviews and enhances
- Quality control checklist

### Visual Assets Needed

**Per Page:**
- Hero background image (1920x600px)
- Feature image for social sharing (1200x630px)
- 3-5 supporting images/screenshots
- Infographic: "CAGE Code Process" (vertical)
- Comparison table visual

**Brand Guidelines:**
- Primary colors: Dark Green (#1A3A2E), White, Light Gray
- Typography: Inter font family
- Icons: Modern, minimal line style
- Photography: Professional business/government buildings

---

## Technical Requirements

### Page Template Technical Specs

**Frontend Framework:**
- Next.js 14+ (React)
- TypeScript for type safety
- Tailwind CSS for styling
- Shadcn/ui for component library

**CMS Integration:**
- Headless CMS (Contentful, Strapi, or Sanity)
- Content modeling for programmatic generation
- API-first architecture
- Preview mode for editors

**Performance Targets:**
- Core Web Vitals: All green
  - LCP: <2.5s
  - FID: <100ms
  - CLS: <0.1
- Lighthouse Score: 90+ across all metrics
- Mobile-first responsive design
- Image optimization: WebP with fallbacks

### Database Schema (CMS Content Model)

```typescript
// CAGE Code Page Content Model

interface CageCodePage {
  // Metadata
  slug: string;                    // URL slug (e.g., "cage-code", "cage-code-lookup")
  pageType: PageType;              // "hub" | "lookup" | "howto" | "definition"
  status: "draft" | "published";   // Publishing status

  // SEO Fields
  metaTitle: string;               // 50-60 chars
  metaDescription: string;         // 150-160 chars
  focusKeyword: string;            // Primary keyword
  canonicalUrl?: string;           // Canonical URL if needed

  // Hero Section
  h1Title: string;                 // H1 heading
  subtitle: string;                // Hero subtitle
  heroCTA: {
    text: string;
    url: string;
    type: "primary" | "secondary";
  };
  heroImage: Image;

  // Quick Answer Box
  quickAnswer: {
    definition: string;            // 40-60 words
    bulletPoints: string[];        // 3-4 key facts
    schema: boolean;               // Enable FAQPage schema
  };

  // Content Sections
  sections: ContentSection[];      // Array of content sections

  // Conversion Elements
  leadMagnets: LeadMagnet[];       // Content upgrades
  productCallouts: ProductCallout[]; // OpnGovIQ, FHC pitches

  // Related Content
  relatedPages: RelatedPage[];     // Internal links

  // Schema Markup
  schemaTypes: SchemaType[];       // Article, FAQ, HowTo, etc.

  // Analytics
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  author: Author;
}

interface ContentSection {
  id: string;
  heading: string;                 // H2 heading
  content: RichText;              // Markdown or rich text
  order: number;                   // Display order
  images?: Image[];
  calloutBox?: CalloutBox;         // Optional inline CTA
}

interface LeadMagnet {
  title: string;
  description: string;
  downloadUrl: string;
  ctaText: string;
  placement: "after-section-2" | "after-section-4" | "sidebar";
}

interface ProductCallout {
  product: "OpnGovIQ" | "FHC" | "Encore";
  headline: string;
  benefits: string[];              // 2-3 bullet points
  ctaText: string;
  ctaUrl: string;
  image?: Image;
  placement: string;               // After which section
}
```

### URL Structure

**Pattern:** `govcongiants.org/resources/[topic]/[variation]`

**Examples:**
- `govcongiants.org/resources/cage-code` (main hub)
- `govcongiants.org/resources/cage-code/lookup` (lookup tool)
- `govcongiants.org/resources/cage-code/requirements` (requirements)
- `govcongiants.org/resources/cage-code/how-to-get` (process guide)

**URL Best Practices:**
- Lowercase only
- Hyphens (not underscores)
- No dates in URL
- Max 3 levels deep
- Breadcrumb structure

### API Integrations Needed

**1. CAGE Code Lookup Tool**
```
Integration: SAM.gov API or third-party data provider
Endpoint: Search CAGE Code by company name or code
Response: Company details, address, status, registration date
Error handling: Clear messages for not found/invalid
Rate limiting: Implement caching to avoid API limits
```

**2. Analytics & Tracking**
```
Google Analytics 4: Page views, scroll depth, time on page
Google Search Console: Rankings, impressions, clicks
Hotjar/Clarity: Heatmaps, session recordings
ConvertKit/HubSpot: Email capture tracking
```

**3. CRM Integration**
```
When user downloads lead magnet or requests demo:
- Capture: email, name, company name, phone (optional)
- Tag with source: "CAGE Code Guide"
- Trigger: Welcome email sequence
- Sync to: OpnGovIQ CRM or HubSpot
```

---

## Design Requirements

### Wireframe Structure

```
┌─────────────────────────────────────────────┐
│  Header (Sticky)                             │
│  [Logo] [Nav] [Join FHC] [Login]            │
└─────────────────────────────────────────────┘
┌─────────────────────────────────────────────┐
│  Hero Section                                │
│  H1: CAGE Code Complete Guide               │
│  Subtitle + Primary CTA                      │
│  [Background image with overlay]             │
└─────────────────────────────────────────────┘
┌─────────────────────────────────────────────┐
│  Quick Answer Box (Featured Snippet)        │
│  ┌─────────────────────────────────────┐   │
│  │ What is a CAGE Code?                 │   │
│  │ [Definition + 4 bullet points]       │   │
│  └─────────────────────────────────────┘   │
└─────────────────────────────────────────────┘
┌─────────────────────────────────────────────┐
│  Main Content Area                           │
│  ┌────────┐  ┌──────────────────────────┐  │
│  │ TOC    │  │ Content Sections         │  │
│  │ Sticky │  │ ───────────────────────  │  │
│  │        │  │ H2: Section Title        │  │
│  │ • Sec1 │  │ [Content paragraphs]     │  │
│  │ • Sec2 │  │ [Images, lists, etc]     │  │
│  │ • Sec3 │  │                          │  │
│  │ • Sec4 │  │ ┌──────────────────────┐│  │
│  │        │  │ │ Lead Magnet Box      ││  │
│  │        │  │ │ [Download checklist] ││  │
│  │        │  │ └──────────────────────┘│  │
│  │        │  │                          │  │
│  │        │  │ H2: Next Section         │  │
│  │        │  │ [More content...]        │  │
│  └────────┘  └──────────────────────────┘  │
└─────────────────────────────────────────────┘
┌─────────────────────────────────────────────┐
│  FAQ Section (Expandable Accordions)        │
│  [10-15 questions with schema markup]       │
└─────────────────────────────────────────────┘
┌─────────────────────────────────────────────┐
│  Related Content Grid                        │
│  [4-6 article cards with links]             │
└─────────────────────────────────────────────┘
┌─────────────────────────────────────────────┐
│  Final CTA Section                           │
│  "Ready to Win Government Contracts?"        │
│  [OpnGovIQ demo CTA]                        │
└─────────────────────────────────────────────┘
┌─────────────────────────────────────────────┐
│  Footer                                      │
│  [Links, Social, Contact]                   │
└─────────────────────────────────────────────┘
```

### Component Design Specifications

**Hero Section:**
- Height: 600px desktop, 400px mobile
- Background: Dark green overlay (opacity 0.85) on image
- Typography: H1 48px desktop / 32px mobile, subtitle 20px/16px
- CTA Button: 180px wide, 50px tall, white text on green
- Spacing: 60px padding top/bottom

**Quick Answer Box:**
- Width: 100% max-width 800px
- Background: Light gray (#F5F5F5)
- Border: 2px solid green
- Border-radius: 8px
- Padding: 30px
- Icon: Checkmark or lightbulb icon (left)
- Typography: Definition 18px, bullets 16px

**Content Sections:**
- Width: 800px max (optimal reading width)
- Typography: Body text 18px, line-height 1.7
- H2: 36px, H3: 28px, H4: 22px
- Spacing: 40px between sections
- Lists: 24px spacing between items

**Lead Magnet Box:**
- Width: 100% of content column
- Background: White with subtle shadow
- Border: 1px solid light gray
- Padding: 30px
- Form fields: Email (required), Name (optional)
- Button: "Download Free Checklist" - green, full width

**Product Callout (OpnGovIQ):**
- Layout: 2-column (image left, content right)
- Background: Light green (#E8F5E9)
- Border-left: 4px solid dark green
- Padding: 40px
- Image: 300x200px screenshot
- CTA: "Start Free Trial" button

### Mobile Responsive Breakpoints

```css
/* Desktop */
@media (min-width: 1024px) {
  - 2-column layout (TOC + content)
  - Full-width hero (600px height)
  - Sidebar elements visible
}

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) {
  - Single column layout
  - TOC becomes dropdown/collapsible
  - Hero 500px height
  - Stacked product callouts
}

/* Mobile */
@media (max-width: 767px) {
  - Single column, full width
  - Hero 400px height
  - Touch-optimized buttons (min 44px)
  - Hamburger navigation
  - Sticky CTA bar at bottom
}
```

---

## SEO Requirements

### On-Page SEO Checklist

**Technical SEO:**
- [ ] XML sitemap includes all CAGE Code pages
- [ ] Robots.txt allows crawling
- [ ] HTTPS enabled (SSL certificate)
- [ ] Mobile-friendly (passes Google test)
- [ ] Fast load times (<3s)
- [ ] Clean URL structure (no parameters)
- [ ] Canonical tags set correctly
- [ ] Hreflang tags (if international versions)

**Meta Tags:**
- [ ] Unique title tag (50-60 chars, includes keyword)
- [ ] Unique meta description (150-160 chars)
- [ ] Open Graph tags (og:title, og:description, og:image)
- [ ] Twitter Card tags
- [ ] Viewport meta tag for responsive

**Content SEO:**
- [ ] H1 tag (one per page, includes primary keyword)
- [ ] H2-H6 hierarchy (logical structure)
- [ ] Primary keyword in first 100 words
- [ ] Keyword density: 0.5-2% (natural usage)
- [ ] LSI keywords distributed throughout
- [ ] Alt text on all images
- [ ] Internal links (5-10 per page)
- [ ] External links to authoritative sources (3-5)

**Schema Markup:**
```json
// Required schema types

1. Article Schema
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "CAGE Code Complete Guide",
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
  "datePublished": "2025-12-03",
  "dateModified": "2025-12-03"
}

2. FAQPage Schema
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a CAGE Code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A CAGE Code is a 5-character identifier..."
      }
    }
    // ... more questions
  ]
}

3. HowTo Schema (for process pages)
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Get a CAGE Code",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Register in SAM.gov",
      "text": "Visit SAM.gov and create an account..."
    }
    // ... more steps
  ]
}
```

### Link Building Strategy

**Internal Linking:**
- Link from homepage to CAGE Code hub page
- Link from other related articles (SAM.gov, certifications)
- Breadcrumb navigation for context
- Related content section at bottom
- Contextual links within content

**External Link Targets:**
- SAM.gov (official CAGE Code registration)
- DLA CAGE site (authoritative source)
- SBA.gov (government authority)
- Industry publications (.gov, .edu domains preferred)

**Backlink Acquisition:**
- Create shareable infographic "CAGE Code Process"
- Guest post on GovCon blogs with link back
- Partner with SBDCs and PTACs (link exchanges)
- Get listed in government contractor directories
- Press release for comprehensive guide launch

---

## Implementation Plan

### Phase 1: Foundation (Weeks 1-2)

**Week 1: Setup & Planning**
- [ ] Finalize PRD with stakeholders
- [ ] Set up development environment
- [ ] Configure CMS (content models)
- [ ] Create design mockups in Figma
- [ ] Conduct competitive analysis (top 10 results)

**Week 2: Content Creation**
- [ ] Write main CAGE Code hub page (2,500 words)
- [ ] Create infographic: "CAGE Code Process"
- [ ] Design lead magnet: "CAGE Code Checklist PDF"
- [ ] Source/create visual assets (5-7 images)
- [ ] Write 10-15 FAQ questions

**Deliverables:**
- ✅ Approved designs (desktop + mobile)
- ✅ Complete content for main hub page
- ✅ Visual assets library
- ✅ CMS configured and tested

### Phase 2: Development (Weeks 3-4)

**Week 3: Template Development**
- [ ] Build page template component (React/Next.js)
- [ ] Implement responsive design
- [ ] Add schema markup functionality
- [ ] Create reusable content blocks
- [ ] Set up dynamic routing

**Week 4: Integration & Testing**
- [ ] Connect CMS to frontend
- [ ] Integrate analytics (GA4, GSC)
- [ ] Add email capture forms (ConvertKit/HubSpot)
- [ ] Test on multiple devices/browsers
- [ ] Optimize images (WebP, lazy loading)

**Deliverables:**
- ✅ Functional page template
- ✅ CMS integration working
- ✅ Forms capturing leads
- ✅ All tests passing

### Phase 3: Launch (Week 5)

**Pre-Launch Checklist:**
- [ ] Content proofread and edited
- [ ] All images optimized and have alt text
- [ ] Meta tags set correctly
- [ ] Schema markup validated (Google Rich Results Test)
- [ ] Forms tested and working
- [ ] Analytics tracking verified
- [ ] Mobile responsive on 3+ devices
- [ ] Page speed score 90+ (Lighthouse)
- [ ] XML sitemap updated
- [ ] Internal links added from existing pages

**Launch Day:**
- [ ] Publish main CAGE Code hub page
- [ ] Submit to Google Search Console
- [ ] Share on GovCon Giants social media
- [ ] Email announcement to existing community
- [ ] Monitor for errors/issues

**Post-Launch (Week 1 after launch):**
- [ ] Monitor rankings daily (Google Search Console)
- [ ] Check analytics (traffic, bounce rate, conversions)
- [ ] Gather user feedback
- [ ] Fix any reported issues
- [ ] Begin work on variation pages

**Deliverables:**
- ✅ Live page on govcongiants.org
- ✅ Indexed by Google
- ✅ No critical errors
- ✅ Tracking data flowing

### Phase 4: Expansion (Weeks 6-12)

**Programmatic Rollout:**

**Weeks 6-7: Lookup & Search Pages**
- [ ] Build "CAGE Code Lookup" tool page
- [ ] Integrate SAM.gov API or data source
- [ ] Create "CAGE Code Search" variant
- [ ] Test functionality

**Weeks 8-9: How-To & Requirements**
- [ ] Publish "How to Get a CAGE Code" guide
- [ ] Create "CAGE Code Requirements" checklist
- [ ] Add downloadable templates

**Weeks 10-12: Advanced & Comparison**
- [ ] Write "What is a CAGE Code" definition page
- [ ] Create "CAGE Code vs DUNS Number" comparison
- [ ] Develop "NCAGE Code" international guide
- [ ] Build internal linking structure between all pages

**Deliverables:**
- ✅ 6-9 total CAGE Code pages live
- ✅ Comprehensive topic cluster
- ✅ Internal linking strategy implemented

---

## Conversion Optimization Strategy

### Conversion Goals

**Primary Goal:** Email capture (lead generation)
**Secondary Goals:** Demo requests, free trial signups, FHC membership

### Conversion Funnel

```
Traffic → Page View → Engagement → Conversion → Nurture
   ↓          ↓            ↓            ↓           ↓
  SEO     Hero CTA    Read content  Download   Email series
Google    Scroll      Time on page   Sign up    → Demo
Direct    Click TOC   View sections  Request    → Purchase
```

### Lead Magnets (Highest Converting)

**1. CAGE Code Application Checklist PDF**
- Placement: After Section 2 ("Requirements")
- Value: Save time, avoid mistakes, step-by-step
- Design: Branded PDF, 1-2 pages, printable
- Form: Email only (low friction)

**2. Federal Contractor Starter Kit**
- Placement: Sidebar or exit intent popup
- Value: Comprehensive bundle (CAGE Code + SAM.gov + Certifications)
- Design: Multi-page PDF guide
- Form: Email + Name + Company name

**3. CAGE Code Lookup Tool Access**
- Placement: "CAGE Code Lookup" page
- Value: Unlimited searches, save searches
- Access: Free with email registration
- Upgrade: OpnGovIQ for advanced features

### CTA Hierarchy

**Primary CTAs (Highest Conversion):**
1. "Download CAGE Code Checklist" - Lead magnet
2. "Start Free Trial" - OpnGovIQ trial
3. "Join Federal Help Center" - FHC membership

**Secondary CTAs:**
4. "Schedule Demo" - OpnGovIQ demo call
5. "Ask an Expert" - FHC community access
6. "Get Funding" - Encore Funding inquiry

### A/B Testing Plan

**Month 1-2: Baseline Measurement**
- Track all metrics without changes
- Identify drop-off points
- Analyze heatmaps

**Month 3: Hero CTA Testing**
- Test A: "Download Free Guide"
- Test B: "Get Your CAGE Code Checklist"
- Test C: "Start Winning Federal Contracts"
- Metric: Click-through rate

**Month 4: Lead Magnet Placement**
- Test A: After Section 2
- Test B: Sidebar (sticky)
- Test C: Exit intent popup
- Metric: Conversion rate

**Month 5: Form Length**
- Test A: Email only
- Test B: Email + Name
- Test C: Email + Name + Company + Phone
- Metric: Form completion rate

---

## Analytics & Tracking

### Key Metrics to Track

**Traffic Metrics:**
- Organic sessions (by source)
- Unique visitors
- Pageviews
- Top landing pages
- Bounce rate
- Average time on page
- Pages per session

**SEO Metrics:**
- Keyword rankings (daily)
  - "cage code" (primary)
  - All variations (secondary)
- Impressions (Google Search Console)
- Clicks from SERP
- Click-through rate (CTR)
- Average position
- Featured snippet appearance

**Engagement Metrics:**
- Scroll depth (25%, 50%, 75%, 100%)
- Section viewed (via scroll tracking)
- Video plays (if video added)
- Time to first interaction
- Heatmap clicks

**Conversion Metrics:**
- Lead magnet downloads
- Email capture rate
- Demo requests
- Free trial signups
- FHC membership signups
- Attribution: Which page drove conversion

### Dashboards to Create

**1. SEO Performance Dashboard** (Google Data Studio)
- Keyword rankings over time (line chart)
- Organic traffic trend (line chart)
- Top pages by traffic (table)
- Impressions vs clicks (comparison)
- GSC performance summary

**2. Conversion Dashboard**
- Lead magnet downloads by type (bar chart)
- Conversion rate by page (table)
- Form abandonment rate (funnel)
- CTA click rates (heatmap)
- Revenue attribution (if applicable)

**3. Page Performance Dashboard**
- Core Web Vitals scores (gauges)
- Page load time trend (line chart)
- Mobile vs desktop performance (comparison)
- Error rate (if any)

### Weekly Reporting Cadence

**Every Monday Morning:**
- Review previous week's metrics
- Check keyword ranking changes
- Analyze conversion performance
- Identify issues or opportunities
- Plan week's optimization tasks

**Monthly Deep Dive:**
- Compare month-over-month growth
- Analyze user behavior patterns
- Review A/B test results
- Update content based on search queries
- Plan next month's experiments

---

## Content Maintenance & Updates

### Regular Maintenance Schedule

**Weekly:**
- Monitor Google Search Console for new queries
- Check for technical errors (404s, load issues)
- Review user comments/questions
- Update stats/numbers if changed

**Monthly:**
- Refresh content with latest information
- Add new FAQs based on user questions
- Update images if outdated
- Check all external links still work
- Review and respond to backlink opportunities

**Quarterly:**
- Comprehensive content audit
- Update statistics and data points
- Refresh case studies/examples
- Expand thin sections based on engagement
- Add new related content based on keyword research

**Annually:**
- Major content overhaul
- Redesign if needed
- Complete SEO audit
- Update all visuals/screenshots
- Rewrite sections that perform poorly

### Content Expansion Triggers

**When to expand content:**
- Page ranks #5-10 but not breaking into top 3
- High bounce rate (>70%)
- Low time on page (<1 minute)
- Featured snippet lost to competitor
- New related queries appear in GSC
- User feedback requests specific information

### Quality Control Process

**Before Publishing New Variations:**
1. Content review by subject matter expert
2. SEO checklist verification (all boxes checked)
3. Mobile responsive test on 3+ devices
4. Load speed test (Lighthouse score 90+)
5. Proofread for typos/grammar (Grammarly)
6. Accessibility check (WAVE tool)
7. Schema markup validation
8. Internal linking audit
9. Image optimization verification
10. Final approval from product owner

---

## Risk Assessment & Mitigation

### Potential Risks

**1. Low Traffic Despite Rankings**
**Risk:** Page ranks well but doesn't drive traffic
**Likelihood:** Low
**Impact:** High
**Mitigation:**
- Optimize title tags and meta descriptions for CTR
- Add structured data for rich snippets
- Create compelling featured snippet content
- Monitor GSC for impression vs click discrepancy

**2. High Bounce Rate**
**Risk:** Users leave immediately without engaging
**Likelihood:** Medium
**Impact:** Medium
**Mitigation:**
- Improve page load speed (<2.5s)
- Make content more scannable (bullets, headings)
- Add engaging visuals above fold
- Clear value proposition in hero section
- Remove distractions/excessive ads

**3. Low Conversion Rate**
**Risk:** Traffic doesn't convert to leads
**Likelihood:** Medium
**Impact:** High
**Mitigation:**
- A/B test different CTAs and offers
- Reduce friction (email-only forms)
- Improve lead magnet value proposition
- Add social proof (testimonials, stats)
- Exit intent offers

**4. Google Algorithm Update**
**Risk:** Rankings drop due to algorithm change
**Likelihood:** Low-Medium
**Impact:** High
**Mitigation:**
- Focus on E-E-A-T (expertise, authority, trust)
- High-quality, comprehensive content
- Diverse backlink profile
- Monitor Google updates closely
- Have traffic diversification plan (email, social)

**5. Content Becomes Outdated**
**Risk:** Information changes, content becomes inaccurate
**Likelihood:** Medium
**Impact:** Medium
**Mitigation:**
- Set calendar reminders for quarterly updates
- Monitor official .gov sources for changes
- Add "Last Updated" date on page
- Subscribe to government contractor newsletters
- Community can report outdated info

**6. Competition Outranks Us**
**Risk:** Competitor publishes better content and takes rankings
**Likelihood:** Medium
**Impact:** Medium
**Mitigation:**
- Continuous content improvement
- Build more backlinks
- Create more comprehensive content
- Add unique value (tools, calculators)
- Monitor competitor content regularly

---

## Success Criteria Definition

### Minimum Viable Product (MVP) Success

**Launch Success (Month 1):**
- ✅ Page published and indexed by Google
- ✅ No critical technical errors
- ✅ At least 500 organic visitors
- ✅ Ranks in top 50 for "cage code"
- ✅ At least 10 email captures
- ✅ No major usability issues reported

### Short-Term Success (Month 3)

**Traffic Goals:**
- 3,000+ organic visitors to CAGE Code pages
- Ranks in top 10 for "cage code"
- Ranks in top 20 for 3+ variation keywords
- <50% bounce rate
- >2 minutes average time on page

**Conversion Goals:**
- 50+ email captures (1.5-2% conversion rate)
- 10+ demo requests or free trial signups
- 5+ FHC membership signups attributed to CAGE Code pages

**SEO Goals:**
- Featured snippet for "what is a cage code"
- 10+ quality backlinks from industry/gov sites
- Domain authority increase (+2-3 points)

### Long-Term Success (Month 12)

**Traffic Goals:**
- 7,000+ organic visitors to CAGE Code pages
- Ranks #1-3 for "cage code"
- Ranks top 10 for 8+ related keywords
- CAGE Code pages = top 5 traffic drivers for site

**Conversion Goals:**
- 150+ email captures from CAGE Code funnel
- $10K+ attributed revenue from CAGE Code leads
- 3:1 or better ROI on content investment

**Brand Goals:**
- Recognized as authoritative source for CAGE Code info
- Linked to by .gov or major industry publications
- Template successfully replicated to 3+ other topics
- Community mentions GovCon Giants as "go-to" resource

---

## Dependencies & Resources

### Team Requirements

**Required Roles:**

1. **Product Manager** (10 hrs/week)
   - PRD finalization
   - Stakeholder coordination
   - Launch management
   - Success metric tracking

2. **Content Writer/SME** (30 hrs total)
   - Main hub page (2,500 words)
   - 3 variation pages (1,500 words each)
   - FAQ section (15 questions)
   - Lead magnet PDF copy

3. **Frontend Developer** (60 hrs total)
   - Page template development
   - CMS integration
   - Responsive design implementation
   - Performance optimization

4. **Designer** (20 hrs total)
   - Wireframes and mockups
   - Visual asset creation
   - Lead magnet PDF design
   - Brand asset library

5. **SEO Specialist** (15 hrs total)
   - Keyword research validation
   - On-page SEO optimization
   - Schema markup implementation
   - Technical SEO audit

6. **QA Tester** (10 hrs total)
   - Cross-browser testing
   - Mobile responsiveness
   - Form submission testing
   - Accessibility audit

### Technology Stack

**Required:**
- Next.js 14+ (React framework)
- TypeScript
- Tailwind CSS
- Headless CMS (Contentful, Strapi, or Sanity)
- Vercel or Netlify (hosting)
- Google Analytics 4
- Google Search Console
- Email marketing platform (ConvertKit/HubSpot)

**Nice-to-Have:**
- Hotjar or Microsoft Clarity (behavior analytics)
- SAM.gov API access (for lookup tool)
- Algolia (search functionality)
- Cloudflare (CDN + security)

### Budget Estimate

**One-Time Costs:**
- Content creation: $2,000-3,000
- Design work: $1,500-2,000
- Development: $5,000-7,000
- QA/Testing: $500-1,000
- **Total:** $9,000-13,000

**Recurring Monthly:**
- CMS subscription: $100-300/month
- Hosting: $50-150/month
- Analytics tools: $50-200/month
- **Total:** $200-650/month

---

## Appendix

### A. Competitive Analysis Summary

**Top 3 CAGE Code Search Results:**

1. **SAM.gov (Official)**
   - Ranks #1
   - Government site (highest authority)
   - Functional but not user-friendly
   - Opportunity: Better UX, comprehensive guide

2. **Beta.SAM.gov**
   - Ranks #2
   - Updated government site
   - Technical, not educational
   - Opportunity: Educational content for beginners

3. **Dun & Bradstreet**
   - Ranks #3
   - Commercial vendor perspective
   - Sales-focused
   - Opportunity: Unbiased, community-driven content

**Content Gaps to Fill:**
- No comprehensive beginner's guide
- No visual process guides/infographics
- No comparison resources (CAGE vs DUNS vs UEI)
- No troubleshooting/FAQ sections
- Limited community perspective

### B. Keyword Research Extended

**Additional Long-Tail Opportunities:**
- "do i need a cage code" (Est. 200-400/month)
- "cage code lookup free" (Est. 300-600/month)
- "how long does cage code take" (Est. 100-300/month)
- "cage code for subcontractors" (Est. 100-200/month)
- "update cage code information" (Est. 100-200/month)

**Question-Based Queries (PAA):**
- "Is a CAGE code the same as a DUNS number?"
- "How much does a CAGE code cost?"
- "Can I get a CAGE code without SAM registration?"
- "Do small businesses need a CAGE code?"
- "What information is needed for CAGE code?"

### C. Content Checklist Template

Use this checklist for each programmatic page variation:

**Pre-Publishing Checklist:**
- [ ] Content minimum word count met (1,500-2,500)
- [ ] Primary keyword in H1, first paragraph, conclusion
- [ ] 5-10 internal links included
- [ ] 3-5 external authoritative links
- [ ] All images have descriptive alt text
- [ ] Meta title 50-60 characters with keyword
- [ ] Meta description 150-160 characters with keyword
- [ ] Schema markup added and validated
- [ ] Mobile responsive on iPhone, Android, iPad
- [ ] Page load time <3 seconds
- [ ] Forms tested and capturing correctly
- [ ] Spelling/grammar checked
- [ ] Accessibility score 90+ (WAVE tool)
- [ ] All CTAs functional
- [ ] Analytics tracking verified
- [ ] Approved by content owner

---

## Approval & Sign-Off

**Prepared By:** [Your Name]
**Date:** December 3, 2025
**Version:** 1.0

**Approval Required From:**
- [ ] Product Owner: Eric Coffie
- [ ] Content Lead: _____________
- [ ] Development Lead: _____________
- [ ] Marketing Lead: _____________

**Approved On:** _____________

**Next Steps After Approval:**
1. Kickoff meeting with full team (Week 1, Day 1)
2. Begin content creation (Week 1, Day 2)
3. Start design mockups (Week 1, Day 3)
4. Weekly progress reviews (every Monday)
5. Launch target: Week 5

---

**Questions or Feedback?**
Contact: [Your Email]

**Related Documents:**
- GovCon Giants Keyword Research Analysis
- DataForSEO Validation Report
- GovCon Giants Website Summary
- Brand Guidelines (if available)

