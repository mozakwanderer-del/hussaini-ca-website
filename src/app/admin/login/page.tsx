'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import toast from 'react-hot-toast';
import Button from '@/components/ui/Button';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result?.ok) {
        toast.success('Login successful');
        router.push('/admin/dashboard');
      } else {
        toast.error('Invalid email or password');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary/95">
      <div className="w-full max-w-md bg-white rounded-lg shadow-premium p-8">
        <h1 className="text-3xl font-bold text-primary mb-2">Admin Login</h1>
        <p className="text-supporting mb-8">Sign in to manage your website</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-primary mb-2">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
              placeholder="admin@hussaini-co.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
              placeholder="••••••••"
            />
          </div>

          <Button type="submit" variant="primary" size="lg" loading={loading} className="w-full">
            Sign In
          </Button>
        </form>

        <p className="text-xs text-supporting text-center mt-6">
          Protected area. Unauthorized access is prohibited.
        </p>
      </div>
    </div>
  );
}
