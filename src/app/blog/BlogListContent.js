'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { blogPosts } from '../../data/blogPosts';

export default function BlogListContent() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif mb-4"
          >
            Blog
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px w-24 bg-[var(--border-gray)] mx-auto mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto text-[var(--text-gray-600)]"
          >
            Récits et reportages de mariages photographiés en Bretagne et ailleurs en France.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="relative overflow-hidden aspect-[4/3] mb-4">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${post.coverImage})` }}
                  />
                </div>
                <p className="text-xs uppercase tracking-wider text-[var(--text-gray-600)] mb-2">
                  {post.location}
                </p>
                <h2 className="text-xl font-serif mb-2 group-hover:opacity-70 transition-opacity">
                  {post.title}
                </h2>
                <p className="text-sm text-[var(--text-gray-600)]">{post.excerpt}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
