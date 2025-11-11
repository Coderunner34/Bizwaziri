import { motion } from 'framer-motion';
import { Monitor, Smartphone, Zap, Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ToolsShowcase() {
  const tools = [
    {
      category: 'POS Systems',
      description: 'See exactly how our Point of Sale system tracks every sale, manages inventory, and gives you complete control',
      image: 'https://images.unsplash.com/photo-1728044849321-4cbffc50cc1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwUE9TJTIwc3lzdGVtfGVufDF8fHx8MTc2MjE3MTMzMXww&ixlib=rb-4.1.0&q=80&w=1080',
      features: ['Real-time sales tracking', 'Inventory alerts', 'Staff management', 'M-PESA integration']
    },
    {
      category: 'Analytics Dashboards',
      description: 'Watch your business data come to life with beautiful dashboards that show what\'s working',
      image: 'https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MjE5ODg5NHww&ixlib=rb-4.1.0&q=80&w=1080',
      features: ['Revenue tracking', 'Customer insights', 'Growth trends', 'Performance alerts']
    },
    {
      category: 'Website Development',
      description: 'Modern, mobile-first websites that load fast and convert visitors into customers',
      image: 'https://images.unsplash.com/photo-1678690832311-bb6e361989ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzYyMjU4Mzg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      features: ['Mobile optimized', 'Fast loading', 'SEO ready', 'Easy to update']
    }
  ];

  return (
    <section className="py-20 bg-[#0A2239] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#0EBE6F] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4 text-[#0EBE6F]" />
            <span className="text-sm">See Our Tools in Action</span>
          </div>
          <h2 className="text-3xl sm:text-5xl mb-6">
            The Digital Tools That <span className="text-[#0EBE6F]">Power Your Business</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Don't just imagine it - see exactly how these tools will transform your daily operations
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="space-y-20">
          {tools.map((tool, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}
              >
                {/* Image/Video */}
                <div className={isEven ? '' : 'lg:col-start-2'}>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="relative rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <ImageWithFallback
                      src={tool.image}
                      alt={tool.category}
                      className="w-full h-[400px] object-cover"
                    />
                    
                    {/* Video Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-20 h-20 bg-[#0EBE6F] rounded-full flex items-center justify-center shadow-2xl"
                      >
                        <Play className="w-10 h-10 text-white ml-1" fill="currentColor" />
                      </motion.button>
                    </div>

                    {/* Bottom Label */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                      <div className="flex items-center gap-2 text-white">
                        <Monitor className="w-5 h-5" />
                        <span className="text-sm">Click to Watch Demo</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Device Frame Decoration */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className={`absolute ${isEven ? '-right-12' : '-left-12'} top-1/2 -translate-y-1/2 hidden xl:block`}
                  >
                    <div className="w-32 h-32 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                      <Smartphone className="w-full h-full text-[#0EBE6F]" />
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
                  <div className="inline-block bg-[#0EBE6F]/20 text-[#0EBE6F] px-4 py-2 rounded-full text-sm mb-4">
                    {tool.category}
                  </div>

                  <h3 className="text-3xl mb-6">
                    {tool.description}
                  </h3>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {tool.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-colors"
                      >
                        <div className="w-8 h-8 bg-[#0EBE6F] rounded-lg flex items-center justify-center mb-2">
                          <span className="text-white text-xl">✓</span>
                        </div>
                        <p className="text-sm text-white/80">{feature}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-4">
                    <button className="bg-[#0EBE6F] hover:bg-[#0EBE6F]/90 text-white px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl">
                      See Full Demo
                    </button>
                    <p className="text-sm text-white/60">
                      2 min video
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h3 className="text-3xl mb-4">Training Included</h3>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-6">
              We don't just set up these tools and leave. We train you and your staff until you're comfortable using everything. Support is always available via WhatsApp.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#0EBE6F] rounded-full"></div>
                <span>In-person training</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#0EBE6F] rounded-full"></div>
                <span>Video tutorials</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#0EBE6F] rounded-full"></div>
                <span>Written guides</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#0EBE6F] rounded-full"></div>
                <span>WhatsApp support</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
