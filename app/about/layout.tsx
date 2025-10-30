import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'SFWeb is a Limerick-based web design service helping Irish businesses grow online. Founded by Sean, offering professional websites with personal service.',
  keywords: ['Limerick web designer', 'Irish web design', 'local web development', 'about SFWeb', 'web designer Ireland'],
  openGraph: {
    title: 'About SFWeb - Limerick Web Design',
    description: 'Limerick-based web design service helping Irish businesses thrive online with professional websites.',
    url: 'https://sfweb.ie/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
