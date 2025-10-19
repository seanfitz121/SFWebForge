import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-card border-t border-dark-border">
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                SFWeb
              </span>
            </h3>
            <p className="text-gray-400 mb-2">
              Modern websites for local Irish businesses
            </p>
            <p className="text-primary-green font-semibold">
              📍 Based in Limerick, Ireland
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-primary-blue transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-primary-blue transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-400 hover:text-primary-blue transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="text-gray-400 hover:text-primary-blue transition-colors"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-primary-blue transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-primary-blue transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Limerick, Ireland</li>
              <li>
                <a
                  href="mailto:hello@sfweb.ie"
                  className="hover:text-primary-blue transition-colors"
                >
                  sean@sfweb.ie
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-border mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} SFWeb. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
