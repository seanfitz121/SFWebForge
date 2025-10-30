import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Service Packages',
  description: 'Service packages for web design in Limerick. Template Setup: 3-page professional websites. Custom Websites: bespoke designs tailored to your needs.',
  keywords: ['web design pricing Ireland', 'Limerick website cost', 'affordable web design', 'template website price', 'custom website price Ireland'],
  openGraph: {
    title: 'Web Design Services - SFWeb Limerick',
    description: 'Service packages: Template setups and custom websites. Professional web design for Irish businesses.',
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
