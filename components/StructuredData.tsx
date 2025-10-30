export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SFWeb',
    url: 'https://sfweb.ie',
    logo: 'https://sfweb.ie/logo.png',
    description: 'Professional web design services for local Irish businesses in Limerick',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Limerick',
      addressCountry: 'IE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@sfweb.ie',
      contactType: 'Customer Service',
      areaServed: 'IE',
    },
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://sfweb.ie',
    name: 'SFWeb',
    image: 'https://sfweb.ie/logo.png',
    description: 'Professional web design and development services for Irish businesses based in Limerick',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Limerick',
      addressCountry: 'Ireland',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 52.6638,
      longitude: -8.6267,
    },
    url: 'https://sfweb.ie',
    email: 'hello@sfweb.ie',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Web Design',
    provider: {
      '@type': 'LocalBusiness',
      name: 'SFWeb',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Ireland',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Web Design Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Template Website Setup',
            description: '3-page professional website using pre-designed templates',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Website Design',
            description: 'Fully bespoke website tailored to your brand',
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
