import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Simple, transparent pricing for web design in Limerick. Template Setup: €150-€200 for 5-page websites. Custom Websites: €300+ for bespoke designs. No hidden fees.',
  keywords: ['web design pricing Ireland', 'Limerick website cost', 'affordable web design', 'template website price', 'custom website price Ireland'],
  openGraph: {
    title: 'Web Design Pricing - SFWeb Limerick',
    description: 'Transparent pricing: Template setups €150-€200, Custom websites €300+. Professional web design for Irish businesses.',
    url: 'https://sfweb.ie/pricing',
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
