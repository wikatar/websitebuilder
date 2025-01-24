'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ServiceCard } from '../services/ServiceCard';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function ServiceOverview() {
  const t = useTranslations('Home.services');

  const services = [
    {
      id: 'web-development',
      icon: '🌐',
      titleKey: 'webDev.title',
      descriptionKey: 'webDev.description',
      features: ['webDev.features'],
    },
    {
      id: 'seo-optimization',
      icon: '🔍',
      titleKey: 'seo.title',
      descriptionKey: 'seo.description',
      features: ['seo.features'],
    },
    {
      id: 'custom-development',
      icon: '⚙️',
      titleKey: 'custom.title',
      descriptionKey: 'custom.description',
      features: ['custom.features'],
    }
  ];

  return (
    <section className="py-24 bg-base-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-base-content"
          >
            {t('title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-xl text-base-content/80 max-w-3xl mx-auto"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={item}>
              <ServiceCard
                icon={service.icon}
                title={t(service.titleKey)}
                description={t(service.descriptionKey)}
                features={service.features.map(key => t(key))}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a href="/services" className="btn btn-primary btn-lg">
            {t('viewAllButton')}
          </a>
        </motion.div>
      </div>
    </section>
  );
} 