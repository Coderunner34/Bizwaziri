import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Sparkles, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onBookingClick: () => void;
}

export function Hero({ onBookingClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1709136242320-cc582ad704c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOYWlyb2JpJTIwYnVzaW5lc3MlMjBkaXN0cmljdHxlbnwxfHx8fDE3NjIyMTc1MzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Nairobi Business District"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2239]/90 via-[#0A2239]/80 to-[#0EBE6F]/20"></div>
        
        {/* Floating Shapes */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10 w-32 h-32 bg-[#0EBE6F]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-10 w-40 h-40 bg-[#D4AF37]/20 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#0EBE6F]/20 backdrop-blur-sm border border-[#0EBE6F]/30 text-white px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">Trusted by 50+ Kenyan Businesses</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl text-white mb-6 max-w-5xl mx-auto"
          >
            Stop Losing Customers to Businesses That Are <span className="text-[#0EBE6F]">Easier to Find</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl sm:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            From Google visibility to modern POS systems - we give Kenyan businesses everything they need to compete, grow, and thrive in the digital age
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBookingClick}
              className="inline-flex items-center gap-2 bg-[#0EBE6F] hover:bg-[#0EBE6F]/90 text-white px-8 py-5 rounded-xl transition-all shadow-lg shadow-[#0EBE6F]/30 hover:shadow-xl hover:shadow-[#0EBE6F]/40"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#what-we-do"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border-2 border-white px-8 py-5 rounded-xl backdrop-blur-sm transition-all"
            >
              See How We Help
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-6 h-6 text-[#0EBE6F]" />
                <div className="text-4xl text-white">250+</div>
              </div>
              <p className="text-white/70">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="w-6 h-6 text-[#0EBE6F]" />
                <div className="text-4xl text-white">90%</div>
              </div>
              <p className="text-white/70">Success Rate</p>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Sparkles className="w-6 h-6 text-[#0EBE6F]" />
                <div className="text-4xl text-white">7 Days</div>
              </div>
              <p className="text-white/70">Average Launch</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-white/50 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
