import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Federal Contractor Database | GovCon Giants',
  description: 'Searchable database of 2,768 federal prime contractors with $479.9B in contract data. Find prime contractor partners for your small business.',
  openGraph: {
    title: 'Federal Contractor Database | GovCon Giants',
    description: 'Searchable database of 2,768 federal contractors with contact info, NAICS codes, and contract data.',
    url: 'https://guides.govcongiants.org/database',
    type: 'website',
  },
};

export default function DatabasePage() {
  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0 }}>
      <iframe
        src="/contractor-database.html"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          margin: 0,
          padding: 0,
        }}
        title="Federal Contractor Database"
      />
    </div>
  );
}
