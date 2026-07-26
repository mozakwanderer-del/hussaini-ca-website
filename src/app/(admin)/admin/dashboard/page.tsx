'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PrismaClient } from '@prisma/client';

export default function Dashboard() {
  const [stats, setStats] = useState({
    articles: 0,
    enquiries: 0,
    views: 0,
  });

  const statCards = [
    {
      title: 'Published Articles',
      value: stats.articles,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      title: 'Pending Enquiries',
      value: stats.enquiries,
      color: 'bg-orange-100 text-orange-600',
    },
    {
      title: 'Website Views',
      value: stats.views.toLocaleString(),
      color: 'bg-green-100 text-green-600',
    },
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-primary mb-2">Dashboard</h1>
        <p className="text-supporting">Welcome to your admin panel</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statCards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className={`rounded-lg p-6 text-white ${card.color} shadow-medium`}
          >
            <p className="opacity-80 text-sm mb-2">{card.title}</p>
            <p className="text-3xl font-bold">{card.value}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="bg-white rounded-lg shadow-soft p-8"
      >
        <h2 className="text-2xl font-bold text-primary mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="/admin/articles/new" className="bg-accent text-primary px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition inline-block">
            Create New Article
          </a>
          <a href="/admin/services" className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition inline-block">
            Manage Services
          </a>
        </div>
      </motion.div>
    </div>
  );
}
