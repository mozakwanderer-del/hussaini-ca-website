'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import Button from '@/components/ui/Button';

export default function NewArticle() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    author: 'Hussaini & Co.',
    category: 'General',
    tags: '',
    seoTitle: '',
    metaDesc: '',
    published: false,
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    handleChange(e);
    setFormData(prev => ({
      ...prev,
      slug: generateSlug(title),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/admin/articles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          tags: formData.tags.split(',').map(tag => tag.trim()),
          readTime: Math.ceil(formData.content.split(' ').length / 200),
        }),
      });

      if (response.ok) {
        toast.success('Article created successfully');
        router.push('/admin/articles');
      } else {
        toast.error('Failed to create article');
      }
    } catch (error) {
      toast.error('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold text-primary mb-8">Create New Article</h1>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-soft p-8 max-w-3xl space-y-6">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-primary mb-2">Article Title *</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleTitleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
            placeholder="Enter article title"
          />
        </div>

        {/* Slug */}
        <div>
          <label className="block text-sm font-medium text-primary mb-2">URL Slug</label>
          <input
            type="text"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent bg-background"
            placeholder="auto-generated"
            disabled
          />
        </div>

        {/* Excerpt */}
        <div>
          <label className="block text-sm font-medium text-primary mb-2">Excerpt *</label>
          <textarea
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            required
            rows={2}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
            placeholder="Brief summary for preview"
          />
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm font-medium text-primary mb-2">Content *</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            rows={12}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent font-mono text-sm"
            placeholder="Write your article content here. Supports Markdown."
          />
          <p className="text-xs text-supporting mt-2">Supports Markdown formatting</p>
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-primary mb-2">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
          >
            <option>General</option>
            <option>Taxation</option>
            <option>Audit</option>
            <option>Accounting</option>
            <option>Advisory</option>
          </select>
        </div>

        {/* Tags */}
        <div>
          <label className="block text-sm font-medium text-primary mb-2">Tags</label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
            placeholder="Separate tags with commas"
          />
        </div>

        {/* SEO */}
        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold text-primary mb-4">SEO Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-primary mb-2">SEO Title</label>
              <input
                type="text"
                name="seoTitle"
                value={formData.seoTitle}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                placeholder="Optimized for search engines"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary mb-2">Meta Description</label>
              <textarea
                name="metaDesc"
                value={formData.metaDesc}
                onChange={handleChange}
                rows={2}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                placeholder="Max 160 characters"
              />
            </div>
          </div>
        </div>

        {/* Publish */}
        <div className="flex items-center gap-3 border-t pt-6">
          <input
            type="checkbox"
            name="published"
            checked={formData.published}
            onChange={handleChange}
            id="published"
            className="w-4 h-4 rounded"
          />
          <label htmlFor="published" className="text-sm font-medium text-primary cursor-pointer">
            Publish immediately
          </label>
        </div>

        {/* Actions */}
        <div className="flex gap-4 pt-6 border-t">
          <Button type="submit" variant="primary" size="lg" loading={loading}>
            Create Article
          </Button>
          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={() => router.back()}
          >
            Cancel
          </Button>
        </div>
      </form>
    </motion.div>
  );
}
