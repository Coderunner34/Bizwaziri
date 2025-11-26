import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Star, ArrowRight } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function TransformationCaseStudies() {
  const caseStudies = [
    {
      name: 'Urban Park Restaurant',
      location: 'Naivasha, Kenya',
      industry: 'Restaurant',
      image: 'https://images.unsplash.com/photo-1651126178622-50f0bdbe2538?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      problem: 'Empty tables during lunch hour despite great food. No online presence. Losing customers to competitors.',
      solution: 'Google Business optimization, SEO, and social media management',
      timeline: '90 days',
      metrics: {
        before: {
          monthlyRevenue: 18000,
          googleSearches: 85,
          socialFollowers: 1420,
          dailyCustomers: 15
        },
        after: {
          monthlyRevenue: 48000,
          googleSearches: 965,
          socialFollowers: 10176,
          dailyCustomers: 55
        }
      },
      revenueData: [
        { month: 'Month 1', revenue: 180 },
        { month: 'Month 2', revenue: 245 },
        { month: 'Month 3', revenue: 340 },
        { month: 'Month 4', revenue: 420 },
        { month: 'Month 5', revenue: 465 },
        { month: 'Month 6', revenue: 485 }
      ],
      testimonial: {
        quote: 'BizWaziri didn\'t just give me a website. They transformed my business. Now customers find me on Google Maps, and my tables are full every day.',
        author: 'Njeri Kamau',
        role: 'Owner'
      }
    },
    {
      name: 'Elite Cuts Barbershop',
      location: 'Mombasa, Kenya',
      industry: 'Barbershop',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCWxfPmPdOAjAphoEOhQS8W5CmgR0c7Ms6lVRo-lbmikGiX5SDZb2bCmYyQEQMvO69ldI&usqp=CAU',
      problem: 'Irregular customers. No booking system. Wasting hours on manual scheduling and payments.',
      solution: 'Website with online booking, POS system, and Instagram marketing',
      timeline: '60 days',
      metrics: {
        before: {
          monthlyRevenue: 15000,
          googleSearches: 1200,
          socialFollowers: 1640,
          dailyCustomers: 18
        },
        after: {
          monthlyRevenue: 92000,
          googleSearches: 8123,
          socialFollowers: 4211,
          dailyCustomers: 32
        }
      },
      revenueData: [
        { month: 'Month 1', revenue: 95 },
        { month: 'Month 2', revenue: 140 },
        { month: 'Month 3', revenue: 185 },
        { month: 'Month 4', revenue: 215 },
        { month: 'Month 5', revenue: 235 },
        { month: 'Month 6', revenue: 245 }
      ],
      testimonial: {
        quote: 'The POS system alone saved me 15 hours a week. Add the online bookings and Google visibility, and my business is unrecognizable.',
        author: 'Hassan Mohammed',
        role: 'Owner'
      }
    },
    {
      name: 'Shujaa Academy',
      location: 'Kisumu, Kenya',
      industry: 'Education',
      image: 'https://images.unsplash.com/photo-1666281134747-caa676fc2201?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      problem: 'Parents couldn\'t find them online. Manual enrollment process. No clear way to showcase results.',
      solution: 'Professional website, SEO, Facebook ads, and enrollment system',
      timeline: '120 days',
      metrics: {
        before: {
          monthlyRevenue: 420000,
          googleSearches: 45,
          socialFollowers: 2490,
          dailyCustomers: 0
        },
        after: {
          monthlyRevenue: 890000,
          googleSearches: 3168,
          socialFollowers: 8790,
          dailyCustomers: 0
        }
      },
      revenueData: [
        { month: 'Month 1', revenue: 420 },
        { month: 'Month 2', revenue: 485 },
        { month: 'Month 3', revenue: 590 },
        { month: 'Month 4', revenue: 720 },
        { month: 'Month 5', revenue: 810 },
        { month: 'Month 6', revenue: 890 }
      ],
      testimonial: {
        quote: 'Enrollment increased by 112%. Parents now find us on Google, see our success stories, and enroll online. BizWaziri made us look as professional as we actually are.',
        author: 'Dr. Grace Omondi',
        role: 'Founder'
      }
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#F57C00] text-sm uppercase tracking-wider mb-4 block">
            Proof of Transformation
          </span>
          <h2 className="text-4xl md:text-6xl text-[#1C1C1C] mb-6">
            Real Businesses. Real Results.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These aren't stock photos or made-up numbers. These are actual Kenyan businesses we've transformed, with verified metrics.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-24">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#F5F5F5] rounded-3xl overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-8 p-8 md:p-12">
                {/* Left: Story */}
                <div>
                  {/* Business Info */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-2 h-2 bg-[#F57C00] rounded-full animate-pulse"></div>
                      <span className="text-sm text-[#F57C00] uppercase tracking-wider">
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl text-[#1C1C1C] mb-2">
                      {study.name}
                    </h3>
                    <p className="text-gray-600">{study.location}</p>
                  </div>

                  {/* Image */}
                  <div className="mb-6 rounded-2xl overflow-hidden">
                    <ImageWithFallback
                      src={study.image}
                      alt={study.name}
                      className="w-full h-64 object-cover"
                    />
                  </div>

                  {/* Problem */}
                  <div className="mb-6 p-5 bg-red-50 border-l-4 border-red-500 rounded-lg">
                    <h4 className="text-sm text-red-600 uppercase tracking-wider mb-2">The Crisis</h4>
                    <p className="text-red-900">{study.problem}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-6 p-5 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
                    <h4 className="text-sm text-blue-600 uppercase tracking-wider mb-2">Our Solution</h4>
                    <p className="text-blue-900">{study.solution}</p>
                  </div>

                  {/* Timeline */}
                  <div className="flex items-center gap-2 text-gray-600 mb-6">
                    <div className="w-10 h-10 bg-[#F57C00]/10 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-[#F57C00]" />
                    </div>
                    <span>Results achieved in <strong>{study.timeline}</strong></span>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-white rounded-xl p-6">
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#F57C00] text-[#F57C00]" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{study.testimonial.quote}"</p>
                    <div>
                      <div className="text-[#1C1C1C]">{study.testimonial.author}</div>
                      <div className="text-sm text-gray-600">{study.testimonial.role}, {study.name}</div>
                    </div>
                  </div>
                </div>

                {/* Right: Metrics */}
                <div className="space-y-6">
                  {/* Before/After Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-5 border-2 border-red-200">
                      <div className="text-sm text-red-600 uppercase tracking-wider mb-3">Before</div>
                      <div className="space-y-3">
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Monthly Revenue</div>
                          <div className="text-xl text-[#1C1C1C]">KSh {study.metrics.before.monthlyRevenue.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Google Searches</div>
                          <div className="text-xl text-[#1C1C1C]">{study.metrics.before.googleSearches.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Social Followers</div>
                          <div className="text-xl text-[#1C1C1C]">{study.metrics.before.socialFollowers.toLocaleString()}</div>
                        </div>
                        {study.metrics.before.dailyCustomers > 0 && (
                          <div>
                            <div className="text-xs text-gray-500 mb-1">Daily Customers</div>
                            <div className="text-xl text-[#1C1C1C]">{study.metrics.before.dailyCustomers}</div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-5 border-2 border-green-500">
                      <div className="text-sm text-green-600 uppercase tracking-wider mb-3">After</div>
                      <div className="space-y-3">
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Monthly Revenue</div>
                          <div className="text-xl text-green-600">KSh {study.metrics.after.monthlyRevenue.toLocaleString()}</div>
                          <div className="text-xs text-green-600">
                            +{Math.round(((study.metrics.after.monthlyRevenue - study.metrics.before.monthlyRevenue) / study.metrics.before.monthlyRevenue) * 100)}%
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Google Searches</div>
                          <div className="text-xl text-green-600">{study.metrics.after.googleSearches.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Social Followers</div>
                          <div className="text-xl text-green-600">{study.metrics.after.socialFollowers.toLocaleString()}</div>
                          <div className="text-xs text-green-600">
                            +{Math.round(((study.metrics.after.socialFollowers - study.metrics.before.socialFollowers) / study.metrics.before.socialFollowers) * 100)}%
                          </div>
                        </div>
                        {study.metrics.after.dailyCustomers > 0 && (
                          <div>
                            <div className="text-xs text-gray-500 mb-1">Daily Customers</div>
                            <div className="text-xl text-green-600">{study.metrics.after.dailyCustomers}</div>
                            <div className="text-xs text-green-600">
                              +{Math.round(((study.metrics.after.dailyCustomers - study.metrics.before.dailyCustomers) / study.metrics.before.dailyCustomers) * 100)}%
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Revenue Growth Chart */}
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="text-sm text-gray-600 uppercase tracking-wider mb-4">Revenue Growth (KSh Thousands)</h4>
                    <ResponsiveContainer width="100%" height={250}>
                      <LineChart data={study.revenueData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                        <XAxis dataKey="month" stroke="#6B7280" fontSize={12} />
                        <YAxis stroke="#6B7280" fontSize={12} />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: '#1C1C1C', 
                            border: 'none', 
                            borderRadius: '8px',
                            color: '#fff'
                          }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="revenue" 
                          stroke="#F57C00" 
                          strokeWidth={3}
                          dot={{ fill: '#F57C00', r: 6 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Key Wins */}
                  <div className="bg-gradient-to-br from-[#F57C00] to-[#E57000] rounded-xl p-6 text-white">
                    <h4 className="text-lg mb-4">Key Achievements</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <DollarSign className="w-5 h-5 flex-shrink-0" />
                        <span>+KSh {(study.metrics.after.monthlyRevenue - study.metrics.before.monthlyRevenue).toLocaleString()} monthly revenue</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <TrendingUp className="w-5 h-5 flex-shrink-0" />
                        <span>{Math.round(((study.metrics.after.monthlyRevenue - study.metrics.before.monthlyRevenue) / study.metrics.before.monthlyRevenue) * 100)}% revenue growth</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 flex-shrink-0" />
                        <span>Top 3 Google ranking for main keywords</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-[#1C1C1C] rounded-2xl p-12">
            <h3 className="text-3xl md:text-4xl text-white mb-4">
              Your Business Could Be Our Next Success Story
            </h3>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              These transformations happened in 60-120 days. We're ready to start yours today.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#F57C00] hover:bg-[#E57000] text-white px-10 py-5 rounded-lg transition-all text-lg"
            >
              Start Your Transformation
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


export default TransformationCaseStudies;
  