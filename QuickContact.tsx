import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Phone, Mail, Calendar } from 'lucide-react';

interface QuickContactProps {
  onBookingClick: () => void;
}

export function QuickContact({ onBookingClick }: QuickContactProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Quick Contact Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Quick Contact Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-32 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Quick Contact</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3">
                <motion.a
                  href="tel:+254775269628"
                  className="flex items-center gap-3 p-3 bg-gray-50 hover:bg-blue-50 rounded-lg transition-all group"
                  whileHover={{ x: 4 }}
                >
                  <Phone className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="text-sm text-gray-600">Call us</div>
                    <div className="font-semibold text-gray-900">+254 775 269 628</div>
                  </div>
                </motion.a>

                <motion.a
                  href="mailto:info@bizwaziri.co.ke"
                  className="flex items-center gap-3 p-3 bg-gray-50 hover:bg-blue-50 rounded-lg transition-all group"
                  whileHover={{ x: 4 }}
                >
                  <Mail className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="text-sm text-gray-600">Email us</div>
                    <div className="font-semibold text-gray-900">info@bizwaziri.co.ke</div>
                  </div>
                </motion.a>

                <motion.button
                  onClick={() => {
                    onBookingClick();
                    setIsOpen(false);
                  }}
                  className="w-full bg-[#F57C00] hover:bg-[#E57000] text-white py-3 rounded-lg font-semibold transition-colors shadow-lg flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Calendar className="w-5 h-5" />
                  Book Consultation
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}