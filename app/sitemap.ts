import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://govcongiants.com';

  // Base pages
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/procurement`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];

  // Location-based variations
  const states = [
    'california',
    'texas',
    'florida',
    'new-york',
    'pennsylvania',
    'illinois',
    'ohio',
    'georgia',
    'north-carolina',
    'michigan',
  ];

  states.forEach((state) => {
    routes.push({
      url: `${baseUrl}/procurement/${state}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  });

  // Industry-based variations
  const industries = [
    'technology',
    'construction',
    'consulting',
    'manufacturing',
    'healthcare',
    'professional-services',
  ];

  industries.forEach((industry) => {
    routes.push({
      url: `${baseUrl}/procurement/${industry}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  });

  return routes;
}
