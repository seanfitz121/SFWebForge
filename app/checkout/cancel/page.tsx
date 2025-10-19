import { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import CancelContent from './CancelContent';

export const metadata: Metadata = {
  title: 'Checkout Cancelled | SFWeb Shop',
  description: 'Your checkout was cancelled.',
  robots: 'noindex, nofollow',
};

export default function CheckoutCancelPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container-custom px-4 sm:px-6 lg:px-8 max-w-3xl">
        <Suspense fallback={<div className="text-center text-gray-400">Loading...</div>}>
          <CancelContent />
        </Suspense>
      </div>
    </main>
  );
}
