import { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { MantaRayLogo } from './MantaRayLogo';
import { motion } from 'framer-motion';

interface NavigationProps {
  onBookingClick: () => void;
}

export function Navigation({ onBookingClick }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#what-we-do' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Success Stories', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-white/10 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a 
            href="#" 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MantaRayLogo 
              className={`w-10 h-10 transition-colors ${
                isScrolled ? 'text-[#0EBE6F]' : 'text-white'
              }`} 
            />
            <div className={`text-2xl transition-colors ${
              isScrolled ? 'text-[#0A2239]' : 'text-white'
            }`}>
              BizWaziri Kenya
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors ${
                  isScrolled
                    ? 'text-[#2C2C2C] hover:text-[#0EBE6F]'
                    : 'text-white hover:text-[#0EBE6F]'
                }`}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={onBookingClick}
              className="inline-flex items-center gap-2 bg-[#0EBE6F] hover:bg-[#0EBE6F]/90 text-white px-6 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-[#0EBE6F]/30"
            >
              <Calendar className="w-4 h-4" />
              Book Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? 'text-[#0A2239]' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-white border-t border-[#0A2239]/10"
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-[#2C2C2C] hover:text-[#0EBE6F] transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onBookingClick();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#0EBE6F] hover:bg-[#0EBE6F]/90 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <Calendar className="w-5 h-5" />
              Book Consultation
            </button>
            <a
              href="https://wa.me/254775268629"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border-2 border-[#0EBE6F] text-[#0EBE6F] hover:bg-[#0EBE6F] hover:text-white px-6 py-3 rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
