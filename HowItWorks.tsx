import { MessageCircle, Hammer, Eye, Rocket, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

export function HowItWorks() {
  const steps = [
    {
      day: 'Day 1',
      icon: MessageCircle,
      title: 'We Talk',
      description: 'We have a conversation about your business. What do you offer? Who are your ideal customers? What area do you serve? What makes you different? This takes about thirty minutes and can happen at your business, over the phone, or via WhatsApp video call.'
    },
    {
      day: 'Days 2-3',
      icon: Hammer,
      title: 'We Build',
      description: 'We set up your Google Business Profile properly (or optimize your existing one if you have it). We create your Instagram and Facebook business profiles with your first professional posts. If you\'re getting a website, we build it using your photos and information. You don\'t need to understand any technology - we handle everything.'
    },
    {
      day: 'Day 4',
      icon: Eye,
      title: 'You Review',
      description: 'We show you everything we\'ve set up. You give us feedback. We make any adjustments you want. Nothing goes live until you\'re completely happy with it.'
    },
    {
      day: 'Day 5',
      icon: Rocket,
      title: 'We Launch',
      description: 'Everything goes live. Customers can now find you on Google Maps. Your social media profiles are professional and active. If you have a website, it\'s live and working beautifully on phones and computers.'
    },
    {
      day: 'Days 6-7',
      icon: GraduationCap,
      title: 'We Train You',
      description: 'We meet with you or your staff and teach you how to post on social media, how to respond to Google reviews, how to update basic information. You\'re not dependent on us - you can maintain things yourself. But we\'re always available if you need help.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-[#FAFAFA] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl text-[#0A2239] mb-6">
            From <span className="text-[#0EBE6F]">Invisible</span> to Discoverable in <span className="text-[#D4AF37]">One Week</span>
          </h2>
          <p className="text-xl text-[#2C2C2C]/70 max-w-2xl mx-auto">
            Our proven 5-step process gets your business online fast
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#0EBE6F]/30 -translate-x-1/2"></div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex flex-col lg:flex-row gap-8 items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'}`}>
                    <motion.div 
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-[#0EBE6F]/10"
                    >
                      <div className="flex items-center gap-3 mb-3 lg:hidden">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#0EBE6F] to-[#0EBE6F]/80 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-sm text-[#0EBE6F]">{step.day}</span>
                      </div>
                      <div className="hidden lg:block mb-3">
                        <span className="inline-block bg-[#0EBE6F]/10 text-[#0EBE6F] px-3 py-1 rounded-full text-sm">{step.day}</span>
                      </div>
                      <h3 className="text-2xl text-[#0A2239] mb-3">{step.title}</h3>
                      <p className="text-[#2C2C2C]/80 leading-relaxed">{step.description}</p>
                    </motion.div>
                  </div>

                  {/* Icon (center) - Desktop only */}
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-[#0EBE6F] to-[#0EBE6F]/80 rounded-full items-center justify-center z-10 shadow-2xl border-4 border-white"
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </motion.div>

                  {/* Spacer */}
                  <div className="flex-1 hidden lg:block"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
