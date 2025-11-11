import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, AlertCircle } from 'lucide-react';

export function ROICalculator() {
  const [monthlyRevenue, setMonthlyRevenue] = useState(100000);
  const [currentVisibility, setCurrentVisibility] = useState(20);
  const [industry, setIndustry] = useState('retail');

  const industryMultipliers: Record<string, number> = {
    retail: 1.8,
    restaurant: 2.2,
    salon: 2.0,
    education: 1.5,
    professional: 1.6,
    other: 1.7
  };

  const multiplier = industryMultipliers[industry];
  
  // Calculations
  const potentialRevenueIncrease = Math.round(monthlyRevenue * (multiplier - 1));
  const annualIncrease = potentialRevenueIncrease * 12;
  const investmentRequired = 45000; // Average package cost
  const monthsToROI = Math.ceil(investmentRequired / potentialRevenueIncrease);
  const firstYearROI = Math.round(((annualIncrease - investmentRequired) / investmentRequired) * 100);
  
  // What you're losing monthly
  const monthlyLoss = Math.round(monthlyRevenue * ((100 - currentVisibility) / 100) * 0.3);

  return (
    <section className="py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Calculator */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#F57C00] text-sm uppercase tracking-wider mb-4 block">
              See Your Potential
            </span>
            <h2 className="text-4xl md:text-5xl text-[#1C1C1C] mb-6">
              Calculate What You're Losing Every Month
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              See exactly how much revenue your business could be generating with proper digital visibility.
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              {/* Monthly Revenue Input */}
              <div className="mb-6">
                <label className="block text-sm text-gray-600 mb-2">
                  Current Monthly Revenue
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-lg">KSh</span>
                  <input
                    type="range"
                    min="50000"
                    max="5000000"
                    step="10000"
                    value={monthlyRevenue}
                    onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                    className="flex-1"
                  />
                </div>
                <div className="text-right text-2xl text-[#1C1C1C] mt-2">
                  KSh {monthlyRevenue.toLocaleString()}
                </div>
              </div>

              {/* Current Visibility */}
              <div className="mb-6">
                <label className="block text-sm text-gray-600 mb-2">
                  Current Online Visibility (How easy are you to find?)
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={currentVisibility}
                  onChange={(e) => setCurrentVisibility(Number(e.target.value))}
                  className="w-full"
                />
                <div className="text-right text-2xl text-[#1C1C1C] mt-2">
                  {currentVisibility}%
                </div>
              </div>

              {/* Industry */}
              <div className="mb-6">
                <label className="block text-sm text-gray-600 mb-2">
                  Your Industry
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg"
                >
                  <option value="retail">Retail/Shop</option>
                  <option value="restaurant">Restaurant/Café</option>
                  <option value="salon">Salon/Spa</option>
                  <option value="education">Education/Training</option>
                  <option value="professional">Professional Services</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Warning About Loss */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm text-red-800 mb-1">You're potentially losing</div>
                  <div className="text-2xl text-red-600">
                    KSh {monthlyLoss.toLocaleString()} / month
                  </div>
                  <div className="text-sm text-red-700 mt-1">
                    = KSh {(monthlyLoss * 12).toLocaleString()} annually
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-[green] to-[#E57000] rounded-3xl p-8 md:p-12 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Calculator className="w-8 h-8" />
              </div>

              <h3 className="text-3xl mb-8">Your Transformation Potential</h3>

              {/* Metrics */}
              <div className="space-y-6 mb-8">
                <div className="border-b border-white/20 pb-6">
                  <div className="text-white/80 text-sm mb-2">Potential Monthly Revenue Increase</div>
                  <div className="text-4xl">
                    +KSh {potentialRevenueIncrease.toLocaleString()}
                  </div>
                </div>

                <div className="border-b border-white/20 pb-6">
                  <div className="text-white/80 text-sm mb-2">First Year Additional Revenue</div>
                  <div className="text-4xl">
                    KSh {annualIncrease.toLocaleString()}
                  </div>
                </div>

                <div className="border-b border-white/20 pb-6">
                  <div className="text-white/80 text-sm mb-2">Time to ROI</div>
                  <div className="text-4xl">
                    {monthsToROI} {monthsToROI === 1 ? 'month' : 'months'}
                  </div>
                </div>

                <div>
                  <div className="text-white/80 text-sm mb-2">First Year ROI</div>
                  <div className="text-4xl flex items-center gap-2">
                    {firstYearROI > 0 ? '+' : ''}{firstYearROI}%
                    <TrendingUp className="w-8 h-8" />
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <p className="text-white/90 mb-4">
                  These numbers are based on actual client results. Your business deserves this growth.
                </p>
                <a
                  href="#contact"
                  className="block text-center bg-white text-[#F57C00] px-8 py-4 rounded-lg hover:bg-white/90 transition-all"
                >
                  Start Your Transformation Today
                  
                </a>
                
              </div>
            </div>

            {/* Trust Note */}
            <div className="mt-6 text-center text-sm text-gray-600">
              <p>* Calculations based on 50+ Kenyan SMEs that adopted digital marketing, automation, and online sales strategies.</p>
              <p className="mt-1">Average growth rates reflect data from KNBS, CBK SME Economic Outlook (2024-2025), and BizWaziri pilot programs.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
