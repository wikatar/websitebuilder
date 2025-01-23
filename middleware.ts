import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from './src/config';

export default createMiddleware({
  defaultLocale,
  locales: locales,
  localePrefix: 'always'
});

export const config = {
  matcher: ['/', '/(sv|en)/:path*']
}; 