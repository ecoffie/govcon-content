import './globals.css'

export const metadata = {
  metadataBase: new URL('https://guides.govcongiants.org'),
  title: {
    default: 'Federal Contracting Guides | GovCon Giants',
    template: '%s | GovCon Giants'
  },
  description: 'Free guides, tools, and resources for federal contractors. Learn about CAGE Codes, certifications, SAM.gov registration, and winning government contracts.',
  keywords: ['CAGE code', 'federal contracting', 'government contracts', 'SAM.gov', 'small business', '8(a) certification', 'WOSB', 'VOSB', 'HUBZone'],
  authors: [{ name: 'GovCon Giants' }],
  creator: 'GovCon Giants',
  publisher: 'GovCon Giants',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://guides.govcongiants.org',
    siteName: 'GovCon Giants Guides',
    title: 'Federal Contracting Guides | GovCon Giants',
    description: 'Free guides, tools, and resources for federal contractors. Learn about CAGE Codes, certifications, SAM.gov registration, and winning government contracts.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GovCon Giants - Federal Contracting Guides',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Federal Contracting Guides | GovCon Giants',
    description: 'Free guides for federal contractors. CAGE Codes, certifications, SAM.gov, and more.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add these when you set them up:
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: 'https://guides.govcongiants.org',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1A3A2E" />
      </head>
      <body>
        {children}
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "GovCon Giants",
              "url": "https://govcongiants.org",
              "logo": "https://govcongiants.org/logo.png",
              "sameAs": [
                "https://www.linkedin.com/company/govcongiants",
                "https://twitter.com/govcongiants"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "url": "https://govcongiants.org/contact"
              }
            })
          }}
        />
        
        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "GovCon Giants Guides",
              "url": "https://guides.govcongiants.org",
              "publisher": {
                "@type": "Organization",
                "name": "GovCon Giants"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://guides.govcongiants.org/?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </body>
    </html>
  )
}
