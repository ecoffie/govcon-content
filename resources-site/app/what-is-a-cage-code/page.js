import { Nav, Hero, QuickAnswer, Section, OpnGovIQCallout, FHCCallout, CTASection, Footer } from '../../components/PageLayout'
import Link from 'next/link'

export const metadata = {
  title: 'What is a CAGE Code? Complete Guide for Beginners 2025',
  description: 'Learn what a CAGE Code is, why you need one for federal contracting, and how it differs from DUNS and UEI numbers. Simple explanation for beginners.',
  keywords: ['what is a cage code', 'cage code definition', 'cage code meaning', 'cage code explained', 'federal contractor id'],
  alternates: {
    canonical: 'https://guides.govcongiants.org/what-is-a-cage-code',
  },
  openGraph: {
    title: 'What is a CAGE Code? Complete Guide for Beginners',
    description: 'Simple explanation of CAGE Codes for federal contracting beginners.',
    url: 'https://guides.govcongiants.org/what-is-a-cage-code',
    type: 'article',
  },
}

export default function WhatIsCageCodePage() {
  return (
    <>
      <Nav />
      
      <Hero 
        title="What is a CAGE Code?"
        subtitle="Everything you need to know about CAGE Codes for federal contracting"
        ctaText="Get Your CAGE Code"
        ctaUrl="/cage-code"
      />

      <QuickAnswer 
        definition="A CAGE Code (Commercial and Government Entity Code) is a unique 5-character alphanumeric identifier assigned by the Defense Logistics Agency (DLA) to entities doing business with the federal government."
        keyPoints={[
          "5-character alphanumeric identifier",
          "Assigned by Defense Logistics Agency (DLA)",
          "Required for federal contract bidding",
          "Different from DUNS number and UEI"
        ]}
      />

      <Section heading="CAGE Code Definition Explained">
        <p>
          <strong>CAGE Code</strong> stands for Commercial and Government Entity Code. It's a unique identifier that the federal government uses to track and identify businesses that want to work with government agencies.
        </p>
        <p><strong>Simple Explanation:</strong></p>
        <p>
          Think of your CAGE Code like a government-issued business ID number. Just as you need a driver's license to drive, you need a CAGE Code to do business with the federal government.
        </p>
        <p><strong>Format:</strong></p>
        <p>
          CAGE Codes are exactly 5 characters long and contain a mix of letters and numbers. For example: 1ABC2 or 5XYZ9.
        </p>
      </Section>

      <Section heading="Why Do You Need a CAGE Code?">
        <p>You need a CAGE Code if you want to:</p>
        <ul>
          <li><strong>Bid on federal contracts</strong> - All contract proposals require a CAGE Code</li>
          <li><strong>Register in SAM.gov</strong> - CAGE Code is assigned during registration</li>
          <li><strong>Become a subcontractor</strong> - Prime contractors require your CAGE Code</li>
          <li><strong>Receive government payments</strong> - Payment systems use CAGE Codes</li>
        </ul>
        <p><strong>Bottom line:</strong> No CAGE Code = No federal contracts.</p>
      </Section>

      <OpnGovIQCallout />

      <Section heading="Who Issues CAGE Codes?">
        <p>
          CAGE Codes are issued by the <strong>Defense Logistics Agency (DLA)</strong>, specifically the DLA's CAGE Program Office.
        </p>
        <p>
          However, you don't need to contact DLA directly. When you complete your SAM.gov registration, a CAGE Code is automatically assigned to your business.
        </p>
        <p>
          <Link href="/how-to-get-cage-code">Learn how to get your CAGE Code →</Link>
        </p>
      </Section>

      <Section heading="CAGE Code vs DUNS vs UEI">
        <p>Confused about these different identifiers? Here's the breakdown:</p>
        <ul>
          <li><strong>CAGE Code</strong> - Government-issued, 5 characters, still active and required</li>
          <li><strong>DUNS Number</strong> - Was issued by Dun & Bradstreet, 9 digits, discontinued April 2022</li>
          <li><strong>UEI</strong> - Unique Entity Identifier, replaced DUNS, assigned by SAM.gov</li>
        </ul>
        <p>
          <strong>What you need today:</strong> Both a CAGE Code and UEI (both are assigned during SAM.gov registration).
        </p>
        <p>
          <Link href="/cage-code-vs-duns-number">Full comparison: CAGE Code vs DUNS →</Link>
        </p>
      </Section>

      <FHCCallout />

      <CTASection />

      <Footer />
    </>
  )
}

