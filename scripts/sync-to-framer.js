/**
 * GovCon Giants - Framer CMS Sync Script
 * 
 * This script converts your local markdown content into a format
 * that can be synced with Framer CMS.
 * 
 * Usage: node sync-to-framer.js
 */

const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  outputDir: path.join(__dirname, '..', 'framer-content'),
  contentDir: path.join(__dirname, '..'),
};

// CAGE Code Pages Content
// Edit this data to update your Framer CMS content
const cageCodePages = [
  {
    id: "cage-code-main",
    slug: "cage-code",
    pageType: "hub",
    status: "published",
    
    // Basic Info
    title: "CAGE Code Complete Guide: Everything Federal Contractors Need to Know",
    subtitle: "Your complete resource for understanding, obtaining, and using your CAGE Code",
    
    // SEO
    metaTitle: "CAGE Code Guide 2025: Complete Resource for Federal Contractors",
    metaDescription: "Learn everything about CAGE Codes: what they are, how to get one, requirements, and how to use it for federal contracting. Free checklist included.",
    focusKeyword: "cage code",
    
    // Hero
    primaryCtaText: "Download Free Guide",
    primaryCtaUrl: "#lead-magnet",
    
    // Quick Answer
    quickDefinition: "A CAGE (Commercial and Government Entity) Code is a 5-character identifier assigned to suppliers doing business with the federal government. It's required for SAM.gov registration and bidding on federal contracts.",
    keyPoints: [
      "Required for all federal contractors",
      "Issued by DLA (Defense Logistics Agency)",
      "Free to obtain through SAM.gov",
      "Valid as long as SAM.gov registration is active"
    ],
    
    // Content Sections
    sections: [
      {
        heading: "What is a CAGE Code?",
        content: `A CAGE Code (Commercial and Government Entity Code) is a unique five-character alphanumeric identifier assigned by the Defense Logistics Agency (DLA) to entities that conduct business with the federal government.

Think of it as your business's ID card for federal contracting. Without it, you cannot register in SAM.gov or bid on government contracts.

**Key Facts:**
- Issued by the Defense Logistics Agency (DLA)
- Completely free to obtain
- Required for SAM.gov registration
- Used to identify contractors in federal systems

The CAGE Code system was originally developed for military procurement but is now used across all federal agencies to identify vendors and contractors.`
      },
      {
        heading: "CAGE Code Requirements",
        content: `Before you can get a CAGE Code, you'll need to have the following ready:

**Business Requirements:**
- Legal business entity (LLC, Corporation, Sole Proprietorship)
- Valid EIN (Employer Identification Number) or SSN for sole proprietors
- Physical business address (P.O. boxes not accepted)
- Active bank account

**Documents You'll Need:**
- Business registration documents
- EIN confirmation letter from IRS
- Bank account information
- Business contact information

**Timeline:**
- Standard processing: 3-5 business days
- During peak periods: Up to 10 business days`
      },
      {
        heading: "How to Get Your CAGE Code",
        content: `Getting your CAGE Code is a straightforward process through SAM.gov. Here's the step-by-step guide:

**Step 1: Create a Login.gov Account**
Visit login.gov and create an account using your business email.

**Step 2: Go to SAM.gov**
Navigate to sam.gov and click "Sign In" using your Login.gov credentials.

**Step 3: Start Entity Registration**
Click "Get Started" under Entity Registration and select your entity type.

**Step 4: Complete Core Data**
Enter your business information including:
- Legal business name
- Physical address
- EIN/TIN
- Business type and size

**Step 5: Submit and Wait**
After completing all sections, submit your registration. Your CAGE Code will be assigned automatically within 3-10 business days.

**Pro Tip:** Double-check all information before submitting. Errors can delay your CAGE Code assignment significantly.`
      },
      {
        heading: "Using Your CAGE Code",
        content: `Once you have your CAGE Code, you'll use it throughout your federal contracting journey:

**In Proposals:**
Include your CAGE Code in all federal contract proposals and capability statements.

**On Contract Documents:**
Your CAGE Code appears on contracts, purchase orders, and invoices.

**For Verification:**
Contracting officers use your CAGE Code to verify your registration and eligibility.

**Subcontracting:**
Prime contractors may require your CAGE Code before considering you as a subcontractor.

**Important:** Keep your SAM.gov registration active to maintain your CAGE Code validity. You must renew annually.`
      },
      {
        heading: "Common CAGE Code Questions",
        content: `**How much does a CAGE Code cost?**
A CAGE Code is completely FREE. Never pay anyone to get you a CAGE Code.

**Can I have multiple CAGE Codes?**
Yes, if your business has multiple physical locations, each location can have its own CAGE Code.

**What's the difference between CAGE Code and DUNS?**
CAGE Codes are government-issued identifiers, while DUNS numbers were private identifiers from Dun & Bradstreet. DUNS has been replaced by UEI (Unique Entity Identifier).

**How long is a CAGE Code valid?**
Your CAGE Code remains valid as long as your SAM.gov registration is active and renewed annually.

**What if I made a mistake on my application?**
Log into SAM.gov and update your entity registration. Changes typically process within 24-48 hours.`
      }
    ],
    
    // Conversion Elements
    leadMagnet: {
      title: "Download: CAGE Code Application Checklist",
      description: "Get our step-by-step checklist to ensure you have everything you need for a smooth CAGE Code application. Save time and avoid mistakes.",
      pdfUrl: "" // Add your PDF URL
    },
    showOpnGovIQCallout: true,
    showFHCCallout: true,
    
    // Metadata
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  
  {
    id: "cage-code-lookup",
    slug: "cage-code-lookup",
    pageType: "lookup",
    status: "published",
    
    title: "CAGE Code Lookup & Verification Tool - Free Search",
    subtitle: "Search and verify CAGE Codes for any federal contractor",
    
    metaTitle: "CAGE Code Lookup Tool - Free Search & Verification",
    metaDescription: "Search for any company's CAGE Code. Free CAGE Code lookup and verification tool with detailed company information.",
    focusKeyword: "cage code lookup",
    
    primaryCtaText: "Search CAGE Codes",
    primaryCtaUrl: "#lookup-tool",
    
    quickDefinition: "Use our free CAGE Code lookup tool to search and verify any company's Commercial and Government Entity Code. Find contractor details, registration status, and verification information instantly.",
    keyPoints: [
      "Search by company name or CAGE Code",
      "Verify contractor registration status",
      "Free to use - no account required",
      "Updated with latest SAM.gov data"
    ],
    
    sections: [
      {
        heading: "How to Use the CAGE Code Lookup Tool",
        content: `Our CAGE Code lookup tool makes it easy to find and verify contractor information.

**To search by CAGE Code:**
1. Enter the 5-character CAGE Code in the search box
2. Click "Search"
3. View detailed company information

**To search by company name:**
1. Enter the company name (partial names work)
2. Click "Search"
3. Browse matching results

The lookup tool pulls data from official government sources to ensure accuracy.`
      },
      {
        heading: "What Information Does a CAGE Code Lookup Show?",
        content: `A CAGE Code lookup reveals important contractor information:

- **Company Name** - Legal business name
- **Physical Address** - Business location
- **CAGE Code Status** - Active or inactive
- **Registration Date** - When the CAGE was assigned
- **Business Type** - Size and ownership classifications

This information helps you verify contractors before doing business with them.`
      }
    ],
    
    showOpnGovIQCallout: true,
    showFHCCallout: true,
    
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  
  {
    id: "what-is-cage-code",
    slug: "what-is-a-cage-code",
    pageType: "definition",
    status: "published",
    
    title: "What is a CAGE Code? Definition, Purpose & Requirements",
    subtitle: "Everything you need to know about CAGE Codes for federal contracting",
    
    metaTitle: "What is a CAGE Code? Complete Guide for Beginners 2025",
    metaDescription: "Learn what a CAGE Code is, why you need one for federal contracting, and how it differs from DUNS and UEI numbers. Simple explanation for beginners.",
    focusKeyword: "what is a cage code",
    
    primaryCtaText: "Get Your CAGE Code",
    primaryCtaUrl: "/resources/cage-code",
    
    quickDefinition: "A CAGE Code (Commercial and Government Entity Code) is a unique 5-character alphanumeric identifier assigned by the Defense Logistics Agency (DLA) to entities doing business with the federal government.",
    keyPoints: [
      "5-character alphanumeric identifier",
      "Assigned by Defense Logistics Agency (DLA)",
      "Required for federal contract bidding",
      "Different from DUNS number and UEI"
    ],
    
    sections: [
      {
        heading: "CAGE Code Definition Explained",
        content: `A CAGE Code stands for Commercial and Government Entity Code. It's a unique identifier that the federal government uses to track and identify businesses that want to work with government agencies.

**Simple Explanation:**
Think of your CAGE Code like a government-issued business ID number. Just as you need a driver's license to drive, you need a CAGE Code to do business with the federal government.

**Format:**
CAGE Codes are exactly 5 characters long and contain a mix of letters and numbers. For example: 1ABC2 or 5XYZ9.`
      },
      {
        heading: "Why Do You Need a CAGE Code?",
        content: `You need a CAGE Code if you want to:

- **Bid on federal contracts** - All contract proposals require a CAGE Code
- **Register in SAM.gov** - CAGE Code is assigned during registration
- **Become a subcontractor** - Prime contractors require your CAGE Code
- **Receive government payments** - Payment systems use CAGE Codes

**Bottom line:** No CAGE Code = No federal contracts.`
      }
    ],
    
    showOpnGovIQCallout: true,
    showFHCCallout: true,
    
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  
  {
    id: "how-to-get-cage-code",
    slug: "how-to-get-cage-code",
    pageType: "howto",
    status: "published",
    
    title: "How to Get a CAGE Code in 5 Simple Steps",
    subtitle: "Step-by-step guide to getting your CAGE Code for federal contracting",
    
    metaTitle: "How to Get a CAGE Code: 5 Easy Steps (2025 Guide)",
    metaDescription: "Learn how to get a CAGE Code in 5 simple steps. Free step-by-step guide with screenshots, timeline, and common mistakes to avoid.",
    focusKeyword: "how to get cage code",
    
    primaryCtaText: "Start Your Application",
    primaryCtaUrl: "https://sam.gov",
    
    quickDefinition: "Getting a CAGE Code is free and takes about 3-10 business days. You'll get your CAGE Code automatically when you complete your SAM.gov entity registration.",
    keyPoints: [
      "100% free - never pay for a CAGE Code",
      "Process takes 3-10 business days",
      "Requires SAM.gov registration",
      "Need EIN and business documents"
    ],
    
    sections: [
      {
        heading: "Before You Start: What You'll Need",
        content: `Gather these items before starting your application:

**Required Documents:**
- EIN (Employer Identification Number)
- Business bank account information
- Legal business name and address
- Business contact information (name, email, phone)

**Time Needed:**
- Initial setup: 30-45 minutes
- Processing time: 3-10 business days`
      },
      {
        heading: "Step 1: Create a Login.gov Account",
        content: `First, you need a Login.gov account to access SAM.gov.

1. Go to **login.gov**
2. Click "Create an account"
3. Enter your email address
4. Create a strong password
5. Set up two-factor authentication
6. Verify your email

**Important:** Use your business email, not personal.`
      },
      {
        heading: "Step 2: Access SAM.gov",
        content: `Now access SAM.gov with your Login.gov credentials.

1. Go to **sam.gov**
2. Click "Sign In" (top right)
3. Select "Accept" on the Login.gov prompt
4. You're now logged into SAM.gov`
      },
      {
        heading: "Step 3: Start Entity Registration",
        content: `Begin your entity registration to get your CAGE Code.

1. Click "Entity Registrations" in the menu
2. Click "Register Entity"
3. Follow the prompts to enter your business information

**Key Sections:**
- Core Data (business name, address, EIN)
- Assertions (business type, size)
- Representations and Certifications
- Points of Contact`
      },
      {
        heading: "Step 4: Submit and Track",
        content: `After completing all sections:

1. Review all information for accuracy
2. Click "Submit"
3. Note your registration tracking number
4. Check your email for confirmation

Your CAGE Code will be assigned within 3-10 business days. You'll receive an email when it's ready.`
      }
    ],
    
    showOpnGovIQCallout: true,
    showFHCCallout: true,
    
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  
  {
    id: "cage-code-requirements",
    slug: "cage-code-requirements",
    pageType: "checklist",
    status: "published",
    
    title: "CAGE Code Requirements: Complete Checklist for 2025",
    subtitle: "Everything you need before applying for your CAGE Code",
    
    metaTitle: "CAGE Code Requirements: What You Need to Apply (2025)",
    metaDescription: "Complete checklist of CAGE Code requirements. Know exactly what documents and information you need before starting your application.",
    focusKeyword: "cage code requirements",
    
    primaryCtaText: "Download Checklist",
    primaryCtaUrl: "#lead-magnet",
    
    quickDefinition: "To get a CAGE Code, you need a legal business entity, EIN, physical address, and bank account. The application is free through SAM.gov.",
    keyPoints: [
      "Legal business entity required",
      "EIN or SSN for sole proprietors",
      "Physical address (no P.O. boxes)",
      "Bank account for payments"
    ],
    
    sections: [
      {
        heading: "Business Entity Requirements",
        content: `You must have a legal business entity to get a CAGE Code:

**Accepted Entity Types:**
- LLC (Limited Liability Company)
- Corporation (C-Corp, S-Corp)
- Partnership
- Sole Proprietorship
- Non-profit organization

**Not Eligible:**
- Individuals without a business
- Informal businesses without registration`
      },
      {
        heading: "Documentation Checklist",
        content: `Have these documents ready:

**Required:**
☐ EIN confirmation letter from IRS (or SSN for sole proprietors)
☐ Business registration/formation documents
☐ Bank account information (routing and account numbers)
☐ Proof of physical address

**Recommended:**
☐ Business website
☐ Capability statement
☐ NAICS codes for your industry`
      }
    ],
    
    leadMagnet: {
      title: "Download: CAGE Code Requirements Checklist PDF",
      description: "Print-friendly checklist of everything you need to apply for your CAGE Code.",
      pdfUrl: ""
    },
    
    showOpnGovIQCallout: true,
    showFHCCallout: true,
    
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  
  {
    id: "cage-code-vs-duns",
    slug: "cage-code-vs-duns-number",
    pageType: "definition",
    status: "published",
    
    title: "CAGE Code vs DUNS Number: Key Differences Explained",
    subtitle: "Understanding the difference between CAGE Codes, DUNS, and UEI",
    
    metaTitle: "CAGE Code vs DUNS Number: What's the Difference?",
    metaDescription: "Confused about CAGE Code vs DUNS number? Learn the key differences, when you need each, and how they relate to your UEI number.",
    focusKeyword: "cage code vs duns number",
    
    primaryCtaText: "Get Your CAGE Code",
    primaryCtaUrl: "/resources/cage-code",
    
    quickDefinition: "CAGE Codes are government-issued identifiers for federal contractors, while DUNS numbers were private identifiers from Dun & Bradstreet. DUNS has been replaced by UEI (Unique Entity Identifier) as of April 2022.",
    keyPoints: [
      "CAGE Code = Government issued (free)",
      "DUNS = Private (discontinued April 2022)",
      "UEI = New replacement for DUNS (free)",
      "You need both CAGE Code and UEI for federal contracting"
    ],
    
    sections: [
      {
        heading: "Quick Comparison Table",
        content: `| Feature | CAGE Code | DUNS | UEI |
|---------|-----------|------|-----|
| **Issued By** | DLA (Government) | Dun & Bradstreet | SAM.gov |
| **Cost** | Free | Was Free | Free |
| **Format** | 5 characters | 9 digits | 12 characters |
| **Status** | Active | Discontinued | Active |
| **Required For** | Federal contracts | N/A (replaced) | SAM.gov registration |`
      },
      {
        heading: "What Happened to DUNS Numbers?",
        content: `DUNS numbers were discontinued in April 2022 and replaced by UEI (Unique Entity Identifier).

**What this means for you:**
- You no longer need a DUNS number
- Your UEI is assigned automatically in SAM.gov
- Old DUNS numbers are no longer valid

**If you had a DUNS:** Your business was automatically assigned a UEI during the transition.`
      },
      {
        heading: "Do You Need Both CAGE Code and UEI?",
        content: `Yes! For federal contracting, you need:

1. **UEI** - Assigned during SAM.gov registration
2. **CAGE Code** - Assigned after SAM.gov registration completes

Both are free and obtained through the same SAM.gov registration process.`
      }
    ],
    
    showOpnGovIQCallout: true,
    showFHCCallout: true,
    
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

// Generate JSON output
function generateFramerContent() {
  // Create output directory if it doesn't exist
  if (!fs.existsSync(CONFIG.outputDir)) {
    fs.mkdirSync(CONFIG.outputDir, { recursive: true });
  }
  
  // Generate main content file
  const contentData = {
    collection: "cage-code-pages",
    lastUpdated: new Date().toISOString(),
    itemCount: cageCodePages.length,
    items: cageCodePages
  };
  
  const outputPath = path.join(CONFIG.outputDir, 'cage-code-pages.json');
  fs.writeFileSync(outputPath, JSON.stringify(contentData, null, 2));
  
  console.log('✅ Generated:', outputPath);
  console.log(`   ${cageCodePages.length} pages ready for Framer`);
  
  // Generate individual page files
  cageCodePages.forEach(page => {
    const pagePath = path.join(CONFIG.outputDir, `${page.slug}.json`);
    fs.writeFileSync(pagePath, JSON.stringify(page, null, 2));
    console.log(`   - ${page.slug}.json`);
  });
  
  console.log('\n📋 Next Steps:');
  console.log('1. Host these JSON files (GitHub Pages, Vercel, or your server)');
  console.log('2. Use Framer\'s fetch() to pull content into your CMS');
  console.log('3. Or copy content directly from JSON to Framer CMS fields');
  
  return contentData;
}

// Run if called directly
if (require.main === module) {
  generateFramerContent();
}

module.exports = { generateFramerContent, cageCodePages };

