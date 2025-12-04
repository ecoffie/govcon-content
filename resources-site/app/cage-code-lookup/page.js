import { Nav, Hero, QuickAnswer, Section, OpnGovIQCallout, FHCCallout, CTASection, Footer } from '../../components/PageLayout'

export const metadata = {
  title: 'CAGE Code Lookup Tool - Free Search & Verification',
  description: 'Search for any company\'s CAGE Code. Free CAGE Code lookup and verification tool with detailed company information.',
  keywords: ['cage code lookup', 'cage code search', 'verify cage code', 'find cage code', 'contractor verification'],
  alternates: {
    canonical: 'https://guides.govcongiants.org/cage-code-lookup',
  },
  openGraph: {
    title: 'CAGE Code Lookup Tool - Free Search & Verification',
    description: 'Search for any company\'s CAGE Code. Free lookup and verification tool.',
    url: 'https://guides.govcongiants.org/cage-code-lookup',
    type: 'article',
  },
}

export default function CageCodeLookupPage() {
  return (
    <>
      <Nav />
      
      <Hero 
        title="CAGE Code Lookup & Verification Tool"
        subtitle="Search and verify CAGE Codes for any federal contractor"
        ctaText="Search CAGE Codes"
        ctaUrl="https://sam.gov"
      />

      <QuickAnswer 
        definition="Use the official SAM.gov CAGE Code lookup tool to search and verify any company's Commercial and Government Entity Code. Find contractor details, registration status, and verification information instantly."
        keyPoints={[
          "Search by company name or CAGE Code",
          "Verify contractor registration status",
          "Free to use - no account required",
          "Updated with latest SAM.gov data"
        ]}
      />

      <Section heading="How to Look Up a CAGE Code">
        <p>There are two ways to look up CAGE Code information:</p>
        
        <p><strong>Option 1: SAM.gov (Official)</strong></p>
        <ol>
          <li>Go to <a href="https://sam.gov" target="_blank" rel="noopener">sam.gov</a></li>
          <li>Click "Search" in the navigation</li>
          <li>Select "Entity Information"</li>
          <li>Enter the company name or CAGE Code</li>
          <li>View results with registration details</li>
        </ol>
        
        <p><strong>Option 2: DLA CAGE Search</strong></p>
        <ol>
          <li>Go to <a href="https://cage.dla.mil" target="_blank" rel="noopener">cage.dla.mil</a></li>
          <li>Enter CAGE Code or company name</li>
          <li>View basic CAGE information</li>
        </ol>
      </Section>

      <Section heading="What Information Does a CAGE Code Lookup Show?">
        <p>A CAGE Code lookup reveals important contractor information:</p>
        <ul>
          <li><strong>Company Name</strong> - Legal business name</li>
          <li><strong>Physical Address</strong> - Business location</li>
          <li><strong>CAGE Code Status</strong> - Active or inactive</li>
          <li><strong>Registration Date</strong> - When the CAGE was assigned</li>
          <li><strong>Business Type</strong> - Size and ownership classifications</li>
        </ul>
        <p>This information helps you verify contractors before doing business with them.</p>
      </Section>

      <OpnGovIQCallout />

      <Section heading="Why Verify a CAGE Code?">
        <p>Verifying a CAGE Code is important for several reasons:</p>
        <ul>
          <li><strong>Due Diligence</strong> - Confirm a company is registered to do federal business</li>
          <li><strong>Subcontractor Vetting</strong> - Verify potential teaming partners</li>
          <li><strong>Proposal Accuracy</strong> - Ensure you have correct information</li>
          <li><strong>Compliance</strong> - Meet federal contracting requirements</li>
        </ul>
      </Section>

      <FHCCallout />

      <CTASection />

      <Footer />
    </>
  )
}

