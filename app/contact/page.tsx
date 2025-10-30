"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  businessName: string;
  message: string;
};

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError(
        error instanceof Error ? error.message : 'Failed to send message. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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
            Get in{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Touch
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Whether you're ready to launch or just exploring options — let's
            chat about your project
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-dark-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Send Me a Message</h2>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-primary-green/10 border border-primary-green text-primary-green p-4 rounded-lg mb-6"
                >
                  <strong>Thanks for reaching out!</strong> I'll reply within 24
                  hours.
                </motion.div>
              )}

              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/10 border border-red-500 text-red-400 p-4 rounded-lg mb-6"
                >
                  <strong>Error:</strong> {submitError}
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg focus:outline-none focus:border-primary-blue transition-colors"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg focus:outline-none focus:border-primary-blue transition-colors"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="businessName"
                    className="block text-sm font-medium mb-2"
                  >
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    {...register("businessName")}
                    className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg focus:outline-none focus:border-primary-blue transition-colors"
                    placeholder="Your Business Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    {...register("message", {
                      required: "Message is required",
                    })}
                    className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg focus:outline-none focus:border-primary-blue transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button 
                  type="submit" 
                  className="btn-primary w-full text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="card">
                    <div className="flex items-start">
                      <div className="bg-primary-blue/10 p-3 rounded-lg mr-4">
                        <svg
                          className="w-6 h-6 text-primary-blue"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <a
                          href="mailto:sean@sfweb.ie"
                          className="text-gray-400 hover:text-primary-blue transition-colors"
                        >
                          sean@sfweb.ie
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="flex items-start">
                      <div className="bg-primary-green/10 p-3 rounded-lg mr-4">
                        <svg
                          className="w-6 h-6 text-primary-green"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Location</h3>
                        <p className="text-gray-400">
                          Based in Limerick, Ireland
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="flex items-start">
                      <div className="bg-primary-blue/10 p-3 rounded-lg mr-4">
                        <svg
                          className="w-6 h-6 text-primary-blue"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Response Time</h3>
                        <p className="text-gray-400">Within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-gradient-to-br from-primary-green/10 to-dark-card">
                <h3 className="text-xl font-bold mb-4">Why Contact SFWeb?</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-primary-green mr-2">✓</span>
                    <span>Free initial consultation and quote</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-green mr-2">✓</span>
                    <span>Quick response time (within 24 hours)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-green mr-2">✓</span>
                    <span>Friendly, no-pressure approach</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-green mr-2">✓</span>
                    <span>Based in Limerick, Ireland</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-green mr-2">✓</span>
                    <span>Clear timelines and expectations</span>
                  </li>
                </ul>
              </div>

              <div className="card bg-dark-card border border-primary-blue/30">
                <h3 className="text-xl font-bold mb-3">
                  <span className="text-primary-blue">☘️</span> Proudly Irish
                </h3>
                <p className="text-gray-400">
                  SFWeb is a local Irish business based in Limerick, working
                  with businesses throughout Ireland. When you work with me,
                  you're supporting local while getting professional web design
                  services.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-card">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Happens Next?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div>
                <div className="text-4xl mb-3">📧</div>
                <h3 className="text-xl font-semibold mb-2">1. I'll Reply</h3>
                <p className="text-gray-400">
                  Within 24 hours, you'll get a personal response from me
                </p>
              </div>
              <div>
                <div className="text-4xl mb-3">💬</div>
                <h3 className="text-xl font-semibold mb-2">2. We'll Chat</h3>
                <p className="text-gray-400">
                  We'll discuss your needs and I'll provide recommendations
                </p>
              </div>
              <div>
                <div className="text-4xl mb-3">🚀</div>
                <h3 className="text-xl font-semibold mb-2">3. Get Started</h3>
                <p className="text-gray-400">
                  Once you're happy, we'll kick off your project
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
