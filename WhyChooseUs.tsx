import { Target, MessageSquare, GraduationCap, MapPin, DollarSign, Clock, Shield, Heart, Zap, Users, Award, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Target,
      title: 'Complete Digital Solutions Under One Roof',
      description: 'No need to hire multiple agencies. We handle everything - websites, POS systems, SEO, social media, e-commerce, training. One team, one point of contact, everything working together perfectly.'
    },
    {
      icon: MessageSquare,
      title: 'We Speak Swahili & English, No Tech Jargon',
      description: 'We explain everything in simple terms you can understand. Whether you speak Swahili, English, or both - we make sure you completely understand what we\'re doing and why it matters for YOUR business.'
    },
    {
      icon: GraduationCap,
      title: 'Real Training That Empowers You',
      description: 'We don\'t just set things up and disappear. We train you and your staff thoroughly - videos, written guides, hands-on practice. You\'ll be confident managing everything yourself. That\'s our promise.'
    },
    {
      icon: MapPin,
      title: 'Local Kenyan Team That Understands You',
      description: 'We\'re based in Ongata Rongai. We understand M-PESA, matatus, Kenyan customer behavior, local competition, and the unique challenges of running a business in Kenya. We\'re not applying foreign strategies - we know what works HERE.'
    },
    {
      icon: Heart,
      title: 'We Actually Care About Your Success',
      description: 'Your success is our success. We celebrate when you get your first online sale, when customers find you on Google, when your revenue doubles. We\'re not just vendors - we become partners in your growth journey.'
    },
    {
      icon: Shield,
      title: 'Proven Track Record With 500+ Businesses',
      description: 'We\'ve helped restaurants go from 15 to 60 customers daily. Barbershops fully booked every day. Shops adding online sales. These aren\'t just numbers - these are real Kenyan business owners feeding their families better.'
    },
    {
      icon: DollarSign,
      title: 'Honest, Transparent Pricing',
      description: 'No hidden fees. No surprise charges. No expensive monthly contracts you can\'t escape. We quote a fair price, you pay it, you own everything we build. Simple and honest.'
    },
    {
      icon: Clock,
      title: 'Fast Results - See Changes in Days, Not Months',
      description: 'Google visibility in 1 week. POS system running in 2 days. Website live in 5-7 days. We move fast because we know you can\'t wait months to see results. Time is money in business.'
    },
    {
      icon: Zap,
      title: 'Modern Tools That Actually Work',
      description: 'We use the same professional tools big businesses use, but adapted for Kenyan small businesses. Cloud-based POS, mobile-optimized websites, automated marketing - technology that gives you an edge.'
    },
    {
      icon: Users,
      title: 'Support That\'s Always Available',
      description: 'Reach us anytime on WhatsApp (+254 775 268 629). Not ticket systems or email chains. Real human support in real time. Most questions answered within 30 minutes during business hours.'
    },
    {
      icon: Award,
      title: 'Quality Work We Stand Behind',
      description: 'Every website we build is mobile-optimized. Every POS system is tested thoroughly. Every Google profile is set up to maximize visibility. We don\'t cut corners - your business deserves the best.'
    },
    {
      icon: Headphones,
      title: 'Post-Launch Support Included',
      description: '30-60 days of support after launch on every project. Need something adjusted? Found a bug? Not sure how something works? We\'re there to help until you\'re completely comfortable.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#FAFAFA] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 text-[#D4AF37] px-4 py-2 rounded-full mb-6">
            <Award className="w-4 h-4" />
            <span className="text-sm">Why We're Different</span>
          </div>
          <h2 className="text-3xl sm:text-5xl text-[#0A2239] mb-6">
            Why 500+ Kenyan Businesses <span className="text-[#0EBE6F]">Trust Us</span>
          </h2>
          <p className="text-xl text-[#2C2C2C]/70 max-w-3xl mx-auto">
            We're not just another digital agency - we're your growth partners
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-[#0A2239]/10 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#0EBE6F] to-[#0EBE6F]/80 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg text-[#0A2239] mb-2">{reason.title}</h3>
                <p className="text-[#2C2C2C]/70 text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
