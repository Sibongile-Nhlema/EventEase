import { useState } from 'react';

export function useAuth() {
  // Replace with real authentication logic
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Mock authentication function
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return { isAuthenticated, login, logout };
}
