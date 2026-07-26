'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiEdit2, FiTrash2, FiPlus } from 'react-icons/fi';
import toast from 'react-hot-toast';

interface Article {
  id: string;
  title: string;
  slug: string;
  author: string;
  published: boolean;
  publishedAt: string | null;
  createdAt: string;
}

export default function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await fetch('/api/admin/articles');
      if (response.ok) {
        const data = await response.json();
        setArticles(data);
      }
    } catch (error) {
      toast.error('Failed to fetch articles');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this article?')) return;

    try {
      const response = await fetch(`/api/admin/articles/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        toast.success('Article deleted');
        setArticles(articles.filter((a) => a.id !== id));
      } else {
        toast.error('Failed to delete article');
      }
    } catch (error) {
      toast.error('An error occurred');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-primary mb-2">Articles</h1>
          <p className="text-supporting">Manage blog posts and knowledge centre content</p>
        </div>
        <Link
          href="/admin/articles/new"
          className="flex items-center gap-2 bg-accent text-primary px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
        >
          <FiPlus /> New Article
        </Link>
      </div>

      {loading ? (
        <div className="text-center py-12 text-supporting">Loading articles...</div>
      ) : articles.length === 0 ? (
        <div className="bg-white rounded-lg shadow-soft p-12 text-center">
          <p className="text-supporting mb-4">No articles yet</p>
          <Link
            href="/admin/articles/new"
            className="text-accent font-semibold hover:underline"
          >
            Create your first article
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-soft overflow-hidden">
          <table className="w-full">
            <thead className="bg-background border-b">
              <tr>
                <th className="text-left px-6 py-4 font-semibold text-primary">Title</th>
                <th className="text-left px-6 py-4 font-semibold text-primary">Author</th>
                <th className="text-left px-6 py-4 font-semibold text-primary">Status</th>
                <th className="text-left px-6 py-4 font-semibold text-primary">Date</th>
                <th className="text-left px-6 py-4 font-semibold text-primary">Actions</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article) => (
                <tr key={article.id} className="border-b hover:bg-background transition">
                  <td className="px-6 py-4 font-medium text-primary">{article.title}</td>
                  <td className="px-6 py-4 text-supporting">{article.author}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        article.published
                          ? 'bg-success/20 text-success'
                          : 'bg-gray-200 text-gray-600'
                      }`}
                    >
                      {article.published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-supporting text-sm">
                    {new Date(article.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 flex gap-2">
                    <Link
                      href={`/admin/articles/${article.id}`}
                      className="text-primary hover:text-accent transition"
                    >
                      <FiEdit2 size={18} />
                    </Link>
                    <button
                      onClick={() => handleDelete(article.id)}
                      className="text-error hover:text-error/80 transition"
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </motion.div>
  );
}
