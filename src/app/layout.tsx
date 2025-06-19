// layout.tsx

import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import type { Viewport } from 'next';
import { Inter } from 'next/font/google';

import CustomCursor from './Components/ComponentsPhoto/CustomCursor';
import RouteWrapper from './Components/General/RouteWrapper';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: 'Nils Müller',
  description: 'Developer & Photographer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomCursor />
        <RouteWrapper>{children}</RouteWrapper>
        <Analytics />
      </body>
    </html>
  );
}
