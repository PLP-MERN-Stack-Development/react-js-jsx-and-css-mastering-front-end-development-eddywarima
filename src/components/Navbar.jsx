import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import Button from './ui/Button';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/tasks', label: 'Task Manager' },
    { path: '/api-data', label: 'API Data' }
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
              TaskMaster
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center space-x-4">
            <Button
              variant="secondary"
              size="small"
              onClick={toggleTheme}
              className="flex items-center space-x-2"
            >
              <span>{theme === 'light' ? '🌙' : '☀️'}</span>
              <span className="hidden sm:inline">
                {theme === 'light' ? 'Dark' : 'Light'}
              </span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;