'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
}

export function AboutPreview() {
  const t = useTranslations('Home.about');

  const teamMembers: TeamMember[] = [
    {
      id: 'wilmer',
      name: 'Wilmer Wikatar',
      role: t('team.roles.founder'),
      imageUrl: '/images/team/wilmer.jpg'
    },
    // Add more team members as needed
  ];

  const stats = [
    { id: 'years', value: '5+', labelKey: 'stats.years' },
    { id: 'projects', value: '100+', labelKey: 'stats.projects' },
    { id: 'clients', value: '50+', labelKey: 'stats.clients' },
    { id: 'countries', value: '10+', labelKey: 'stats.countries' }
  ];

  return (
    <section className="py-24 bg-base-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - About content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-base-content">
              {t('title')}
            </h2>
            <p className="mt-6 text-lg text-base-content/80">
              {t('description')}
            </p>

            {/* Stats grid */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.id} className="bg-base-100 p-6 rounded-xl">
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="mt-2 text-sm text-base-content/70">
                    {t(stat.labelKey)}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="mt-8 inline-flex btn btn-primary"
            >
              {t('learnMoreButton')}
            </Link>
          </motion.div>

          {/* Right column - Team preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-base-300 overflow-hidden">
              <Image
                src="/images/office.jpg"
                alt={t('officeImageAlt')}
                fill
                className="object-cover"
              />
              
              {/* Team members overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-base-300 to-transparent p-6">
                <h3 className="text-xl font-semibold text-base-content mb-4">
                  {t('team.title')}
                </h3>
                <div className="flex -space-x-4">
                  {teamMembers.map((member) => (
                    <div
                      key={member.id}
                      className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-base-100"
                    >
                      <Image
                        src={member.imageUrl}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center ring-2 ring-base-100">
                    <span className="text-sm text-primary">+10</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Values preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-8 right-8 bg-base-100 p-6 rounded-xl shadow-xl max-w-sm"
            >
              <h4 className="font-semibold text-base-content">
                {t('values.title')}
              </h4>
              <ul className="mt-4 space-y-2">
                {['innovation', 'quality', 'collaboration'].map((value) => (
                  <li key={value} className="flex items-center text-sm">
                    <span className="w-2 h-2 rounded-full bg-primary mr-2" />
                    {t(`values.${value}`)}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 