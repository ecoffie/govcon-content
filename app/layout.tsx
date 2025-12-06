import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://govcongiants.com"),
  title: {
    default: "GovCon Giants - Government Procurement & Contracting Resources",
    template: "%s | GovCon Giants",
  },
  description:
    "Master government procurement and contracting with GovCon Giants. Join 10,000+ small businesses winning federal contracts.",
  keywords: [
    "government procurement",
    "federal contracting",
    "small business",
    "SAM.gov",
    "government contracts",
  ],
  authors: [{ name: "GovCon Giants" }],
  creator: "GovCon Giants",
  publisher: "GovCon Giants",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://govcongiants.com",
    siteName: "GovCon Giants",
    title: "GovCon Giants - Government Procurement & Contracting Resources",
    description:
      "Master government procurement and contracting with GovCon Giants. Join 10,000+ small businesses winning federal contracts.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GovCon Giants - Government Procurement & Contracting Resources",
    description:
      "Master government procurement and contracting with GovCon Giants. Join 10,000+ small businesses winning federal contracts.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Analytics - Replace with your GA4 ID */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "GovCon Giants",
              url: "https://govcongiants.com",
              logo: "https://govcongiants.com/logo.png",
              description:
                "Leading community and resource platform for small businesses pursuing government contracts",
              sameAs: [
                "https://twitter.com/govcongiants",
                "https://linkedin.com/company/govcongiants",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
