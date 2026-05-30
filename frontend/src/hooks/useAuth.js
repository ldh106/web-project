import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [token, setToken] = useState(sessionStorage.getItem('token'));
  const [username, setUsername] = useState(sessionStorage.getItem('username'));

  const saveLogin = (token, username) => {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('username', username);
    localStorage.setItem('lastLogin', username);
    setToken(token);
    setUsername(username);
  };

  const logout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
    setToken(null);
    setUsername(null);
  };

  return { token, username, saveLogin, logout };
};