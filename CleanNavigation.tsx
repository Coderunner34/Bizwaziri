import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

import logoImage from '../assets/BWlogo.png';

interface CleanNavigationProps {
  onBookingClick: () => void;
}

export function CleanNavigation({ onBookingClick }: CleanNavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Results', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img 
              src={logoImage} 
              alt="BizWaziri Kenya" 
              className="h-10"
            />
            <div>
              <div className={`text-xl transition-colors ${isScrolled ? 'text-[#0A2239]' : 'text-[#0A2239]'}`}>
                BizWaziri
              </div>
              <div className={`text-xs transition-colors ${isScrolled ? 'text-gray-600' : 'text-gray-600'}`}>
                Digital Solutions
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors ${
                  isScrolled
                    ? 'text-gray-700 hover:text-[#0A2239]'
                    : 'text-gray-700 hover:text-[#0A2239]'
                }`}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={onBookingClick}
              className="bg-[#0A2239] hover:bg-[#0A2239]/90 text-white px-6 py-2.5 rounded-lg transition-all"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#0A2239]"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="px-4 py-3">
              <button
                onClick={() => {
                  onBookingClick();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-[#0A2239] hover:bg-[#0A2239]/90 text-white px-6 py-3 rounded-lg transition-all"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
