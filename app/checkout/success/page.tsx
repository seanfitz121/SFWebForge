import { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import SuccessContent from './SuccessContent';

export const metadata: Metadata = {
  title: 'Purchase Successful | SFWeb Shop',
  description: 'Thank you for your purchase. Download your digital product.',
  robots: 'noindex, nofollow',
};

export default function CheckoutSuccessPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container-custom px-4 sm:px-6 lg:px-8 max-w-3xl">
        <Suspense fallback={<LoadingState />}>
          <SuccessContent />
        </Suspense>
      </div>
    </main>
  );
}

function LoadingState() {
  return (
    <div className="text-center">
      <div className="inline-block animate-spin h-8 w-8 border-4 border-primary-blue border-t-transparent rounded-full mb-4" />
      <p className="text-gray-400">Loading your purchase...</p>
    </div>
  );
}
