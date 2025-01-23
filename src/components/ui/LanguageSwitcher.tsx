'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="flex gap-2">
      <Link
        href={pathname.replace(/^\/[a-z]{2}/, '/sv')}
        className={`text-sm ${locale === 'sv' ? 'font-bold' : ''}`}
      >
        SV
      </Link>
      <span className="text-gray-300">|</span>
      <Link
        href={pathname.replace(/^\/[a-z]{2}/, '/en')}
        className={`text-sm ${locale === 'en' ? 'font-bold' : ''}`}
      >
        EN
      </Link>
    </div>
  );
}
