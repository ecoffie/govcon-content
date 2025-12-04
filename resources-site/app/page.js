import Link from 'next/link'

export const metadata = {
  title: 'Federal Contracting Resources | GovCon Giants',
  description: 'Free guides, tools, and resources for federal contractors. Learn about CAGE Codes, certifications, SAM.gov registration, and more.',
}

export default function HomePage() {
  const resources = [
    {
      title: "CAGE Code Complete Guide",
      description: "Everything you need to know about getting and using your CAGE Code",
      href: "/cage-code",
      badge: "Most Popular"
    },
    {
      title: "CAGE Code Lookup Tool",
      description: "Search and verify CAGE Codes for any federal contractor",
      href: "/cage-code-lookup",
      badge: null
    },
    {
      title: "What is a CAGE Code?",
      description: "Simple explanation of CAGE Codes for beginners",
      href: "/what-is-a-cage-code",
      badge: null
    },
    {
      title: "How to Get a CAGE Code",
      description: "Step-by-step guide to getting your CAGE Code",
      href: "/how-to-get-cage-code",
      badge: null
    },
    {
      title: "CAGE Code Requirements",
      description: "Complete checklist of what you need to apply",
      href: "/cage-code-requirements",
      badge: null
    },
    {
      title: "CAGE Code vs DUNS Number",
      description: "Understand the key differences",
      href: "/cage-code-vs-duns-number",
      badge: null
    }
  ]

  return (
    <>
      <nav className="nav">
        <Link href="https://govcongiants.org" className="nav-logo">
          GovCon Giants
        </Link>
        <div className="nav-links">
          <Link href="https://govcongiants.org">Home</Link>
          <Link href="https://govcongiants.org/fhc">Join FHC</Link>
        </div>
      </nav>

      <div className="hero">
        <h1>Federal Contracting Resources</h1>
        <p>Free guides, tools, and resources to help you win government contracts</p>
        <Link href="/cage-code" className="btn btn-white">
          Start with CAGE Codes →
        </Link>
      </div>

      <div className="container" style={{ padding: '60px 20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: 40, color: 'var(--primary)' }}>
          Browse Resources
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 24 
        }}>
          {resources.map((resource, i) => (
            <Link 
              key={i} 
              href={resource.href}
              style={{
                background: 'white',
                border: '1px solid #e0e0e0',
                borderRadius: 8,
                padding: 24,
                textDecoration: 'none',
                color: 'inherit',
                transition: 'box-shadow 0.2s, transform 0.2s',
                display: 'block'
              }}
            >
              {resource.badge && (
                <span style={{
                  background: 'var(--primary)',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: 20,
                  fontSize: 12,
                  fontWeight: 600,
                  marginBottom: 12,
                  display: 'inline-block'
                }}>
                  {resource.badge}
                </span>
              )}
              <h3 style={{ 
                color: 'var(--primary)', 
                marginBottom: 8,
                marginTop: resource.badge ? 12 : 0
              }}>
                {resource.title}
              </h3>
              <p style={{ color: 'var(--gray)', margin: 0 }}>
                {resource.description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <div className="cta-section">
        <h2>Ready to Win Government Contracts?</h2>
        <div className="cta-buttons">
          <Link href="https://opngoviq.com" className="btn btn-white">
            Try OpnGovIQ Free
          </Link>
          <Link href="https://govcongiants.org/fhc" className="btn btn-orange">
            Join Federal Help Center
          </Link>
        </div>
      </div>

      <footer className="footer">
        <p>© 2025 GovCon Giants. All rights reserved.</p>
        <p style={{ marginTop: 8 }}>
          <Link href="https://govcongiants.org">Main Site</Link>
          {' · '}
          <Link href="https://govcongiants.org/fhc">Federal Help Center</Link>
          {' · '}
          <Link href="https://opngoviq.com">OpnGovIQ</Link>
        </p>
      </footer>
    </>
  )
}

