export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
}

export interface Author {
  name: string;
  role?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ContentSection {
  id: string;
  title: string;
  content: string;
  subsections?: {
    title: string;
    content: string;
  }[];
}

export interface CTA {
  type: 'primary' | 'secondary';
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export interface ProcurementPage {
  slug: string;
  metadata: SEOMetadata;
  hero: {
    h1: string;
    subheadline: string;
    cta: CTA;
  };
  tableOfContents: {
    id: string;
    title: string;
  }[];
  sections: ContentSection[];
  faqs: FAQ[];
  ctas: CTA[];
  relatedContent: {
    title: string;
    url: string;
    description: string;
  }[];
  schemaMarkup: Record<string, unknown>;
}

export interface VariationType {
  type: 'location' | 'industry' | 'certification' | 'base';
  value?: string;
}
