import { Nav, Hero, QuickAnswer, Section, LeadMagnet, OpnGovIQCallout, FHCCallout, CTASection, Footer } from '../../components/PageLayout'

export const metadata = {
  title: 'CAGE Code Guide 2025: Complete Resource for Federal Contractors',
  description: 'Learn everything about CAGE Codes: what they are, how to get one, requirements, and how to use it for federal contracting. Free checklist included.',
  keywords: ['CAGE code', 'what is a cage code', 'how to get cage code', 'cage code lookup', 'federal contracting', 'SAM.gov registration'],
  alternates: {
    canonical: 'https://govcon-guides.vercel.app/cage-code',
  },
  openGraph: {
    title: 'CAGE Code Guide 2025: Complete Resource for Federal Contractors',
    description: 'Learn everything about CAGE Codes: what they are, how to get one, requirements, and how to use it for federal contracting.',
    url: 'https://govcon-guides.vercel.app/cage-code',
    type: 'article',
  },
}

export default function CageCodePage() {
  return (
    <>
      <Nav />
      
      <Hero 
        title="CAGE Code Complete Guide: Everything Federal Contractors Need to Know"
        subtitle="Your complete resource for understanding, obtaining, and using your CAGE Code"
        ctaText="Download Free Guide"
        ctaUrl="#lead-magnet"
      />

      <QuickAnswer 
        definition="A CAGE (Commercial and Government Entity) Code is a 5-character identifier assigned to suppliers doing business with the federal government. It's required for SAM.gov registration and bidding on federal contracts."
        keyPoints={[
          "Required for all federal contractors",
          "Issued by DLA (Defense Logistics Agency)",
          "Free to obtain through SAM.gov",
          "Valid as long as SAM.gov registration is active"
        ]}
      />

      <Section heading="What is a CAGE Code?">
        <p>
          A <strong>CAGE Code</strong> (Commercial and Government Entity Code) is a unique five-character alphanumeric identifier assigned by the Defense Logistics Agency (DLA) to entities that conduct business with the federal government.
        </p>
        <p>
          Think of it as your business's ID card for federal contracting. Without it, you cannot register in SAM.gov or bid on government contracts.
        </p>
        <p><strong>Key Facts:</strong></p>
        <ul>
          <li>Issued by the Defense Logistics Agency (DLA)</li>
          <li>Completely free to obtain</li>
          <li>Required for SAM.gov registration</li>
          <li>Used to identify contractors in federal systems</li>
        </ul>
        <p>
          The CAGE Code system was originally developed for military procurement but is now used across all federal agencies to identify vendors and contractors.
        </p>
      </Section>

      <Section heading="CAGE Code Requirements">
        <p>Before you can get a CAGE Code, you'll need to have the following ready:</p>
        <p><strong>Business Requirements:</strong></p>
        <ul>
          <li>Legal business entity (LLC, Corporation, Sole Proprietorship)</li>
          <li>Valid EIN (Employer Identification Number) or SSN for sole proprietors</li>
          <li>Physical business address (P.O. boxes not accepted)</li>
          <li>Active bank account</li>
        </ul>
        <p><strong>Documents You'll Need:</strong></p>
        <ul>
          <li>Business registration documents</li>
          <li>EIN confirmation letter from IRS</li>
          <li>Bank account information</li>
          <li>Business contact information</li>
        </ul>
        <p><strong>Timeline:</strong></p>
        <ul>
          <li>Standard processing: 3-5 business days</li>
          <li>During peak periods: Up to 10 business days</li>
        </ul>
      </Section>

      <div id="free-checklist">
        <LeadMagnet 
          title="Download: CAGE Code Requirements Checklist"
          description="Get our step-by-step checklist to ensure you have everything you need for a smooth CAGE Code application. Save time and avoid mistakes."
          leadMagnetName="CAGE Code Requirements Checklist"
          downloadUrl="/downloads/cage-code-checklist.pdf"
        />
      </div>

      <Section heading="How to Get Your CAGE Code">
        <p>Getting your CAGE Code is a straightforward process through SAM.gov. Here's the step-by-step guide:</p>
        
        <p><strong>Step 1: Create a Login.gov Account</strong></p>
        <p>Visit login.gov and create an account using your business email.</p>
        
        <p><strong>Step 2: Go to SAM.gov</strong></p>
        <p>Navigate to sam.gov and click "Sign In" using your Login.gov credentials.</p>
        
        <p><strong>Step 3: Start Entity Registration</strong></p>
        <p>Click "Get Started" under Entity Registration and select your entity type.</p>
        
        <p><strong>Step 4: Complete Core Data</strong></p>
        <p>Enter your business information including:</p>
        <ul>
          <li>Legal business name</li>
          <li>Physical address</li>
          <li>EIN/TIN</li>
          <li>Business type and size</li>
        </ul>
        
        <p><strong>Step 5: Submit and Wait</strong></p>
        <p>After completing all sections, submit your registration. Your CAGE Code will be assigned automatically within 3-10 business days.</p>
        
        <p><strong>Pro Tip:</strong> Double-check all information before submitting. Errors can delay your CAGE Code assignment significantly.</p>
      </Section>

      <OpnGovIQCallout />

      <Section heading="Using Your CAGE Code">
        <p>Once you have your CAGE Code, you'll use it throughout your federal contracting journey:</p>
        
        <p><strong>In Proposals:</strong></p>
        <p>Include your CAGE Code in all federal contract proposals and capability statements.</p>
        
        <p><strong>On Contract Documents:</strong></p>
        <p>Your CAGE Code appears on contracts, purchase orders, and invoices.</p>
        
        <p><strong>For Verification:</strong></p>
        <p>Contracting officers use your CAGE Code to verify your registration and eligibility.</p>
        
        <p><strong>Subcontracting:</strong></p>
        <p>Prime contractors may require your CAGE Code before considering you as a subcontractor.</p>
        
        <p><strong>Important:</strong> Keep your SAM.gov registration active to maintain your CAGE Code validity. You must renew annually.</p>
      </Section>

      <Section heading="Common CAGE Code Questions">
        <p><strong>How much does a CAGE Code cost?</strong></p>
        <p>A CAGE Code is completely FREE. Never pay anyone to get you a CAGE Code.</p>
        
        <p><strong>Can I have multiple CAGE Codes?</strong></p>
        <p>Yes, if your business has multiple physical locations, each location can have its own CAGE Code.</p>
        
        <p><strong>What's the difference between CAGE Code and DUNS?</strong></p>
        <p>CAGE Codes are government-issued identifiers, while DUNS numbers were private identifiers from Dun & Bradstreet. DUNS has been replaced by UEI (Unique Entity Identifier).</p>
        
        <p><strong>How long is a CAGE Code valid?</strong></p>
        <p>Your CAGE Code remains valid as long as your SAM.gov registration is active and renewed annually.</p>
        
        <p><strong>What if I made a mistake on my application?</strong></p>
        <p>Log into SAM.gov and update your entity registration. Changes typically process within 24-48 hours.</p>
      </Section>

      <FHCCallout />

      <CTASection />

      <Footer />
    </>
  )
}

