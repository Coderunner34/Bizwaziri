import { motion } from 'framer-motion';
import { 
  Search, 
  MousePointer, 
  Phone, 
  ShoppingBag,
  Play,
  TrendingUp,
  Users,
  MessageCircle,
  ArrowRight,
  Lightbulb
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HowToGenerateSales() {
  const customerJourney = [
    {
      step: 1,
      icon: Search,
      title: 'Customer Searches',
      description: 'Someone needs what you offer. They take out their phone and search "salon near me" or "best restaurant in Rongai".',
      customerThought: '"I need a good salon nearby..."',
      color: 'from-blue-500 to-blue-600'
    },
    {
      step: 2,
      icon: MousePointer,
      title: 'They Find YOU',
      description: 'Your Google Business Profile appears. They see your photos, reviews, location. Your website looks professional. Your social media shows you\'re active.',
      customerThought: '"This place looks perfect!"',
      color: 'from-[#0EBE6F] to-[#0EBE6F]/80'
    },
    {
      step: 3,
      icon: Phone,
      title: 'They Contact You',
      description: 'They click "Call Now" or send a WhatsApp message. Your contact info is clear and easy to find.',
      customerThought: '"Let me book an appointment..."',
      color: 'from-[#D4AF37] to-[#D4AF37]/80'
    },
    {
      step: 4,
      icon: ShoppingBag,
      title: 'They Buy From You',
      description: 'They visit your business, make a purchase, and become a customer. Later, they leave a 5-star review that brings MORE customers.',
      customerThought: '"I\'ll definitely come back!"',
      color: 'from-green-500 to-green-600'
    }
  ];

  const strategies = [
    {
      icon: TrendingUp,
      title: 'SEO Strategy',
      problem: 'Problem: Nobody finds you when searching',
      solution: 'Solution: We optimize your Google Business Profile and website so you appear first in local searches',
      result: 'Result: 10-30 new customer inquiries per month'
    },
    {
      icon: Users,
      title: 'Social Proof Strategy',
      problem: 'Problem: Customers don\'t trust unknown businesses',
      solution: 'Solution: We build active social media, collect reviews, and showcase your work professionally',
      result: 'Result: 70% more customers choose you over competitors'
    },
    {
      icon: MessageCircle,
      title: 'Easy Contact Strategy',
      problem: 'Problem: Customers can\'t figure out how to reach you',
      solution: 'Solution: Clear phone numbers, WhatsApp buttons, contact forms everywhere',
      result: 'Result: 5x more customer inquiries'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#0EBE6F]/10 text-[#0EBE6F] px-4 py-2 rounded-full mb-6">
            <Lightbulb className="w-4 h-4" />
            <span className="text-sm">Simple to Understand</span>
          </div>
          <h2 className="text-3xl sm:text-5xl text-[#0A2239] mb-6">
            How Digital Presence <span className="text-[#0EBE6F]">Generates Sales</span>
          </h2>
          <p className="text-xl text-[#2C2C2C]/70 max-w-3xl mx-auto">
            Let us explain in simple terms how the internet brings customers to your business
          </p>
        </motion.div>

        {/* Visual Journey */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {customerJourney.map((journey, index) => {
              const Icon = journey.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Connector Arrow */}
                  {index < customerJourney.length - 1 && (
                    <div className="hidden lg:block absolute top-20 -right-3 z-10">
                      <ArrowRight className="w-6 h-6 text-[#0EBE6F]" />
                    </div>
                  )}

                  <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#0A2239]/10 h-full hover:shadow-2xl transition-shadow">
                    {/* Step Number */}
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${journey.color} text-white mb-4`}>
                      <span className="text-xl">0{journey.step}</span>
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 bg-[#0EBE6F]/10 rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-[#0EBE6F]" />
                    </div>

                    <h3 className="text-xl text-[#0A2239] mb-3">{journey.title}</h3>
                    <p className="text-[#2C2C2C]/70 mb-4 text-sm">{journey.description}</p>

                    {/* Customer Thought Bubble */}
                    <div className="bg-[#0EBE6F]/5 rounded-lg p-3 italic text-sm text-[#0A2239] border-l-4 border-[#0EBE6F]">
                      {journey.customerThought}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 bg-gradient-to-r from-[#0A2239] to-[#0A2239]/90 rounded-3xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-2">
            {/* Video Placeholder */}
            <div className="relative h-80 lg:h-auto">
              <ImageWithFallback
                src="https://www.aca.go.ke/images/gallery/meeting-with-nairobi-small-business-leaders/meeting-with-nairobi-small-business-leaders--32538.jpg"
                alt="Business Training"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl"
                >
                  <Play className="w-12 h-12 text-[#0EBE6F] ml-2" fill="currentColor" />
                </motion.button>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-[#0A2239] text-sm">
                    <strong>Watch:</strong> Real business owner explains how we helped them get 50+ new customers per month
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12">
              <h3 className="text-3xl text-white mb-6">
                Learn From Real Success Stories
              </h3>
              <p className="text-white/80 mb-6">
                We teach you everything you need to know - even if you've never used social media or don't understand technology.
              </p>
              <ul className="space-y-4">
                {[
                  'How to post on Instagram and Facebook',
                  'How to respond to customer messages',
                  'How to ask customers for reviews',
                  'How to update your website content',
                  'How to track your sales and growth'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white/90">
                    <div className="w-6 h-6 bg-[#0EBE6F] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Proven Strategies */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl text-[#0A2239] text-center mb-12"
          >
            Our Proven Strategies That Work
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            {strategies.map((strategy, index) => {
              const Icon = strategy.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-[#0A2239]/10"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0EBE6F] to-[#0EBE6F]/80 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h4 className="text-xl text-[#0A2239] mb-4">{strategy.title}</h4>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-red-600 mb-1">❌ {strategy.problem.split(': ')[0]}</p>
                      <p className="text-[#2C2C2C]/70 text-sm">{strategy.problem.split(': ')[1]}</p>
                    </div>

                    <div>
                      <p className="text-sm text-blue-600 mb-1">💡 {strategy.solution.split(': ')[0]}</p>
                      <p className="text-[#2C2C2C]/70 text-sm">{strategy.solution.split(': ')[1]}</p>
                    </div>

                    <div>
                      <p className="text-sm text-[#0EBE6F] mb-1">✅ {strategy.result.split(': ')[0]}</p>
                      <p className="text-[#0A2239] text-sm">{strategy.result.split(': ')[1]}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-[#0EBE6F]/10 rounded-2xl p-8 text-center"
        >
          <MessageCircle className="w-12 h-12 text-[#0EBE6F] mx-auto mb-4" />
          <h4 className="text-2xl text-[#0A2239] mb-3">
            We Explain Everything in Simple Terms
          </h4>
          <p className="text-[#2C2C2C]/70 max-w-2xl mx-auto">
            No technical jargon. No confusing terms. We teach you in Swahili or English, using examples from your business, until everything makes perfect sense.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
