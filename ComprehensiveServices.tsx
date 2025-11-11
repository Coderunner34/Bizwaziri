import { motion } from 'framer-motion';
import { 
  Globe, 
  CreditCard, 
  TrendingUp, 
  Instagram, 
  ShoppingCart,
  BarChart3,
  Smartphone,
  Users,
  Zap,
  Play,
  CheckCircle2
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

interface ComprehensiveServicesProps {
  onBookingClick: () => void;
}

export function ComprehensiveServices({ onBookingClick }: ComprehensiveServicesProps) {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: 'website',
      icon: Globe,
      title: 'Professional Website Development',
      tagline: 'Your 24/7 Digital Storefront',
      description: 'A website is like having a shop that never closes. While you sleep, customers can discover your business, see your products, read reviews, and decide to visit you.',
      image: 'https://images.unsplash.com/photo-1678690832311-bb6e361989ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzYyMjU4Mzg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Mobile-First Design - Most customers browse on phones',
        'Fast Loading Speed - Nobody waits for slow websites',
        'Google-Friendly - Built to rank in search results',
        'Easy to Update - You control your content',
        'Contact Forms - Customers reach you instantly',
        'Photo Galleries - Showcase your work beautifully'
      ],
      impact: 'Businesses with websites get 3x more customer inquiries than those without',
      pricing: 'From Ksh 20,000',
      videoPlaceholder: true
    },
    {
      id: 'pos',
      icon: CreditCard,
      title: 'Modern POS Systems',
      tagline: 'Stop Losing Money to Manual Mistakes',
      description: 'Imagine knowing exactly what sold today, which items are running low, and how much profit you made - all in real-time on your phone. That\'s what a POS system does.',
      image: 'https://images.unsplash.com/photo-1728044849321-4cbffc50cc1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwUE9TJTIwc3lzdGVtfGVufDF8fHx8MTc2MjE3MTMzMXww&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Inventory Tracking - Know what\'s in stock instantly',
        'Sales Reports - See which products make most money',
        'Staff Management - Track who sold what and when',
        'Customer Database - Build loyalty with repeat customers',
        'M-PESA Integration - Accept payments easily',
        'Cloud-Based - Access from anywhere on any device'
      ],
      impact: 'Restaurant owners save 15+ hours per week and reduce cash discrepancies by 95%',
      pricing: 'From Ksh 35,000 setup + Ksh 3,000/month',
      videoPlaceholder: true,
      idealFor: ['Restaurants', 'Retail Shops', 'Salons', 'Pharmacies', 'Supermarkets']
    },
    {
      id: 'seo',
      icon: TrendingUp,
      title: 'SEO & Google Visibility',
      tagline: 'Be Found When Customers Search',
      description: 'When someone searches "best salon near me" or "restaurant in Rongai", you should appear. SEO makes sure Google knows about your business and shows you to searching customers.',
      image: 'https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MjE5ODg5NHww&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Google Business Profile - Appear on Google Maps',
        'Local SEO - Rank for your location',
        'Review Management - Get and showcase 5-star reviews',
        'Keyword Optimization - Rank for what customers search',
        'Monthly Reporting - See your growth in numbers',
        'Competitor Analysis - Stay ahead of competition'
      ],
      impact: '76% of people who search for a local business visit within 24 hours',
      pricing: 'From Ksh 15,000/month',
      videoPlaceholder: true
    },
    {
      id: 'social',
      icon: Instagram,
      title: 'Social Media Management',
      tagline: 'Build Trust Before Customers Visit',
      description: 'Your Instagram and Facebook are where customers judge you first. Professional, active social media builds trust and brings customers through your door.',
      image: 'https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBidXNpbmVzc3xlbnwxfHx8fDE3NjIxNzE5Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Content Creation - Professional posts and graphics',
        'Regular Posting - Stay active and visible',
        'Story Management - Daily engagement with followers',
        'Hashtag Strategy - Reach more potential customers',
        'Community Management - Respond to comments and DMs',
        'Monthly Analytics - Track growth and engagement'
      ],
      impact: 'Businesses with active social media see 32% more customer visits',
      pricing: 'From Ksh 12,000/month',
      videoPlaceholder: true
    },
    {
      id: 'ecommerce',
      icon: ShoppingCart,
      title: 'Online Store Setup',
      tagline: 'Sell While You Sleep',
      description: 'Why limit sales to shop hours? An online store lets customers buy 24/7. Perfect for shops, boutiques, and anyone selling products.',
      image: 'https://images.unsplash.com/photo-1758519290890-46b542bb25fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG93bmVyJTIwc3VjY2Vzc3xlbnwxfHx8fDE3NjIyNzAyMzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Product Catalog - Showcase all your products online',
        'M-PESA Payments - Customers pay instantly',
        'Order Management - Track orders easily',
        'Delivery Integration - Connect with delivery services',
        'Inventory Sync - Stock updates automatically',
        'Customer Accounts - Build repeat customers'
      ],
      impact: 'Online stores generate 40% additional revenue on average',
      pricing: 'From Ksh 45,000',
      videoPlaceholder: true
    },
    {
      id: 'analytics',
      icon: BarChart3,
      title: 'Business Analytics & Insights',
      tagline: 'Make Decisions Based on Data, Not Guesses',
      description: 'Stop guessing and start knowing. We set up dashboards that show you exactly what\'s working, what\'s not, and where to focus your energy.',
      features: [
        'Sales Dashboards - Real-time revenue tracking',
        'Customer Insights - Understand your best customers',
        'Trend Analysis - Spot patterns before competitors',
        'ROI Tracking - Know what marketing works',
        'Performance Alerts - Get notified of changes',
        'Monthly Reports - Beautiful reports for decision making'
      ],
      impact: 'Data-driven businesses grow 30% faster than competitors',
      pricing: 'From Ksh 10,000/month'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#0EBE6F]/10 text-[#0EBE6F] px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4" />
            <span className="text-sm">Complete Digital Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl text-[#0A2239] mb-6">
            Everything Your Business Needs to <span className="text-[#0EBE6F]">Thrive Online</span>
          </h2>
          <p className="text-xl text-[#2C2C2C]/70 max-w-3xl mx-auto">
            From getting found on Google to modern POS systems and online stores - we handle the technology so you can focus on your business
          </p>
        </motion.div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.button
                key={service.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                  activeTab === index
                    ? 'bg-[#0EBE6F] text-white shadow-lg'
                    : 'bg-white text-[#2C2C2C] border border-[#0A2239]/20 hover:border-[#0EBE6F]'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="hidden sm:inline">{service.title.split(' ')[0]}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Active Service Display */}
        {services.map((service, index) => {
          if (activeTab !== index) return null;
          const Icon = service.icon;

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Image/Video Section */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[400px] object-cover"
                  />
                  {service.videoPlaceholder && (
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl"
                      >
                        <Play className="w-10 h-10 text-[#0EBE6F] ml-1" fill="currentColor" />
                      </motion.button>
                      <div className="absolute bottom-4 left-4 right-4 text-center">
                        <p className="text-white text-sm bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full inline-block">
                          Watch How It Works (Coming Soon)
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Impact Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute -bottom-6 -right-6 bg-[#D4AF37] text-white p-6 rounded-2xl shadow-xl max-w-xs"
                >
                  <p className="text-sm">{service.impact}</p>
                </motion.div>
              </div>

              {/* Content Section */}
              <div>
                <div className="inline-flex items-center gap-3 bg-[#0EBE6F]/10 px-4 py-2 rounded-full mb-4">
                  <Icon className="w-5 h-5 text-[#0EBE6F]" />
                  <span className="text-[#0EBE6F]">{service.tagline}</span>
                </div>

                <h3 className="text-3xl sm:text-4xl text-[#0A2239] mb-4">
                  {service.title}
                </h3>

                <p className="text-lg text-[#2C2C2C]/80 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#0EBE6F] flex-shrink-0 mt-0.5" />
                      <span className="text-[#2C2C2C]/80">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Ideal For (if exists) */}
                {service.idealFor && (
                  <div className="mb-6">
                    <p className="text-sm text-[#2C2C2C]/60 mb-2">Ideal For:</p>
                    <div className="flex flex-wrap gap-2">
                      {service.idealFor.map((industry, idx) => (
                        <span
                          key={idx}
                          className="bg-white px-3 py-1 rounded-full text-sm text-[#0A2239] border border-[#0A2239]/20"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Pricing & CTA */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-6 border-t border-[#0A2239]/10">
                  <div>
                    <p className="text-sm text-[#2C2C2C]/60">Starting at</p>
                    <p className="text-2xl text-[#0EBE6F]">{service.pricing}</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onBookingClick}
                    className="bg-[#0EBE6F] hover:bg-[#0EBE6F]/90 text-white px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl"
                  >
                    Get Started
                  </motion.button>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-[#0A2239] to-[#0A2239]/90 rounded-3xl p-12 text-center text-white"
        >
          <Users className="w-16 h-16 text-[#0EBE6F] mx-auto mb-6" />
          <h3 className="text-3xl mb-4">Not Sure What You Need?</h3>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Book a free consultation and we'll assess your business, understand your goals, and recommend the perfect solution for your needs.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBookingClick}
            className="bg-[#0EBE6F] hover:bg-[#0EBE6F]/90 text-white px-10 py-5 rounded-xl text-lg shadow-2xl"
          >
            Book Free Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
