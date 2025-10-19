"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Services() {
  return (
    <div>
      <section className="section-padding bg-gradient-to-b from-dark-bg to-dark-card">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            What{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              We Offer
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Professional web design services tailored to Irish businesses, from
            quick template setups to fully custom solutions
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-dark-bg">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-primary-green">Website Templates</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-400 text-lg mb-6">
                  Get online quickly with our professionally designed templates.
                  Perfect for cafés, tradespeople, gyms, salons, and more. Each
                  template is modern, mobile-responsive, and ready to showcase
                  your business.
                </p>
                <div className="bg-dark-card p-6 rounded-lg border border-dark-border mb-6">
                  <h3 className="text-xl font-semibold mb-4">How It Works:</h3>
                  <ol className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-primary-green text-dark-bg font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                        1
                      </span>
                      <span>Choose a template that fits your business</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary-green text-dark-bg font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                        2
                      </span>
                      <span>Provide your content, images, and branding</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary-green text-dark-bg font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                        3
                      </span>
                      <span>
                        SFWeb sets everything up and deploys your site
                      </span>
                    </li>
                  </ol>
                </div>
                <div className="card">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold">Template Setup</h3>
                    <div className="text-2xl font-bold text-primary-green">
                      €150-€200
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-400 mb-4">
                    <li className="flex items-start">
                      <span className="text-primary-green mr-2">✓</span>
                      <span>3-page professional website</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-green mr-2">✓</span>
                      <span>Content insertion and customization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-green mr-2">✓</span>
                      <span>Contact form integration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-green mr-2">✓</span>
                      <span>Deployment and setup assistance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-green mr-2">✓</span>
                      <span>Can be upgraded to custom later</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-500">
                    Note: Templates can be upgraded to custom designs as your
                    business grows
                  </p>
                </div>
              </div>
              <div className="card bg-gradient-to-br from-primary-green/10 to-dark-card">
                <h3 className="text-2xl font-semibold mb-4">Perfect For:</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-2xl mr-3">☕</span>
                    <span>Cafés & Restaurants</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-2xl mr-3">🔧</span>
                    <span>
                      Tradespeople & Contractors -{" "}
                      <a
                        href="https://swiftplumbing.replit.app"
                        className="text-primary-green underline"
                        target="_blank"
                      >
                        See a sample template!
                      </a>
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-2xl mr-3">💪</span>
                    <span>Gyms & Fitness Studios</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-2xl mr-3">✂️</span>
                    <span>Salons & Beauty Services</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-2xl mr-3">🏪</span>
                    <span>Retail & Local Shops</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-2xl mr-3">📚</span>
                    <span>
                      Professional Services -{" "}
                      <a
                        href="https://mobile-valet-demo-t93i.vercel.app/"
                        className="text-primary-green underline"
                        target="_blank"
                      >
                        See a sample template!
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-primary-blue">Custom Websites</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="card bg-gradient-to-br from-primary-blue/10 to-dark-card">
                <h3 className="text-2xl font-semibold mb-4">
                  Bespoke Design Features:
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span>Unique design tailored to your brand</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span>Custom functionality and features</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span>Advanced animations and interactions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span>Integration with third-party services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span>E-commerce capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span>Content management systems</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-gray-400 text-lg mb-6">
                  Stand out from the competition with a fully custom website
                  designed specifically for your brand. Perfect for businesses
                  that need unique functionality or want complete control over
                  their online presence.
                </p>
                <div className="bg-dark-card p-6 rounded-lg border border-dark-border mb-6">
                  <h3 className="text-xl font-semibold mb-4">
                    3-Step Process:
                  </h3>
                  <ol className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-primary-blue text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                        1
                      </span>
                      <div>
                        <strong>Chat:</strong> We discuss your vision, goals,
                        and requirements
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary-blue text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                        2
                      </span>
                      <div>
                        <strong>Build:</strong> I create your site with regular
                        feedback loops
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary-blue text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                        3
                      </span>
                      <div>
                        <strong>Launch:</strong> We deploy your site and ensure
                        everything works perfectly
                      </div>
                    </li>
                  </ol>
                </div>
                <div className="card border-2 border-primary-blue">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold">Custom Website</h3>
                    <div className="text-2xl font-bold text-primary-blue">
                      €300+
                    </div>
                  </div>
                  <p className="text-sm text-primary-blue font-semibold mb-4">
                    Introductory rate - price will increase as portfolio grows
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start">
                      <span className="text-primary-blue mr-2">✓</span>
                      <span>Fully bespoke design</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-blue mr-2">✓</span>
                      <span>Unlimited revision rounds</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-blue mr-2">✓</span>
                      <span>Complete feedback loop</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-blue mr-2">✓</span>
                      <span>Professional SEO setup</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-blue mr-2">✓</span>
                      <span>Launch support and training</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Maintenance & <span className="text-primary-green">Hosting</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-semibold mb-4">
                  Optional Maintenance
                </h3>
                <p className="text-gray-400 mb-4">
                  Keep your website up-to-date with regular updates, security
                  patches, and content changes.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-primary-green mr-2">✓</span>
                    <span>Regular security updates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-green mr-2">✓</span>
                    <span>Content updates and changes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-green mr-2">✓</span>
                    <span>Performance monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-green mr-2">✓</span>
                    <span>Priority support</span>
                  </li>
                </ul>
              </div>
              <div className="card">
                <h3 className="text-xl font-semibold mb-4">
                  Domain & Hosting Help
                </h3>
                <p className="text-gray-400 mb-4">
                  Need help with domain registration or hosting setup? We'll
                  guide you through the entire process.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span>Domain registration assistance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span>Hosting recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span>DNS configuration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span>Email setup guidance</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-t from-dark-bg to-dark-card">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Your Business Online?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Contact me today to discuss your project and get a detailed quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg">
                Get a Quote
              </Link>
              <Link href="/pricing" className="btn-secondary text-lg">
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
