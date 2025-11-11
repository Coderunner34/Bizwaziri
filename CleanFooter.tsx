// @ts-ignore: figma asset imports are provided by the build/tooling environment
import logoImage from 'figma:asset/f3298b03c49f536fc7f249984c1cfe810e078ac4.png';

export function CleanFooter() {
  const currentYear = new Date().getFullYear();

  const services = [
    'Website Development',
    'POS Systems',
    'SEO & Google Visibility',
    'Social Media Management',
    'E-Commerce Stores',
    'Monitoring & Evaluation'
  ];

  return (
    <footer className="bg-[#0A2239] text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <img 
              src={logoImage} 
              alt="BizWaziri Kenya" 
              className="h-12 mb-6 brightness-0 invert"
            />
            <p className="text-gray-400 mb-6 leading-relaxed">
              Digital solutions for growing Kenyan businesses. From Google visibility to modern POS systems, we help you compete and thrive.
            </p>
            <div className="text-gray-400 text-sm">
              <div>Ongata Rongai, Kajiado</div>
              <div>Phone: +254 775 269 628</div>
              <div>Email: sckaranu@gmail.com</div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="https://karanuisaacportfolio.netlify.app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
          <p>© {currentYear} BizWaziri Kenya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
