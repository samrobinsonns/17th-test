'use client';

import { Layout } from '../../components/layout';

export default function BuyPriorityPage() {
  return (
    <Layout>
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Buy Priority</h1>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8">
            <div className="text-center text-gray-500 dark:text-gray-400">
              <div className="text-6xl mb-4">🛡️</div>
              <p className="text-lg">Coming Soon</p>
              <p className="text-sm mt-2">Priority queue features will be available soon.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 