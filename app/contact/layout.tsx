import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with SFWeb for your web design project. Based in Limerick, Ireland. Free quotes, 24-hour response time. Email: hello@sfweb.ie',
  keywords: ['contact web designer Limerick', 'web design quote Ireland', 'Limerick web design contact', 'get website quote'],
  openGraph: {
    title: 'Contact SFWeb - Limerick Web Design',
    description: 'Contact us for a free quote on your web design project. Based in Limerick, serving all of Ireland.',
    url: 'https://sfweb.ie/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
