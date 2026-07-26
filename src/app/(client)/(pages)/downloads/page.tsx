'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import Breadcrumb from '@/components/ui/Breadcrumb';

interface Download {
  id: string;
  title: string;
  description: string;
  category: string;
  views: number;
}

const mockDownloads: Download[] = [
  {
    id: '1',
    title: 'GST Compliance Checklist 2024',
    description: 'Complete checklist for GST compliance with recent amendments.',
    category: 'Taxation',
    views: 2341,
  },
  {
    id: '2',
    title: 'Income Tax Planning Guide',
    description: 'Strategic guide for individual income tax planning.',
    category: 'Taxation',
    views: 1856,
  },
  {
    id: '3',
    title: 'Audit Readiness Checklist',
    description: 'Prepare your organization for statutory audit.',
    category: 'Audit',
    views: 1543,
  },
  {
    id: '4',
    title: 'Startup Registration Roadmap',
    description: 'Step-by-step guide for startup registration and compliance.',
    category: 'Startup',
    views: 2105,
  },
  {
    id: '5',
    title: 'Compliance Calendar 2024',
    description: 'Important dates and deadlines for all compliance filings.',
    category: 'Compliance',
    views: 3241,
  },
  {
    id: '6',
    title: 'Internal Controls Framework',
    description: 'Best practices for implementing internal controls.',
    category: 'Advisory',
    views: 987,
  },
];

export default function Downloads() {
  const [downloads, setDownloads] = useState<Download[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    setDownloads(mockDownloads);
  }, []);

  const categories = ['All', ...new Set(mockDownloads.map((d) => d.category))];
  const filtered =
    selectedCategory === 'All' ? downloads : downloads.filter((d) => d.category === selectedCategory);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <section className="pt-20 pb-12">
        <div className="container">
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Downloads' }]} />

          <div className="mt-12">
            <h1 className="text-5xl font-bold text-primary mb-4">Resource Centre</h1>
            <p className="text-xl text-supporting leading-relaxed max-w-3xl mb-12">
              Download checklists, guides, and resources to help with your compliance and business needs.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition ${
                    selectedCategory === category
                      ? 'bg-accent text-primary'
                      : 'bg-background text-primary hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Downloads Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-soft p-6 hover:shadow-medium transition group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold">
                      {item.category}
                    </span>
                    <FiDownload className="text-primary group-hover:text-accent transition" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-supporting text-sm mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-supporting">{item.views.toLocaleString()} downloads</span>
                    <button className="bg-accent text-primary px-4 py-2 rounded-lg text-sm font-semibold hover:bg-opacity-90 transition">
                      Download
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
