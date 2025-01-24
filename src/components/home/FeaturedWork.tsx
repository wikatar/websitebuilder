'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

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

interface Project {
  id: string;
  imageUrl: string;
  titleKey: string;
  descriptionKey: string;
  tags: string[];
  link: string;
}

export function FeaturedWork() {
  const t = useTranslations('Home.featuredWork');

  const projects: Project[] = [
    {
      id: 'ecommerce-platform',
      imageUrl: '/images/projects/ecommerce.jpg',
      titleKey: 'projects.ecommerce.title',
      descriptionKey: 'projects.ecommerce.description',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      link: '/portfolio/ecommerce-platform'
    },
    {
      id: 'ai-dashboard',
      imageUrl: '/images/projects/dashboard.jpg',
      titleKey: 'projects.dashboard.title',
      descriptionKey: 'projects.dashboard.description',
      tags: ['React', 'D3.js', 'AI Integration'],
      link: '/portfolio/ai-dashboard'
    },
    {
      id: 'seo-toolkit',
      imageUrl: '/images/projects/seo.jpg',
      titleKey: 'projects.seo.title',
      descriptionKey: 'projects.seo.description',
      tags: ['SEO', 'Analytics', 'API Integration'],
      link: '/portfolio/seo-toolkit'
    }
  ];

  return (
    <section className="py-24 bg-base-100">
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
          {projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <Link href={project.link} className="group block">
                <div className="relative overflow-hidden rounded-xl aspect-video bg-base-300">
                  <Image
                    src={project.imageUrl}
                    alt={t(project.titleKey)}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base-300/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold text-base-content">
                      {t(project.titleKey)}
                    </h3>
                    <p className="mt-2 text-sm text-base-content/80">
                      {t(project.descriptionKey)}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
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
          <Link href="/portfolio" className="btn btn-primary btn-lg">
            {t('viewAllButton')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 