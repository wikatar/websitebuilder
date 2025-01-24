'use client';

import { useTranslations } from 'next-intl';
import { PageSEO } from '@/components/seo/PageSEO';
import { Services } from '@/components/templates/agency/Services';

export default function ServicesPage() {
  const t = useTranslations('Services');

  return (
    <>
      <PageSEO 
        path="/services" 
        pageKey="services"
      />
      <main className="min-h-screen">
        <Services />
      </main>
    </>
  );
} 