import { Metadata } from 'next';
import { baseProcurementContent } from '@/lib/data/procurement-content';

export const metadata: Metadata = {
  title: baseProcurementContent.metadata.title,
  description: baseProcurementContent.metadata.description,
  keywords: baseProcurementContent.metadata.keywords,
  openGraph: {
    title: baseProcurementContent.metadata.title,
    description: baseProcurementContent.metadata.description,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: baseProcurementContent.metadata.title,
    description: baseProcurementContent.metadata.description,
  },
};

export default function GovernmentProcurementPage() {
  const pageContent = baseProcurementContent;

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
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {pageContent.hero.h1}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            {pageContent.hero.subheadline}
          </p>
          <a
            href={pageContent.hero.cta.buttonLink}
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
          >
            {pageContent.hero.cta.buttonText}
          </a>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">$600B+</div>
              <div className="text-gray-600">Annual Federal Contracts</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">23%</div>
              <div className="text-gray-600">Set-Aside for Small Business</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-gray-600">GovCon Giants Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">135K</div>
              <div className="text-gray-600">Monthly Searches</div>
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
                className="text-sm font-medium text-gray-700 hover:text-blue-600 whitespace-nowrap transition-colors"
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

            {section.subsections && section.subsections.map((subsection) => (
              <div key={subsection.title} className="mt-8 pl-6 border-l-4 border-blue-500">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {subsection.title}
                </h3>
                <div
                  className="prose prose-lg max-w-none text-gray-700 whitespace-pre-line"
                  dangerouslySetInnerHTML={{ __html: subsection.content.replace(/^- (.*$)/gim, '<li>$1</li>').replace(/(<li>.*<\/li>)/s, '<ul class="list-disc pl-6 space-y-2">$1</ul>') }}
                />
              </div>
            ))}

            {/* Insert CTA after 3rd section */}
            {index === 2 && (
              <div className="mt-12 bg-blue-50 border-2 border-blue-200 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {pageContent.ctas[0].title}
                </h3>
                <p className="text-gray-700 mb-6">
                  {pageContent.ctas[0].description}
                </p>
                <a
                  href={pageContent.ctas[0].buttonLink}
                  className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
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
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
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
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-12 text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Win Government Contracts?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join 10,000+ small businesses in the GovCon Giants community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={pageContent.ctas[0].buttonLink}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              {pageContent.ctas[0].buttonText}
            </a>
            <a
              href={pageContent.ctas[1].buttonLink}
              className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors border-2 border-white"
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
                className="block bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition-all"
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
            Government Procurement by Location
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['California', 'Texas', 'Florida', 'New York', 'Pennsylvania', 'Illinois'].map((state) => (
              <a
                key={state}
                href={`/procurement/${state.toLowerCase()}`}
                className="block bg-blue-50 border border-blue-200 rounded-lg p-4 text-center hover:bg-blue-100 transition-colors"
              >
                <span className="font-semibold text-blue-600">{state}</span>
              </a>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-16">
            Government Procurement by Industry
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['Technology', 'Construction', 'Consulting', 'Manufacturing', 'Healthcare', 'Professional Services'].map((industry) => (
              <a
                key={industry}
                href={`/procurement/${industry.toLowerCase().replace(/\s+/g, '-')}`}
                className="block bg-green-50 border border-green-200 rounded-lg p-4 text-center hover:bg-green-100 transition-colors"
              >
                <span className="font-semibold text-green-600">{industry}</span>
              </a>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
