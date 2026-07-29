'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function BlogPostContent({ post }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    image: `https://www.loeil-de-monsieur-r.fr${post.coverImage}`,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: "L'Oeil de Monsieur R",
    },
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-wider text-[var(--text-gray-600)] mb-4"
          >
            {post.venueUrl ? (
              <a
                href={post.venueUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--text-gray-800)] hover:underline transition-colors"
              >
                {post.location}
              </a>
            ) : (
              post.location
            )}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-serif mb-4"
          >
            {post.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-px w-24 bg-[var(--border-gray)] mx-auto"
          ></motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-4xl mx-auto aspect-[16/9] mb-12 overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${post.coverImage})` }}
          />
        </motion.div>

        <article className="max-w-2xl mx-auto space-y-12">
          <div className="space-y-4 text-[var(--text-gray-600)] leading-relaxed">
            {post.intro.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {post.sections.map((section) => (
            <section key={section.heading} className="space-y-4">
              <h2 className="text-2xl font-serif">{section.heading}</h2>
              {section.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-[var(--text-gray-600)] leading-relaxed">
                  {paragraph}
                </p>
              ))}
              {section.image && (
                <div className="relative aspect-[3/2] overflow-hidden mt-6">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${section.image.src})` }}
                    role="img"
                    aria-label={section.image.alt}
                  />
                </div>
              )}
            </section>
          ))}

          <div className="text-[var(--text-gray-600)] leading-relaxed">
            <p>{post.outro}</p>
          </div>

          {post.relatedLinks && (
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {post.relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[var(--text-gray-800)] underline underline-offset-4 hover:opacity-70 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          <div className="text-center pt-6">
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-[var(--text-gray-800)] text-[var(--bg-white)] hover:bg-[var(--text-gray-600)] transition-colors rounded-full text-sm uppercase tracking-wider font-medium"
            >
              Discuter de mon projet de mariage
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
