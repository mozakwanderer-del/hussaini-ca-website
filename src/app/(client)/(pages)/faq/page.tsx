'use client';

import { motion } from 'framer-motion';
import Breadcrumb from '@/components/ui/Breadcrumb';

const faqs = [
  {
    category: 'Services',
    questions: [
      {
        q: 'What services does Hussaini & Co. provide?',
        a: 'We provide a comprehensive range of services including statutory audit, taxation advisory, internal audit, startup consultation, accounting outsourcing, and financial advisory.',
      },
      {
        q: 'Do you provide international taxation services?',
        a: 'Yes, we offer international taxation advisory including cross-border taxation guidance, DTAA consultation, and withholding tax compliance.',
      },
      {
        q: 'Can you help with startup registration?',
        a: 'Absolutely. We guide startups through entity selection, registration, financial modeling, fund-raising readiness, and compliance calendar setup.',
      },
    ],
  },
  {
    category: 'Engagement',
    questions: [
      {
        q: 'How do I engage your services?',
        a: 'You can contact us via phone, email, WhatsApp, or by filling the contact form on our website. We will discuss your requirements and provide a proposal.',
      },
      {
        q: 'What is your typical engagement process?',
        a: 'We start with understanding your business, requirements, and timeline. After scoping, we propose a fee structure, timeline, and team composition.',
      },
      {
        q: 'Do you provide virtual consultations?',
        a: 'Yes, we offer virtual consultations and remote engagement options for clients across India.',
      },
    ],
  },
  {
    category: 'Compliance',
    questions: [
      {
        q: 'What is ICAI and why does it matter?',
        a: 'ICAI (Institute of Chartered Accountants of India) is the regulatory body for chartered accountants. All our professionals are ICAI members and follow their Code of Conduct.',
      },
      {
        q: 'Are your professionals qualified?',
        a: 'Yes, all our partners are qualified Chartered Accountants with extensive professional experience.',
      },
      {
        q: 'What is your experience with listed companies?',
        a: 'We have experience auditing listed companies and understand regulatory requirements under Companies Act and stock exchange norms.',
      },
    ],
  },
];

export default function FAQ() {
  const [expanded, setExpanded] = motion.useState<string | null>(null);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <section className="pt-20 pb-12">
        <div className="container">
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]} />

          <div className="mt-12">
            <h1 className="text-5xl font-bold text-primary mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-supporting leading-relaxed max-w-3xl mb-12">
              Find answers to common questions about our services, engagement process, and team.
            </p>

            <div className="space-y-12">
              {faqs.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h2 className="text-2xl font-bold text-primary mb-6">{section.category}</h2>
                  <div className="space-y-4">
                    {section.questions.map((faq, idx) => {
                      const id = `${sectionIdx}-${idx}`;
                      const isExpanded = expanded === id;

                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          viewport={{ once: true }}
                          className="bg-white rounded-lg shadow-soft overflow-hidden"
                        >
                          <button
                            onClick={() => setExpanded(isExpanded ? null : id)}
                            className="w-full px-6 py-4 flex items-start justify-between hover:bg-background transition"
                          >
                            <h3 className="text-lg font-semibold text-primary text-left">{faq.q}</h3>
                            <span
                              className={`text-accent text-2xl flex-shrink-0 ml-4 transition ${
                                isExpanded ? 'rotate-180' : ''
                              }`}
                            >
                              ↓
                            </span>
                          </button>

                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: isExpanded ? 1 : 0, height: isExpanded ? 'auto' : 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 py-4 border-t text-supporting leading-relaxed">
                              {faq.a}
                            </div>
                          </motion.div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
