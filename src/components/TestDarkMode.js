'use client';

import { useState } from 'react';

export default function TestDarkMode() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="p-4">
      <button 
        onClick={toggleTheme}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Toggle Theme
      </button>
      
      <div className="mt-4 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded">
        <h2 className="text-gray-900 dark:text-white font-bold">Test Component</h2>
        <p className="text-gray-600 dark:text-gray-400">This should change colors in dark mode</p>
        <div className="mt-2">
          <span className="inline-block bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-sm">
            Current: {isDark ? 'Dark' : 'Light'}
          </span>
        </div>
      </div>
    </div>
  );
} 