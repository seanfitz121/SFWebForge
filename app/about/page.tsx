"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
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
            About{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              SFWeb
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Helping Irish businesses grow online with professional, affordable
            web design from Limerick
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-dark-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Who <span className="text-primary-green">I Am</span>
              </h2>
              <div className="space-y-4 text-gray-400 text-lg">
                <p>
                  Hi, I'm <strong className="text-white">Sean</strong> — I'm
                  based in Limerick, Ireland. I create clean, modern websites
                  for local Irish businesses who want to establish or improve
                  their online presence.
                </p>
                <p>
                  Upon working on my own website, I saw how many talented local
                  businesses struggled with expensive web design services or
                  complicated DIY website builders. I started SFWeb to offer a
                  better solution: professional websites that make
                  sense for Irish small businesses.
                </p>
                <p>
                  Whether you're a café in Limerick, a tradesperson in Cork, or
                  a salon in Galway, you deserve a website that represents your
                  business properly without breaking the bank.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card bg-gradient-to-br from-primary-blue/10 to-dark-card"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">
                Why SFWeb?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-3xl mr-4">🎓</span>
                  <div>
                    <strong className="text-white">
                      Qualified Professional
                    </strong>
                    <p className="text-gray-400 text-sm">
                      Professional web development expertise
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-3xl mr-4">☘️</span>
                  <div>
                    <strong className="text-white">Local Irish Service</strong>
                    <p className="text-gray-400 text-sm">
                      Based in Limerick, working with businesses across Ireland
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-3xl mr-4">💰</span>
                  <div>
                    <strong className="text-white">Great Value</strong>
                    <p className="text-gray-400 text-sm">
                      Quality websites that deliver results for your business
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-3xl mr-4">🤝</span>
                  <div>
                    <strong className="text-white">Personal Touch</strong>
                    <p className="text-gray-400 text-sm">
                      Direct communication with me, not a faceless agency
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              My <span className="text-primary-blue">Mission</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              <strong className="text-white">
                Helping Irish businesses grow online with professional websites.
              </strong>
              Every business deserves a professional website that attracts
              customers and builds trust. I'm here to make that happen for
              local businesses across Ireland.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              How I <span className="text-primary-green">Work</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="card text-center">
                <div className="bg-primary-blue w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-2xl font-bold mb-3">Chat</h3>
                <p className="text-gray-400">
                  We discuss your business, goals, and what you need from your
                  website. I'll recommend the best solution for your budget and
                  timeline.
                </p>
              </div>

              <div className="card text-center">
                <div className="bg-primary-green w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-2xl font-bold mb-3">Design</h3>
                <p className="text-gray-400">
                  I create your website with regular updates and feedback loops.
                  You'll see the progress and have input throughout the process.
                </p>
              </div>

              <div className="card text-center">
                <div className="bg-primary-blue w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-2xl font-bold mb-3">Launch</h3>
                <p className="text-gray-400">
                  Once you're happy, we launch your site. I'll help with
                  deployment, domain setup, and make sure everything runs
                  smoothly.
                </p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-primary-green">Limerick</span> Based,
              Ireland Focused
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              SFWeb is proudly based in Limerick, serving businesses throughout
              Ireland. I understand the local market and what Irish customers
              expect. When you work with me, you're supporting local Irish
              business while getting professional web design services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl mb-3">📍</div>
              <h3 className="text-xl font-semibold mb-2">Limerick Based</h3>
              <p className="text-gray-400">
                Operating from the heart of Limerick
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl mb-3">☘️</div>
              <h3 className="text-xl font-semibold mb-2">Ireland-Wide</h3>
              <p className="text-gray-400">
                Working with businesses across Ireland
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Personal Service</h3>
              <p className="text-gray-400">Direct, friendly communication</p>
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
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Whether you're ready to launch or just exploring options —
              let's chat about your project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg">
                Get in Touch
              </Link>
              <Link href="/services" className="btn-secondary text-lg">
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
