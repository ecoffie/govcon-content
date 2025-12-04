import { Nav, Hero, QuickAnswer, Section, OpnGovIQCallout, FHCCallout, CTASection, Footer } from '../../components/PageLayout'
import Link from 'next/link'

export const metadata = {
  title: 'CAGE Code vs DUNS Number: What\'s the Difference?',
  description: 'Understand the key differences between CAGE Code and DUNS Number (now UEI). Learn which identifiers you need for federal contracting in 2025.',
  keywords: ['cage code vs duns', 'duns number', 'UEI number', 'cage code duns difference', 'federal contractor identifiers'],
  alternates: {
    canonical: 'https://guides.govcongiants.org/cage-code-vs-duns-number',
  },
  openGraph: {
    title: 'CAGE Code vs DUNS Number: Key Differences',
    description: 'Understand the differences between CAGE Code and DUNS Number (now UEI).',
    url: 'https://guides.govcongiants.org/cage-code-vs-duns-number',
    type: 'article',
  },
}

export default function CageCodeVsDunsPage() {
  return (
    <>
      <Nav />
      
      <Hero 
        title="CAGE Code vs DUNS Number: Key Differences"
        subtitle="Understand these essential federal contractor identifiers"
        ctaText="Get Your Identifiers"
        ctaUrl="/cage-code"
      />

      <QuickAnswer 
        definition="CAGE Code is a government-issued 5-character identifier still used today. DUNS was a 9-digit number from Dun & Bradstreet that was discontinued in April 2022 and replaced by UEI (Unique Entity Identifier)."
        keyPoints={[
          "CAGE Code: Still required and active",
          "DUNS Number: Discontinued April 2022",
          "UEI: Replaced DUNS, assigned by SAM.gov",
          "You need both CAGE Code and UEI today"
        ]}
      />

      <Section heading="Comparison Table">
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
            <thead>
              <tr style={{ background: 'var(--primary)', color: 'white' }}>
                <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Feature</th>
                <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>CAGE Code</th>
                <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>DUNS Number</th>
                <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>UEI</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}><strong>Status</strong></td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>✅ Active</td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>❌ Discontinued</td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>✅ Active</td>
              </tr>
              <tr style={{ background: '#f9f9f9' }}>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}><strong>Issuer</strong></td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>DLA (Government)</td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>Dun & Bradstreet</td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>SAM.gov</td>
              </tr>
              <tr>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}><strong>Format</strong></td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>5 characters</td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>9 digits</td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>12 characters</td>
              </tr>
              <tr style={{ background: '#f9f9f9' }}>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}><strong>Cost</strong></td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>Free</td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>Was free (mostly)</td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>Free</td>
              </tr>
              <tr>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}><strong>How to Get</strong></td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>SAM.gov registration</td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>N/A</td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>SAM.gov registration</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section heading="What Happened to DUNS Numbers?">
        <p>
          On <strong>April 4, 2022</strong>, the federal government stopped using DUNS numbers and transitioned to the Unique Entity Identifier (UEI) system.
        </p>
        <p><strong>Why the change?</strong></p>
        <ul>
          <li>DUNS was owned by a private company (Dun & Bradstreet)</li>
          <li>Government wanted control over its own identifier system</li>
          <li>UEI is free and government-managed</li>
          <li>Simplified the registration process</li>
        </ul>
        <p><strong>If you had a DUNS number:</strong> You were automatically assigned a UEI. You can find it in your SAM.gov profile.</p>
      </Section>

      <OpnGovIQCallout />

      <Section heading="What You Need in 2025">
        <p>For federal contracting today, you need:</p>
        <ol>
          <li><strong>UEI (Unique Entity Identifier)</strong> - Your primary business identifier</li>
          <li><strong>CAGE Code</strong> - Your government contractor identifier</li>
          <li><strong>Active SAM.gov registration</strong> - Both identifiers are assigned here</li>
        </ol>
        <p>Good news: Both the UEI and CAGE Code are assigned automatically when you complete your SAM.gov registration. One registration gets you both.</p>
      </Section>

      <Section heading="Do I Still Need My Old DUNS Number?">
        <p><strong>Short answer: No.</strong></p>
        <p>Your DUNS number is no longer used in federal systems. However, you might still see references to it in:</p>
        <ul>
          <li>Old contracts and documents</li>
          <li>Some state and local systems (transitioning)</li>
          <li>Private sector databases</li>
        </ul>
        <p>Dun & Bradstreet still maintains DUNS numbers for private sector use, but it's not required for federal contracting.</p>
      </Section>

      <Section heading="Next Steps">
        <p>Ready to get your identifiers? Here's what to do:</p>
        <ol>
          <li><Link href="/cage-code-requirements">Check the requirements →</Link></li>
          <li><Link href="/how-to-get-cage-code">Follow our step-by-step guide →</Link></li>
          <li>Complete your SAM.gov registration</li>
          <li>Receive both UEI and CAGE Code automatically</li>
        </ol>
      </Section>

      <FHCCallout />

      <CTASection />

      <Footer />
    </>
  )
}

