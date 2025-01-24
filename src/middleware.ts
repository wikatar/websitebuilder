import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from '../i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale,

  // Always require a locale prefix
  localePrefix: 'always'
});

export const config = {
  matcher: ['/', '/(sv|en)/:path*', '/((?!_next|api|favicon.ico).*)']
}; 