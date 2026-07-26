'use client';

import { motion } from 'framer-motion';
import Breadcrumb from '@/components/ui/Breadcrumb';

const industries = [
  {
    name: 'Manufacturing',
    icon: '🏭',
    description: 'Audit, compliance, and advisory for manufacturing enterprises.',
    services: ['Statutory Audit', 'Internal Audit', 'GST Compliance', 'Financial Advisory'],
  },
  {
    name: 'Mining',
    icon: '⛏️',
    description: 'Specialized services for mining companies including royalty compliance.',
    services: ['Mining Audit', 'Royalty Compliance', 'Environmental Audit', 'Tax Planning'],
  },
  {
    name: 'Healthcare',
    icon: '🏥',
    description: 'Professional services tailored for healthcare providers and hospitals.',
    services: ['Hospital Audit', 'Regulatory Compliance', 'MIS Reporting', 'Fund Audit'],
  },
  {
    name: 'Retail',
    icon: '🛍️',
    description: 'End-to-end support for retail businesses and e-commerce operations.',
    services: ['Statutory Audit', 'GST Advisory', 'Inventory Audit', 'Financial Reporting'],
  },
  {
    name: 'Real Estate',
    icon: '🏢',
    description: 'Comprehensive services for real estate and construction companies.',
    services: ['Project Accounting', 'GST Compliance', 'Audit Services', 'MIS Systems'],
  },
  {
    name: 'NGO & Nonprofits',
    icon: '🤝',
    description: 'Specialized audit and compliance services for nonprofit organizations.',
    services: ['Statutory Audit', '80G Compliance', 'Fund Audit', 'Grant Accountability'],
  },
  {
    name: 'Startups',
    icon: '🚀',
    description: 'Growth-focused advisory for startups and early-stage companies.',
    services: ['Registration', 'Financial Modeling', 'Fund Raising', 'Compliance Calendar'],
  },
  {
    name: 'Logistics',
    icon: '🚚',
    description: 'Services for logistics and transportation businesses.',
    services: ['Statutory Audit', 'GST Management', 'Cost Analysis', 'Financial Advisory'],
  },
];

export default function Industries() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <section className="pt-20 pb-12">
        <div className="container">
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Industries' }]} />

          <div className="mt-12">
            <h1 className="text-5xl font-bold text-primary mb-4">Industries We Serve</h1>
            <p className="text-xl text-supporting leading-relaxed max-w-3xl mb-12">
              We serve diverse industries with specialized expertise and industry-specific knowledge.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-soft p-6 hover:shadow-medium transition group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition">{industry.icon}</div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{industry.name}</h3>
                  <p className="text-supporting text-sm mb-4">{industry.description}</p>
                  <ul className="space-y-1">
                    {industry.services.map((service, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-supporting text-xs">
                        <span className="w-1 h-1 bg-accent rounded-full" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
