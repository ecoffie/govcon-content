import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { baseProcurementContent, generateLocationVariation, generateIndustryVariation } from '@/lib/data/procurement-content';
import { ProcurementPage } from '@/types/content';

// This would come from a database or CMS in production
const variations: Record<string, Partial<ProcurementPage>> = {
  'government-procurement-california': generateLocationVariation('California', 'CA'),
  'government-procurement-texas': generateLocationVariation('Texas', 'TX'),
  'government-procurement-florida': generateLocationVariation('Florida', 'FL'),
  'government-procurement-technology': generateIndustryVariation('Technology', ['541511', '541512']),
  'government-procurement-construction': generateIndustryVariation('Construction', ['236220', '237310']),
};

// Generate static params for all variations
export async function generateStaticParams() {
  return Object.keys(variations).map((slug) => ({
    slug: slug.replace('government-procurement-', ''),
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const fullSlug = `government-procurement-${slug}`;
  const variation = variations[fullSlug];

  if (!variation) {
    return {
      title: 'Page Not Found | GovCon Giants',
    };
  }

  const metadata = variation.metadata || baseProcurementContent.metadata;

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
    },
  };
}

export default async function ProcurementVariationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const fullSlug = `government-procurement-${slug}`;
  const variation = variations[fullSlug];

  if (!variation) {
    notFound();
  }

  // Merge variation with base content
  const pageContent: ProcurementPage = {
    ...baseProcurementContent,
    ...variation,
    metadata: { ...baseProcurementContent.metadata, ...variation.metadata },
    hero: { ...baseProcurementContent.hero, ...variation.hero },
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageContent.schemaMarkup),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-govcon-primary to-neutral-dark-charcoal text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {pageContent.hero.h1}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            {pageContent.hero.subheadline}
          </p>
          <a
            href={pageContent.hero.cta.buttonLink}
            className="inline-block bg-accent-green text-neutral-dark-charcoal px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-green/90 transition-colors"
          >
            {pageContent.hero.cta.buttonText}
          </a>
        </div>
      </section>

      {/* Table of Contents */}
      <nav className="sticky top-0 bg-white border-b border-gray-200 shadow-sm z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 space-x-6">
            {pageContent.tableOfContents.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm font-medium text-gray-700 hover:text-govcon-primary whitespace-nowrap transition-colors"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {pageContent.sections.map((section, index) => (
          <section key={section.id} id={section.id} className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {section.title}
            </h2>
            <div
              className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: section.content.replace(/\n\n/g, '</p><p>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
            />

            {section.subsections && section.subsections.map((subsection) => (
              <div key={subsection.title} className="mt-8 pl-6 border-l-4 border-accent-green">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {subsection.title}
                </h3>
                <div
                  className="prose prose-lg max-w-none text-gray-700"
                  dangerouslySetInnerHTML={{ __html: subsection.content.replace(/\n/g, '<br />') }}
                />
              </div>
            ))}

            {/* Insert CTA after 3rd section */}
            {index === 2 && (
              <div className="mt-12 bg-accent-light-blue border-2 border-govcon-primary/30 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {pageContent.ctas[0].title}
                </h3>
                <p className="text-gray-700 mb-6">
                  {pageContent.ctas[0].description}
                </p>
                <a
                  href={pageContent.ctas[0].buttonLink}
                  className="inline-block bg-govcon-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-govcon-primary/90 transition-colors"
                >
                  {pageContent.ctas[0].buttonText}
                </a>
              </div>
            )}
          </section>
        ))}

        {/* FAQ Section */}
        <section id="faqs" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {pageContent.faqs.map((faq, index) => (
              <details key={index} className="bg-gray-50 rounded-lg p-6 group">
                <summary className="text-xl font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {faq.question}
                  <span className="text-govcon-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          {/* FAQ Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: pageContent.faqs.map((faq) => ({
                  '@type': 'Question',
                  name: faq.question,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer,
                  },
                })),
              }),
            }}
          />
        </section>

        {/* Final CTA Section */}
        <section className="bg-gradient-to-r from-govcon-primary to-neutral-dark-charcoal text-white rounded-lg p-12 text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Win Government Contracts?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join 10,000+ small businesses in the GovCon Giants community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={pageContent.ctas[0].buttonLink}
              className="bg-accent-green text-neutral-dark-charcoal px-8 py-4 rounded-lg font-semibold hover:bg-accent-green/90 transition-colors"
            >
              {pageContent.ctas[0].buttonText}
            </a>
            <a
              href={pageContent.ctas[1].buttonLink}
              className="bg-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors border-2 border-white"
            >
              {pageContent.ctas[1].buttonText}
            </a>
          </div>
        </section>

        {/* Related Content */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Related Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pageContent.relatedContent.map((item) => (
              <a
                key={item.url}
                href={item.url}
                className="block bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-accent-green hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </a>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
