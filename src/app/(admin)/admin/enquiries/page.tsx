'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import toast from 'react-hot-toast';

interface Enquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  status: string;
  createdAt: string;
}

export default function EnquiriesPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      const response = await fetch('/api/admin/enquiries');
      if (response.ok) {
        const data = await response.json();
        setEnquiries(data);
      }
    } catch (error) {
      toast.error('Failed to fetch enquiries');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold text-primary mb-2">Contact Enquiries</h1>
      <p className="text-supporting mb-8">Manage customer inquiries and follow-ups</p>

      {loading ? (
        <div className="text-center py-12">Loading...</div>
      ) : enquiries.length === 0 ? (
        <div className="bg-white rounded-lg shadow-soft p-12 text-center">
          <p className="text-supporting">No enquiries yet</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-soft overflow-hidden">
          <table className="w-full">
            <thead className="bg-background border-b">
              <tr>
                <th className="text-left px-6 py-4 font-semibold text-primary">Name</th>
                <th className="text-left px-6 py-4 font-semibold text-primary">Email</th>
                <th className="text-left px-6 py-4 font-semibold text-primary">Phone</th>
                <th className="text-left px-6 py-4 font-semibold text-primary">Service</th>
                <th className="text-left px-6 py-4 font-semibold text-primary">Status</th>
                <th className="text-left px-6 py-4 font-semibold text-primary">Date</th>
              </tr>
            </thead>
            <tbody>
              {enquiries.map((enquiry) => (
                <tr key={enquiry.id} className="border-b hover:bg-background transition">
                  <td className="px-6 py-4 font-medium text-primary">{enquiry.name}</td>
                  <td className="px-6 py-4 text-supporting">
                    <a href={`mailto:${enquiry.email}`} className="hover:text-accent transition">
                      {enquiry.email}
                    </a>
                  </td>
                  <td className="px-6 py-4 text-supporting">
                    <a href={`tel:${enquiry.phone}`} className="hover:text-accent transition">
                      {enquiry.phone}
                    </a>
                  </td>
                  <td className="px-6 py-4 text-supporting">{enquiry.service}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      enquiry.status === 'new' ? 'bg-blue-100 text-blue-600' :
                      enquiry.status === 'contacted' ? 'bg-orange-100 text-orange-600' :
                      'bg-success/20 text-success'
                    }`}>
                      {enquiry.status.charAt(0).toUpperCase() + enquiry.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-supporting text-sm">
                    {new Date(enquiry.createdAt).toLocaleDateString()}
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
