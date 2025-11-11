import { motion } from 'framer-motion';
import { Quote, TrendingUp, Heart, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function TransformationStories() {
  const stories = [
    {
      business: 'Mama Jane\'s Restaurant',
      location: 'Rongai, Kajiado',
      problem: 'Jane was working 14 hours a day, barely making enough to pay rent. Customers would pass by without knowing she existed.',
      solution: 'We set up her Google Business Profile, created a simple website with her menu, and got her first 20 five-star reviews.',
      result: 'Within 2 months, daily customers increased from 15 to 60. She hired 2 new staff and finally took her first vacation in 3 years.',
      emotion: '"I used to cry every night worrying about bills. Now I sleep peacefully knowing customers are finding us."',
      metrics: {
        before: 'Ksh 25,000/day',
        after: 'Ksh 90,000/day',
        growth: '260% increase'
      },
      image: 'https://images.unsplash.com/photo-1758519290890-46b542bb25fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG93bmVyJTIwc3VjY2Vzc3xlbnwxfHx8fDE3NjIyNzAyMzN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      business: 'Excel Barbershop',
      location: 'Nakuru',
      problem: 'Peter had an empty shop most mornings. He was considering closing down and looking for employment.',
      solution: 'We installed a booking system, set up Instagram showing his haircut transformations, and optimized his Google presence.',
      result: 'Bookings are now full every day. He expanded to a second location and employs 4 barbers.',
      emotion: '"My family was losing hope in me. Now my children are proud to tell their friends about our barbershops."',
      metrics: {
        before: '5 customers/day',
        after: '28 customers/day',
        growth: '460% increase'
      },
      image: 'https://images.unsplash.com/photo-1758519290890-46b542bb25fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG93bmVyJTIwc3VjY2Vzc3xlbnwxfHx8fDE3NjIyNzAyMzN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      business: 'Grace Boutique',
      location: 'Kiambu',
      problem: 'Grace spent Ksh 15,000 monthly on flyers that nobody read. Her shop was hidden and customers couldn\'t find her.',
      solution: 'We created an online store, set up Instagram shop, and connected M-PESA payments. No more flyers.',
      result: 'She now gets orders from all over Kenya, not just Kiambu. Online sales bring in Ksh 180,000/month extra.',
      emotion: '"I can now afford to send all three of my children to good schools. That was my dream."',
      metrics: {
        before: 'Ksh 40,000/month',
        after: 'Ksh 220,000/month',
        growth: '450% increase'
      },
      image: 'https://images.unsplash.com/photo-1758519290890-46b542bb25fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG93bmVyJTIwc3VjY2Vzc3xlbnwxfHx8fDE3NjIyNzAyMzN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#FAFAFA] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 text-[#D4AF37] px-4 py-2 rounded-full mb-6">
            <Heart className="w-4 h-4" />
            <span className="text-sm">Real Stories, Real Impact</span>
          </div>
          <h2 className="text-3xl sm:text-5xl text-[#0A2239] mb-6">
            Lives <span className="text-[#0EBE6F]">Changed</span> Through Digital Presence
          </h2>
          <p className="text-xl text-[#2C2C2C]/70 max-w-3xl mx-auto">
            These are real business owners in Kenya who transformed their lives with our help
          </p>
        </motion.div>

        {/* Stories */}
        <div className="space-y-16">
          {stories.map((story, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}
              >
                {/* Image */}
                <div className={isEven ? '' : 'lg:col-start-2'}>
                  <div className="relative">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                      <ImageWithFallback
                        src={story.image}
                        alt={story.business}
                        className="w-full h-[400px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      
                      {/* Overlay Badge */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Star className="w-5 h-5 text-[#D4AF37] fill-current" />
                            <Star className="w-5 h-5 text-[#D4AF37] fill-current" />
                            <Star className="w-5 h-5 text-[#D4AF37] fill-current" />
                            <Star className="w-5 h-5 text-[#D4AF37] fill-current" />
                            <Star className="w-5 h-5 text-[#D4AF37] fill-current" />
                          </div>
                          <p className="text-[#0A2239] text-sm">{story.business}</p>
                          <p className="text-[#2C2C2C]/60 text-xs">{story.location}</p>
                        </div>
                      </div>
                    </div>

                    {/* Growth Badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="absolute -top-6 -right-6 bg-[#0EBE6F] text-white rounded-2xl p-6 shadow-2xl"
                    >
                      <TrendingUp className="w-8 h-8 mb-2" />
                      <p className="text-2xl">{story.metrics.growth}</p>
                      <p className="text-sm text-white/80">Revenue Growth</p>
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
                  <div className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm mb-4">
                    Before: The Struggle
                  </div>
                  <p className="text-lg text-[#2C2C2C]/80 mb-6 leading-relaxed">
                    {story.problem}
                  </p>

                  <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm mb-4">
                    What We Did
                  </div>
                  <p className="text-lg text-[#2C2C2C]/80 mb-6 leading-relaxed">
                    {story.solution}
                  </p>

                  <div className="inline-block bg-[#0EBE6F]/10 text-[#0EBE6F] px-3 py-1 rounded-full text-sm mb-4">
                    The Transformation
                  </div>
                  <p className="text-lg text-[#2C2C2C]/80 mb-6 leading-relaxed">
                    {story.result}
                  </p>

                  {/* Emotional Quote */}
                  <div className="bg-gradient-to-r from-[#0A2239] to-[#0A2239]/90 rounded-2xl p-8 mb-6">
                    <Quote className="w-10 h-10 text-[#D4AF37] mb-4" />
                    <p className="text-white text-lg italic leading-relaxed">
                      {story.emotion}
                    </p>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#FAFAFA] rounded-xl p-4 border border-[#0A2239]/10">
                      <p className="text-sm text-[#2C2C2C]/60 mb-1">Before</p>
                      <p className="text-xl text-[#0A2239]">{story.metrics.before}</p>
                    </div>
                    <div className="bg-gradient-to-br from-[#0EBE6F] to-[#0EBE6F]/80 rounded-xl p-4 text-white shadow-lg">
                      <p className="text-sm text-white/80 mb-1">After</p>
                      <p className="text-xl">{story.metrics.after}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-[#0EBE6F]/10 rounded-3xl p-12 max-w-3xl mx-auto">
            <h3 className="text-3xl text-[#0A2239] mb-4">
              Your Story Could Be Next
            </h3>
            <p className="text-[#2C2C2C]/70 text-lg mb-6">
              Every business that's thriving today started exactly where you are. The only difference? They took action.
            </p>
            <p className="text-[#0A2239] text-xl mb-8">
              What will you tell your family 6 months from now?
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
