import { TrendingUp, Search, MapPin, X, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export function ProblemSection() {
  const searchTerms = [
    'salon near me',
    'best cafe in Rongai',
    'private schools in Kiambu',
    'barbershop Nairobi',
    'restaurants in Nakuru'
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl text-[#0A2239] mb-6">
            Are You <span className="text-[#0EBE6F]">Losing Customers</span> to Competitors?
          </h2>
          <p className="text-xl text-[#2C2C2C]/70 max-w-3xl mx-auto">
            Every day in Nairobi, thousands of potential customers search for businesses exactly like yours
          </p>
        </motion.div>

        {/* Search Terms Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Search className="w-6 h-6 text-[#2C2C2C]/50" />
              <div className="flex-1 h-12 bg-[#FAFAFA] rounded-lg flex items-center px-4">
                <motion.span
                  key={searchTerms[0]}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-[#2C2C2C]/70"
                >
                  {searchTerms[0]}
                </motion.span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {searchTerms.slice(1).map((term, idx) => (
                <span key={idx} className="bg-[#0EBE6F]/10 text-[#0EBE6F] px-3 py-1 rounded-full text-sm">
                  {term}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Without BizWaziri */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border-2 border-red-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <X className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-2xl text-[#0A2239]">Without Us</h3>
            </div>
            <ul className="space-y-4">
              {[
                'Invisible on Google Maps',
                'Inactive or missing social media',
                'Customers can\'t find your contact info',
                'Losing customers to competitors',
                'No online credibility or reviews'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[#2C2C2C]/70">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* With BizWaziri */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#0EBE6F] to-[#0EBE6F]/80 rounded-2xl p-8 text-white shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl">With BizWaziri Kenya</h3>
            </div>
            <ul className="space-y-4">
              {[
                'Top position on Google Maps',
                'Professional, active social media',
                'Easy to find and contact',
                'Customers choose YOU first',
                'Build trust with reviews & presence'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#0A2239] to-[#0A2239]/90 rounded-3xl p-8 sm:p-12 shadow-2xl"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl text-white mb-2">The Numbers Don't Lie</h3>
            <p className="text-white/70">Local search is how customers find businesses today</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl"
            >
              <div className="flex justify-center mb-4">
                <MapPin className="w-12 h-12 text-[#D4AF37]" />
              </div>
              <div className="text-5xl text-white mb-2">76%</div>
              <p className="text-white/80">
                visit a business within 24 hours of searching
              </p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl"
            >
              <div className="flex justify-center mb-4">
                <Search className="w-12 h-12 text-[#D4AF37]" />
              </div>
              <div className="text-5xl text-white mb-2">28%</div>
              <p className="text-white/80">
                make a purchase the same day
              </p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl"
            >
              <div className="flex justify-center mb-4">
                <TrendingUp className="w-12 h-12 text-[#D4AF37]" />
              </div>
              <div className="text-5xl text-white mb-2">70%</div>
              <p className="text-white/80">
                more visits with complete profiles
              </p>
            </motion.div>
          </div>
          <p className="text-white/60 text-sm text-center mt-8">
            Source: Google Local Search Study, 2024
          </p>
        </motion.div>
      </div>
    </section>
  );
}
