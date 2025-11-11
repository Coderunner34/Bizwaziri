import { motion } from 'framer-motion';
import { MessageCircle, ClipboardCheck, Wrench, GraduationCap, CheckCircle } from 'lucide-react';

export function CleanHowItWorks() {
  const steps = [
    {
      icon: MessageCircle,
      number: '01',
      title: 'Free Consultation',
      description: 'We discuss your business, goals, and challenges. No commitment required.'
    },
    {
      icon: ClipboardCheck,
      number: '02',
      title: 'Custom Proposal',
      description: 'We create a tailored plan with clear pricing and timelines for your needs.'
    },
    {
      icon: Wrench,
      number: '03',
      title: 'Setup & Implementation',
      description: 'We build and implement your solution within 7 days, keeping you updated.'
    },
    {
      icon: GraduationCap,
      number: '04',
      title: 'Training & Support',
      description: 'We train your team and provide ongoing support to ensure your success.'
    },
    {
      icon: CheckCircle,
      number: '05',
      title: 'Growth & Optimization',
      description: 'Monitor results together and optimize for continued growth.'
    }
  ];

  return (
    <section id="how-it-works" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-20"
        >
          <h2 className="text-4xl md:text-6xl text-[#0A2239] mb-6">
            Simple, Transparent Process
          </h2>
          <p className="text-xl text-gray-600">
            From first contact to ongoing growth, we make it easy
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Connection Line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
                )}

                <div className="relative bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  {/* Number Badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#FF8C42] rounded-full flex items-center justify-center text-white z-10 shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-[#0A2239] rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl text-[#0A2239] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
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
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">Ready to get started?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#0A2239] hover:bg-[#0A2239]/90 text-white px-8 py-4 rounded-lg transition-all"
          >
            Start Your Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
