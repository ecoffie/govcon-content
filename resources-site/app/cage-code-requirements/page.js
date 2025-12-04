import { Nav, Hero, QuickAnswer, Section, LeadMagnet, OpnGovIQCallout, FHCCallout, CTASection, Footer } from '../../components/PageLayout'
import Link from 'next/link'

export const metadata = {
  title: 'CAGE Code Requirements: What You Need to Apply (2025)',
  description: 'Complete checklist of CAGE Code requirements. Everything you need to apply: documents, eligibility, and step-by-step verification process.',
}

export default function CageCodeRequirementsPage() {
  return (
    <>
      <Nav />
      
      <Hero 
        title="CAGE Code Requirements: Complete Checklist"
        subtitle="Everything you need to know and prepare before applying for your CAGE Code"
        ctaText="Download Checklist"
        ctaUrl="#lead-magnet"
      />

      <QuickAnswer 
        definition="To get a CAGE Code, you need a legal business entity, EIN (or SSN for sole proprietors), physical business address, and banking information. The application is free and done through SAM.gov."
        keyPoints={[
          "Legal business entity required",
          "EIN or SSN (for sole proprietors)",
          "Physical address (no P.O. boxes)",
          "Active bank account"
        ]}
      />

      <Section heading="Eligibility Requirements">
        <p><strong>Who CAN get a CAGE Code:</strong></p>
        <ul>
          <li>U.S. businesses (any type: LLC, Corporation, Sole Proprietorship)</li>
          <li>Foreign companies (receive an NCAGE code)</li>
          <li>Non-profit organizations</li>
          <li>State and local government entities</li>
          <li>Educational institutions</li>
        </ul>
        <p><strong>Who CANNOT get a CAGE Code:</strong></p>
        <ul>
          <li>Individuals without a business</li>
          <li>Entities with no intention to do federal business</li>
          <li>Companies with debarred or suspended status</li>
        </ul>
      </Section>

      <Section heading="Required Documents Checklist">
        <p>✅ <strong>Business Identification:</strong></p>
        <ul>
          <li>Legal business name</li>
          <li>DBA (Doing Business As) name, if applicable</li>
          <li>Business formation documents</li>
        </ul>
        
        <p>✅ <strong>Tax Information:</strong></p>
        <ul>
          <li>EIN (Employer Identification Number)</li>
          <li>IRS EIN confirmation letter</li>
          <li>Or SSN for sole proprietors</li>
        </ul>
        
        <p>✅ <strong>Address Information:</strong></p>
        <ul>
          <li>Physical street address (no P.O. boxes)</li>
          <li>Mailing address (can be different)</li>
          <li>Phone number</li>
        </ul>
        
        <p>✅ <strong>Banking Information:</strong></p>
        <ul>
          <li>Bank name</li>
          <li>Routing number</li>
          <li>Account number</li>
          <li>Account type (checking/savings)</li>
        </ul>
        
        <p>✅ <strong>Business Details:</strong></p>
        <ul>
          <li>Business start date</li>
          <li>NAICS codes (industry classifications)</li>
          <li>Number of employees</li>
          <li>Annual revenue</li>
        </ul>
      </Section>

      <div id="lead-magnet">
        <LeadMagnet 
          title="Download: CAGE Code Requirements Checklist PDF"
          description="Print this checklist and check off each item as you gather your documents. Be fully prepared before starting your application."
        />
      </div>

      <Section heading="Don't Have an EIN?">
        <p>No problem! You can get one for free from the IRS:</p>
        <ol>
          <li>Go to <a href="https://www.irs.gov/ein" target="_blank" rel="noopener">irs.gov/ein</a></li>
          <li>Click "Apply Online Now"</li>
          <li>Answer questions about your business</li>
          <li>Receive your EIN immediately</li>
        </ol>
        <p><strong>Time needed:</strong> 10-15 minutes</p>
        <p><strong>Cost:</strong> Free</p>
        <p><strong>Note:</strong> Sole proprietors can use their SSN instead of an EIN, but getting an EIN is recommended for privacy.</p>
      </Section>

      <OpnGovIQCallout />

      <Section heading="Address Requirements">
        <p>The address requirements for CAGE Codes are strict:</p>
        <ul>
          <li><strong>P.O. Box:</strong> NOT accepted as physical address</li>
          <li><strong>Virtual offices:</strong> Risky - may cause delays or rejection</li>
          <li><strong>Home address:</strong> Accepted if that's your business location</li>
          <li><strong>Commercial address:</strong> Best option</li>
        </ul>
        <p><strong>Tip:</strong> If you work from home, use your home address. It's acceptable and won't affect your application.</p>
      </Section>

      <Section heading="Common Mistakes to Avoid">
        <ul>
          <li>❌ Business name doesn't match IRS records exactly</li>
          <li>❌ Using a P.O. box as physical address</li>
          <li>❌ Incorrect EIN number</li>
          <li>❌ Missing banking information</li>
          <li>❌ Incomplete NAICS codes</li>
          <li>❌ Submitting duplicate registrations</li>
        </ul>
        <p>
          <strong>Ready to apply?</strong> <Link href="/how-to-get-cage-code">Follow our step-by-step guide →</Link>
        </p>
      </Section>

      <FHCCallout />

      <CTASection />

      <Footer />
    </>
  )
}

