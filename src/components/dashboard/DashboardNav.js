'use client';

import { useAuth } from '../../app/contexts/AuthContext';

export default function DashboardNav() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  return (
    <nav className="bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">17</span>
            </div>
            <span className="text-white font-bold text-xl">17TH STREET RP</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-white/80">Welcome, {user?.name}</span>
            <button
              onClick={handleLogout}
              className="text-white/80 hover:text-white transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 