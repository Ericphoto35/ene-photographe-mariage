import { notFound } from 'next/navigation';
import { blogPosts, getBlogPost } from '../../../data/blogPosts';
import BlogPostContent from './BlogPostContent';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  const url = `https://www.loeil-de-monsieur-r.fr/blog/${post.slug}`;

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url,
      images: [post.coverImage],
      locale: 'fr_FR',
      type: 'article',
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return <BlogPostContent post={post} />;
}
