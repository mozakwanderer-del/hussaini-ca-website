'use client';

import { motion } from 'framer-motion';
import Breadcrumb from '@/components/ui/Breadcrumb';

const careers = [
  {
    title: 'Senior Chartered Accountant',
    type: 'Full-time',
    location: 'Chandrapur, Maharashtra',
    description: 'We are seeking an experienced Senior Chartered Accountant to join our audit and advisory team.',
    requirements: ['CA qualification', '5+ years experience', 'Audit expertise', 'Client management'],
  },
  {
    title: 'Audit Associate',
    type: 'Full-time',
    location: 'Chandrapur, Maharashtra',
    description: 'Opportunity for a qualified CA to work on diverse audit and assurance engagements.',
    requirements: ['CA qualification', '2-4 years experience', 'Statutory audit knowledge', 'Willing to travel'],
  },
  {
    title: 'Taxation Specialist',
    type: 'Full-time',
    location: 'Chandrapur, Maharashtra',
    description: 'Expert needed for income tax, GST, and international taxation advisory.',
    requirements: ['CA qualification', '3+ years tax experience', 'GST expertise', 'Advisory skills'],
  },
];

export default function Careers() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <section className="pt-20 pb-12">
        <div className="container">
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Careers' }]} />

          <div className="mt-12">
            <h1 className="text-5xl font-bold text-primary mb-4">Join Our Team</h1>
            <p className="text-xl text-supporting leading-relaxed max-w-3xl mb-12">
              We are always looking for talented Chartered Accountants and finance professionals who share our commitment to excellence, integrity, and continuous learning.
            </p>

            <div className="space-y-6">
              {careers.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-soft p-8 hover:shadow-medium transition"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">{job.title}</h3>
                      <p className="text-supporting">
                        {job.type} • {job.location}
                      </p>
                    </div>
                  </div>

                  <p className="text-supporting mb-6">{job.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-3">Requirements:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-supporting">
                          <span className="w-2 h-2 bg-accent rounded-full" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="bg-accent text-primary px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
                    Apply Now
                  </button>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-12 bg-gradient-to-r from-primary to-primary/95 rounded-lg p-8 text-white text-center"
            >
              <h3 className="text-2xl font-bold mb-2">Don't see a fit? Send us your profile.</h3>
              <p className="mb-6 text-white/80">
                We are always interested in talented professionals. Share your CV and we will get back to you.
              </p>
              <a
                href="mailto:careers@hussaini-co.com"
                className="inline-block bg-accent text-primary px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
              >
                Send Your CV
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
