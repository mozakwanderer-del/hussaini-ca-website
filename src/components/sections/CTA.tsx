'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary/95">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto text-white"
        >
          <h2 className="text-5xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            Discover how Hussaini & Co. can help your business achieve financial excellence and sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Schedule Consultation
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
