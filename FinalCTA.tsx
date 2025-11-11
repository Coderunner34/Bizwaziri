import { motion } from 'framer-motion';
import { Calendar, Phone, ArrowRight, Clock, CheckCircle2 } from 'lucide-react';

interface FinalCTAProps {
  onBookingClick: () => void;
}

export function FinalCTA({ onBookingClick }: FinalCTAProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0A2239] via-[#0A2239] to-[#0EBE6F]/20 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-[#0EBE6F] rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-5xl mb-6">
            Your Competitors Are Getting Found Online <span className="text-[#0EBE6F]">Right Now</span>
          </h2>
          <p className="text-xl text-white/90 mb-4">
            Every day you wait is another day customers find them instead of you.
          </p>
          <p className="text-lg text-white/70 mb-12 max-w-3xl mx-auto">
            But here's the good news: <strong className="text-white">it only takes 7 days to change everything.</strong> One week from now, you could be showing up on Google, customers could be finding your professional website, your POS system could be tracking every sale.
          </p>

          {/* Urgency Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-10 border border-white/20">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Clock className="w-6 h-6 text-[#D4AF37]" />
              <h3 className="text-2xl">This Week Only - Free Digital Assessment (Worth Ksh 5,000)</h3>
            </div>
            <p className="text-white/80 mb-6">
              Book a consultation this week and get a complete free assessment of your digital presence with actionable recommendations - even if you don't work with us.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2 justify-center">
                <CheckCircle2 className="w-5 h-5 text-[#0EBE6F]" />
                <span>No obligation</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <CheckCircle2 className="w-5 h-5 text-[#0EBE6F]" />
                <span>30-minute call</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <CheckCircle2 className="w-5 h-5 text-[#0EBE6F]" />
                <span>Honest advice</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBookingClick}
              className="bg-[#0EBE6F] hover:bg-[#0EBE6F]/90 text-white px-10 py-6 rounded-xl text-lg shadow-2xl inline-flex items-center justify-center gap-3"
            >
              <Calendar className="w-6 h-6" />
              Book Your Free Assessment Now
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/254775268629?text=Hi%20BizWaziri!%20I'm%20interested%20in%20improving%20my%20business's%20digital%20presence."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white px-10 py-6 rounded-xl text-lg inline-flex items-center justify-center gap-3 transition-all"
            >
              <Phone className="w-6 h-6" />
              WhatsApp Us: +254 775 268 629
            </motion.a>
          </div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <p className="text-white/60 text-sm mb-2">Join 500+ successful Kenyan businesses</p>
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="text-[#D4AF37] text-2xl"
                >
                  ★
                </motion.span>
              ))}
              <span className="text-white/80 ml-2">4.9/5.0 from our clients</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-l-4 border-[#0EBE6F]">
            <p className="text-xl italic text-white/90 mb-4">
              "Six months ago, I was worried about closing my shop. Today, I'm hiring my third employee. BizWaziri helped me when I was at my lowest. They'll help you too."
            </p>
            <p className="text-white/70">- Jane M., Restaurant Owner, Rongai</p>
          </div>
        </motion.div>

        {/* Final Push */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-12 text-center"
        >
          <p className="text-2xl text-white mb-2">
            The only thing standing between you and more customers is a decision.
          </p>
          <p className="text-white/70">
            Will you make it today?
          </p>
        </motion.div>
      </div>
    </section>
  );
}
