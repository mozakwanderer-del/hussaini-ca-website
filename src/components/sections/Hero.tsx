'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/95">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-accent opacity-5 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-80 h-80 bg-accent opacity-5 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            Hussaini & Co.
            <br />
            <span className="text-accent">Chartered Accountants</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Trusted advisors helping businesses navigate audit, taxation and financial excellence with integrity and professionalism.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Schedule Consultation
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-accent rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
