import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import BookmarkPage from './pages/BookmarkPage';
import { useAuth } from './hooks/useAuth';

export default function App() {
  const { token, username, saveLogin, logout } = useAuth();

  if (!token) return <LoginPage onLogin={saveLogin} />;
  return <BookmarkPage username={username} onLogout={logout} />;
}