import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { products, formatPrice } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Shop - Digital Products | SFWeb',
  description: 'Professional digital products for Irish businesses. Website templates, eBooks, and SEO checklists to help you succeed online.',
  openGraph: {
    title: 'Shop - Digital Products | SFWeb',
    description: 'Professional digital products for Irish businesses. Website templates, eBooks, and SEO checklists to help you succeed online.',
    url: 'https://sfweb.ie/shop',
    type: 'website',
  },
};

export default function ShopPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Store',
    name: 'SFWeb Digital Shop',
    description: 'Digital products for Irish businesses',
    url: 'https://sfweb.ie/shop',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen pt-32 pb-20">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Digital Products by{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                SFWeb
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Professional templates, guides, and resources to help your Irish business succeed online
            </p>

            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-blue" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Secure Checkout with Stripe</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                </svg>
                <span>Instant Download</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-blue" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span>Personal & Commercial License</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-dark-card border border-dark-border rounded-lg overflow-hidden hover:border-primary-blue transition-all duration-300 group"
              >
                <div className="relative aspect-video bg-dark-border overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary-blue transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">{product.short}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold text-primary-green">
                      {formatPrice(product.priceEUR)}
                    </span>
                    <span className="text-xs text-gray-500 uppercase">Digital Download</span>
                  </div>
                  <Link
                    href={`/shop/${product.id}`}
                    className="btn-primary w-full text-center block"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
