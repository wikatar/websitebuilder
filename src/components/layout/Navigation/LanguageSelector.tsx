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
      className="p-2 rounded-md hover:bg-base-300 transition-colors"
      aria-label="Toggle language"
    >
      <div className="flex items-center gap-2">
        <FiGlobe className="w-5 h-5" />
        <span className="text-sm font-medium uppercase">{locale}</span>
      </div>
    </button>
  );
} 