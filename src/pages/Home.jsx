import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Home = () => {
  const features = [
    {
      title: 'Task Management',
      description: 'Create, organize, and track your tasks with ease.',
      icon: '✅',
      path: '/tasks'
    },
    {
      title: 'API Integration',
      description: 'Fetch and display data from external APIs with search and pagination.',
      icon: '🌐',
      path: '/api-data'
    },
    {
      title: 'Dark Mode',
      description: 'Toggle between light and dark themes for comfortable viewing.',
      icon: '🌙',
      path: '/'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            Welcome to TaskMaster
          </h1>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            A modern, responsive React application built with Vite, Tailwind CSS, and React Router.
            Manage your tasks efficiently and explore API integration features.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/tasks">
              <Button variant="secondary" size="large">
                Get Started with Tasks
              </Button>
            </Link>
            <Link to="/api-data">
              <Button variant="secondary" size="large">
                Explore API Data
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:scale-105 transition-transform" hover>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {feature.description}
                </p>
                <Link to={feature.path}>
                  <Button variant="primary">
                    Explore
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                100%
              </div>
              <div className="text-gray-600 dark:text-gray-400">Responsive</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                Fast
              </div>
              <div className="text-gray-600 dark:text-gray-400">Performance</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                Modern
              </div>
              <div className="text-gray-600 dark:text-gray-400">Tech Stack</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                Easy
              </div>
              <div className="text-gray-600 dark:text-gray-400">To Use</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;