'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Pricing() {
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
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Service Packages</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Choose the package that fits your business needs. Contact us for a personalized quote.
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-dark-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card hover:shadow-2xl hover:shadow-primary-green/20"
            >
              <div className="text-center mb-6">
                <div className="inline-block bg-primary-green/10 text-primary-green px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  BEST FOR GETTING STARTED
                </div>
                <h2 className="text-3xl font-bold mb-4">Template Setup</h2>
              </div>
              
              <div className="border-t border-dark-border pt-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">What's Included:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-green mr-3 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>3-page professional website</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-green mr-3 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Mobile-responsive design</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-green mr-3 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Professional template customization</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-green mr-3 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Content insertion and setup</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-green mr-3 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Contact form integration</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-green mr-3 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Deployment assistance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-green mr-3 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Basic SEO setup</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-green mr-3 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Can upgrade to custom later</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary-green/10 p-4 rounded-lg mb-6">
                <p className="text-sm text-gray-300">
                  <strong>Perfect for:</strong> Small businesses, startups, and entrepreneurs who need a professional online presence quickly and affordably.
                </p>
              </div>

              <Link href="/contact" className="btn-secondary w-full block text-center">
                Get Started
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="card hover:shadow-2xl hover:shadow-primary-blue/20 border-2 border-primary-blue relative"
            >
              <div className="absolute top-0 right-0 bg-primary-blue text-white px-4 py-1 rounded-bl-lg text-sm font-semibold">
                POPULAR
              </div>
              <div className="text-center mb-6">
                <div className="inline-block bg-primary-blue/10 text-primary-blue px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  BEST VALUE
                </div>
                <h2 className="text-3xl font-bold mb-4">Custom Website</h2>
              </div>
              
              <div className="border-t border-dark-border pt-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">Everything in Template, plus:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-blue mr-3 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Fully bespoke custom design</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-blue mr-3 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Unique branding and styling</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-blue mr-3 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Unlimited revision rounds</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-blue mr-3 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Advanced functionality & features</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-blue mr-3 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Custom animations & interactions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-blue mr-3 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Complete feedback loop</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-blue mr-3 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Advanced SEO optimization</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-blue mr-3 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Priority launch support</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary-blue/10 p-4 rounded-lg mb-6">
                <p className="text-sm text-gray-300">
                  <strong>Perfect for:</strong> Established businesses, brands seeking unique identity, and companies needing advanced features or e-commerce.
                </p>
              </div>

              <Link href="/contact" className="btn-primary w-full block text-center">
                Start Your Project
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="card bg-gradient-to-br from-dark-card to-dark-bg">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">Optional Maintenance Plan</h2>
                <p className="text-gray-400">Keep your site updated and secure</p>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-primary-green mr-2">✓</span>
                    <span>Regular security updates and backups</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-green mr-2">✓</span>
                    <span>Content updates and changes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-green mr-2">✓</span>
                    <span>Priority support via email</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-dark-card">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-primary-green">Questions</span>
            </h2>
          </motion.div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-lg font-semibold mb-2">What's the difference between template and custom?</h3>
              <p className="text-gray-400">
                Templates use pre-designed layouts that are customized with your content and branding. Custom websites are built from scratch specifically for your business with unique designs and features.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-lg font-semibold mb-2">How long does it take?</h3>
              <p className="text-gray-400">
                Template setups typically take 1-2 weeks. Custom websites usually take 2-4 weeks depending on complexity and revision requirements.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-lg font-semibold mb-2">Do I need to pay for hosting separately?</h3>
              <p className="text-gray-400">
                Yes, hosting is separate. I'll help you choose affordable hosting options and assist with setup.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-lg font-semibold mb-2">Can I update the website myself?</h3>
              <p className="text-gray-400">
                Yes! I'll provide guidance on how to make simple updates. For more complex changes, the optional maintenance plan is available.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-lg font-semibold mb-2">Can I upgrade from template to custom later?</h3>
              <p className="text-gray-400">
                Absolutely! Start with a template to get online quickly, then upgrade to a custom design as your business grows. We'll credit your initial investment.
              </p>
            </motion.div>
          </div>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Contact me to discuss your project and get a detailed quote tailored to your needs
            </p>
            <Link href="/contact" className="btn-primary text-lg">
              Get in Touch Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
