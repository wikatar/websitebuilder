import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import { initPerformanceMonitoring } from '@/utils/performance'
import { ErrorBoundary } from '@/components/ErrorBoundary'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Balthazar Project',
  description: 'Building scalable web solutions with modern technologies',
  keywords: 'web development, next.js, react, typescript, seo, performance',
  metadataBase: new URL('https://balthazarproject.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://balthazarproject.com',
    siteName: 'Balthazar Project',
    title: 'Balthazar Project - Modern Web Development',
    description: 'Building scalable web solutions with modern technologies',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Balthazar Project',
    description: 'Building scalable web solutions with modern technologies',
  },
  robots: {
    index: true,
    follow: true,
  },
}

type RootLayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
}

export default function RootLayout({
  children,
  params: { locale = 'sv' }
}: RootLayoutProps) {
  // Initialize performance monitoring in client
  if (typeof window !== 'undefined') {
    initPerformanceMonitoring();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <head />
      <body className={`${inter.variable} ${montserrat.variable} min-h-screen bg-base-100`}>
        <ErrorBoundary>
          <div className="flex flex-col min-h-screen">
            {children}
          </div>
        </ErrorBoundary>
      </body>
    </html>
  );
}
