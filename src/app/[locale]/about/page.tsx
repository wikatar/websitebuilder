'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const t = useTranslations('about');
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-4"
        >
          {t('title')}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-base-content/70 max-w-3xl mx-auto"
        >
          {t('description')}
        </motion.p>
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
          <p className="text-base-content/70">{t('sections.whoWeAre.content')}</p>
        </motion.div>

        {/* What We Do */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold">{t('sections.whatWeDo.title')}</h2>
          <p className="text-base-content/70">{t('sections.whatWeDo.content')}</p>
          <div className="grid grid-cols-1 gap-4">
            {t.raw('about.sections.whatWeDo.services').map((service: string, index: number) => (
              <div key={index} className="card bg-base-100 shadow-sm p-4 hover:shadow-md transition-shadow">
                <p className="font-medium">{service}</p>
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
          <p className="text-base-content/70">{t('sections.howWeWork.content')}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.raw('about.sections.howWeWork.principles').map((principle: string, index: number) => (
              <div key={index} className="card bg-base-100 shadow-sm p-4 hover:shadow-md transition-shadow">
                <p className="font-medium">{principle}</p>
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
          <p className="text-base-content/70">{t('sections.whyChooseUs.content')}</p>
          <div className="grid grid-cols-1 gap-4">
            {t.raw('about.sections.whyChooseUs.benefits').map((benefit: string, index: number) => (
              <div key={index} className="card bg-base-100 shadow-sm p-4 hover:shadow-md transition-shadow">
                <p className="font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Values Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-16"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Våra Värderingar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.raw('about.values').map((value: { title: string; description: string }, index: number) => (
            <div key={index} className="card bg-base-100 shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-base-content/70">{value.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 