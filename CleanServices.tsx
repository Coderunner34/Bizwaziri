import { motion } from 'framer-motion';
import { Globe, CreditCard, TrendingUp, Instagram, ShoppingCart, BarChart3, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CleanServicesProps {
  onBookingClick: () => void;
}

export function CleanServices({ onBookingClick }: CleanServicesProps) {
  const services = [
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Professional, fast-loading websites that turn visitors into customers.',
      image: 'https://images.unsplash.com/photo-1678690832311-bb6e361989ca?w=600',
      price: 'From Ksh 20,000'
    },
    {
      icon: CreditCard,
      title: 'POS Systems',
      description: 'Modern point-of-sale systems that track sales, inventory, and staff performance.',
      image: 'https://images.unsplash.com/photo-1728044849321-4cbffc50cc1d?w=600',
      price: 'From Ksh 35,000'
    },
    {
      icon: TrendingUp,
      title: 'SEO & Google Visibility',
      description: 'Get found when customers search for your services on Google.',
      image: 'https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?w=600',
      price: 'From Ksh 15,000/mo'
    },
{
  icon: Instagram,
  title: 'Social Media Management',
  description: 'Build trust and attract customers through professional social media presence.',
  image: 'https://digitalmediakenya.co.ke/wp-content/uploads/2023/10/Best-Digital-Marketing-Kenya-Digital-Marketing-Kenya-Social-Media-Marketing-Kenya-Kenya-Web-Design-and-Development-Digital-Advertising-Agency-Kenya-SM-kenya.jpg',
  price: 'From Ksh 12,000/mo'
},
    {
      icon: ShoppingCart,
      title: 'E-Commerce Stores',
      description: 'Sell online 24/7 with M-PESA integrated online stores.',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600',
      price: 'From Ksh 45,000'
    },
    {
      icon: BarChart3,
      title: 'Monitoring & Evaluation',
      description: 'Track performance, measure ROI, and make data-driven decisions.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
      price: 'From Ksh 10,000/mo'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#F57C00] text-sm uppercase tracking-wider mb-4 block">
            Solutions, Not Services
          </span>
          <h2 className="text-4xl md:text-6xl text-[#1C1C1C] mb-6">
            Tools to Transform Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just deliver projects—we build complete systems that drive measurable growth for your business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-[#F57C00] rounded-lg flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl text-[#1C1C1C] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{service.price}</span>
                    <button
                      onClick={onBookingClick}
                      className="text-[#F57C00] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 text-sm"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-[#1C1C1C] to-[#2C2C2C] rounded-2xl p-12 text-center">
            <h3 className="text-3xl text-white mb-4">Not Sure Which Solution You Need?</h3>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Let's talk. We'll analyze your business and recommend the exact tools that will drive your growth.
            </p>
            <button
              onClick={onBookingClick}
              className="bg-[#F57C00] hover:bg-[#E57000] text-white px-10 py-5 rounded-lg transition-all inline-flex items-center gap-2 text-lg shadow-xl"
            >
              Get Free Business Analysis
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
