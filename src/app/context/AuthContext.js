"use client";
import { createContext, useContext, useState, useEffect } from 'react';
import AuthService from '../services/authService';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = AuthService.getToken();
    if (token) {
      fetchUserData();
    } else {
      setLoading(false);
    }
  }, []);

  const fetchUserData = async () => {
    try {
      const userData = await AuthService.getUserData();
      if (!userData.error) {
        setUser(userData);
      } else {
        AuthService.removeToken();
      }
    } catch (error) {
      AuthService.removeToken();
    } finally {
      setLoading(false);
    }
  };

  const login = (token, userData) => {
    AuthService.setToken(token);
    setUser(userData);
  };

  const logout = () => {
    AuthService.removeToken();
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
    loading,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};