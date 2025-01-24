import { useTranslations } from 'next-intl';

interface AgencySchemaProps {
  url: string;
}

export const AgencySchema = ({ url }: AgencySchemaProps) => {
  const t = useTranslations('Schema');

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Balthazar Project",
    "url": url,
    "image": `${url}/images/logo.png`,
    "description": t('agency.description'),
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "SE"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": t('services.webdev')
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Services",
            "description": t('services.seo')
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Software Development",
            "description": t('services.software')
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Solutions",
            "description": t('services.ai')
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Design Services",
            "description": t('services.design')
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}; 