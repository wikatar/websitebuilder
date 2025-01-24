'use client';

import { Inter, Montserrat } from 'next/font/google';
import { ReactNode } from 'react';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export function FontProvider({ children }: { children: ReactNode }) {
  return (
    <div className={`${inter.variable} ${montserrat.variable}`}>
      {children}
    </div>
  );
} 