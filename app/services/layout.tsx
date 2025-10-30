import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Professional web design services in Limerick, Ireland. Choose from template setups or fully custom websites. Fast, mobile-friendly, SEO-ready websites for Irish businesses.',
  keywords: ['web design services', 'Limerick web designer', 'Irish website development', 'template websites', 'custom websites', 'affordable web design Ireland'],
  openGraph: {
    title: 'Web Design Services - SFWeb Limerick',
    description: 'Professional web design services in Limerick. Template setups or custom websites. Fast turnaround, mobile-friendly, locally built.',
    url: 'https://sfweb.ie/services',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
