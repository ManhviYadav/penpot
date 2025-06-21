import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

// Test credentials
const TEST_CREDENTIALS = {
  email: 'test@example.com',
  password: 'password123'
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (email === TEST_CREDENTIALS.email && password === TEST_CREDENTIALS.password) {
      const userData = { email, name: 'Test User' };
      setUser(userData);
      return { success: true, user: userData };
    }
    
    return { success: false, error: 'Invalid credentials' };
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 