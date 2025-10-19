"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const features = [
    {
      icon: "⚡",
      title: "Fast Turnaround",
      description: "Get your website up and running quickly",
    },
    {
      icon: "📱",
      title: "Mobile-Friendly",
      description: "Perfectly responsive on all devices",
    },
    {
      icon: "💰",
      title: "Affordable",
      description: "Quality websites that fit your budget",
    },
    {
      icon: "🔍",
      title: "SEO-Ready",
      description: "Built to rank well on search engines",
    },
    {
      icon: "☘️",
      title: "Local Support",
      description: "Personal service from Limerick",
    },
    {
      icon: "⚙️",
      title: "Easy Updates",
      description: "Simple content management",
    },
  ];

  return (
    <div>
      <section className="section-padding bg-gradient-to-b from-dark-bg to-dark-card">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Modern Websites for{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Local Irish Businesses
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            Affordable, fast, and locally built in Ireland
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/contact" className="btn-primary text-lg">
              Get a Quote
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-dark-bg">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose <span className="text-primary-green">SFWeb</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-card">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Choose Your <span className="text-primary-blue">Solution</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Whether you need a quick setup or a fully custom design, we have the
            right option for you
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card hover:shadow-xl hover:shadow-primary-green/20"
            >
              <div className="text-primary-green text-xl font-bold mb-2">
                Template Setup
              </div>
              <div className="text-4xl font-bold mb-4">€150-€200</div>
              <p className="text-gray-400 mb-6">
                Perfect for getting online quickly with professional templates
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-primary-green mr-2">✓</span>
                  <span>3-page professional website</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-green mr-2">✓</span>
                  <span>Mobile-responsive design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-green mr-2">✓</span>
                  <span>Contact form included</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-green mr-2">✓</span>
                  <span>Setup & deployment help</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-green mr-2">✓</span>
                  <span>Can upgrade later</span>
                </li>
              </ul>
              <Link
                href="/services"
                className="btn-secondary w-full block text-center"
              >
                Learn More
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card hover:shadow-xl hover:shadow-primary-blue/20 border-2 border-primary-blue"
            >
              <div className="text-primary-blue text-xl font-bold mb-2">
                Custom Website
              </div>
              <div className="text-4xl font-bold mb-4">€300+</div>
              <p className="text-gray-400 mb-6">
                Fully bespoke design tailored to your unique brand, more
                customisation
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">✓</span>
                  <span>Unique custom design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">✓</span>
                  <span>Unlimited revisions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">✓</span>
                  <span>Advanced functionality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">✓</span>
                  <span>SEO optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">✓</span>
                  <span>Launch support included</span>
                </li>
              </ul>
              <Link
                href="/services"
                className="btn-primary w-full block text-center"
              >
                Get Started
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-bg">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proudly <span className="text-primary-green">Limerick-Based</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Working with clients across Ireland to help local businesses
              thrive online. Get the personal touch of a local developer who
              understands your community.
            </p>
            <div className="text-5xl mb-6">☘️</div>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Start your project today and get your business online with a
              professional website
            </p>
            <Link href="/contact" className="btn-primary text-lg">
              Contact Me Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
