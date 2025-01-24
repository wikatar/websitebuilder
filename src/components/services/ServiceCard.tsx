'use client';

import { FiCode, FiCpu, FiTrendingUp, FiBox } from 'react-icons/fi';
import Link from 'next/link';

const iconMap = {
  FiCode,
  FiCpu,
  FiTrendingUp,
  FiBox,
};

interface ServiceCardProps {
  title: string;
  description: string;
  iconName: keyof typeof iconMap;
  href: string;
  learnMoreText: string;
}

export function ServiceCard({ 
  title, 
  description, 
  iconName, 
  href, 
  learnMoreText = 'Läs mer' // Default Swedish text
}: ServiceCardProps) {
  const Icon = iconMap[iconName];

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all">
      <div className="card-body">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <h2 className="card-title text-2xl">{title || 'Service Title'}</h2>
        </div>
        <p className="text-base-content/70">{description || 'Service Description'}</p>
        <div className="card-actions justify-end mt-6">
          <Link href={href} className="btn btn-primary">
            {learnMoreText}
          </Link>
        </div>
      </div>
    </div>
  );
} 