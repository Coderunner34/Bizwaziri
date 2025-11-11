import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, Users, DollarSign, Clock, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function BusinessCrisisSection() {
  const crisisPoints = [
    {
      icon: TrendingDown,
      title: 'Declining Sales',
      description: 'Revenue dropping month after month while competitors thrive',
      stat: '67% of local businesses'
    },
    {
      icon: Users,
      title: 'Invisible Online',
      description: 'Customers can\'t find you when searching on Google',
      stat: '94% search invisibility'
    },
    {
      icon: Clock,
      title: 'Wasting Time',
      description: 'Manual processes taking hours that should take minutes',
      stat: '20+ hours weekly'
    },
    {
      icon: DollarSign,
      title: 'Lost Revenue',
      description: 'Missing out on customers because you\'re not where they look',
      stat: 'KSh 500k+ annually'
    },
    {
      icon: MapPin,
      title: 'Local Competition',
      description: 'Smaller competitors outranking you in Google Maps searches',
      stat: '82% market share loss'
    },
    {
      icon: AlertTriangle,
      title: 'No Clear Direction',
      description: 'Throwing money at marketing with no measurable results',
      stat: 'KSh 50K+ wasted'
    }
  ];

  return (
    <section id="business-crisis" className="py-24 bg-[#1C1C1C] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#F57C00] text-sm uppercase tracking-wider mb-4 block">
            The Hard Truth
          </span>
          <h2 className="text-4xl md:text-6xl text-white mb-6 max-w-4xl mx-auto">
            Is Your Business Struggling With These Challenges?
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            You're not alone. Most Kenyan businesses face these exact problems. But there's a proven way out.
          </p>
        </motion.div>

        {/* Crisis Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {crisisPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group"
              >
                <div className="w-14 h-14 bg-[#F57C00]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#F57C00]/20 transition-all">
                  <Icon className="w-7 h-7 text-[#F57C00]" />
                </div>
                <h3 className="text-xl text-white mb-3">
                  {point.title}
                </h3>
                <p className="text-white/60 mb-4 leading-relaxed">
                  {point.description}
                </p>
                <div className="text-[#F57C00] text-sm">
                  Affecting: {point.stat}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Transformation Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#F57C00] to-[#E57000] rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1442118325940-300e8fe327d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
              alt="Success"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 max-w-3xl">
            <h3 className="text-3xl md:text-5xl text-white mb-6">
              What If You Could Transform This Crisis Into Success?
            </h3>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Every business we've rescued faced these exact challenges. The difference? They made a decision to change. Within 90 days, they saw measurable results.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <div className="text-4xl text-white mb-2">3x</div>
                <div className="text-white/80">Average Revenue Increase</div>
              </div>
              <div>
                <div className="text-4xl text-white mb-2">90 Days</div>
                <div className="text-white/80">To See Results</div>
              </div>
              <div>
                <div className="text-4xl text-white mb-2">247%</div>
                <div className="text-white/80">ROI on Average</div>
              </div>
            </div>
            <a
              href="#transformation-process"
              className="inline-flex items-center gap-2 bg-white text-[#F57C00] px-8 py-4 rounded-lg hover:bg-white/90 transition-all"
            >
              See How We Do It
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
