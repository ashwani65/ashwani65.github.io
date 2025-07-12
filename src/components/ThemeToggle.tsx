import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 p-4 rounded-full bg-yellow-400 dark:bg-purple-600 
                shadow-2xl border-4 border-white dark:border-gray-800
                transition-all duration-300 hover:shadow-2xl hover:scale-110
                z-[9999] text-2xl font-bold min-w-[60px] min-h-[60px]
                flex items-center justify-center"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      style={{
        boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
      }}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}; 