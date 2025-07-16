'use client';

import { useAuth } from '../../app/contexts/AuthContext';
import { useDarkMode } from '../../hooks/useDarkMode';

export default function Header() {
  const { user } = useAuth();
  const { isDark, toggleTheme } = useDarkMode();

  return (
    <header className="bg-white dark:bg-gray-900 px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Left side - Empty for balance */}
        <div></div>

        {/* Right side - User actions */}
        <div className="flex items-center space-x-4">
          <button className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg transition-colors">
            Join Queue
          </button>
          
          <button 
            onClick={toggleTheme}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? '☀️' : '🌙'}
          </button>
          
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <div className="text-gray-800 dark:text-gray-200 font-medium">{user?.name || 'samrobinsonns'}</div>
              <div className="text-gray-500 dark:text-gray-400 text-sm">Whitelisted</div>
            </div>
            <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
              <span className="text-gray-600 dark:text-gray-300 text-sm">👤</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 