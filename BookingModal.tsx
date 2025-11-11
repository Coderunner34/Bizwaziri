import { useState } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    service: 'Essential Digital Presence Package',
    message: ''
  });

  const services = [
    'Essential Digital Presence Package',
    'Free Digital Assessment',
    'Website Development',
    'Social Media Setup',
    'Consultation Call'
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `🗓️ NEW BOOKING REQUEST

👤 Name: ${formData.name}
🏢 Business: ${formData.business}
📞 Phone: ${formData.phone}
📧 Email: ${formData.email}

📅 Preferred Date: ${formData.date}
⏰ Preferred Time: ${formData.time}
💼 Service: ${formData.service}

💬 Message:
${formData.message}`;

    const whatsappUrl = `https://wa.me/254775269628?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-[#F57C00] to-[#E57000] text-white p-6 rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl mb-1">Book Your Free Consultation</h2>
                    <p className="text-white/90">Let's discuss how we can transform your business</p>
                  </div>
                  <button
                    onClick={onClose}
                    className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Personal Info */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center gap-2 text-[#1C1C1C] mb-2">
                      <User className="w-4 h-4" />
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F57C00] focus:outline-none focus:ring-2 focus:ring-[#F57C00]/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-[#1C1C1C] mb-2">
                      <Phone className="w-4 h-4" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F57C00] focus:outline-none focus:ring-2 focus:ring-[#F57C00]/20 transition-all"
                      placeholder="+254 7XX XXX XXX"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center gap-2 text-[#1C1C1C] mb-2">
                      <Mail className="w-4 h-4" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F57C00] focus:outline-none focus:ring-2 focus:ring-[#F57C00]/20 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="text-[#1C1C1C] mb-2 block">
                      Business Name
                    </label>
                    <input
                      type="text"
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F57C00] focus:outline-none focus:ring-2 focus:ring-[#F57C00]/20 transition-all"
                      placeholder="Your Business Name"
                    />
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center gap-2 text-[#1C1C1C] mb-2">
                      <Calendar className="w-4 h-4" />
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F57C00] focus:outline-none focus:ring-2 focus:ring-[#F57C00]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-[#1C1C1C] mb-2">
                      <Clock className="w-4 h-4" />
                      Preferred Time *
                    </label>
                    <select
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F57C00] focus:outline-none focus:ring-2 focus:ring-[#F57C00]/20 transition-all"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="text-[#1C1C1C] mb-2 block">
                    Service Interested In *
                  </label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F57C00] focus:outline-none focus:ring-2 focus:ring-[#F57C00]/20 transition-all"
                  >
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="flex items-center gap-2 text-[#1C1C1C] mb-2">
                    <MessageSquare className="w-4 h-4" />
                    Additional Information
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F57C00] focus:outline-none focus:ring-2 focus:ring-[#F57C00]/20 transition-all resize-none"
                    placeholder="Tell us more about your business and what you're looking for..."
                  />
                </div>

                {/* Submit Button */}
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 px-6 py-4 border-2 border-gray-300 text-[#1C1C1C] rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-4 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Phone className="w-5 h-5" />
                    Send via WhatsApp
                  </button>
                </div>

                <p className="text-sm text-gray-600 text-center">
                  Your booking request will be sent to us via WhatsApp. We'll confirm your appointment within a few hours.
                </p>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
