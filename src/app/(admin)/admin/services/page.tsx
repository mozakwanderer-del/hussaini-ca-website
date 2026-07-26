'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiEdit2, FiTrash2, FiPlus } from 'react-icons/fi';
import toast from 'react-hot-toast';

interface Service {
  id: string;
  name: string;
  slug: string;
  published: boolean;
  createdAt: string;
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch('/api/admin/services');
      if (response.ok) {
        const data = await response.json();
        setServices(data);
      }
    } catch (error) {
      toast.error('Failed to fetch services');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure?')) return;

    try {
      const response = await fetch(`/api/admin/services/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        toast.success('Service deleted');
        setServices(services.filter((s) => s.id !== id));
      } else {
        toast.error('Failed to delete');
      }
    } catch (error) {
      toast.error('An error occurred');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-primary mb-2">Services</h1>
          <p className="text-supporting">Manage your service offerings</p>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-12">Loading...</div>
      ) : (
        <div className="bg-white rounded-lg shadow-soft overflow-hidden">
          <table className="w-full">
            <thead className="bg-background border-b">
              <tr>
                <th className="text-left px-6 py-4 font-semibold text-primary">Service Name</th>
                <th className="text-left px-6 py-4 font-semibold text-primary">Slug</th>
                <th className="text-left px-6 py-4 font-semibold text-primary">Status</th>
                <th className="text-left px-6 py-4 font-semibold text-primary">Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service.id} className="border-b hover:bg-background transition">
                  <td className="px-6 py-4 font-medium text-primary">{service.name}</td>
                  <td className="px-6 py-4 text-supporting text-sm">{service.slug}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        service.published
                          ? 'bg-success/20 text-success'
                          : 'bg-gray-200 text-gray-600'
                      }`}
                    >
                      {service.published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="px-6 py-4 flex gap-2">
                    <Link href={`/admin/services/${service.id}`} className="text-primary hover:text-accent transition">
                      <FiEdit2 size={18} />
                    </Link>
                    <button onClick={() => handleDelete(service.id)} className="text-error hover:text-error/80 transition">
                      <FiTrash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </motion.div>
  );
}
