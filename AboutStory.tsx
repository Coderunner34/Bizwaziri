import { motion } from 'framer-motion';
import { Heart, Target, Users, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutStory() {
  const values = [
    {
      icon: Heart,
      title: 'We Care Deeply',
      description: 'Your business isn\'t just a project to us. We understand the sacrifice, stress, and hope that comes with entrepreneurship.'
    },
    {
      icon: Target,
      title: 'Strategy Over Hype',
      description: 'We don\'t sell false promises. Every recommendation we make is backed by data, research, and proven results.'
    },
    {
      icon: Users,
      title: 'Partnership, Not Transactions',
      description: 'We succeed when you succeed. That\'s why our clients stay with us for years, not months.'
    },
    {
      icon: TrendingUp,
      title: 'Growth is Designed',
      description: 'Business success isn\'t luck. It\'s the result of strategic planning, consistent execution, and continuous improvement.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#F57C00] text-sm uppercase tracking-wider mb-4 block">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl text-[#1C1C1C] mb-6">
              We've Been Where You Are
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                BizWaziri was born from frustration, watching talented Kenyan entrepreneurs struggle not because their businesses weren't good enough, but because they were invisible.
              </p>
              
              <p>
                We saw restaurants with incredible food but empty tables. Salons with skilled stylists but irregular customers. Schools with excellent education but low enrollment.
              </p>
              
              <p>
                <strong className="text-[#1C1C1C]">The problem wasn't the quality of their services. It was that potential customers couldn't find them.</strong>
              </p>
              
              <p>
                So we built BizWaziri with one mission: <strong className="text-[#F57C00]">Make excellent Kenyan businesses visible, accessible, and profitable.</strong>
              </p>
              
              <p>
                Today, we've helped over 150 businesses transform from struggling to thriving. We've generated over KSh 120K in revenue for our clients. And we're just getting started.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <div className="text-4xl text-[#F57C00] mb-2">2025</div>
                <div className="text-gray-600">Founded</div>
              </div>
              <div>
                <div className="text-4xl text-[#F57C00] mb-2">150+</div>
                <div className="text-gray-600">Businesses Rescued</div>
              </div>
              <div>
                <div className="text-4xl text-[#F57C00] mb-2">KSh 120K+</div>
                <div className="text-gray-600">Revenue Generated</div>
              </div>
              <div>
                <div className="text-4xl text-[#F57C00] mb-2">94%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Image & Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Team Image */}
            <div className="rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1669034750695-dfe5cad91d6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="BizWaziri Team"
                className="w-full h-80 object-cover"
              />
            </div>

            {/* Philosophy Section */}
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-2xl text-[#1C1C1C] mb-6">Our Philosophy</h3>
              <div className="space-y-6">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="w-12 h-12 bg-[#F57C00]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-[#F57C00]" />
                      </div>
                      <div>
                        <h4 className="text-lg text-[#1C1C1C] mb-1">
                          {value.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-[#F57C00] to-[#E57000] rounded-2xl p-12 text-center"
        >
          <h3 className="text-3xl md:text-4xl text-white mb-4">
            "Growth isn't luck — it's design."
          </h3>
          <p className="text-white/90 text-lg max-w-3xl mx-auto">
            Every business we work with gets a custom strategy, honest guidance, and a partner who's invested in their success. That's the BizWaziri promise.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
