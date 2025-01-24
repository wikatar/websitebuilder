import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

interface ServiceTemplateProps {
  service: {
    title: string;
    description: string;
    features: string[];
    technologies: string[];
    process: {
      step: number;
      title: string;
      description: string;
    }[];
  };
}

export const ServiceTemplate = ({ service }: ServiceTemplateProps) => {
  const t = useTranslations('Services');

  return (
    <main className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-base-content mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-base-content mb-12 text-center">
            {t('features.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-base-200 rounded-lg border border-base-300"
              >
                <p className="text-base-content">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-base-content mb-12 text-center">
            {t('process.title')}
          </h2>
          <div className="space-y-8">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex gap-4"
              >
                <div className="w-12 h-12 flex-shrink-0 bg-primary rounded-full flex items-center justify-center text-base-content font-bold">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-base-content mb-2">
                    {step.title}
                  </h3>
                  <p className="text-base-content/80">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-base-content mb-12 text-center">
            {t('technologies.title')}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {service.technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="px-6 py-2 bg-base-200 rounded-full text-base-content"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-base-content mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-base-content/80 mb-8 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          <button className="btn btn-accent btn-lg">
            {t('cta.button')}
          </button>
        </div>
      </section>
    </main>
  );
}; 