'use client';

import { motion } from 'framer-motion';

export default function About() {
  const values = [
    {
      number: '01',
      title: 'Integrity',
      description: 'Upholding the highest ethical standards in all professional engagements',
    },
    {
      number: '02',
      title: 'Excellence',
      description: 'Delivering technical excellence and innovative financial solutions',
    },
    {
      number: '03',
      title: 'Professionalism',
      description: 'Maintaining professional standards and continuous learning',
    },
    {
      number: '04',
      title: 'Partnership',
      description: 'Building long-term relationships based on trust and transparency',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-5xl font-bold text-primary mb-4">About Us</h2>
          <p className="text-xl text-supporting leading-relaxed">
            Hussaini & Co. combines decades of professional experience with modern technology-driven advisory services. We are committed to delivering professional services with integrity, technical excellence, and client-focused solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-background to-white p-8 rounded-xl shadow-soft hover:shadow-medium transition"
            >
              <div className="text-4xl font-bold text-accent mb-4">{value.number}</div>
              <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
              <p className="text-supporting text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
