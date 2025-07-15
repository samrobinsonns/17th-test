'use client';

import Image from "next/image";
import { useAuth } from './contexts/AuthContext';

export default function Home() {
  const { user } = useAuth();
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">17</span>
              </div>
              <span className="text-white font-bold text-xl">17th Street RP</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
              <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
              <a href="#join" className="text-white/80 hover:text-white transition-colors">Join Now</a>
            </div>
            <div className="flex items-center space-x-4">
              {user ? (
                <>
                  <span className="text-white/80">Welcome, {user.name}</span>
                  <a href="/dashboard" className="text-white/80 hover:text-white transition-colors">Dashboard</a>
                  <button 
                    onClick={() => {
                      localStorage.removeItem('user');
                      window.location.reload();
                    }}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <a href="/login" className="text-white/80 hover:text-white transition-colors">Login</a>
                  <a href="/register" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                    Sign Up
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                17th Street RP
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Experience the most immersive GTA roleplay server. Create your character, build your story, 
              and become part of our thriving community.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/register" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Join Server Now
            </a>
            <a href="/login" className="border-2 border-white/30 hover:border-white/50 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 backdrop-blur-sm">
              Login to Account
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-2">🎮</div>
              <h3 className="text-white font-bold text-lg mb-2">Active Community</h3>
              <p className="text-white/70">Join thousands of players in our vibrant roleplay community</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="text-white font-bold text-lg mb-2">24/7 Uptime</h3>
              <p className="text-white/70">Reliable servers with minimal downtime for uninterrupted gameplay</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-2">🛡️</div>
              <h3 className="text-white font-bold text-lg mb-2">Anti-Cheat</h3>
              <p className="text-white/70">Advanced protection ensuring fair and enjoyable gameplay</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Server Features
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Discover what makes 17th Street RP the ultimate roleplay experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🏢",
                title: "Custom Jobs",
                description: "Choose from 50+ unique jobs including police, EMS, mechanic, and more"
              },
              {
                icon: "🏠",
                title: "Housing System",
                description: "Buy, customize, and manage your own properties throughout the city"
              },
              {
                icon: "🚗",
                title: "Vehicle Customization",
                description: "Extensive vehicle modification system with unique parts and paint jobs"
              },
              {
                icon: "💼",
                title: "Business Ownership",
                description: "Start and run your own businesses with full economic simulation"
              },
              {
                icon: "👮",
                title: "Law Enforcement",
                description: "Comprehensive police and EMS systems with realistic procedures"
              },
              {
                icon: "🎭",
                title: "Character Development",
                description: "Deep character progression with skills, licenses, and reputation systems"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-white font-bold text-xl mb-3">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About 17th Street RP
              </h2>
              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                17th Street RP is more than just a GTA roleplay server - it's a living, breathing city 
                where every player contributes to the story. Our community focuses on creating authentic 
                roleplay experiences with realistic mechanics and immersive gameplay.
              </p>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                With dedicated staff, regular events, and a passionate player base, we've built one of 
                the most engaging roleplay environments in the GTA community.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">1000+</div>
                  <div className="text-white/70">Active Players</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">50+</div>
                  <div className="text-white/70">Unique Jobs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">24/7</div>
                  <div className="text-white/70">Server Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">100+</div>
                  <div className="text-white/70">Custom Features</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Server Information</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Server IP:</span>
                  <span className="text-white font-mono">connect.17thstreetrp.com</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Port:</span>
                  <span className="text-white font-mono">30120</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Max Players:</span>
                  <span className="text-white">128</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Location:</span>
                  <span className="text-white">North America</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Uptime:</span>
                  <span className="text-green-400">99.9%</span>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/20">
                <h4 className="text-white font-bold mb-3">Quick Connect</h4>
                <div className="bg-black/30 rounded-lg p-3 border border-white/10">
                  <code className="text-green-400 font-mono text-sm">
                    connect 17thstreetrp.com:30120
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Join?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Start your journey in the most immersive GTA roleplay experience. 
            Create your character and become part of our community today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="/register" className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Create Account
            </a>
            <a href="/login" className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 border border-white/30">
              Login to Dashboard
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <div className="text-2xl mb-3">📱</div>
              <h3 className="text-white font-bold mb-2">Discord Community</h3>
              <p className="text-white/70 text-sm">Join our Discord for updates, support, and community events</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <div className="text-2xl mb-3">📖</div>
              <h3 className="text-white font-bold mb-2">New Player Guide</h3>
              <p className="text-white/70 text-sm">Comprehensive guide to help you get started in the server</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <div className="text-2xl mb-3">🎯</div>
              <h3 className="text-white font-bold mb-2">Staff Support</h3>
              <p className="text-white/70 text-sm">Dedicated staff team ready to help with any questions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">17</span>
                </div>
                <span className="text-white font-bold text-xl">17th Street RP</span>
              </div>
              <p className="text-white/70 text-sm">
                The ultimate GTA roleplay experience with immersive gameplay and a thriving community.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Server Rules</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Player Guide</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Staff Applications</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Bug Reports</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Community</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Discord</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Forums</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Events</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Gallery</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Contact Staff</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-white/50 text-sm">
              © 2024 17th Street RP. All rights reserved. Not affiliated with Rockstar Games.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
