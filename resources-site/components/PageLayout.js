import Link from 'next/link'
import { LeadMagnetForm } from './LeadMagnetForm'

export function Nav() {
  return (
    <nav className="nav">
      <Link href="https://govcongiants.org" className="nav-logo">
        GovCon Giants
      </Link>
      <div className="nav-links">
        <Link href="/">Resources</Link>
        <Link href="https://govcongiants.org/fhc">Join FHC</Link>
      </div>
    </nav>
  )
}

export function Hero({ title, subtitle, ctaText, ctaUrl }) {
  return (
    <div className="hero">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {ctaText && (
        <a href={ctaUrl} className="btn btn-white">
          {ctaText}
        </a>
      )}
    </div>
  )
}

export function QuickAnswer({ definition, keyPoints }) {
  return (
    <div className="quick-answer container">
      <div className="quick-answer-header">
        <span>💡</span>
        <strong>Quick Answer</strong>
      </div>
      <p>{definition}</p>
      <ul className="key-points">
        {keyPoints.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  )
}

export function Section({ heading, children }) {
  return (
    <section className="section">
      <h2>{heading}</h2>
      {children}
    </section>
  )
}

export function LeadMagnet({ title, description, leadMagnetName, downloadUrl }) {
  // Get FormSpark form ID from environment variable
  const formId = process.env.NEXT_PUBLIC_FORMSPARK_FORM_ID || 'YOUR_FORMSPARK_FORM_ID'
  
  return (
    <div className="lead-magnet">
      <h3>
        <span>📥</span>
        {title}
      </h3>
      <p>{description}</p>
      <LeadMagnetForm 
        formId={formId}
        downloadUrl={downloadUrl}
        leadMagnetName={leadMagnetName || title}
      />
    </div>
  )
}

export function OpnGovIQCallout() {
  return (
    <div className="callout callout-green">
      <h3>🚀 Track CAGE Code Status in OpnGovIQ</h3>
      <ul>
        <li>✓ Research federal opportunities with AI</li>
        <li>✓ Track your registration status</li>
        <li>✓ Get alerts on new contracts</li>
      </ul>
      <Link href="https://opngoviq.com" className="btn btn-primary">
        Start Free Trial
      </Link>
    </div>
  )
}

export function FHCCallout() {
  return (
    <div className="callout callout-orange">
      <h3>🤝 Get Expert Help with CAGE Code Questions</h3>
      <ul>
        <li>✓ 24/7 access to GovCon experts</li>
        <li>✓ Templates and checklists</li>
        <li>✓ Community of federal contractors</li>
      </ul>
      <Link href="https://govcongiants.org/fhc" className="btn btn-orange">
        Join Federal Help Center
      </Link>
    </div>
  )
}

export function CTASection() {
  return (
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
  )
}

export function Footer() {
  return (
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
  )
}
