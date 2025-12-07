import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { baseSamGovContent } from '@/lib/data/samgov-content';

// Define variation types
const variations = {
  // Location-based
  california: { type: 'location', name: 'California' },
  texas: { type: 'location', name: 'Texas' },
  florida: { type: 'location', name: 'Florida' },
  'new-york': { type: 'location', name: 'New York' },
  pennsylvania: { type: 'location', name: 'Pennsylvania' },
  illinois: { type: 'location', name: 'Illinois' },

  // Industry-based
  technology: { type: 'industry', name: 'Technology' },
  construction: { type: 'industry', name: 'Construction' },
  consulting: { type: 'industry', name: 'Consulting' },
  manufacturing: { type: 'industry', name: 'Manufacturing' },
  healthcare: { type: 'industry', name: 'Healthcare' },
  'professional-services': { type: 'industry', name: 'Professional Services' },
};

type VariationSlug = keyof typeof variations;

// Generate static params for all variations
export async function generateStaticParams() {
  return Object.keys(variations).map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for each variation
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const variation = variations[slug as VariationSlug];

  if (!variation) {
    return {
      title: 'Page Not Found | GovCon Giants',
    };
  }

  const title =
    variation.type === 'location'
      ? `SAM.gov Registration in ${variation.name} | GovCon Giants`
      : `SAM.gov Registration for ${variation.name} | GovCon Giants`;

  const description =
    variation.type === 'location'
      ? `Complete SAM.gov registration guide for ${variation.name}. Step-by-step instructions, local resources, and PTAC support for businesses in ${variation.name}.`
      : `SAM.gov registration guide for ${variation.name} businesses. Industry-specific requirements, NAICS codes, and strategies for ${variation.name} contractors.`;

  return {
    title,
    description,
    keywords: [
      'SAM.gov',
      'SAM.gov registration',
      variation.name,
      variation.type === 'location' ? `SAM.gov ${variation.name}` : `SAM.gov ${variation.name}`,
      'government contracting',
      'federal contracts',
    ],
    openGraph: {
      title,
      description,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function SamGovVariationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const variation = variations[slug as VariationSlug];

  if (!variation) {
    notFound();
  }

  const pageContent = {
    ...baseSamGovContent,
    hero: {
      ...baseSamGovContent.hero,
      h1:
        variation.type === 'location'
          ? `SAM.gov Registration in ${variation.name}`
          : `SAM.gov Registration for ${variation.name}`,
      subheadline:
        variation.type === 'location'
          ? `Complete guide for ${variation.name} businesses: Register on SAM.gov and start winning federal contracts`
          : `Industry-specific guide for ${variation.name} contractors: Navigate SAM.gov registration and grow your business`,
    },
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            ...baseSamGovContent.schemaMarkup,
            headline:
              variation.type === 'location'
                ? `SAM.gov Registration in ${variation.name}: Complete 2025 Resource`
                : `SAM.gov Registration for ${variation.name}: Complete 2025 Resource`,
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0066ff] to-[#131517] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <a
              href="/sam-gov"
              className="text-white/80 hover:text-white transition-colors inline-flex items-center gap-2"
            >
              ← Back to SAM.gov Guide
            </a>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            {pageContent.hero.h1}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white drop-shadow-md">
            {pageContent.hero.subheadline}
          </p>
          <a
            href={pageContent.hero.cta.buttonLink}
            className="inline-block bg-[#00fd9e] text-[#131517] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#00fd9e]/90 transition-colors shadow-lg"
          >
            {pageContent.hero.cta.buttonText}
          </a>
        </div>
      </section>

      {/* Location/Industry Specific Content */}
      <section className="bg-accent-light-blue border-y border-govcon-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {variation.type === 'location' ? (
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-govcon-primary mb-4">
                SAM.gov Registration Resources in {variation.name}
              </h2>
              <p className="text-neutral-medium-charcoal mb-6">
                Businesses in {variation.name} have access to local resources and support for SAM.gov
                registration and government contracting. This guide provides {variation.name}-specific
                information to help you succeed.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Local PTAC Support</h3>
                  <p className="text-gray-600">
                    Procurement Technical Assistance Centers in {variation.name} offer free one-on-one
                    counseling for SAM.gov registration.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">State Resources</h3>
                  <p className="text-gray-600">
                    {variation.name} state procurement offices and small business development centers
                    provide additional support.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Local Opportunities</h3>
                  <p className="text-gray-600">
                    Federal agencies in {variation.name} post contracts on SAM.gov - register to access
                    these opportunities.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-govcon-primary mb-4">
                SAM.gov Registration for {variation.name} Contractors
              </h2>
              <p className="text-neutral-medium-charcoal mb-6">
                {variation.name} contractors have unique requirements and opportunities in federal
                contracting. This guide addresses {variation.name}-specific considerations for SAM.gov
                registration.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">NAICS Codes</h3>
                  <p className="text-gray-600">
                    Select NAICS codes relevant to {variation.name} to ensure you're eligible for
                    industry-specific contracts.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Industry Requirements</h3>
                  <p className="text-gray-600">
                    {variation.name} contractors may need specific certifications or licenses to compete
                    for federal contracts.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Contract Opportunities</h3>
                  <p className="text-gray-600">
                    Federal agencies regularly post {variation.name} contracts - SAM.gov registration is
                    required to bid.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-govcon-primary mb-2">FREE</div>
              <div className="text-neutral-medium-charcoal">Registration Cost</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-govcon-primary mb-2">7-10 Days</div>
              <div className="text-neutral-medium-charcoal">Validation Timeline</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-govcon-primary mb-2">Annual</div>
              <div className="text-neutral-medium-charcoal">Renewal Required</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-govcon-primary mb-2">10,000+</div>
              <div className="text-neutral-medium-charcoal">GovCon Giants Members</div>
            </div>
          </div>
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
                className="text-sm font-medium text-neutral-medium-charcoal hover:text-govcon-primary whitespace-nowrap transition-colors"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{section.title}</h2>
            <div
              className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line"
              dangerouslySetInnerHTML={{
                __html: section.content
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/^#### (.*$)/gim, '<h4 class="text-xl font-semibold mt-6 mb-3">$1</h4>')
                  .replace(/^### (.*$)/gim, '<h3 class="text-2xl font-semibold mt-8 mb-4">$1</h3>')
                  .replace(/^- (.*$)/gim, '<li>$1</li>')
                  .replace(/(<li>.*<\/li>)/s, '<ul class="list-disc pl-6 space-y-2">$1</ul>'),
              }}
            />

            {/* Insert CTA after 3rd section */}
            {index === 2 && (
              <div className="mt-12 bg-accent-light-blue border-2 border-govcon-primary/30 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-neutral-dark-charcoal mb-3">
                  {pageContent.ctas[0].title}
                </h3>
                <p className="text-neutral-medium-charcoal mb-6">
                  {pageContent.ctas[0].description}
                </p>
                <a
                  href={pageContent.ctas[0].buttonLink}
                  className="inline-block bg-govcon-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-govcon-primary/90 transition-colors shadow-lg"
                >
                  {pageContent.ctas[0].buttonText}
                </a>
              </div>
            )}
          </section>
        ))}

        {/* FAQ Section */}
        <section id="faqs" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {pageContent.faqs.map((faq, index) => (
              <details key={index} className="bg-gray-50 rounded-lg p-6 group">
                <summary className="text-xl font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {faq.question}
                  <span className="text-govcon-primary group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">{faq.answer}</p>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Register on SAM.gov?</h2>
          <p className="text-xl mb-8 text-white/90">
            Join 10,000+ small businesses in the GovCon Giants community for free support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={pageContent.ctas[0].buttonLink}
              className="bg-accent-green text-neutral-dark-charcoal px-8 py-4 rounded-lg font-semibold hover:bg-accent-green/90 transition-colors shadow-lg"
            >
              {pageContent.ctas[0].buttonText}
            </a>
            <a
              href={pageContent.ctas[1].buttonLink}
              className="bg-white text-govcon-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors border-2 border-white shadow-lg"
            >
              {pageContent.ctas[1].buttonText}
            </a>
          </div>
        </section>

        {/* Related Content */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="/sam-gov"
              className="block bg-white border-2 border-govcon-primary rounded-lg p-6 hover:border-govcon-primary hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Main SAM.gov Registration Guide
              </h3>
              <p className="text-gray-600">
                Complete guide with step-by-step instructions for all businesses
              </p>
            </a>
            {pageContent.relatedContent.map((item) => (
              <a
                key={item.url}
                href={item.url}
                className="block bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-govcon-primary hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </a>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
