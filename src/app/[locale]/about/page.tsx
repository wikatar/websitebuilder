'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { PageLayout } from '@/components/layout/PageLayout';
import { useEffect } from 'react';

export default function AboutPage() {
  const t = useTranslations('about');
  
  // Add error boundary for development
  useEffect(() => {
    const handleError = (error: Error) => {
      console.error('Translation Error:', error);
    };

    window.addEventListener('error', (event) => handleError(event.error));
    window.addEventListener('unhandledrejection', (event) => handleError(event.reason));

    return () => {
      window.removeEventListener('error', (event) => handleError(event.error));
      window.removeEventListener('unhandledrejection', (event) => handleError(event.reason));
    };
  }, []);

  // Safely get translations with error handling
  const safeTranslate = (key: string, defaultValue: string = '') => {
    try {
      return t(key);
    } catch (error) {
      console.error(`Translation error for key "${key}":`, error);
      return defaultValue;
    }
  };

  // Safely get and split services/principles
  const getList = (key: string): string[] => {
    try {
      const value = t(key);
      return typeof value === 'string' ? value.split(',').map(item => item.trim()) : [];
    } catch (error) {
      console.error(`Error getting list for key "${key}":`, error);
      return [];
    }
  };

  const services = getList('sections.whatWeDo.services');
  const principles = getList('sections.howWeWork.principles');
  const values = (() => {
    try {
      return t('values', [], { returnObjects: true });
    } catch (error) {
      console.error('Error getting values:', error);
      return [];
    }
  })();

  return (
    <PageLayout
      title={safeTranslate('title', 'About Us')}
      description={safeTranslate('description', 'Learn more about our company')}
      breadcrumbs={[
        { label: safeTranslate('nav.home', 'Home'), href: '/' },
        { label: safeTranslate('nav.about', 'About'), href: '/about' },
      ]}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <section className="mb-16">
            <h2>{safeTranslate('sections.whoWeAre.title', 'Who We Are')}</h2>
            <p>{safeTranslate('sections.whoWeAre.content')}</p>
          </section>

          <section className="mb-16">
            <h2>{safeTranslate('sections.whatWeDo.title', 'What We Do')}</h2>
            <p>{safeTranslate('sections.whatWeDo.content')}</p>
            {services.length > 0 && (
              <ul>
                {services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            )}
          </section>

          <section className="mb-16">
            <h2>{safeTranslate('sections.howWeWork.title', 'How We Work')}</h2>
            <p>{safeTranslate('sections.howWeWork.content')}</p>
            {principles.length > 0 && (
              <ul>
                {principles.map((principle) => (
                  <li key={principle}>{principle}</li>
                ))}
              </ul>
            )}
          </section>

          <section className="mb-16">
            <h2>{safeTranslate('sections.whyChooseUs.title', 'Why Choose Us')}</h2>
            <p>{safeTranslate('sections.whyChooseUs.content')}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {Array.isArray(values) && values.map((value: { title: string; description: string }) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="card bg-base-100 shadow-xl"
                >
                  <div className="card-body">
                    <h3 className="card-title">{value.title}</h3>
                    <p>{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
} 