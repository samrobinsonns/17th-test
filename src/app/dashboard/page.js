'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Layout } from '../../components/layout';
import {
  StatsCards,
  CharacterInfo,
  QuickActions,
  ServerInfo,
  UpcomingEvents,
  SupportLinks,
  LoadingSpinner
} from '../../components/dashboard';

export default function DashboardPage() {
  const { user, logout, isLoading: authLoading } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('Dashboard: user state:', user);
    console.log('Dashboard: authLoading state:', authLoading);
    
    // Wait for auth to finish loading
    if (authLoading) {
      console.log('Dashboard: Auth still loading, waiting...');
      return;
    }
    
    // Check if user is logged in
    if (!user) {
      console.log('Dashboard: No user found, redirecting to login');
      window.location.href = '/login';
      return;
    }

    console.log('Dashboard: User authenticated, showing dashboard');
    setIsLoading(false);
  }, [user, authLoading]);

  if (isLoading || authLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Layout>
      <div className="p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Welcome back, {user?.name}!</h1>
            <p className="text-gray-600 dark:text-gray-400">Manage your account and track your progress</p>
          </div>

          <StatsCards />

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Character Information */}
            <div className="lg:col-span-2">
              {/* Recent Announcements */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Recent Announcements</h2>
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900 dark:text-white">Server Launch scheduled for the 17th — get ready!</span>
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200">
                      NEW
                    </span>
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Final launch preparations and testing in progress.</div>
                </div>
              </div>

              <CharacterInfo />
              <QuickActions />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <ServerInfo />
              <UpcomingEvents />
              <SupportLinks />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 