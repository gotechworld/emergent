import React, { useState } from 'react';
import { Pen, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-nav">
      <div className="container">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Pen className="h-6 w-6 text-primary" />
            <span className="font-mono text-lg font-semibold">WriteAI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium hover:text-secondary transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-secondary transition-colors">
              Pricing
            </a>
            <a href="#demo" className="text-sm font-medium hover:text-secondary transition-colors">
              Demo
            </a>
            <a href="#testimonials" className="text-sm font-medium hover:text-secondary transition-colors">
              Reviews
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex nav-actions">
            <button className="btn-secondary">
              Sign In
            </button>
            <button className="btn-primary">
              Start Free Trial
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-overlay backdrop-blur-sm border-t border-light">
            <div className="container py-4">
              <nav className="flex flex-col gap-4 mb-4">
                <a 
                  href="#features" 
                  className="text-sm font-medium hover:text-secondary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </a>
                <a 
                  href="#pricing" 
                  className="text-sm font-medium hover:text-secondary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </a>
                <a 
                  href="#demo" 
                  className="text-sm font-medium hover:text-secondary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Demo
                </a>
                <a 
                  href="#testimonials" 
                  className="text-sm font-medium hover:text-secondary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Reviews
                </a>
              </nav>
              <div className="flex flex-col gap-3">
                <button className="btn-secondary">
                  Sign In
                </button>
                <button className="btn-primary">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;