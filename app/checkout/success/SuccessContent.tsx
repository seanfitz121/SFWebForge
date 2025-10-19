'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getProductById } from '@/lib/products';

export default function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [downloadToken, setDownloadToken] = useState<string | null>(null);
  const [productId, setProductId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!sessionId) {
      setError('No session ID found');
      setLoading(false);
      return;
    }

    const fetchSessionData = async () => {
      try {
        const response = await fetch(`/api/checkout/session?session_id=${sessionId}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to fetch session data');
        }

        setProductId(data.productId);
        setDownloadToken(data.downloadToken);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchSessionData();
  }, [sessionId]);

  if (loading) {
    return (
      <div className="text-center">
        <div className="inline-block animate-spin h-8 w-8 border-4 border-primary-blue border-t-transparent rounded-full mb-4" />
        <p className="text-gray-400">Processing your purchase...</p>
      </div>
    );
  }

  if (error || !productId || !downloadToken) {
    return (
      <div className="text-center">
        <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold mb-4">Something Went Wrong</h1>
        <p className="text-gray-400 mb-8">{error || 'Unable to retrieve your purchase information.'}</p>
        <Link href="/shop" className="btn-primary inline-block">
          Back to Shop
        </Link>
      </div>
    );
  }

  const product = getProductById(productId);

  if (!product) {
    return (
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <Link href="/shop" className="btn-primary inline-block">
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="text-center">
      <div className="w-20 h-20 bg-primary-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg className="w-10 h-10 text-primary-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h1 className="text-4xl font-bold mb-4">
        <span className="bg-gradient-primary bg-clip-text text-transparent">
          Thank You for Your Purchase!
        </span>
      </h1>

      <p className="text-xl text-gray-300 mb-8">
        You've successfully purchased <strong>{product.name}</strong>
      </p>

      <div className="bg-dark-card border border-dark-border rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4">Download Your Product</h2>
        <p className="text-gray-400 mb-6">
          Click the button below to download your purchase. A download link has also been sent to your email 
          and will be valid for 48 hours.
        </p>
        <a
          href={`/download/${downloadToken}`}
          className="btn-primary inline-block text-lg py-4 px-8"
          download
        >
          <span className="flex items-center gap-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download {product.name}
          </span>
        </a>
      </div>

      <div className="bg-dark-card border border-primary-blue/30 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold mb-3 flex items-center justify-center gap-2">
          <svg className="w-6 h-6 text-primary-blue" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          What's Next?
        </h3>
        <ul className="text-sm text-gray-300 space-y-2 text-left max-w-md mx-auto">
          <li className="flex items-start gap-2">
            <span className="text-primary-green">1.</span>
            <span>Check your email for the receipt and download link</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-green">2.</span>
            <span>Save your files in a secure location</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-green">3.</span>
            <span>Review the setup instructions included in your download</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-green">4.</span>
            <span>
              Need help? Email{' '}
              <a href="mailto:sean@sfweb.ie" className="text-primary-blue hover:underline">
                sean@sfweb.ie
              </a>
            </span>
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <Link href="/shop" className="text-primary-blue hover:text-primary-green transition-colors inline-block">
          ← Browse more products
        </Link>
      </div>
    </div>
  );
}
