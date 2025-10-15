import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Professional web design services in Limerick, Ireland. Choose from affordable template setups (€150-€200) or fully custom websites (€300+). Fast, mobile-friendly, SEO-ready websites for Irish businesses.',
  keywords: ['web design services', 'Limerick web designer', 'Irish website development', 'template websites', 'custom websites', 'affordable web design Ireland'],
  openGraph: {
    title: 'Web Design Services - SFWeb Limerick',
    description: 'Professional web design services in Limerick. Template setups from €150 or custom websites from €300. Fast turnaround, mobile-friendly, locally built.',
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
