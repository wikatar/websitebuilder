'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { FiGlobe } from 'react-icons/fi';

export function LanguageSelector() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const newLocale = locale === 'en' ? 'sv' : 'en';
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <button
      onClick={toggleLocale}
      className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md hover:text-primary hover:bg-base-200 transition-colors"
      aria-label="Toggle language"
    >
      <FiGlobe className="h-4 w-4" />
      <span>{locale.toUpperCase()}</span>
    </button>
  );
} 