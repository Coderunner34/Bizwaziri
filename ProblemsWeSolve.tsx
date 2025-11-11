import { motion } from 'framer-motion';
import { 
  AlertCircle, 
  TrendingDown, 
  Clock, 
  DollarSign,
  Users,
  PhoneOff,
  X,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface ProblemsWeSolveProps {
  onBookingClick: () => void;
}

export function ProblemsWeSolve({ onBookingClick }: ProblemsWeSolveProps) {
  const problems = [
    {
      icon: TrendingDown,
      title: 'Empty Shop Despite Good Location',
      description: 'You pay expensive rent in a good area, but customers walk past without noticing you. They find your competitors on Google instead.',
      emotion: 'Watching potential customers walk by while you sit idle is heartbreaking.',
      solution: 'Google Maps visibility + Local SEO',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Clock,
      title: 'Too Much Time on Manual Work',
      description: 'You spend hours counting stock, calculating sales, writing receipts by hand. No time left to actually grow the business.',
      emotion: 'You\'re working 14-hour days but your business isn\'t growing.',
      solution: 'POS System + Business Automation',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: DollarSign,
      title: 'Money Disappearing - Can\'t Track It',
      description: 'Cash goes missing. You can\'t tell which products make money. Staff sales don\'t match the money in the register.',
      emotion: 'The stress of not knowing where your money goes is exhausting.',
      solution: 'Digital POS + Inventory Management',
      color: 'from-yellow-600 to-yellow-700'
    },
    {
      icon: Users,
      title: 'Losing Customers to Competitors',
      description: 'Customers try you once but never return. They don\'t know about your promotions. You can\'t stay in touch with them.',
      emotion: 'Building a business without repeat customers feels impossible.',
      solution: 'CRM System + SMS/Email Marketing',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: PhoneOff,
      title: 'Customers Can\'t Reach You',
      description: 'People want to book or ask questions but can\'t find your number. They give up and go elsewhere.',
      emotion: 'Losing customers simply because they couldn\'t contact you hurts.',
      solution: 'Website + WhatsApp Business + Online Booking',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: AlertCircle,
      title: 'Look Unprofessional Online',
      description: 'Your social media is outdated or empty. You have no reviews. Customers think you\'re closed or unreliable.',
      emotion: 'Being judged as unprofessional when you work so hard is unfair.',
      solution: 'Social Media Management + Review Generation',
      color: 'from-pink-500 to-pink-600'
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
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full mb-6">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm">We Understand Your Pain</span>
          </div>
          <h2 className="text-3xl sm:text-5xl text-[#0A2239] mb-6">
            Real Business Problems We <span className="text-[#0EBE6F]">Actually Solve</span>
          </h2>
          <p className="text-xl text-[#2C2C2C]/70 max-w-3xl mx-auto">
            These aren't just business challenges - they're keeping you up at night, stressing your family, and threatening your dreams
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-[#0A2239]/10 group"
              >
                {/* Icon with gradient */}
                <div className={`w-16 h-16 bg-gradient-to-r ${problem.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl text-[#0A2239] mb-3">{problem.title}</h3>
                
                {/* Description */}
                <p className="text-[#2C2C2C]/70 mb-4 leading-relaxed">
                  {problem.description}
                </p>

                {/* Emotional Impact */}
                <div className="bg-red-50 border-l-4 border-red-400 rounded p-3 mb-4">
                  <p className="text-sm text-red-800 italic">
                    {problem.emotion}
                  </p>
                </div>

                {/* Solution */}
                <div className="pt-4 border-t border-[#0A2239]/10">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0EBE6F] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-[#0EBE6F] mb-1">Our Solution:</p>
                      <p className="text-sm text-[#0A2239]">{problem.solution}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Reality Check Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#0A2239] to-[#0A2239]/90 rounded-3xl p-12 text-white"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl mb-6 text-center">The Honest Truth</h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Without Solution */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-red-400">
                <div className="flex items-center gap-2 mb-4">
                  <X className="w-6 h-6 text-red-400" />
                  <h4 className="text-xl">If You Do Nothing:</h4>
                </div>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 flex-shrink-0">•</span>
                    <span>Your competitors will keep taking YOUR customers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 flex-shrink-0">•</span>
                    <span>You'll work harder for less money</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 flex-shrink-0">•</span>
                    <span>The stress will affect your health and family</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 flex-shrink-0">•</span>
                    <span>You might have to close the business</span>
                  </li>
                </ul>
              </div>

              {/* With Solution */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#0EBE6F]">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-6 h-6 text-[#0EBE6F]" />
                  <h4 className="text-xl">When You Take Action:</h4>
                </div>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0EBE6F] flex-shrink-0">•</span>
                    <span>Customers find YOU instead of competitors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0EBE6F] flex-shrink-0">•</span>
                    <span>Revenue grows while work becomes easier</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0EBE6F] flex-shrink-0">•</span>
                    <span>You sleep better knowing the business is secure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0EBE6F] flex-shrink-0">•</span>
                    <span>You can finally afford your family's dreams</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xl mb-6">
                The question isn't whether you need this. The question is: <strong>How much longer will you wait?</strong>
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onBookingClick}
                className="bg-[#0EBE6F] hover:bg-[#0EBE6F]/90 text-white px-10 py-5 rounded-xl text-lg shadow-2xl inline-flex items-center gap-2"
              >
                Let's Fix This Together
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid sm:grid-cols-3 gap-8 text-center"
        >
          <div>
            <div className="text-4xl sm:text-5xl text-[#0EBE6F] mb-2">500+</div>
            <p className="text-[#2C2C2C]/70">Business Owners We've Helped</p>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl text-[#0EBE6F] mb-2">3-5x</div>
            <p className="text-[#2C2C2C]/70">Average Revenue Growth</p>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl text-[#0EBE6F] mb-2">7 Days</div>
            <p className="text-[#2C2C2C]/70">To Get You Online</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
