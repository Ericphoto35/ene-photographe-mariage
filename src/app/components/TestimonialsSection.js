'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const TestimonialsSection = ({ testimonials }) => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-serif mb-4"
          >
            Ce Que Disent Mes Clients
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px w-24 bg-[var(--border-gray)] mx-auto mb-6"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-[var(--bg-white)] p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-[var(--text-gray-600)]">{testimonial.date}</p>
                </div>
              </div>
              <p className="text-[var(--text-gray-600)] italic">
                &quot;{testimonial.quote}&quot;
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-12 px-4"
        >
          <Link 
            href="/galerie" 
            className="inline-block px-8 py-3 border border-[var(--text-gray-800)] text-[var(--text-gray-800)] hover:bg-[var(--text-gray-800)] hover:text-[var(--bg-white)] transition-colors rounded-full text-sm uppercase tracking-wider font-medium w-full sm:w-auto text-center"
          >
            Voir mon portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
