import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import MainLayout from '@/components/layout/MainLayout'
import { useRouter } from 'next/router'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-heading',
})

export const metadata: Metadata = {
  title: 'Balthazar Project',
  description: 'Building scalable web solutions with modern technologies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
