// hooks/useAuth.js
import { useState } from 'react';
import { login, register } from '../services/authService';

const useAuth = () => {
  const [user, setUser] = useState(null);

  const handleLogin = async (userData) => {
    try {
      const loggedInUser = await login(userData);
      setUser(loggedInUser);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  const handleRegister = async (userData) => {
    try {
      const registeredUser = await register(userData);
      setUser(registeredUser);
    } catch (error) {
      console.error('Error al registrarse:', error);
    }
  };

  return { user, handleLogin, handleRegister };
};

export default useAuth;
