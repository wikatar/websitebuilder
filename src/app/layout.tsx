import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-heading',
})

export const metadata: Metadata = {
  title: 'The Balthazar Project - Professional Web Development Services',
  description: 'Expert web development and digital solutions by The Balthazar Project. Custom websites, SEO optimization, and digital strategy consulting.',
  keywords: 'web development, digital solutions, SEO, website design, digital strategy',
}

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <html lang={locale} data-theme="dark" className={`${inter.variable} ${montserrat.variable} dark`}>
      <body className="min-h-screen bg-base-100 text-base-content">
        {children}
      </body>
    </html>
  )
}
