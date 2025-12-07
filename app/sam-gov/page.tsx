import { Metadata } from 'next';
import { baseSamGovContent } from '@/lib/data/samgov-content';

export const metadata: Metadata = {
  title: baseSamGovContent.metadata.title,
  description: baseSamGovContent.metadata.description,
  keywords: baseSamGovContent.metadata.keywords,
  openGraph: {
    title: baseSamGovContent.metadata.title,
    description: baseSamGovContent.metadata.description,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: baseSamGovContent.metadata.title,
    description: baseSamGovContent.metadata.description,
  },
};

export default function SamGovPage() {
  const pageContent = baseSamGovContent;

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
      <section className="bg-gradient-to-br from-[#0066ff] to-[#131517] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Stats Bar */}
      <section className="bg-accent-light-blue border-y border-govcon-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-govcon-primary mb-2">49,500</div>
              <div className="text-neutral-medium-charcoal">Monthly SAM.gov Searches</div>
            </div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {section.title}
            </h2>
            <div
              className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line"
              dangerouslySetInnerHTML={{
                __html: section.content
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/^#### (.*$)/gim, '<h4 class="text-xl font-semibold mt-6 mb-3">$1</h4>')
                  .replace(/^### (.*$)/gim, '<h3 class="text-2xl font-semibold mt-8 mb-4">$1</h3>')
                  .replace(/^- (.*$)/gim, '<li>$1</li>')
                  .replace(/(<li>.*<\/li>)/s, '<ul class="list-disc pl-6 space-y-2">$1</ul>')
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
            Ready to Register on SAM.gov?
          </h2>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Related Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pageContent.relatedContent.map((item) => (
              <a
                key={item.url}
                href={item.url}
                className="block bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-govcon-primary hover:shadow-lg transition-all"
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

        {/* Programmatic Variations Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            SAM.gov Registration by Location
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['California', 'Texas', 'Florida', 'New York', 'Pennsylvania', 'Illinois'].map((state) => (
              <a
                key={state}
                href={`/sam-gov/${state.toLowerCase()}`}
                className="block bg-accent-light-blue border border-govcon-primary/30 rounded-lg p-4 text-center hover:bg-govcon-primary/10 transition-colors"
              >
                <span className="font-semibold text-govcon-primary">{state}</span>
              </a>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-16">
            SAM.gov Registration by Industry
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['Technology', 'Construction', 'Consulting', 'Manufacturing', 'Healthcare', 'Professional Services'].map((industry) => (
              <a
                key={industry}
                href={`/sam-gov/${industry.toLowerCase().replace(/\s+/g, '-')}`}
                className="block bg-accent-green/10 border border-accent-green/30 rounded-lg p-4 text-center hover:bg-accent-green/20 transition-colors"
              >
                <span className="font-semibold text-accent-green">{industry}</span>
              </a>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
