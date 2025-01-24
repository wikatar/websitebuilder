import { z } from 'zod';

// Schema definitions for type safety
const SeoSchema = z.object({
  title_template: z.string().optional(),
  focus_keywords: z.array(z.string()),
  required_schema: z.array(z.string()),
});

const ContentRequirementsSchema = z.record(z.union([
  z.string(),
  z.number(),
  z.object({
    min: z.number(),
    max: z.number().optional(),
    structure: z.array(z.string()).optional(),
  }),
]));

const PageSchema = z.object({
  path: z.string(),
  priority: z.number(),
  components: z.array(z.string()),
  content_requirements: ContentRequirementsSchema,
  seo: SeoSchema,
  subpages: z.record(PageSchema).optional(),
});

const SiteSchema = z.object({
  base_url: z.string(),
  locales: z.array(z.string()),
  default_locale: z.string(),
  pages: z.record(PageSchema),
});

// Type definitions
export type SeoConfig = z.infer<typeof SeoSchema>;
export type ContentRequirements = z.infer<typeof ContentRequirementsSchema>;
export type PageConfig = z.infer<typeof PageSchema>;
export type SiteConfig = z.infer<typeof SiteSchema>;

// Sitemap configuration
export const sitemap: SiteConfig = {
  base_url: 'https://balthazarproject.com',
  locales: ['sv', 'en'],
  default_locale: 'sv',
  pages: {
    home: {
      path: '/',
      priority: 1.0,
      components: [
        'Hero',
        'ServiceOverview',
        'FeaturedWork',
        'AboutPreview',
        'ContactCTA',
      ],
      content_requirements: {
        value_proposition: true,
        service_highlights: true,
        featured_projects: 3,
        testimonials: { min: 2, max: 4 },
      },
      seo: {
        title_template: 'Balthazar Project - {locale_specific_title}',
        focus_keywords: ['web development', 'digital solutions', 'AI integration'],
        required_schema: ['Organization', 'WebSite'],
      },
    },
    about: {
      path: '/about',
      priority: 0.9,
      components: ['CompanyIntro', 'Values', 'Team', 'Vision', 'Timeline'],
      content_requirements: {
        company_story: true,
        team_members: true,
        core_values: { min: 3, max: 5 },
        company_vision: true,
        milestones: { min: 5, max: 8 },
      },
      seo: {
        focus_keywords: ['about us', 'company values', 'team'],
        required_schema: ['Organization', 'Person'],
      },
    },
    services: {
      path: '/services',
      priority: 0.9,
      components: ['ServiceOverview'],
      content_requirements: {
        service_categories: { min: 3 },
      },
      seo: {
        focus_keywords: ['services', 'solutions', 'development'],
        required_schema: ['Service'],
      },
      subpages: {
        web_development: {
          path: '/services/web-development',
          priority: 0.8,
          components: [
            'ServiceHero',
            'Features',
            'ProcessFlow',
            'CaseStudies',
            'PricingPlans',
          ],
          content_requirements: {
            service_description: true,
            key_features: { min: 4, max: 6 },
            process_steps: { min: 3, max: 5 },
            case_studies: { min: 2, max: 3 },
            pricing_tiers: 3,
          },
          seo: {
            focus_keywords: ['web development', 'website', 'web app'],
            required_schema: ['Service', 'Offer'],
          },
        },
        // Additional service pages follow the same structure
      },
    },
    portfolio: {
      path: '/portfolio',
      priority: 0.8,
      components: ['ProjectGrid', 'FilterSystem', 'ProjectDetails'],
      content_requirements: {
        projects: {
          min: 6,
          structure: ['title', 'description', 'technologies', 'challenge', 'solution', 'results'],
        },
        categories: ['Web Development', 'SEO', 'Custom Solutions'],
      },
      seo: {
        focus_keywords: ['portfolio', 'case studies', 'projects'],
        required_schema: ['ItemList', 'CreativeWork'],
      },
    },
    contact: {
      path: '/contact',
      priority: 0.7,
      components: ['ContactForm', 'ContactInfo', 'Map', 'FAQ'],
      content_requirements: {
        contact_methods: true,
        form_fields: true,
        office_location: true,
        faq_items: { min: 5, max: 8 },
      },
      seo: {
        focus_keywords: ['contact', 'get in touch'],
        required_schema: ['LocalBusiness', 'ContactPage'],
      },
    },
  },
};

// Validation function
export function validateSitemap(config: SiteConfig) {
  return SiteSchema.parse(config);
}

// Helper functions
export function getPagePaths(): string[] {
  const paths: string[] = [];
  
  function addPagePaths(pages: Record<string, PageConfig>, prefix: string = '') {
    Object.values(pages).forEach(page => {
      const fullPath = `${prefix}${page.path}`;
      paths.push(fullPath);
      
      if (page.subpages) {
        addPagePaths(page.subpages, fullPath);
      }
    });
  }
  
  addPagePaths(sitemap.pages);
  return paths;
}

export function getLocalizedPaths(): string[] {
  const paths = getPagePaths();
  return sitemap.locales.flatMap(locale => 
    paths.map(path => `/${locale}${path}`)
  );
}

export function getSitemapXML(): string {
  const paths = getLocalizedPaths();
  const baseUrl = sitemap.base_url;
  
  const urlset = paths
    .map(path => {
      const page = sitemap.pages[path] || { priority: 0.5 };
      return `
        <url>
          <loc>${baseUrl}${path}</loc>
          <priority>${page.priority}</priority>
          <changefreq>weekly</changefreq>
        </url>
      `;
    })
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urlset}
    </urlset>`;
}

export default sitemap; 