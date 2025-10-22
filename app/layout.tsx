import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'SFWeb - Modern Websites for Local Irish Businesses',
    template: '%s | SFWeb',
  },
  description: 'Affordable, fast, and locally built web design services in Limerick, Ireland. Professional websites for Irish businesses starting at €150.',
  keywords: ['web design', 'Limerick', 'Ireland', 'website development', 'affordable websites', 'Irish business', 'local web design'],
  authors: [{ name: 'SFWeb' }],
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://sfweb.ie',
    siteName: 'SFWeb',
    title: 'SFWeb - Modern Websites for Local Irish Businesses',
    description: 'Affordable, fast, and locally built web design services in Limerick, Ireland.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SFWeb - Modern Websites for Local Irish Businesses',
    description: 'Affordable, fast, and locally built web design services in Limerick, Ireland.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
