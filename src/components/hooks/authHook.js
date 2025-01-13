
// src/hooks/useAuth.js
import { useState, useEffect } from 'react';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      try {
        // Retrieve the auth token from localStorage
        const token = localStorage.getItem('authToken');

        // Check if the token exists and is valid
        if (token) {
          // Optional: Add additional validation logic for token (e.g., decode & check expiration)
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Error checking authentication status:", error);
        setIsAuthenticated(false);
      }
    };

    checkAuth();

    // Optional: Add a listener to respond to changes in auth state
    const handleStorageChange = () => checkAuth();
    window.addEventListener('storage', handleStorageChange);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []); // Run the effect only once on mount

  return isAuthenticated;
};

export default useAuth;

