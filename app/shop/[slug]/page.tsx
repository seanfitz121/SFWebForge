import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { products, getProductById, formatPrice } from '@/lib/products';
import BuyButton from '@/components/BuyButton';

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductById(slug);
  
  if (!product) {
    return {
      title: 'Product Not Found | SFWeb',
    };
  }

  return {
    title: `${product.name} | SFWeb Shop`,
    description: product.short,
    openGraph: {
      title: `${product.name} | SFWeb Shop`,
      description: product.short,
      url: `https://sfweb.ie/shop/${product.id}`,
      type: 'website',
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductById(slug);

  if (!product) {
    notFound();
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.short,
    offers: {
      '@type': 'Offer',
      price: product.priceEUR,
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen pt-32 pb-20">
        <div className="container-custom px-4 sm:px-6 lg:px-8 max-w-5xl">
          <Link
            href="/shop"
            className="text-primary-blue hover:text-primary-green transition-colors mb-8 inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Shop
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="relative aspect-video bg-dark-border rounded-lg overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <p className="text-xl text-gray-400 mb-6">{product.short}</p>

              <ul className="space-y-3 mb-8">
                {product.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-dark-card border border-dark-border rounded-lg p-6 mb-6">
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    {formatPrice(product.priceEUR)}
                  </span>
                  <span className="text-gray-500">EUR</span>
                </div>
                <BuyButton productId={product.id} price={product.priceEUR} />
              </div>

              <p className="text-xs text-gray-500 text-center">
                Secure payment powered by Stripe • Instant download after purchase
              </p>
            </div>
          </div>

          <div className="bg-dark-card border border-dark-border rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">What's Included</h2>
            <ul className="space-y-3">
              {product.includes.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-dark-card border border-dark-border rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="font-semibold mb-2">Pay Securely</h3>
                <p className="text-sm text-gray-400">Complete your purchase with Stripe's secure checkout</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="font-semibold mb-2">Instant Download</h3>
                <p className="text-sm text-gray-400">Download your product immediately from the success page</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="font-semibold mb-2">Get Email Link</h3>
                <p className="text-sm text-gray-400">Receive a secure download link via email (valid 48 hours)</p>
              </div>
            </div>
          </div>

          <div className="bg-dark-card border border-dark-border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2 text-primary-blue">What license do I get?</h3>
                <p className="text-gray-400 text-sm">
                  You receive a single-site personal and commercial license. You can use the product for one website 
                  (yours or a client's), but you cannot resell or redistribute the files. See our{' '}
                  <Link href="/legal/download-terms" className="text-primary-green hover:underline">
                    download terms
                  </Link>{' '}
                  for full details.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-primary-blue">What if I need help?</h3>
                <p className="text-gray-400 text-sm">
                  Each product includes setup instructions. If you need additional support, email us at{' '}
                  <a href="mailto:sean@sfweb.ie" className="text-primary-green hover:underline">
                    sean@sfweb.ie
                  </a>{' '}
                  and we'll be happy to help.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-primary-blue">Can I get a refund?</h3>
                <p className="text-gray-400 text-sm">
                  Due to the digital nature of our products, we generally do not offer refunds after download. 
                  However, if there's a technical issue preventing you from using the product, please contact us 
                  and we'll work with you to resolve it.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-primary-blue">How long is the download link valid?</h3>
                <p className="text-gray-400 text-sm">
                  Your download link remains valid for 48 hours after purchase. If it expires, contact us at{' '}
                  <a href="mailto:sean@sfweb.ie" className="text-primary-green hover:underline">
                    sean@sfweb.ie
                  </a>{' '}
                  and we'll send you a fresh link.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
