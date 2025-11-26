import { motion } from 'framer-motion';
import { Play, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CleanTestimonials() {
  const testimonials = [
    {
      name: 'Jane Wanjiku',
      business: 'Fasa Restaurant',
      location: 'Mois Lake, Naivasha',
      image: 'https://assets.benable.com/rec_object_photos/23257909/full_size/5a35c156ebfd8ad54ace.jpeg',
      quote: 'Before BizWaziri, we had maybe 15 customers daily. Now we serve 60+ customers every day. We hired 2 new staff and I finally took my first vacation in 3 years.',
      result: '117% revenue increase',
      videoAvailable: true
    },
    {
      name: 'Glamour',
      business: 'The Glamour Executive Barbershop',
      location: 'Kiambu',
      image: 'https://lh3.googleusercontent.com/p/AF1QipO3W1eKVkBbDBHNFZ_LfDoi1br52bhYfdlABL7I=s680-w680-h510-rw',
      quote: 'My shop was empty most mornings. I was considering closing down. Now we\'re fully booked every day, expanding to a second location, employment of 4 barbers.',
      result: '26% customer increase',
      videoAvailable: true
    },
    {
      name: 'Grace Muthoni',
      business: 'Grace Boutique',
      location: 'Kajiado',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTOKDvdnfzv3sTvZJP5xmNUydMqw8oDXmNmg&s',
      quote: 'Online sales now bring Ksh 32,000 extra every month. I can afford good schools for all two of my children. That was my dream.',
      result: '450% revenue increase',
      videoAvailable: true
    }
  ];

  return (
    <section className="py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#F57C00] text-sm uppercase tracking-wider mb-4 block">
            Voice of Our Clients
          </span>
          <h2 className="text-4xl md:text-6xl text-[#1C1C1C] mb-6">
            Real Stories, Real Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear directly from Kenyan business owners whose lives changed after partnering with BizWaziri.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image with Video Button */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={testimonial.image}
                  alt={testimonial.business}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                
                {/* Video Play Button */}
                {testimonial.videoAvailable && (
                  <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#F57C00] hover:bg-[#E57000] rounded-full flex items-center justify-center transition-all group-hover:scale-110 shadow-xl">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </button>
                )}
                
                {/* Business Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-lg mb-1">{testimonial.business}</div>
                  <div className="text-sm text-white/80">{testimonial.location}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#F57C00] text-[#F57C00]" />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                <div className="pt-4 border-t border-gray-100">
                  <div className="text-[#1C1C1C] mb-1">{testimonial.name}</div>
                  <div className="text-[#F57C00] text-sm">{testimonial.result}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 flex items-center justify-center gap-2">
            <Play className="w-5 h-5 text-[#F57C00]" />
            <span>Full video testimonials unavailable - Follow us on Instagram to Watch</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
