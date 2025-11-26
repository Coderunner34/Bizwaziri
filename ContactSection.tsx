import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hello BizWaziri Kenya!

Name: ${formData.name}
Business: ${formData.business}
Phone: ${formData.phone}
Email: ${formData.email}

Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/254775268629?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl text-[#0A2239] mb-6">
            You’re Closer Than You Think — Let’s Make It Real.
          </h2>
          <p className="text-xl text-[#2C2C2C] max-w-3xl mx-auto">
            The first step is a simple conversation about your business and what you need. No pressure, no obligation, just an honest discussion about whether and how we can help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
              <h3 className="text-2xl text-[#0A2239] mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#0EBE6F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#0EBE6F]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#2C2C2C]/70 mb-1">Phone / WhatsApp</p>
                    <a href="tel:+254775268629" className="text-lg text-[#0A2239] hover:text-[#0EBE6F] transition-colors">
                      +254 775 268 629
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#0EBE6F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#0EBE6F]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#2C2C2C]/70 mb-1">Email</p>
                    <a href="mailto:sckaranu@gmail.com" className="text-lg text-[#0A2239] hover:text-[#0EBE6F] transition-colors">
                      sckaranu@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#0EBE6F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#0EBE6F]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#2C2C2C]/70 mb-1">Location</p>
                    <p className="text-lg text-[#0A2239]">
                      Ongata Rongai, Kajiado County, Kenya
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#0EBE6F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#0EBE6F]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#2C2C2C]/70 mb-1">Office Hours</p>
                    <p className="text-[#0A2239]">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-[#0A2239]">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-[#0A2239]">Sunday: By appointment only</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0A2239] rounded-2xl p-8 text-center">
              <h4 className="text-2xl text-white mb-4">Prefer WhatsApp?</h4>
              <p className="text-white/80 mb-6">
                Send us a message directly and we'll respond within a few hours
              </p>
              <a
                href="https://wa.me/254775268629?text=Hello%20BizWaziri%20Kenya!%20I'm%20interested%20in%20learning%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0EBE6F] hover:bg-[#0EBE6F]/90 text-white px-8 py-4 rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                Send Us a WhatsApp Message
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl text-[#0A2239] mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#0A2239] mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#0A2239]/20 focus:border-[#0EBE6F] focus:outline-none transition-colors"
                  placeholder="Karanu Isaac Njenga"
                />
              </div>

              <div>
                <label htmlFor="business" className="block text-[#0A2239] mb-2">
                  Business Name *
                </label>
                <input
                  type="text"
                  id="business"
                  name="business"
                  required
                  value={formData.business}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#0A2239]/20 focus:border-[#0EBE6F] focus:outline-none transition-colors"
                  placeholder="Your Business Name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-[#0A2239] mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#0A2239]/20 focus:border-[#0EBE6F] focus:outline-none transition-colors"
                  placeholder="+254 7XX XXX XXX"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#0A2239] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#0A2239]/20 focus:border-[#0EBE6F] focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#0A2239] mb-2">
                  How can we help you? *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#0A2239]/20 focus:border-[#0EBE6F] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us a bit about your business and what you're looking for..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#0EBE6F] hover:bg-[#0EBE6F]/90 text-white px-8 py-4 rounded-lg transition-colors"
              >
                <Send className="w-5 h-5" />
                Send Message via WhatsApp
              </button>

              <p className="text-sm text-[#2C2C2C]/70 text-center">
                This will open WhatsApp with your message pre-filled
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
