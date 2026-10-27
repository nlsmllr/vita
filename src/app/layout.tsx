import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import type { Viewport } from 'next';
import { Archivo, JetBrains_Mono } from 'next/font/google';

const display = Archivo({ subsets: ['latin'], axes: ['wdth'], variable: '--font-display' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: 'Nils Müller',
  description: 'Welcome to my CV',
  icons: {
    // Apple specific icons
    apple: [
      {
        url: '/apple-icon.png',
        sizes: '250x250',
        type: 'image/png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${mono.variable} bg-paper font-display text-ink antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
