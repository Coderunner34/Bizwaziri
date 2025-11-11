import { Check, Star, Calendar, Zap, Crown, Rocket, Target, Users, TrendingUp, Shield, Clock, MessageCircle } from 'lucide-react';

interface ServicesAndPricingProps {
  onBookingClick: () => void;
}

export function ServicesAndPricing({ onBookingClick }: ServicesAndPricingProps) {
  const packages = [
    {
      name: 'STARTER',
      subtitle: 'Digital Foundation',
      price: 'Ksh 25,000',
      type: 'one-time',
      popular: false,
      description: 'Perfect for new businesses or those starting their digital journey',
      bestFor: 'Startups, Small Shops, Freelancers',
      timeline: '3-5 days',
      features: [
        'Professional 5-Page Website (Mobile Optimized)',
        'Google Business Profile Setup & Verification',
        'Basic SEO Foundation (5 Keywords)',
        'Social Media Setup (Facebook + Instagram)',
        'WhatsApp Business Integration',
        'Contact Form & Basic Analytics',
        '1-Hour Training Session',
        '15 Days Post-Launch Support',
        'SSL Security Certificate',
        'Basic Brand Style Guide'
      ],
      cta: 'Start Digital Journey',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'GROWTH',
      subtitle: 'Customer Acquisition',
      price: 'Ksh 65,000',
      type: 'one-time',
      popular: true,
      description: 'Complete digital presence designed to attract and convert customers',
      bestFor: 'Established SMEs, Retailers, Service Businesses',
      timeline: '7-10 days',
      features: [
        'Everything in Starter PLUS:',
        'Advanced 8-Page Website with Booking System',
        'E-commerce Functionality (Up to 50 Products)',
        'Complete SEO Strategy (15 Keywords)',
        'Social Media Content (10 Premium Posts)',
        'Email Marketing System Setup',
        'Google Ads Campaign Setup',
        'Competitor Analysis Report',
        '2 Hours Team Training',
        '30 Days Priority Support',
        'Monthly Performance Dashboard',
        'Basic Logo Design Included'
      ],
      cta: 'Accelerate Growth',
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'PREMIUM',
      subtitle: 'Market Leadership',
      price: 'Ksh 120,000',
      type: 'one-time',
      popular: false,
      description: 'Comprehensive digital transformation for serious market players',
      bestFor: 'Growing Companies, Chains, Professional Services',
      timeline: '10-14 days',
      features: [
        'Everything in Growth PLUS:',
        'Custom Website with Advanced Functionality',
        'Full E-commerce with Inventory Management',
        'Comprehensive SEO (30 Keywords + Local SEO)',
        'Social Media Management (20 Premium Posts)',
        'Content Marketing Strategy',
        'Google & Facebook Ads Management',
        'CRM System Integration',
        'Advanced Analytics & Reporting',
        '4 Hours Team Training',
        '60 Days Premium Support',
        'Professional Logo & Brand Identity',
        'Professional Business Photography (1 Session)',
        'Video Commercial (1 Minute)'
      ],
      cta: 'Dominate Market',
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'ENTERPRISE',
      subtitle: 'Digital Transformation',
      price: 'Custom',
      type: 'custom',
      popular: false,
      description: 'Complete business digitalization for large organizations',
      bestFor: 'Corporates, Schools, Hospitals, Large Chains',
      timeline: '15-30 days',
      features: [
        'Everything in Premium PLUS:',
        'Multi-page Custom Website with Admin Panel',
        'Advanced E-commerce with Multiple Payment Options',
        'Enterprise SEO Strategy',
        'Dedicated Social Media Manager',
        'Content Creation Team',
        'Multi-platform Advertising Management',
        'Custom CRM Development',
        'Data Analytics & Business Intelligence',
        'Staff Training Program',
        '6 Months Premium Support',
        'Complete Brand Identity System',
        'Professional Video Production',
        'Mobile App Development',
        'Ongoing Strategy Sessions'
      ],
      cta: 'Schedule Strategy Call',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const monthlyServices = [
    {
      name: 'ESSENTIAL CARE',
      price: 'Ksh 8,000',
      period: '/month',
      description: 'Keep your digital presence active and optimized',
      features: [
        'Website Maintenance & Updates',
        'Basic SEO Optimization',
        'Social Media (8 Posts/Month)',
        'Monthly Performance Report',
        '2 Hours Support/Month',
        'Email Support'
      ]
    },
    {
      name: 'GROWTH ACCELERATOR',
      price: 'Ksh 15,000',
      period: '/month',
      description: 'Active growth and customer acquisition',
      features: [
        'Everything in Essential PLUS:',
        'Advanced SEO Strategy',
        'Social Media (16 Posts/Month)',
        'Content Creation (2 Articles/Month)',
        'Google Ads Management',
        'Weekly Performance Updates',
        '4 Hours Support/Month',
        'Phone & WhatsApp Support'
      ]
    },
    {
      name: 'MARKET LEADER',
      price: 'Ksh 25,000',
      period: '/month',
      description: 'Complete digital marketing management',
      features: [
        'Everything in Growth PLUS:',
        'Comprehensive SEO & Content Strategy',
        'Social Media (24 Posts/Month)',
        'Content Creation (4 Articles/Month)',
        'Multi-platform Ad Management',
        'Competitor Analysis',
        'Monthly Strategy Sessions',
        'Unlimited Support',
        'Dedicated Account Manager'
      ]
    }
  ];

  const addOnServices = [
    {
      category: 'BRANDING & DESIGN',
      services: [
        { name: 'Professional Logo Design', price: 'Ksh 7,000' },
        { name: 'Complete Brand Identity', price: 'Ksh 20,000' },
        { name: 'Marketing Material Design', price: 'Ksh 5,000' },
        { name: 'Product Packaging Design', price: 'Ksh 15,000' }
      ]
    },
    {
      category: 'CONTENT CREATION',
      services: [
        { name: 'Professional Business Photography', price: 'Ksh 12,000' },
        { name: 'Product Photography (10 products)', price: 'Ksh 8,000' },
        { name: 'Video Commercial (1 minute)', price: 'Ksh 25,000' },
        { name: 'Social Media Video (30 seconds)', price: 'Ksh 8,000' }
      ]
    },
    {
      category: 'DIGITAL MARKETING',
      services: [
        { name: 'Google Ads Setup & Management', price: 'Ksh 5,000 + ad spend' },
        { name: 'Social Media Ads Management', price: 'Ksh 8,000 + ad spend' },
        { name: 'Email Marketing Campaign', price: 'Ksh 6,000' },
        { name: 'Influencer Marketing Setup', price: 'Ksh 10,000' }
      ]
    },
    {
      category: 'BUSINESS SYSTEMS',
      services: [
        { name: 'POS System Integration', price: 'Ksh 15,000' },
        { name: 'Booking System Development', price: 'Ksh 12,000' },
        { name: 'Inventory Management System', price: 'Ksh 18,000' },
        { name: 'Custom CRM Development', price: 'Ksh 25,000' }
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Complete Digital Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From startup to enterprise - professional packages designed for every stage of your business growth
          </p>
        </div>

        {/* Main Packages */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">One-Time Setup Packages</h3>
            <p className="text-gray-600">Complete digital foundation for immediate impact</p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 ${
                pkg.popular ? 'ring-2 ring-green-500 shadow-2xl' : 'shadow-xl'
              }`}>
                
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center gap-2">
                      <Star className="w-4 h-4" fill="currentColor" />
                      <span className="text-sm font-semibold">MOST POPULAR</span>
                    </div>
                  </div>
                )}

                {/* Package Header */}
                <div className={`bg-gradient-to-r ${pkg.color} p-6 text-white`}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-2xl font-bold">{pkg.name}</h4>
                      <p className="text-white/80 text-sm">{pkg.subtitle}</p>
                    </div>
                    {pkg.popular && <Crown className="w-6 h-6" />}
                  </div>
                  <div className="mt-4">
                    <div className="text-3xl font-bold">{pkg.price}</div>
                    <div className="text-white/70 text-sm">{pkg.type === 'custom' ? 'Tailored Quote' : 'One-Time Investment'}</div>
                  </div>
                </div>

                {/* Package Body */}
                <div className="bg-white p-6">
                  <div className="mb-4">
                    <p className="text-gray-600 text-sm mb-2">{pkg.description}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>Timeline: {pkg.timeline}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                      <Users className="w-4 h-4" />
                      <span>Best for: {pkg.bestFor}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={onBookingClick}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                      pkg.popular 
                        ? 'bg-green-500 hover:bg-green-600 text-white' 
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }`}
                  >
                    {pkg.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">Ongoing Growth Services</h3>
            <p className="text-gray-600">Monthly packages to maintain and accelerate your growth</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {monthlyServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h4>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-4xl font-bold text-gray-900">{service.price}</span>
                    <span className="text-gray-600">{service.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={onBookingClick}
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                >
                  Start Growing
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Add-On Services */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">Specialized Add-On Services</h3>
            <p className="text-gray-600">Enhance your package with specialized services</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {addOnServices.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <h4 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  {category.category}
                </h4>
                <div className="space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="text-gray-700 text-sm">{service.name}</span>
                      <span className="text-green-600 font-semibold text-sm">{service.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl mb-8 opacity-90">
              Let's build your complete digital success story together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onBookingClick}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book Free Strategy Session
              </button>
             

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}