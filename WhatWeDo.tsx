import { MapPin, Instagram, Monitor, ArrowRight, Smartphone, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export function WhatWeDo() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: MapPin,
      title: 'Google Visibility',
      description: 'Appear on Google Maps and search results when customers search for businesses like yours.',
      features: ['Google Business Profile', 'Map Listing', 'Customer Reviews', 'Business Photos'],
      color: 'from-[#0EBE6F] to-[#0EBE6F]/80'
    },
    {
      icon: Instagram,
      title: 'Social Proof',
      description: 'Professional, active social media that builds trust before customers visit.',
      features: ['Instagram Setup', 'Facebook Page', 'Initial Posts', 'Brand Consistency'],
      color: 'from-[#D4AF37] to-[#D4AF37]/80'
    },
    {
      icon: Monitor,
      title: 'Professional Website',
      description: 'Clean, mobile-friendly website that showcases your business.',
      features: ['Mobile Optimized', 'Contact Forms', 'Photo Gallery', 'Fast Loading'],
      color: 'from-[#0A2239] to-[#0A2239]/80'
    }
  ];

  return (
    <section id="what-we-do" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#0EBE6F] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#0EBE6F]/10 text-[#0EBE6F] px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4" />
            <span className="text-sm">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-5xl text-[#0A2239] mb-6">
            We Make Local Businesses <span className="text-[#0EBE6F]">Visible</span>
          </h2>
          <p className="text-xl text-[#2C2C2C]/70 max-w-3xl mx-auto">
            Simple, foundational digital presence that actually works for Kenyan businesses
          </p>
        </motion.div>

        {/* Interactive Service Cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeService === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setActiveService(index)}
                className={`relative group cursor-pointer transition-all duration-300 ${
                  isActive ? 'lg:scale-105' : ''
                }`}
              >
                <div className={`bg-gradient-to-br ${service.color} rounded-2xl p-8 shadow-xl h-full text-white`}>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-2xl mb-4">{service.title}</h3>
                  <p className="text-white/90 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-2 text-white/80"
                      >
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-white group-hover:gap-3 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#FAFAFA] rounded-2xl p-8 text-center max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Smartphone className="w-6 h-6 text-[#0EBE6F]" />
            <h3 className="text-2xl text-[#0A2239]">Mobile-First Approach</h3>
          </div>
          <p className="text-[#2C2C2C]/70 mb-4">
            Over 80% of local searches happen on mobile devices. Everything we build looks perfect on phones first, desktop second.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
