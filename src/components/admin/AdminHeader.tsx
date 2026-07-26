'use client';

import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { FiLogOut, FiUser } from 'react-icons/fi';

export default function AdminHeader() {
  const { data: session } = useSession();

  return (
    <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
      <div>
        <h2 className="text-sm text-supporting">Welcome back</h2>
        <p className="text-primary font-semibold">{session?.user?.name}</p>
      </div>

      <button
        onClick={() => signOut({ callbackUrl: '/' })}
        className="flex items-center gap-2 text-supporting hover:text-error transition"
      >
        <FiLogOut />
        Sign Out
      </button>
    </header>
  );
}
