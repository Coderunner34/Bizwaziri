import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, TrendingUp, BarChart3, Users, Globe, ChevronRight, Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function EducationalHub() {
  const [activeLesson, setActiveLesson] = useState(0);

  const lessons = [
    {
      icon: Search,
      title: 'How SEO Actually Works',
      description: 'Understand the simple science behind Google rankings',
      content: {
        problem: 'Your customers search for services like yours on Google. But you don\'t show up.',
        solution: 'SEO (Search Engine Optimization) makes your business visible when people search. It\'s not magic—it\'s strategy.',
        howItWorks: [
          'We optimize your website with the right keywords',
          'We build your credibility with Google through quality content',
          'We ensure your site is fast, mobile-friendly, and trustworthy',
          'Google rewards you with higher rankings'
        ],
        result: 'Within 60-90 days, you appear on page 1 when customers search for your services.',
        metric: '340% average increase in website visitors'
      }
    },
    {
      icon: MapPin,
      title: 'Google Business Profile 101',
      description: 'The fastest way to get local customers',
      content: {
        problem: 'When people search "barber near me" or "best restaurant in Nairobi," you don\'t appear.',
        solution: 'Google Business Profile puts you on Google Maps and local search results—for free.',
        howItWorks: [
          'We claim and optimize your Google Business listing',
          'We add photos, hours, services, and accurate information',
          'We collect and manage customer reviews',
          'We post regular updates to keep your profile active'
        ],
        result: 'You show up in local searches and Google Maps, with calls and directions clicking straight to you.',
        metric: '156% increase in store visits from Google Maps'
      }
    },
    {
      icon: BarChart3,
      title: 'Why Analytics Matter',
      description: 'Track what works, fix what doesn\'t',
      content: {
        problem: 'You spend money on marketing but have no idea what\'s working.',
        solution: 'Business analytics show exactly where customers come from and what actions they take.',
        howItWorks: [
          'We install tracking tools on your website and social media',
          'We monitor visitor behavior, sales, and conversions',
          'We create simple dashboards you can actually understand',
          'We adjust strategy based on real data, not guesses'
        ],
        result: 'You make decisions based on facts. You stop wasting money on what doesn\'t work.',
        metric: 'Average 3.2x improvement in marketing ROI'
      }
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing That Sells',
      description: 'Turn social media into real revenue',
      content: {
        problem: 'You post on social media but rarely see sales from it.',
        solution: 'Strategic digital marketing focuses on conversion, not just likes.',
        howItWorks: [
          'We create content that speaks to your customers\' real problems',
          'We use paid ads to target people ready to buy',
          'We build sales funnels that guide visitors to purchase',
          'We test, measure, and improve continuously'
        ],
        result: 'Every shilling spent on marketing brings measurable return.',
        metric: 'Average 4:1 return on ad spend (ROAS)'
      }
    }
  ];

  const lesson = lessons[activeLesson];
  const Icon = lesson.icon;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#F57C00] text-sm uppercase tracking-wider mb-4 block">
            Learn With Us
          </span>
          <h2 className="text-4xl md:text-6xl text-[#1C1C1C] mb-6">
            Understand How Digital Growth Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just do the work—we educate you. Knowledge is power, and you deserve to understand where your investment goes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Lesson Selector */}
          <div className="space-y-3">
            {lessons.map((item, index) => {
              const ItemIcon = item.icon;
              return (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveLesson(index)}
                  className={`w-full text-left p-6 rounded-xl border-2 transition-all ${
                    activeLesson === index
                      ? 'border-[#F57C00] bg-[#F57C00]/5'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      activeLesson === index ? 'bg-[#F57C00]' : 'bg-gray-100'
                    }`}>
                      <ItemIcon className={`w-6 h-6 ${
                        activeLesson === index ? 'text-white' : 'text-gray-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg mb-1 ${
                        activeLesson === index ? 'text-[#F57C00]' : 'text-[#1C1C1C]'
                      }`}>
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                    <ChevronRight className={`w-5 h-5 flex-shrink-0 transition-transform ${
                      activeLesson === index ? 'text-[#F57C00] translate-x-1' : 'text-gray-400'
                    }`} />
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Lesson Content */}
          <motion.div
            key={activeLesson}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-2 bg-gray-50 rounded-2xl p-8 md:p-10"
          >
            {/* Header */}
            <div className="flex items-start gap-4 mb-8">
              <div className="w-16 h-16 bg-[#F57C00] rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl text-[#1C1C1C] mb-2">{lesson.title}</h3>
                <p className="text-gray-600">{lesson.description}</p>
              </div>
            </div>

            {/* Problem */}
            <div className="mb-6 p-6 bg-red-50 border border-red-200 rounded-xl">
              <div className="text-sm text-red-600 uppercase tracking-wider mb-2">The Problem</div>
              <p className="text-red-900">{lesson.content.problem}</p>
            </div>

            {/* Solution */}
            <div className="mb-6 p-6 bg-green-50 border border-green-200 rounded-xl">
              <div className="text-sm text-green-600 uppercase tracking-wider mb-2">The Solution</div>
              <p className="text-green-900">{lesson.content.solution}</p>
            </div>

            {/* How It Works */}
            <div className="mb-6">
              <h4 className="text-lg text-[#1C1C1C] mb-4">How It Works:</h4>
              <div className="space-y-3">
                {lesson.content.howItWorks.map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#F57C00] text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Result */}
            <div className="mb-6 p-6 bg-blue-50 border border-blue-200 rounded-xl">
              <div className="text-sm text-blue-600 uppercase tracking-wider mb-2">The Result</div>
              <p className="text-blue-900 mb-3">{lesson.content.result}</p>
              <div className="flex items-center gap-2 text-blue-700">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm">{lesson.content.metric}</span>
              </div>
            </div>

            {/* Video Explainer */}
            <div className="bg-[#1C1C1C] rounded-xl p-8 text-center">
              <Play className="w-12 h-12 text-[#F57C00] mx-auto mb-4" />
              <h4 className="text-xl text-white mb-2">Watch Video Explanation</h4>
              <p className="text-white/60 text-sm mb-4">3-minute breakdown with real examples</p>
              <button className="text-[#F57C00] hover:text-[#E57000] transition-colors text-sm">
                Coming Soon - Sign up for notifications
              </button>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-[#F5F5F5] rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl text-[#1C1C1C] mb-4">
              Ready to Put This Knowledge to Work?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's build your business transformation strategy together.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#F57C00] hover:bg-[#E57000] text-white px-8 py-4 rounded-lg transition-all"
            >
              Book Free Strategy Session
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
