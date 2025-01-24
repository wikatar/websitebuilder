import { getRequestConfig } from 'next-intl/server';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['en', 'sv'] as const;
export const defaultLocale = 'en' as const;

export default getRequestConfig(async () => {
  return {
    messages: (await import(`./src/messages/en.json`)).default,
    timeZone: 'Europe/Stockholm',
    now: new Date()
  };
});

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({ locales }); 