'use client';

import { motion } from 'framer-motion';

const partners = [
  {
    name: 'Hussaini Zakir',
    title: 'Founding Partner',
    bio: 'Extensive experience in internal audit, Ind AS, Indian GAAP, audit leadership, corporate finance and risk advisory. Previously served at Western Coalfields Limited.',
    expertise: ['Internal Audit', 'Ind AS', 'Corporate Finance', 'Risk Advisory'],
  },
  {
    name: 'Moiz Bohra',
    title: 'Partner',
    bio: 'Formerly with Deloitte India. Specializes in statutory audit, taxation, financial reporting, risk assessment and corporate compliance.',
    expertise: ['Statutory Audit', 'Taxation', 'Financial Reporting', 'Risk Assessment'],
  },
  {
    name: 'Mohammed Zakir',
    title: 'Partner',
    bio: 'Qualified CA (2025), formerly with KPMG India. Expertise in listed company audits, startup consulting, and financial technology implementation.',
    expertise: ['Listed Company Audits', 'Startup Consulting', 'Fintech', 'Automation'],
  },
];

export default function Partners() {
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
          <h2 className="text-5xl font-bold text-primary mb-4">Our Partners</h2>
          <p className="text-xl text-supporting leading-relaxed">
            Led by experienced Chartered Accountants with diverse backgrounds and proven expertise across industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-background to-white p-8 rounded-xl shadow-soft hover:shadow-medium transition"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-1">{partner.name}</h3>
              <p className="text-accent text-sm font-medium mb-4">{partner.title}</p>
              <p className="text-supporting text-sm leading-relaxed mb-6">{partner.bio}</p>
              <div className="flex flex-wrap gap-2">
                {partner.expertise.map((skill, idx) => (
                  <span key={idx} className="inline-block bg-primary/5 text-primary text-xs px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
