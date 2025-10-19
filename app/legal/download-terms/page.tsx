import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Download Terms & License | SFWeb',
  description: 'License terms and conditions for SFWeb digital products.',
  openGraph: {
    title: 'Download Terms & License | SFWeb',
    description: 'License terms and conditions for SFWeb digital products.',
    url: 'https://sfweb.ie/legal/download-terms',
    type: 'website',
  },
};

export default function DownloadTermsPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container-custom px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Link
          href="/shop"
          className="text-primary-blue hover:text-primary-green transition-colors mb-8 inline-flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Shop
        </Link>

        <h1 className="text-4xl font-bold mb-8">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Download Terms & License
          </span>
        </h1>

        <div className="prose prose-invert max-w-none">
          <div className="bg-dark-card border border-dark-border rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">License Grant</h2>
            <p className="text-gray-300 mb-4">
              When you purchase a digital product from SFWeb, you receive a single-site personal and commercial license. 
              This license grants you the right to:
            </p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Use the product for one website (personal or client project)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Modify and customize the product to fit your needs</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Use the product for commercial purposes</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Integrate the product into client projects you've been hired to build</span>
              </li>
            </ul>
          </div>

          <div className="bg-dark-card border border-dark-border rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Restrictions</h2>
            <p className="text-gray-300 mb-4">
              You are NOT permitted to:
            </p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span>Resell, redistribute, or share the original files</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span>Use the product on multiple websites without purchasing additional licenses</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span>Create derivative products for sale using our templates or content</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span>Make the files publicly available or include them in open-source projects</span>
              </li>
            </ul>
          </div>

          <div className="bg-dark-card border border-dark-border rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Download & Access</h2>
            <ul className="space-y-3 text-gray-300">
              <li>
                <strong className="text-white">Download Link Validity:</strong> Your download link is valid for 48 hours after purchase.
              </li>
              <li>
                <strong className="text-white">Re-download:</strong> If your download link expires, contact us at{' '}
                <a href="mailto:sean@sfweb.ie" className="text-primary-green hover:underline">
                  sean@sfweb.ie
                </a>{' '}
                and we'll send you a fresh link.
              </li>
              <li>
                <strong className="text-white">Backup:</strong> We recommend saving your purchased files in a secure location for future use.
              </li>
            </ul>
          </div>

          <div className="bg-dark-card border border-dark-border rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Refunds</h2>
            <p className="text-gray-300">
              Due to the digital nature of our products, we generally do not offer refunds after download. 
              However, if there's a technical issue that prevents you from using the product, please contact 
              us at{' '}
              <a href="mailto:sean@sfweb.ie" className="text-primary-green hover:underline">
                sean@sfweb.ie
              </a>{' '}
              within 7 days of purchase and we'll work with you to resolve the issue.
            </p>
          </div>

          <div className="bg-dark-card border border-dark-border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Support</h2>
            <p className="text-gray-300 mb-4">
              Each product includes basic setup instructions. If you need additional help:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>
                  Email us at{' '}
                  <a href="mailto:sean@sfweb.ie" className="text-primary-green hover:underline">
                    sean@sfweb.ie
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                <span>Include your order number and a detailed description of your issue</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>We typically respond within 24-48 hours (business days)</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>Last updated: October 19, 2025</p>
            <p className="mt-2">
              Questions? Contact us at{' '}
              <a href="mailto:sean@sfweb.ie" className="text-primary-green hover:underline">
                sean@sfweb.ie
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
