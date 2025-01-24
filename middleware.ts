import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from './src/config';

export default createMiddleware({
  defaultLocale,
  locales,
  localePrefix: 'always'
});

export const config = {
  matcher: [
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
}; 