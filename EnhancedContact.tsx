import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Users } from 'lucide-react';

interface EnhancedContactProps {
  onBookingClick: () => void;
}

export function EnhancedContact({ onBookingClick }: EnhancedContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', business: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      content: '+254 792 211 741',
      action: 'tel:+254775269628'
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'info@bizwaziri.co.ke',
      action: 'mailto:sckaranu@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Ongata Rongai, Kenya',
      action: null
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      text: 'Free 30-minute consultation'
    },
    {
      icon: Clock,
      text: 'Response within 24 hours'
    },
    {
      icon: Users,
      text: 'No sales pressure, just honest advice'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#F57C00] text-sm uppercase tracking-wider mb-4 block">
            Let's Talk
          </span>
          <h2 className="text-4xl md:text-6xl text-[#1C1C1C] mb-6">
            Start Your Transformation Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Book a free consultation and discover exactly what your business needs to thrive in the digital age.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#F5F5F5] rounded-2xl p-8">
              <h3 className="text-2xl text-[#1C1C1C] mb-6">
                Tell Us About Your Business
              </h3>

              {/* Benefits */}
              <div className="mb-8 space-y-3">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-[#F57C00] flex-shrink-0" />
                      <span className="text-gray-700">{benefit.text}</span>
                    </div>
                  );
                })}
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F57C00] transition-all"
                    placeholder="Isaac Njenga"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F57C00] transition-all"
                      placeholder="sckaranu@gmail.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F57C00] transition-all"
                      placeholder="+254 700 000 000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="business" className="block text-sm text-gray-700 mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F57C00] transition-all"
                    placeholder="My Business Ltd"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                    Tell Us About Your Challenge *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F57C00] transition-all resize-none"
                    placeholder="What challenges is your business facing? What are your goals?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-4 rounded-lg transition-all flex items-center justify-center gap-2 ${
                    isSubmitted
                      ? 'bg-green-500 text-white'
                      : 'bg-[#F57C00] hover:bg-[#E57000] text-white'
                  } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </motion.div>

          {/* Right: Contact Info & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = info.action ? (
                  <a
                    href={info.action}
                    className="block bg-white rounded-xl p-6 hover:shadow-lg transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#F57C00]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#F57C00]/20 transition-all">
                        <Icon className="w-6 h-6 text-[#F57C00]" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">{info.title}</div>
                        <div className="text-lg text-[#1C1C1C] group-hover:text-[#F57C00] transition-colors">
                          {info.content}
                        </div>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="block bg-white rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#F57C00]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-[#F57C00]" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">{info.title}</div>
                        <div className="text-lg text-[#1C1C1C]">{info.content}</div>
                      </div>
                    </div>
                  </div>
                );

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {content}
                  </motion.div>
                );
              })}
            </div>

            {/* Quick Action CTA */}
            <div className="bg-gradient-to-br from-[#F57C00] to-[#E57000] rounded-2xl p-8 text-white">
              <h3 className="text-2xl mb-4">Prefer to Talk First?</h3>
              <p className="text-white/90 mb-6">
                Book a free 30-minute strategy call. No commitment, just honest guidance on what your business needs.
              </p>
              <button
                onClick={onBookingClick}
                className="w-full bg-white text-[#F57C00] px-8 py-4 rounded-lg hover:bg-white/90 transition-all"
              >
                Schedule Free Call
              </button>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-[#25D366] rounded-2xl p-8 text-white">
              <h3 className="text-2xl mb-4">Got Questions?</h3>
              <p className="text-white/90 mb-6">
                Send us a message on WhatsApp and get answers within minutes.
              </p>
              <a
                href="https://wa.me/254775269628?text=Hi%20BizWaziri!%20I%27d%20like%20to%20learn%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center bg-white text-[#25D366] px-8 py-4 rounded-lg hover:bg-white/90 transition-all"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Social Proof */}
            <div className="bg-[#1C1C1C] rounded-2xl p-8 text-white">
              <div className="text-center mb-6">
                <div className="text-4xl mb-2">150+ and growing</div>
                <div className="text-white/70">Happy Clients</div>
              </div>
              <p className="text-white/80 text-center text-sm">
                Join hundreds of Kenyan businesses that have transformed their digital presence with BizWaziri.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
