'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (email) {
        setIsSubmitted(true);
      } else {
        setError('Please enter your email address');
      }
    } catch (err) {
      setError('Failed to send reset email. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Logo and Back Link */}
        <div className="text-center mb-8">
          <Link href="/login" className="inline-flex items-center space-x-2 text-white hover:text-blue-400 transition-colors mb-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Login</span>
          </Link>
          
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">17</span>
            </div>
            <span className="text-white font-bold text-2xl">17th Street RP</span>
          </div>
          
          <h1 className="text-3xl font-bold text-white mb-2">Reset Password</h1>
          <p className="text-white/70">Enter your email to receive reset instructions</p>
        </div>

        {/* Reset Form */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 text-red-200 text-sm">
                  {error}
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  'Send Reset Link'
                )}
              </button>
            </form>
          ) : (
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <div>
                <h3 className="text-white font-bold text-xl mb-2">Check Your Email</h3>
                <p className="text-white/70 mb-4">
                  We've sent password reset instructions to <span className="text-white font-medium">{email}</span>
                </p>
                <p className="text-white/50 text-sm">
                  If you don't see the email, check your spam folder or try again.
                </p>
              </div>

              <div className="pt-4 border-t border-white/20">
                <p className="text-white/70 text-sm mb-4">
                  Didn't receive the email?
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  Try again
                </button>
              </div>
            </div>
          )}

          <div className="mt-6 text-center">
            <p className="text-white/70 text-sm">
              Remember your password?{' '}
              <Link href="/login" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
                Sign in
              </Link>
            </p>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-8 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
          <h3 className="text-white font-bold mb-3">Need Help?</h3>
          <div className="space-y-2 text-sm">
            <p className="text-white/70">
              • Make sure you're using the email address associated with your account
            </p>
            <p className="text-white/70">
              • Check your spam/junk folder for the reset email
            </p>
            <p className="text-white/70">
              • Contact support if you continue to have issues
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 