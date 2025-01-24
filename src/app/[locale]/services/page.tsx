'use client';

import { useTranslations } from 'next-intl';
import { Metadata } from '@/components/seo/Metadata';
import { Services } from '@/components/templates/agency';

export default function ServicesPage() {
  const t = useTranslations('Services');

  return (
    <>
      <Metadata path="/services" pageKey="services" />
      <Services />
    </>
  );
} 