'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const t = useTranslations('about');
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
        <p className="text-xl text-base-content/70 max-w-3xl mx-auto">{t('description')}</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Who We Are */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold">{t('sections.whoWeAre.title')}</h2>
          <p className="text-base-content/70">{t('sections.whoWeAre.description')}</p>
        </motion.div>

        {/* What We Do */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold">{t('sections.whatWeDo.title')}</h2>
          <p className="text-base-content/70">{t('sections.whatWeDo.description')}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t('sections.whatWeDo.services').split(',').map((service, index) => (
              <div key={index} className="card bg-base-100 shadow-sm p-4">
                <p className="font-medium">{service.trim()}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* How We Work */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold">{t('sections.howWeWork.title')}</h2>
          <p className="text-base-content/70">{t('sections.howWeWork.description')}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t('sections.howWeWork.principles').split(',').map((principle, index) => (
              <div key={index} className="card bg-base-100 shadow-sm p-4">
                <p className="font-medium">{principle.trim()}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold">{t('sections.whyChooseUs.title')}</h2>
          <p className="text-base-content/70">{t('sections.whyChooseUs.description')}</p>
        </motion.div>
      </div>
    </div>
  );
} 