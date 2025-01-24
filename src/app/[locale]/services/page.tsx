'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { PageLayout } from '@/components/layout/PageLayout';
import { FiCode, FiCpu, FiTrendingUp, FiBox } from 'react-icons/fi';

const services = [
  { key: 'webdev', icon: FiCode },
  { key: 'ai', icon: FiCpu },
  { key: 'growth', icon: FiTrendingUp },
  { key: 'software', icon: FiBox },
];

export default function ServicesPage() {
  const t = useTranslations('Services');
  
  return (
    <PageLayout
      title={t('title')}
      description={t('description')}
      breadcrumbs={[
        { label: t('nav.home'), href: '/' },
        { label: t('nav.services'), href: '/services' },
      ]}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="card-body">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="card-title text-2xl">{t(`${service.key}.title`)}</h2>
                  </div>
                  <p className="text-base-content/70">{t(`${service.key}.description`)}</p>
                  <div className="card-actions justify-end mt-6">
                    <a
                      href={`/services/${service.key}`}
                      className="btn btn-primary"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
} 