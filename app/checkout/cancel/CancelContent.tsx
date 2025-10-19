'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { getProductById } from '@/lib/products';

export default function CancelContent() {
  const searchParams = useSearchParams();
  const productId = searchParams.get('product');
  const product = productId ? getProductById(productId) : null;

  return (
    <div className="text-center">
      <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg className="w-10 h-10 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>

      <h1 className="text-4xl font-bold mb-4">Checkout Cancelled</h1>

      <p className="text-xl text-gray-400 mb-8">
        Your payment was not processed. No charges were made.
      </p>

      <div className="bg-dark-card border border-dark-border rounded-lg p-8 mb-8 max-w-md mx-auto">
        <h2 className="text-xl font-semibold mb-4">What happened?</h2>
        <p className="text-gray-300 mb-6">
          You cancelled the checkout process or closed the payment window. Your card has not been charged.
        </p>
        {product && (
          <div className="space-y-4">
            <p className="text-sm text-gray-400">
              Still interested in <strong className="text-white">{product.name}</strong>?
            </p>
            <Link
              href={`/shop/${product.id}`}
              className="btn-primary inline-block"
            >
              Return to Product
            </Link>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <Link href="/shop" className="text-primary-blue hover:text-primary-green transition-colors inline-block">
          ← Browse all products
        </Link>
        <div className="text-sm text-gray-500">
          <p>Need help?{' '}
            <a href="mailto:sean@sfweb.ie" className="text-primary-green hover:underline">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
