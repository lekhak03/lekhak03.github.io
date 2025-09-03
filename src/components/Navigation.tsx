import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Terminal, Menu, X } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home', command: '~/home' },
    { path: '/projects', label: 'Projects', command: '~/projects' },
    { path: '/blog', label: 'Blog', command: '~/blog' },
    { path: '/analytics', label: 'Analytics', command: '~/analytics' }, // Added Analytics
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-terminal-bg/95 backdrop-blur-sm border-b border-terminal-border transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <Terminal className="w-6 h-6 text-terminal-green group-hover:animate-pulse" />
            <span className="font-mono text-lg font-semibold text-terminal-green">
              deep@lekhak:~$
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-mono text-sm transition-colors duration-200 hover:text-terminal-green relative group ${
                  location.pathname === item.path ? 'text-terminal-green' : 'text-terminal-muted'
                }`}
              >
                <span className="opacity-60 mr-1">$</span>
                {item.command}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-terminal-green"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-terminal-green hover:bg-terminal-surface rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden bg-terminal-surface border-t border-terminal-border"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 font-mono text-sm transition-colors duration-200 hover:text-terminal-green hover:bg-terminal-bg rounded-lg ${
                  location.pathname === item.path ? 'text-terminal-green bg-terminal-bg' : 'text-terminal-muted'
                }`}
              >
                <span className="opacity-60 mr-1">$</span>
                {item.command}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};