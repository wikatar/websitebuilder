'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
  const t = useTranslations('about');
  
  // Get the arrays using t.raw() with fallbacks
  const services = t.raw('sections.whatWeDo.services') || [];
  const principles = t.raw('sections.howWeWork.principles') || [];
  const benefits = t.raw('sections.whyChooseUs.benefits') || [];
  const values = t.raw('values.items') || [];
  
  // Ensure arrays are actually arrays
  const safeServices = Array.isArray(services) ? services : [];
  const safePrinciples = Array.isArray(principles) ? principles : [];
  const safeBenefits = Array.isArray(benefits) ? benefits : [];
  const safeValues = Array.isArray(values) ? values : [];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Visual Impact */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-base-100 to-base-200">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.1),transparent_50%)]" />
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10">
          <div className="absolute inset-0 bg-gradient-to-l from-red-500/20 to-transparent" />
          {/* Add a pattern or abstract shape here */}
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-7xl font-bold mb-8 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
                {t('title')}
              </span>
            </h1>
            <p className="text-2xl text-base-content/80 leading-relaxed mb-12">
              {t('description')}
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="w-32 h-32 mx-auto opacity-20"
            >
              {/* Add a decorative element or logo here */}
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-base-100 to-transparent" />
      </section>

      {/* Mission Statement - Full Width Banner */}
      <section className="relative py-24 bg-gradient-to-r from-red-500/5 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-8 text-base-content/90">
              {t('mission')}
            </h2>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-red-500 to-red-700 rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Who We Are - Visual Story */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-red-500/10 to-transparent rounded-3xl blur-2xl" />
              <div className="relative bg-base-100/50 backdrop-blur-sm p-8 rounded-2xl border border-red-500/10">
                <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
                  {t('sections.whoWeAre.title')}
                </h2>
                <p className="text-xl text-base-content/80 leading-relaxed">
                  {t('sections.whoWeAre.content')}
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative lg:h-[500px] rounded-3xl overflow-hidden"
            >
              {/* Add an appropriate image here */}
              <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-transparent mix-blend-overlay" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do - Service Cards */}
      <section className="py-32 bg-base-200/50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(220,38,38,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
              {t('sections.whatWeDo.title')}
            </h2>
            <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
              {t('sections.whatWeDo.content')}
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safeServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative h-full bg-base-100/50 backdrop-blur-sm p-6 rounded-2xl border border-red-500/10 hover:border-red-500/20 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/10 to-red-700/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-red-500">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-red-500 transition-colors">
                    {service}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work - Process Flow */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
              {t('sections.howWeWork.title')}
            </h2>
            <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
              {t('sections.howWeWork.content')}
            </p>
          </motion.div>
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-red-500/20 to-red-700/20 transform -translate-y-1/2" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              {safePrinciples.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-base-100/50 backdrop-blur-sm p-6 rounded-2xl border border-red-500/10"
                >
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-red-500 to-red-700" />
                  <h3 className="text-lg font-semibold mt-4 text-center group-hover:text-red-500 transition-colors">
                    {principle}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values - Visual Grid */}
      <section className="py-32 bg-base-200/50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(220,38,38,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
              {t('values.title')}
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safeValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative h-full bg-base-100/50 backdrop-blur-sm rounded-2xl overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-700" />
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-red-700/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-2xl font-bold text-red-500">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-red-500 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-base-content/80 group-hover:text-base-content/90 transition-colors">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-base-content/80 mb-12">
              {t('cta.description')}
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-red-500/20 transition-all">
              {t('cta.button')}
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 