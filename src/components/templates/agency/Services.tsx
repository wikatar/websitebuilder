'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { IconType } from 'react-icons';
import { FaCode, FaRobot, FaSearchDollar, FaPalette } from 'react-icons/fa';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: IconType;
  delay: number;
}

function ServiceCard({ title, description, icon: Icon, delay }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="card bg-base-200 hover:bg-base-300 transition-colors duration-300"
    >
      <div className="card-body">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="card-title text-xl mb-2">{title}</h3>
        <p className="text-base-content/70">{description}</p>
      </div>
    </motion.div>
  );
}

export function Services() {
  const t = useTranslations('Services');

  const services = [
    {
      icon: FaCode,
      titleKey: 'webdev.title',
      descriptionKey: 'webdev.description',
    },
    {
      icon: FaRobot,
      titleKey: 'ai.title',
      descriptionKey: 'ai.description',
    },
    {
      icon: FaSearchDollar,
      titleKey: 'seo.title',
      descriptionKey: 'seo.description',
    },
    {
      icon: FaPalette,
      titleKey: 'design.title',
      descriptionKey: 'design.description',
    },
  ];

  return (
    <section className="section-padding bg-base-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.titleKey}
              title={t(service.titleKey)}
              description={t(service.descriptionKey)}
              icon={service.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 