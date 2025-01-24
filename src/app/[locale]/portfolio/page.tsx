'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';

// This would typically come from your CMS or API
const projects = [
  {
    id: 1,
    title: 'AI-Powered E-commerce',
    description: 'Custom e-commerce platform with AI-driven recommendations',
    image: '/images/portfolio/ecommerce.jpg',
    category: 'ai',
  },
  {
    id: 2,
    title: 'Smart Analytics Dashboard',
    description: 'Real-time analytics platform with predictive insights',
    image: '/images/portfolio/analytics.jpg',
    category: 'software',
  },
  // Add more projects as needed
];

export default function PortfolioPage() {
  const t = useTranslations('portfolio');
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
        <p className="text-xl text-base-content/70 max-w-3xl mx-auto">{t('description')}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all"
          >
            <figure className="relative h-48">
              <div className="absolute inset-0 bg-base-300 animate-pulse" />
              {/* Uncomment when you have actual images */}
              {/* <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              /> */}
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.title}</h2>
              <p className="text-base-content/70">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 