import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, FileText, Send } from 'lucide-react';
import { ServiceAgreement } from './ServiceAgreement';

interface CleanContactProps {
  onBookingClick: () => void;
}

export function CleanContact({ onBookingClick }: CleanContactProps) {
  const [showAgreement, setShowAgreement] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = encodeURIComponent(
      `New Contact from Website\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/254775269628?text=${whatsappMessage}`, '_blank');
  };

  return (
    <>
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Side - Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl text-[#0A2239] mb-6">
                Let's Grow Your Business
              </h2>
              <p className="text-xl text-gray-600 mb-12">
                Get in touch to discuss how we can help your business thrive in the digital age.
              </p>

              {/* Contact Info */}
              <div className="space-y-6 mb-12">
                <a
                  href="tel:+254775269628"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-[#FF8C42]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF8C42]/20 transition-colors">
                    <Phone className="w-6 h-6 text-[#FF8C42]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Phone</div>
                    <div className="text-[#0A2239] text-lg">+254 775 269 628</div>
                  </div>
                </a>

                <a
                  href="mailto:sckaranu@gmail.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-[#FF8C42]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF8C42]/20 transition-colors">
                    <Mail className="w-6 h-6 text-[#FF8C42]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Email</div>
                    <div className="text-[#0A2239] text-lg">sckaranu@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FF8C42]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#FF8C42]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Location</div>
                    <div className="text-[#0A2239] text-lg">Ongata Rongai, Kajiado</div>
                  </div>
                </div>
              </div>

              {/* Service Agreement Button */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="flex items-start gap-4 mb-4">
                  <FileText className="w-8 h-8 text-[#FF8C42] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl text-[#0A2239] mb-2">Ready to Start?</h3>
                    <p className="text-gray-600 mb-4">
                      View and fill out our service agreement to begin your digital transformation.
                    </p>
                    <button
                      onClick={() => setShowAgreement(true)}
                      className="bg-[#0A2239] hover:bg-[#0A2239]/90 text-white px-6 py-3 rounded-lg transition-all inline-flex items-center gap-2"
                    >
                      <FileText className="w-5 h-5" />
                      View Service Agreement
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl text-[#0A2239] mb-6">Send Us a Message</h3>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF8C42] bg-white"
                      placeholder="John Kamau"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF8C42] bg-white"
                      placeholder="john@business.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF8C42] bg-white"
                      placeholder="0712345678"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      How Can We Help?
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF8C42] bg-white resize-none"
                      placeholder="Tell us about your business and what you need..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0A2239] hover:bg-[#0A2239]/90 text-white px-6 py-4 rounded-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message via WhatsApp
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Agreement Modal */}
      <ServiceAgreement
        isOpen={showAgreement}
        onClose={() => setShowAgreement(false)}
      />
    </>
  );
}
