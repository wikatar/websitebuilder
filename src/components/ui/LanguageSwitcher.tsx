'use client';

import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    const newPath = pathname.replace(/^\/[a-z]{2}/, `/${newLocale}`);
    window.location.href = newPath;
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => handleLanguageChange('sv')}
        className={`text-sm ${locale === 'sv' ? 'font-bold' : ''}`}
      >
        SV
      </button>
      <span className="text-gray-300">|</span>
      <button
        onClick={() => handleLanguageChange('en')}
        className={`text-sm ${locale === 'en' ? 'font-bold' : ''}`}
      >
        EN
      </button>
    </div>
  );
}
