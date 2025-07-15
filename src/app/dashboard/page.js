'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '../contexts/AuthContext';

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    if (!user) {
      window.location.href = '/login';
      return;
    }

    setIsLoading(false);
  }, [user]);

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">17</span>
              </div>
              <span className="text-white font-bold text-xl">17th Street RP</span>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Welcome back, {user?.name}!</h1>
          <p className="text-white/70">Manage your account and track your progress</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/70 text-sm">Server Status</p>
                <p className="text-green-400 font-bold text-2xl">Online</p>
              </div>
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/70 text-sm">Online Players</p>
                <p className="text-white font-bold text-2xl">1,247</p>
              </div>
              <div className="text-2xl">👥</div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/70 text-sm">Your Playtime</p>
                <p className="text-white font-bold text-2xl">127h</p>
              </div>
              <div className="text-2xl">⏱️</div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/70 text-sm">Server Uptime</p>
                <p className="text-white font-bold text-2xl">99.9%</p>
              </div>
              <div className="text-2xl">🛡️</div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Character Information */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Character Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-white font-bold mb-4">Basic Info</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-white/70">Character Name:</span>
                      <span className="text-white">John_Doe</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Level:</span>
                      <span className="text-white">42</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Job:</span>
                      <span className="text-white">Police Officer</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Bank Balance:</span>
                      <span className="text-green-400">$125,430</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-white font-bold mb-4">Skills & Licenses</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-white/70">Driving License:</span>
                      <span className="text-green-400">✓</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Weapon License:</span>
                      <span className="text-green-400">✓</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Pilot License:</span>
                      <span className="text-red-400">✗</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Fishing License:</span>
                      <span className="text-green-400">✓</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <h3 className="text-white font-bold mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-white/70">Completed police patrol - 2 hours ago</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-white/70">Purchased new vehicle - 5 hours ago</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-white/70">Joined fishing tournament - 1 day ago</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Quick Actions</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Connect to Server
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-4 rounded-lg border border-white/30 transition-all">
                  View Character Stats
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-4 rounded-lg border border-white/30 transition-all">
                  Manage Properties
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-4 rounded-lg border border-white/30 transition-all">
                  Join Discord
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Server Status */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-white font-bold mb-4">Server Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/70">Server IP:</span>
                  <span className="text-white font-mono">connect.17thstreetrp.com</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Port:</span>
                  <span className="text-white">30120</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Max Players:</span>
                  <span className="text-white">128</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Uptime:</span>
                  <span className="text-green-400">99.9%</span>
                </div>
              </div>
            </div>

            {/* Recent Events */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-white font-bold mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="text-white font-medium">Police Academy</p>
                  <p className="text-white/70 text-sm">Tomorrow at 8:00 PM</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <p className="text-white font-medium">Car Show</p>
                  <p className="text-white/70 text-sm">Saturday at 2:00 PM</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="text-white font-medium">Fishing Tournament</p>
                  <p className="text-white/70 text-sm">Sunday at 10:00 AM</p>
                </div>
              </div>
            </div>

            {/* Support */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-white font-bold mb-4">Need Help?</h3>
              <div className="space-y-3">
                <Link href="#" className="block text-blue-400 hover:text-blue-300 text-sm transition-colors">
                  📖 New Player Guide
                </Link>
                <Link href="#" className="block text-blue-400 hover:text-blue-300 text-sm transition-colors">
                  🛠️ Bug Report
                </Link>
                <Link href="#" className="block text-blue-400 hover:text-blue-300 text-sm transition-colors">
                  💬 Contact Staff
                </Link>
                <Link href="#" className="block text-blue-400 hover:text-blue-300 text-sm transition-colors">
                  📋 Server Rules
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 