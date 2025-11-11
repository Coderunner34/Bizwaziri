import { motion } from 'framer-motion';
import { ClipboardCheck, Target, Rocket, TrendingUp, BarChart3, CheckCircle2 } from 'lucide-react';

export function TransformationProcess() {
  const steps = [
    {
      icon: ClipboardCheck,
      title: 'Free Digital Health Check',
      duration: '1 hour',
      description: 'We audit your current digital presence—what\'s working, what\'s broken, and where your biggest opportunities lie.',
      deliverables: [
        'Complete website and SEO analysis',
        'Competitor research report',
        'Google visibility assessment',
        'Social media audit',
        'Clear action plan'
      ]
    },
    {
      icon: Target,
      title: 'Custom Strategy Blueprint',
      duration: '3-5 days',
      description: 'No cookie-cutter solutions. We design a transformation roadmap specifically for your business, goals, and budget.',
      deliverables: [
        'Detailed strategy document',
        'Timeline with milestones',
        'Clear pricing breakdown',
        'ROI projections',
        'Service package recommendations'
      ]
    },
    {
      icon: Rocket,
      title: 'Implementation Sprint',
      duration: '30-60 days',
      description: 'We execute with speed and precision. Website build, SEO optimization, content creation, and system setup—all handled by our expert team.',
      deliverables: [
        'Website or e-commerce platform',
        'Google Business optimization',
        'SEO foundation',
        'Content calendar',
        'Analytics setup'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Launch & Optimization',
      duration: 'Day 60-90',
      description: 'Your digital presence goes live. We monitor, test, and refine based on real data to maximize performance.',
      deliverables: [
        'Public launch',
        'Paid ads campaigns',
        'Performance tracking',
        'A/B testing',
        'Weekly progress reports'
      ]
    },
    {
      icon: BarChart3,
      title: 'Growth & Scale',
      duration: 'Ongoing',
      description: 'Transformation isn\'t a one-time event. We provide continuous support, updates, and strategic guidance as you scale.',
      deliverables: [
        'Monthly strategy calls',
        'Performance dashboards',
        'Content updates',
        'Technical support',
        'Expansion planning'
      ]
    }
  ];

  return (
    <section id="transformation-process" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #F57C00 1px, transparent 0)',
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
            The BizWaziri Way
          </span>
          <h2 className="text-4xl md:text-6xl text-[#1C1C1C] mb-6">
            Our Business Rescue Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven, systematic approach that has transformed more than 50+ Kenyan businesses from struggling to thriving.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#F57C00] via-[#E57000] to-[#F57C00] transform -translate-x-1/2"></div>

          {/* Steps */}
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`bg-[#F5F5F5] rounded-2xl p-8 hover:shadow-xl transition-all ${
                      isLeft ? 'md:mr-12' : 'md:ml-12'
                    }`}>
                      {/* Step number and duration */}
                      <div className={`flex items-center gap-4 mb-4 ${
                        isLeft ? 'md:justify-end' : 'md:justify-start'
                      }`}>
                        <span className="text-sm text-[#F57C00] uppercase tracking-wider">
                          Step {index + 1}
                        </span>
                        <span className="px-3 py-1 bg-[#F57C00]/10 text-[#F57C00] rounded-full text-sm">
                          {step.duration}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl text-[#1C1C1C] mb-4">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Deliverables */}
                      <div>
                        <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-3">
                          What You Get:
                        </h4>
                        <ul className={`space-y-2 ${isLeft ? 'md:items-end' : 'md:items-start'}`}>
                          {step.deliverables.map((item, i) => (
                            <li key={i} className={`flex items-center gap-2 ${
                              isLeft ? 'md:flex-row-reverse md:justify-end' : ''
                            }`}>
                              <CheckCircle2 className="w-5 h-5 text-[#F57C00] flex-shrink-0" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#F57C00] to-[#E57000] rounded-full flex items-center justify-center shadow-xl z-10 relative">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    {/* Pulse effect */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                      className="absolute inset-0 bg-[#F57C00] rounded-full"
                    />
                  </div>

                  {/* Spacer for alignment */}
                  <div className="hidden md:block flex-1"></div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-[#1C1C1C] to-[#2C2C2C] rounded-2xl p-12">
            <h3 className="text-3xl md:text-4xl text-white mb-4">
              Ready to Start Your Transformation?
            </h3>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              The first step is a free consultation. No pressure, no commitment—just honest guidance on what your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-[#F57C00] hover:bg-[#E57000] text-white px-10 py-5 rounded-lg transition-all inline-flex items-center justify-center gap-2 text-lg"
              >
                Book Free Consultation
              </a>
              <a
                href="https://wa.me/254775269628?text=Hi%20BizWaziri!%20I'd%20like%20to%20learn%20more%20about%20your%20transformation%20process."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white px-10 py-5 rounded-lg transition-all inline-flex items-center justify-center gap-2 text-lg"
              >
                WhatsApp Us Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
