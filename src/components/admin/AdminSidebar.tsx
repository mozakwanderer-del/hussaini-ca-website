'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiHome, FiEdit3, FiSettings, FiUsers, FiMailOpen, FiDownload } from 'react-icons/fi';

const menuItems = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: FiHome },
  { label: 'Articles', href: '/admin/articles', icon: FiEdit3 },
  { label: 'Services', href: '/admin/services', icon: FiSettings },
  { label: 'Partners', href: '/admin/partners', icon: FiUsers },
  { label: 'Enquiries', href: '/admin/enquiries', icon: FiMailOpen },
  { label: 'Downloads', href: '/admin/downloads', icon: FiDownload },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-primary text-white h-screen fixed left-0 top-0">
      <div className="p-6 border-b border-white/10">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-primary font-bold">H&C</div>
          Admin
        </h1>
      </div>

      <nav className="py-8 px-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/');

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                isActive
                  ? 'bg-accent text-primary font-semibold'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon size={20} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="absolute bottom-8 left-0 right-0 px-4">
        <p className="text-xs text-white/50 text-center">
          Hussaini & Co. Admin Panel v1.0
        </p>
      </div>
    </aside>
  );
}
