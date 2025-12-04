import './globals.css'

export const metadata = {
  title: 'GovCon Giants Resources',
  description: 'Federal contracting resources for small businesses',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

