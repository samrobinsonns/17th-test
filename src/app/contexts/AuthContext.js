'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing user data on app load
    const userData = localStorage.getItem('user');
    console.log('AuthContext: Loading user data from localStorage:', userData);
    
    if (userData) {
      try {
        const parsedUser = JSON.parse(userData);
        console.log('AuthContext: Parsed user data:', parsedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error('AuthContext: Error parsing user data:', error);
        localStorage.removeItem('user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (userData, token) => {
    const userWithToken = { 
      ...userData, 
      token,
      name: userData.username || userData.name // Ensure name field exists
    };
    console.log('AuthContext: Logging in user:', userWithToken);
    localStorage.setItem('user', JSON.stringify(userWithToken));
    setUser(userWithToken);
  };

  const logout = async () => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const { token } = JSON.parse(userData);
      if (token) {
        try {
          await fetch('/api/auth/logout', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          });
        } catch (error) {
          console.error('Logout error:', error);
        }
      }
    }
    localStorage.removeItem('user');
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
    isLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 