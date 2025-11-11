import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logoImage from '..BWlogo.png';

interface CleanHeroProps {
  onBookingClick: () => void;
}

export function CleanHero({ onBookingClick }: CleanHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Background Image Grid - Kenyan Businesses */}
      <div className="absolute inset-0 grid grid-cols-3 gap-2 opacity-15">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1651126178622-50f0bdbe2538?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZW55YSUyMHJlc3RhdXJhbnQlMjBkaW5pbmd8ZW58MXx8fHwxNzYyMjc1MzU5fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Kenyan Restaurant"
          className="w-full h-full object-cover"
        />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1715250670775-510b2762a14a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2ElMjBiYXJiZXIlMjBzaG9wfGVufDF8fHx8MTc2MjI3NTM2MHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="African Barber Shop"
          className="w-full h-full object-cover"
        />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1666281134747-caa676fc2201?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc3R1ZGVudHMlMjBjbGFzc3Jvb218ZW58MXx8fHwxNzYyMTg1MzkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="African Students"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/90"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <img 
              src={logoImage} 
              alt="BizWaziri Kenya" 
              className="h-16 md:h-20"
            />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl text-[#0A2239] mb-8 tracking-tight"
          >
            Digital Solutions for <span className="text-[#FF8C42]">Growing</span> Businesses
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed"
          >
            We help Kenyan businesses get found online, manage operations efficiently, and grow sustainably through smart technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={onBookingClick}
              className="group bg-[#0A2239] hover:bg-[#0A2239]/90 text-white px-8 py-4 rounded-lg transition-all inline-flex items-center justify-center gap-2"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://wa.me/254775269628?text=Hi%20BizWaziri!%20I'm%20interested%20in%20digital%20solutions%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-[#0A2239] text-[#0A2239] hover:bg-gray-50 px-8 py-4 rounded-lg transition-all inline-flex items-center justify-center gap-2"
            >
              WhatsApp Us
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 flex items-center gap-8 text-sm text-gray-500"
          >
            <div>
              <div className="text-2xl text-[#0A2239] mb-1">500+</div>
              <div>Businesses Served</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div>
              <div className="text-2xl text-[#0A2239] mb-1">7 Days</div>
              <div>Average Setup Time</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div>
              <div className="text-2xl text-[#0A2239] mb-1">4.9/5</div>
              <div>Client Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Side Image */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/2"
      >
        <div className="relative h-full">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1710778044102-56a3a6b69a1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZW55YSUyMGJ1c2luZXNzJTIwb3duZXJ8ZW58MXx8fHwxNzYyMjc1MzYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Kenya Business Owner"
            className="h-full w-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white"></div>
        </div>
      </motion.div>
    </section>
  );
}
