'use client';

import { useTranslations } from 'next-intl';
import { FiCode, FiCpu, FiTrendingUp, FiBox } from 'react-icons/fi';
import { ServiceCard } from '@/components/services/ServiceCard';

const services = [
  { key: 'webdev', iconName: 'FiCode' },
  { key: 'ai', iconName: 'FiCpu' },
  { key: 'growth', iconName: 'FiTrendingUp' },
  { key: 'software', iconName: 'FiBox' },
];

export default function ServicesPage({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const t = useTranslations('Services');
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
        <p className="text-xl text-base-content/70 max-w-3xl mx-auto">{t('description')}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <ServiceCard
            key={service.key}
            title={t(`${service.key}.title`)}
            description={t(`${service.key}.description`)}
            iconName={service.iconName as keyof typeof FiCode}
            href={`/${locale}/services/${service.key}`}
            learnMoreText={t('learnMore')}
          />
        ))}
      </div>
    </div>
  );
} 