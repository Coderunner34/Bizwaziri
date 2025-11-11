import { Quote, Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      quote: "Within two weeks of BizWaziri setting up our Google and Instagram, we started getting customers saying they found us online. The best part is they trained our staff so we can post ourselves now. It's paying for itself already.",
      name: 'Subira Namu',
      role: 'Owner',
      business: 'Subira Stitches (Crochet Shop, Langata)',
      rating: 5
    },
    {
      quote: "I was hesitant to invest in digital marketing because I thought it was only for big companies. BizWaziri showed me that even small schools like ours need to be visible online. Parents are now finding us on Google when they search for schools in our area.",
      name: 'Peter Mwangi',
      role: 'Director',
      business: 'Karia-ini Academy (Primary School, Kiambu)',
      rating: 5
    },
    {
      quote: "What I appreciated most was the honesty. Karanu told me which services I needed now and which ones I could add later when business grew. He wasn't trying to sell me everything at once. That built trust.",
      name: 'Emily Wanjiru',
      role: 'Owner',
      business: 'Emy\'s Beauty Lounge (Salon, Nairobi)',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl text-[#0A2239] mb-6">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#FAFAFA] rounded-xl p-8 relative">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-[#0A2239]" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#D4AF37] fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#2C2C2C] mb-6 relative z-10">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-[#0A2239]/10">
                <p className="text-[#0A2239] mb-1">
                  {testimonial.name}
                </p>
                <p className="text-[#2C2C2C]/70 text-sm">
                  {testimonial.role}, {testimonial.business}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-8 text-[#2C2C2C]/60">
            <div className="text-center">
              <div className="text-3xl text-[#0A2239] mb-1">50+</div>
              <div className="text-sm">Businesses Helped</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-[#0A2239]/20"></div>
            <div className="text-center">
              <div className="text-3xl text-[#0A2239] mb-1">98%</div>
              <div className="text-sm">Client Satisfaction</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-[#0A2239]/20"></div>
            <div className="text-center">
              <div className="text-3xl text-[#0A2239] mb-1">7 Days</div>
              <div className="text-sm">Average Launch Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
