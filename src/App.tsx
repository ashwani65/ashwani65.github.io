import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import { Navigation } from './components/Navigation';
import { Projects } from './components/Projects';
import { LearningHubs } from './components/LearningHubs';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 
                      text-gray-900 dark:text-white transition-colors duration-200">
        <Navigation />
        
        {/* Floating Theme Toggle (backup) */}
        <ThemeToggle />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-indigo-100 
                           dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 
                           bg-clip-text text-transparent">
              Ashwani Singh
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Full-Stack Developer & AI/ML Engineer
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Passionate about building intelligent applications and scalable systems. 
              Specializing in React, Node.js, Python, and cutting-edge AI technologies.
            </p>
          </div>
        </section>

        {/* Learning Hubs Section */}
        <LearningHubs />

        {/* Projects Section */}
        <Projects />
      </div>
    </ThemeProvider>
  );
}

export default App;
