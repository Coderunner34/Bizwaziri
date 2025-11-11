import { Instagram, Facebook, Linkedin, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A2239] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl mb-4">BizWaziri Kenya</h3>
            <p className="text-white/70 mb-4">
              Complete Digital Solutions for Kenyan Businesses
            </p>
            <p className="text-white/70 italic text-sm">
              "From Google Visibility to POS Systems - Everything Your Business Needs to Thrive"
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg mb-4">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-white/70 hover:text-white transition-colors cursor-pointer">
                Website Development
              </li>
              <li className="text-white/70 hover:text-white transition-colors cursor-pointer">
                POS Systems
              </li>
              <li className="text-white/70 hover:text-white transition-colors cursor-pointer">
                SEO & Google Visibility
              </li>
              <li className="text-white/70 hover:text-white transition-colors cursor-pointer">
                Social Media Management
              </li>
              <li className="text-white/70 hover:text-white transition-colors cursor-pointer">
                Online Stores
              </li>
              <li className="text-white/70 hover:text-white transition-colors cursor-pointer">
                Business Analytics
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#what-we-do" className="text-white/70 hover:text-white transition-colors">
                  All Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-white/70 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/70 hover:text-white transition-colors">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#free-assessment" className="text-white/70 hover:text-white transition-colors">
                  Free Assessment
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-white/70">
              <li>+254 775 268 629</li>
              <li>sckaranu@gmail.com</li>
              <li>Ongata Rongai, Kajiado</li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-white/70 text-sm">
              © {currentYear} BizWaziri Kenya. All rights reserved.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#0EBE6F] rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#0EBE6F] rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#0EBE6F] rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#0EBE6F] hover:bg-[#0EBE6F]/90 text-white rounded-full flex items-center justify-center shadow-lg transition-colors z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
}
