'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const services = [
  {
    icon: '📊',
    title: 'Audit & Assurance',
    description: 'Statutory audit, tax audit, internal audit, and comprehensive assurance services.',
    features: ['Statutory Audit', 'Tax Audit', 'Internal Audit', 'Bank Audit'],
  },
  {
    icon: '💰',
    title: 'Taxation',
    description: 'Expert tax planning, compliance, and representation services.',
    features: ['Income Tax', 'GST', 'Tax Planning', 'Appeals'],
  },
  {
    icon: '🚀',
    title: 'Startup Advisory',
    description: 'Comprehensive services designed for growing businesses and startups.',
    features: ['Entity Selection', 'Incorporation', 'Fund Raising', 'Compliance'],
  },
  {
    icon: '📈',
    title: 'Accounting Outsourcing',
    description: 'Professional accounting and bookkeeping services using modern cloud platforms.',
    features: ['Bookkeeping', 'Payroll', 'Cloud Accounting', 'MIS'],
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-5xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-xl text-supporting leading-relaxed">
            We provide comprehensive professional services tailored to meet the unique needs of businesses at every stage of growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-soft hover:shadow-medium transition group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-primary mb-3">{service.title}</h3>
              <p className="text-supporting mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-supporting text-sm">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/services" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition">
                Learn More <FiArrowRight />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
