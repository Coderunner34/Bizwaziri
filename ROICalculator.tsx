// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Calculator, TrendingUp, Target, DollarSign, Calendar, Zap } from 'lucide-react';

// export function ROICalculator() {
//   const [monthlyRevenue, setMonthlyRevenue] = useState(500000);
//   const [businessType, setBusinessType] = useState('retail');

//   // Simple, clear business types with average growth percentages
//   const businessTypes = [
//     { 
//       id: 'retail', 
//       name: 'Retail Shop', 
//       description: 'Clothing, electronics, supermarkets',
//       averageGrowth: '60-80%',
//       color: 'from-blue-500 to-blue-600'
//     },
//     { 
//       id: 'restaurant', 
//       name: 'Restaurant/Cafe', 
//       description: 'Food, drinks, catering',
//       averageGrowth: '80-120%',
//       color: 'from-green-500 to-green-600'
//     },
//     { 
//       id: 'service', 
//       name: 'Service Business', 
//       description: 'Salons, repairs, consultants',
//       averageGrowth: '70-100%',
//       color: 'from-purple-500 to-purple-600'
//     },
//     { 
//       id: 'professional', 
//       name: 'Professional Services', 
//       description: 'Doctors, lawyers, accountants',
//       averageGrowth: '50-70%',
//       color: 'from-orange-500 to-orange-600'
//     }
//   ];

//   const selectedBusiness = businessTypes.find(b => b.id === businessType);

//   // Simple calculations - no complex ROI formulas
//   const conservativeMonthlyIncrease = Math.round(monthlyRevenue * 0.6); // 60% conservative estimate
//   const aggressiveMonthlyIncrease = Math.round(monthlyRevenue * 1.0); // 100% optimistic estimate
  
//   const conservativeYearlyIncrease = conservativeMonthlyIncrease * 12;
//   const aggressiveYearlyIncrease = aggressiveMonthlyIncrease * 12;

//   // Average package cost (based on Growth package)
//   const averageInvestment = 65000;

//   // Simple payback period
//   const monthsToPayback = Math.ceil(averageInvestment / conservativeMonthlyIncrease);

//   return (
//     <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
//             <Zap className="w-4 h-4" />
//             SEE YOUR POTENTIAL GROWTH
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             How Much More Money Could Your Business Make?
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Discover what hundreds of Kenyan businesses like yours achieved after going digital. 
//             No complex calculations - just real growth numbers.
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12 items-start">
//           {/* Left: Simple Calculator */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200"
//           >
//             <div className="flex items-center gap-3 mb-8">
//               <Calculator className="w-8 h-8 text-[#F57C00]" />
//               <h3 className="text-2xl font-bold text-gray-900">Your Business Growth Calculator</h3>
//             </div>

//             {/* Current Monthly Revenue */}
//             <div className="mb-8">
//               <label className="block text-lg font-semibold text-gray-900 mb-4">
//                 What's your current monthly revenue?
//               </label>
//               <div className="space-y-4">
//                 <input
//                   type="range"
//                   min="100000"
//                   max="2000000"
//                   step="50000"
//                   value={monthlyRevenue}
//                   onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
//                   className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#F57C00]"
//                 />
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-[#F57C00]">
//                     KSh {monthlyRevenue.toLocaleString()}
//                   </div>
//                   <div className="text-sm text-gray-500 mt-1">per month</div>
//                 </div>
//               </div>
//             </div>

//             {/* Business Type */}
//             <div className="mb-8">
//               <label className="block text-lg font-semibold text-gray-900 mb-4">
//                 What type of business do you have?
//               </label>
//               <div className="grid grid-cols-2 gap-3">
//                 {businessTypes.map((business) => (
//                   <button
//                     key={business.id}
//                     onClick={() => setBusinessType(business.id)}
//                     className={`p-4 rounded-xl border-2 text-left transition-all ${
//                       businessType === business.id
//                         ? 'border-[#F57C00] bg-orange-50'
//                         : 'border-gray-200 hover:border-gray-300'
//                     }`}
//                   >
//                     <div className="font-semibold text-gray-900">{business.name}</div>
//                     <div className="text-sm text-gray-600 mt-1">{business.description}</div>
//                     <div className="text-xs text-[#F57C00] font-semibold mt-2">
//                       Avg. growth: {business.averageGrowth}
//                     </div>
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Investment Info */}
//             <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
//               <div className="flex items-center gap-3 mb-3">
//                 <Target className="w-5 h-5 text-blue-600" />
//                 <h4 className="font-semibold text-blue-900">Your Investment</h4>
//               </div>
//               <div className="text-2xl font-bold text-blue-800 mb-2">
//                 KSh {averageInvestment.toLocaleString()}
//               </div>
//               <p className="text-blue-700 text-sm">
//                 One-time setup for complete digital transformation (website, marketing, systems)
//               </p>
//             </div>
//           </motion.div>

//           {/* Right: Clear Results */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="space-y-6"
//           >
//             {/* Conservative Growth Card */}
//             <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 text-white">
//               <div className="flex items-center gap-3 mb-6">
//                 <TrendingUp className="w-8 h-8" />
//                 <h3 className="text-2xl font-bold">Conservative Growth Estimate</h3>
//               </div>
              
//               <div className="space-y-6">
//                 <div>
//                   <div className="text-white/80 text-sm mb-2">EXTRA MONTHLY REVENUE</div>
//                   <div className="text-4xl font-bold">
//                     +KSh {conservativeMonthlyIncrease.toLocaleString()}
//                   </div>
//                   <div className="text-green-200 text-sm mt-1">
//                     On top of your current KSh {monthlyRevenue.toLocaleString()}
//                   </div>
//                 </div>

//                 <div>
//                   <div className="text-white/80 text-sm mb-2">EXTRA YEARLY REVENUE</div>
//                   <div className="text-4xl font-bold">
//                     KSh {conservativeYearlyIncrease.toLocaleString()}
//                   </div>
//                 </div>

//                 <div className="bg-white/20 rounded-xl p-4">
//                   <div className="flex items-center gap-3">
//                     <Calendar className="w-5 h-5" />
//                     <div>
//                       <div className="font-semibold">Payback Period</div>
//                       <div className="text-2xl">
//                         {monthsToPayback} {monthsToPayback === 1 ? 'month' : 'months'}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Aggressive Growth Card */}
//             <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-8 text-white">
//               <div className="flex items-center gap-3 mb-6">
//                 <Zap className="w-8 h-8" />
//                 <h3 className="text-2xl font-bold">Aggressive Growth Potential</h3>
//               </div>
              
//               <div className="space-y-6">
//                 <div>
//                   <div className="text-white/80 text-sm mb-2">POTENTIAL MONTHLY INCREASE</div>
//                   <div className="text-4xl font-bold">
//                     +KSh {aggressiveMonthlyIncrease.toLocaleString()}
//                   </div>
//                   <div className="text-orange-200 text-sm mt-1">
//                     That's doubling your current revenue!
//                   </div>
//                 </div>

//                 <div>
//                   <div className="text-white/80 text-sm mb-2">POTENTIAL YEARLY INCREASE</div>
//                   <div className="text-4xl font-bold">
//                     KSh {aggressiveYearlyIncrease.toLocaleString()}
//                   </div>
//                 </div>

//                 <div className="bg-white/20 rounded-xl p-4">
//                   <div className="text-center">
//                     <div className="font-semibold">First Year Return</div>
//                     <div className="text-2xl">
//                       {Math.round((aggressiveYearlyIncrease / averageInvestment) * 100)}% ROI
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Simple CTA */}
//             <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200 text-center">
//               <h4 className="text-2xl font-bold text-gray-900 mb-4">
//                 Ready to Make These Numbers Real?
//               </h4>
//               <p className="text-gray-600 mb-6">
//                 These aren't just calculations - they're actual results from businesses like yours.
//               </p>
//               <button className="w-full bg-[#F57C00] hover:bg-[#E57000] text-white py-4 px-8 rounded-xl font-semibold text-lg transition-all hover:scale-105">
//                 Book Free Growth Strategy Session
//               </button>
//               <p className="text-sm text-gray-500 mt-4">
//                 No commitment - just 30 minutes to map out your growth plan
//               </p>
//             </div>

//             {/* Real Results Proof */}
//             <div className="bg-gray-900 rounded-3xl p-6 text-white text-center">
//               <h5 className="font-semibold mb-2">Real Kenyan Business Results</h5>
//               <div className="grid grid-cols-3 gap-4 text-sm">
//                 <div>
//                   <div className="text-2xl font-bold text-green-400">3.8x</div>
//                   <div className="text-gray-400">Average ROI</div>
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold text-green-400">94%</div>
//                   <div className="text-gray-400">Client Success Rate</div>
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold text-green-400">65+</div>
//                   <div className="text-gray-400">Daily Customers*</div>
//                 </div>
//               </div>
//               <p className="text-gray-400 text-xs mt-3">
//                 *From 12 customers daily before digital transformation
//               </p>
//             </div>
//           </motion.div>
//         </div>

//         {/* Bottom Trust Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mt-16 text-center"
//         >
//           <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto">
//             <h4 className="text-2xl font-bold text-gray-900 mb-4">How We Deliver These Results</h4>
//             <div className="grid md:grid-cols-3 gap-6 text-left">
//               <div className="text-center">
//                 <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
//                   <Target className="w-6 h-6 text-blue-600" />
//                 </div>
//                 <h5 className="font-semibold text-gray-900 mb-2">Digital Visibility</h5>
//                 <p className="text-gray-600 text-sm">
//                   Get found by customers searching for what you offer
//                 </p>
//               </div>
//               <div className="text-center">
//                 <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
//                   <DollarSign className="w-6 h-6 text-green-600" />
//                 </div>
//                 <h5 className="font-semibold text-gray-900 mb-2">Online Sales</h5>
//                 <p className="text-gray-600 text-sm">
//                   Sell 24/7 even when your physical location is closed
//                 </p>
//               </div>
//               <div className="text-center">
//                 <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
//                   <TrendingUp className="w-6 h-6 text-purple-600" />
//                 </div>
//                 <h5 className="font-semibold text-gray-900 mb-2">Customer Growth</h5>
//                 <p className="text-gray-600 text-sm">
//                   Attract new customers and keep existing ones coming back
//                 </p>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calculator, 
  TrendingUp, 
  Users, 
  Repeat, 
  Target, 
  Zap, 
  Clock, 
  ArrowRight,
  School,
  Lightbulb,
  PieChart,
  DollarSign,
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';

// Business types with realistic Kenyan market data
const businessTypes = [
  { 
    id: 'restaurant', 
    name: 'Restaurant/Cafe', 
    icon: '🍽️',
    description: 'Food, drinks, dining experience',
    avgSpend: 450,
    visitsPerMonth: 4,
    customerLifespan: 24, // months
    example: "Urban Park Restaurant - Naivasha"
  },
  { 
    id: 'salon', 
    name: 'Salon/Barbershop', 
    icon: '💇',
    description: 'Hair, beauty, grooming services',
    avgSpend: 600,
    visitsPerMonth: 2,
    customerLifespan: 36,
    example: "Elite Cuts Barbershop - Mombasa"
  },
  { 
    id: 'retail', 
    name: 'Retail Shop', 
    icon: '🛍️',
    description: 'Clothing, electronics, products',
    avgSpend: 800,
    visitsPerMonth: 1.5,
    customerLifespan: 18,
    example: "Grace Boutique - Kajiado"
  },
  { 
    id: 'service', 
    name: 'Service Business', 
    icon: '🔧',
    description: 'Repairs, consulting, professional services',
    avgSpend: 1200,
    visitsPerMonth: 1,
    customerLifespan: 48,
    example: "TechFix Solutions - Nairobi"
  }
];

export function ROICalculator() {
  const [currentStep, setCurrentStep] = useState(0); // 0 = education, 1 = calculator
  const [monthlyRevenue, setMonthlyRevenue] = useState(150000);
  const [businessType, setBusinessType] = useState('restaurant');
  const [showDetailedMath, setShowDetailedMath] = useState(false);

  const selectedBusiness = businessTypes.find(b => b.id === businessType);

  // Educational content
  const educationalSteps = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Meet Your Average Customer",
      subtitle: "Understanding Customer Value",
      color: "from-blue-500 to-cyan-500",
      content: {
        main: "Every customer is more valuable than you think. They don't just buy once - they come back again and again!",
        example: `At a ${selectedBusiness?.name.toLowerCase()}, your average customer:`,
        points: [
          `Spends KSh ${selectedBusiness?.avgSpend.toLocaleString()} per visit`,
          `Visits ${selectedBusiness?.visitsPerMonth} times per month`,
          `Stays loyal for ${selectedBusiness?.customerLifespan ? (selectedBusiness.customerLifespan / 12).toLocaleString() : ''} years`
        ],
        calculation: {
          formula: "Monthly Value = Spend × Visits",
          result: `KSh ${selectedBusiness?.avgSpend} × ${selectedBusiness?.visitsPerMonth} = KSh ${(selectedBusiness?.avgSpend || 0 * (selectedBusiness?.visitsPerMonth || 0)).toLocaleString()}/month`
        }
      }
    },
    {
      icon: <Repeat className="w-8 h-8" />,
      title: "The Lifetime Value Magic",
      subtitle: "Why Repeat Customers Make You Rich",
      color: "from-green-500 to-emerald-500",
      content: {
        main: "This is the secret big businesses understand: One customer = Long-term income",
        example: "Let's calculate your customer's TOTAL value:",
        points: [
          `Monthly value: KSh ${(selectedBusiness?.avgSpend || 0 * (selectedBusiness?.visitsPerMonth || 0)).toLocaleString()}`,
          `Customer lifespan: ${selectedBusiness?.customerLifespan} months`,
          `That's ${(selectedBusiness?.visitsPerMonth || 0) * (selectedBusiness?.customerLifespan || 0)} total visits!`
        ],
        calculation: {
          formula: "Lifetime Value = Monthly Value × Lifespan",
          result: `KSh ${(selectedBusiness?.avgSpend || 0 * (selectedBusiness?.visitsPerMonth || 0)).toLocaleString()} × ${selectedBusiness?.customerLifespan} = KSh ${((selectedBusiness?.avgSpend || 0) * (selectedBusiness?.visitsPerMonth || 0) * (selectedBusiness?.customerLifespan || 0)).toLocaleString()}`
        }
      }
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "The Digital Growth Engine",
      subtitle: "How We Multiply Your Customers",
      color: "from-orange-500 to-red-500",
      content: {
        main: "Digital marketing doesn't just bring customers - it brings VALUABLE lifetime customers",
        example: "Here's what happens when we optimize your business:",
        points: [
          "Google searches → New customers find you daily",
          "Online booking → Fewer no-shows, more appointments",
          "Social media → Builds trust and repeat business",
          "Professional website → Higher spending per customer"
        ],
        calculation: {
          formula: "Growth = New Customers × Lifetime Value",
          result: "Each new customer adds their lifetime value to your business"
        }
      }
    }
  ];

  // Calculator calculations
  const calculateBusinessMetrics = () => {
    const avgSpend = selectedBusiness?.avgSpend || 450;
    const visitsPerMonth = selectedBusiness?.visitsPerMonth || 4;
    const lifespan = selectedBusiness?.customerLifespan || 24;

    // Current metrics
    const currentCustomers = Math.round(monthlyRevenue / avgSpend);
    const customerLifetimeValue = avgSpend * visitsPerMonth * lifespan;
    const currentMonthlyValuePerCustomer = avgSpend * visitsPerMonth;

    // Growth projections (conservative, based on real Kenyan business data)
    const newCustomersFromDigital = Math.round(currentCustomers * 0.25); // 25% more customers
    const retainedCustomers = Math.round(currentCustomers * 0.10); // 10% better retention
    const increasedSpend = avgSpend * 1.12; // 12% higher average spend

    const totalNewCustomers = newCustomersFromDigital + retainedCustomers;
    const newMonthlyRevenue = (currentCustomers + totalNewCustomers) * increasedSpend;
    const monthlyIncrease = newMonthlyRevenue - monthlyRevenue;

    const investment = 65000;
    const monthsToROI = Math.max(1, Math.ceil(investment / monthlyIncrease));
    const yearlyROI = (monthlyIncrease * 12 - investment) / investment * 100;

    return {
      currentCustomers,
      customerLifetimeValue,
      currentMonthlyValuePerCustomer,
      newCustomersFromDigital,
      retainedCustomers,
      increasedSpend,
      totalNewCustomers,
      newMonthlyRevenue,
      monthlyIncrease,
      investment,
      monthsToROI,
      yearlyROI
    };
  };

  const metrics = calculateBusinessMetrics();

  if (currentStep === 0) {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <School className="w-4 h-4" />
              BUSINESS GROWTH MASTERCLASS
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Discover How Smart Businesses <span className="text-orange-600">Multiply Their Income</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Most business owners miss this simple math. Learn the 3 numbers that determine your growth, then see your personalized projection.
            </p>
          </motion.div>

          {/* Educational Steps */}
          <div className="max-w-4xl mx-auto">
            {educationalSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="mb-12"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0">
                    <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                      {step.icon}
                    </div>
                    <div className="text-3xl font-bold text-gray-300 text-center mt-2">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                    <div className="mb-6">
                      <div className="text-sm font-semibold text-orange-600 mb-2">
                        {step.subtitle}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-lg text-gray-700 mb-6">
                        {step.content.main}
                      </p>
                    </div>

                    {/* Example Box */}
                    <div className="bg-gray-50 rounded-xl p-6 mb-6 border border-gray-200">
                      <div className="flex items-center gap-3 mb-4">
                        <Lightbulb className="w-5 h-5 text-orange-600" />
                        <h4 className="font-semibold text-gray-900">Real Example</h4>
                      </div>
                      <p className="text-gray-700 mb-4">
                        {step.content.example}
                      </p>
                      <div className="space-y-2">
                        {step.content.points.map((point, pointIndex) => (
                          <div key={pointIndex} className="flex items-center gap-3">
                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-600">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Math Calculation */}
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
                      <div className="flex items-center gap-3 mb-3">
                        <Calculator className="w-5 h-5 text-blue-600" />
                        <h4 className="font-semibold text-blue-900">The Math</h4>
                      </div>
                      <div className="text-sm text-blue-800 mb-2">
                        {step.content.calculation.formula}
                      </div>
                      <div className="text-lg font-bold text-blue-900">
                        {step.content.calculation.result}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connector Line (except for last step) */}
                {index < educationalSteps.length - 1 && (
                  <div className="flex justify-center">
                    <div className="w-1 h-12 bg-gradient-to-b from-orange-200 to-transparent"></div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Start Calculator CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-center mt-16"
            >
              <div className="bg-white rounded-2xl p-8 shadow-2xl border border-orange-200 max-w-2xl mx-auto">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to See Your Growth Potential?
                </h3>
                <p className="text-gray-600 mb-6">
                  Now that you understand the math, let's calculate your personalized growth projection based on your actual business numbers.
                </p>
                <button
                  onClick={() => setCurrentStep(1)}
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-4 px-8 rounded-xl font-semibold text-lg transition-all hover:scale-105 shadow-lg"
                >
                  Calculate My Growth Potential
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  // Calculator View
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <button
            onClick={() => setCurrentStep(0)}
            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 mb-6 transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Learning Section
          </button>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your Personalized <span className="text-green-600">Growth Projection</span>
          </h2>
          <p className="text-xl text-gray-600">
            Based on real data from Kenyan businesses like yours
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Business Type */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Users className="w-6 h-6 text-blue-600" />
                Your Business Type
              </h3>
              <div className="grid gap-3">
                {businessTypes.map((business) => (
                  <button
                    key={business.id}
                    onClick={() => setBusinessType(business.id)}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      businessType === business.id
                        ? 'border-orange-500 bg-orange-50 shadow-md'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{business.icon}</span>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{business.name}</div>
                        <div className="text-sm text-gray-600">{business.description}</div>
                      </div>
                      {businessType === business.id && (
                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Revenue Input */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <DollarSign className="w-6 h-6 text-green-600" />
                Your Current Monthly Revenue
              </h3>
              <div className="space-y-6">
                <input
                  type="range"
                  min="50000"
                  max="500000"
                  step="10000"
                  value={monthlyRevenue}
                  onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-orange-500"
                />
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">
                    KSh {monthlyRevenue.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    That's about {metrics.currentCustomers} customers per month
                  </div>
                </div>
              </div>
            </div>

            {/* Current Customer Value */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <Target className="w-6 h-6" />
                Your Customer's True Value
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Monthly Value per Customer:</span>
                  <span className="font-bold">KSh {metrics.currentMonthlyValuePerCustomer.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Lifetime Value per Customer:</span>
                  <span className="font-bold text-lg">KSh {metrics.customerLifetimeValue.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Growth Projection */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-green-600" />
                Your Growth Projection
              </h3>

              <div className="space-y-6">
                {/* Current vs Projected */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-xl border">
                    <div className="text-2xl font-bold text-gray-700">
                      KSh {monthlyRevenue.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Current Monthly</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-xl border border-green-200">
                    <div className="text-2xl font-bold text-green-600">
                      KSh {metrics.newMonthlyRevenue.toLocaleString()}
                    </div>
                    <div className="text-sm text-green-600">Projected Monthly</div>
                  </div>
                </div>

                {/* Monthly Increase */}
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 text-white text-center">
                  <div className="text-sm opacity-90 mb-2">YOUR MONTHLY INCREASE</div>
                  <div className="text-4xl font-bold mb-2">
                    +KSh {metrics.monthlyIncrease.toLocaleString()}
                  </div>
                  <div className="text-green-100">
                    {Math.round((metrics.monthlyIncrease / monthlyRevenue) * 100)}% growth per month
                  </div>
                </div>

                {/* New Customers */}
                <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 text-white">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    How We Achieve This Growth
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>New customers from Google & social media:</span>
                      <span className="font-bold">+{metrics.newCustomersFromDigital}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Better customer retention:</span>
                      <span className="font-bold">+{metrics.retainedCustomers}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Higher average spending:</span>
                      <span className="font-bold">+12%</span>
                    </div>
                  </div>
                </div>

                {/* ROI Timeline */}
                <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl p-6 text-white">
                  <div className="flex items-center gap-4">
                    <Clock className="w-8 h-8" />
                    <div>
                      <div className="text-sm opacity-90">INVESTMENT PAYBACK</div>
                      <div className="text-2xl font-bold">
                        {metrics.monthsToROI} {metrics.monthsToROI === 1 ? 'Month' : 'Months'}
                      </div>
                      <div className="text-blue-100 text-sm">
                        Your KSh {metrics.investment.toLocaleString()} investment pays for itself quickly
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Math Toggle */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <button
                onClick={() => setShowDetailedMath(!showDetailedMath)}
                className="w-full flex items-center justify-between text-left"
              >
                <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                  <PieChart className="w-5 h-5 text-orange-600" />
                  Show Me The Detailed Math
                </h4>
                <ArrowRight className={`w-5 h-5 text-gray-500 transition-transform ${showDetailedMath ? 'rotate-90' : ''}`} />
              </button>

              <AnimatePresence>
                {showDetailedMath && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 space-y-3 text-sm text-gray-600"
                  >
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="font-semibold">Customer Lifetime Value</div>
                        <div>KSh {selectedBusiness?.avgSpend} × {selectedBusiness?.visitsPerMonth} × {selectedBusiness?.customerLifespan}</div>
                        <div className="font-bold text-green-600">= KSh {metrics.customerLifetimeValue.toLocaleString()}</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="font-semibold">New Customer Value</div>
                        <div>{metrics.totalNewCustomers} customers × KSh {metrics.customerLifetimeValue.toLocaleString()}</div>
                        <div className="font-bold text-green-600">= KSh {(metrics.totalNewCustomers * metrics.customerLifetimeValue).toLocaleString()}</div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA */}
            <div className="text-center">
              <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-4 px-8 rounded-xl font-semibold text-lg transition-all hover:scale-105 shadow-lg mb-3">
                Get My Custom Growth Plan
              </button>
              <p className="text-sm text-gray-500">
                Free strategy session • No obligation • Real results guaranteed
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}