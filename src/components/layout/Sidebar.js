'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const navigationItems = [
    { name: 'Home', href: '/dashboard', icon: '🏠' },
    { name: 'Payments', href: '/payments', icon: '💳' },
    { name: 'My Characters', href: '/characters', icon: '👤' },
    { name: 'Fill Form', href: '/forms', icon: '📄' },
    { name: 'Buy SP', href: '/buy-sp', icon: '🪙' },
    { name: 'Buy Priority', href: '/buy-priority', icon: '🛡️', comingSoon: true }
  ];

  return (
    <div className="w-64 bg-gradient-to-b from-gray-900 to-black min-h-screen flex flex-col shadow-xl">
      {/* Logo */}
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">17</span>
          </div>
          <h1 className="text-white text-xl font-bold">17th Street RP</h1>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 p-4">
        <div className="mb-6">
          <h2 className="text-gray-400 text-xs font-semibold uppercase tracking-wider">USER</h2>
        </div>
        
        <nav className="space-y-1">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.comingSoon ? '#' : item.href}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive 
                    ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg' 
                    : item.comingSoon
                    ? 'text-gray-500 cursor-not-allowed'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                }`}
                onClick={item.comingSoon ? (e) => e.preventDefault() : undefined}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="flex-1 font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
} 