import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import logoImage from '../assets/BWlogo.png';

export function ProfessionalFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    company: [
      { name: 'Our Story', href: '/about' },
      { name: 'How We Work', href: '/transformation-process' },
      { name: 'Success Stories', href: '/business-crisis' },
      { name: 'Contact Us', href: '/contact' }
    ],
    services: [
      { name: 'Website Development', href: '/services' },
      { name: 'SEO & Google Visibility', href: '/services' },
      { name: 'Social Media Management', href: '/services' },
      { name: 'E-Commerce Solutions', href: '/services' },
      { name: 'Business Analytics', href: '/services' }
    ],
    resources: [
      { name: 'Educational Hub', href: '/education' },
      { name: 'ROI Calculator', href: '/roi-calculator' },
      { name: 'Blog', href: '#' },
      { name: 'FAQs', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: '#1877F2' },
    { name: 'Instagram', icon: Instagram, href: '#', color: '#E4405F' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: '#0A66C2' },
    { name: 'Twitter', icon: Twitter, href: '#', color: '#1DA1F2' }
  ];

  return (
    <footer className="bg-[#1C1C1C] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <img
                  src={logoImage}
                  alt="BizWaziri Kenya"
                  className="h-12 mb-6"
                />
                <h3 className="text-2xl mb-4">
                  Transforming Kenyan Businesses
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  We don't just build websites. We rescue struggling businesses and transform them into market leaders through proven digital strategies.
                </p>

                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  <a
                    href="tel:+254775269628"
                    className="flex items-center gap-3 text-white/80 hover:text-[#F57C00] transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+254 775 269 628</span>
                  </a>
                  <a
                    href="mailto:sckaranu@gmail.com"
                    className="flex items-center gap-3 text-white/80 hover:text-[#F57C00] transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>info@bizwaziri.co.ke</span>
                  </a>
                  <div className="flex items-center gap-3 text-white/80">
                    <MapPin className="w-5 h-5" />
                    <span>Ongata Rongai, Kenya</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="w-10 h-10 bg-white/10 hover:bg-[#F57C00] rounded-lg flex items-center justify-center transition-all"
                        aria-label={social.name}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-lg mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-[#F57C00] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-lg mb-6">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-[#F57C00] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="text-lg mb-6">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-[#F57C00] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 pt-12 border-t border-white/10"
          >
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl mb-4">Stay Ahead of the Curve</h3>
              <p className="text-white/70 mb-6">
                Get weekly insights on digital strategy, business growth tips, and exclusive offers.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F57C00] placeholder-white/50"
                />
                <button
                  type="submit"
                  className="bg-[#F57C00] hover:bg-[#E57000] text-white px-8 py-3 rounded-lg transition-all whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-white/60 text-sm text-center md:text-left">
                © {new Date().getFullYear()} BizWaziri Kenya. All rights reserved.
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <a href="#" className="text-white/60 hover:text-[#F57C00] transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-white/60 hover:text-[#F57C00] transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-white/60 hover:text-[#F57C00] transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute bottom-8 right-8 w-12 h-12 bg-[#F57C00] hover:bg-[#E57000] rounded-full flex items-center justify-center shadow-xl transition-all"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>

        {/* Trust Badge */}
        <div className="absolute bottom-8 left-8 hidden lg:block">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-sm text-white/70">
            🇰🇪 Proudly Kenyan • Globally Competitive
          </div>
        </div>
      </div>
    </footer>
  );
}
