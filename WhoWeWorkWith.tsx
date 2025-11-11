import { ImageWithFallback } from './figma/ImageWithFallback';
import { Coffee, Scissors, GraduationCap, ShoppingBag, Briefcase, Hotel } from 'lucide-react';

export function WhoWeWorkWith() {
  const businesses = [
    {
      icon: Coffee,
      name: 'Restaurants & Cafes',
      description: 'Help customers discover your menu and location when they\'re searching for places to eat or drink in your area.',
      image: 'https://images.unsplash.com/photo-1752006335516-44a0302035de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZW55YSUyMHJlc3RhdXJhbnQlMjBjYWZlfGVufDF8fHx8MTc2MjIxNzUzMnww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Scissors,
      name: 'Salons & Barbershops',
      description: 'Showcase your work through Instagram, get found on Google Maps, build trust with new clients before they visit.',
      image: 'https://images.unsplash.com/photo-1603486233859-c00303ec9792?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwc2Fsb24lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjIyMTc1MzF8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: GraduationCap,
      name: 'Private Schools',
      description: 'Provide comprehensive information for parents researching schools, showcase your facilities and achievements, make enrollment easy.',
      image: 'https://images.unsplash.com/photo-1666281238998-59842bf7e10c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwc2Nob29sJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc2MjIxNzUzMnww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: ShoppingBag,
      name: 'Retail Shops',
      description: 'Compete with online marketplaces by having strong local visibility and professional social media showing your unique products.',
      image: 'https://images.unsplash.com/photo-1727369130629-6dc1cae93ee4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzaG9wJTIwQWZyaWNhfGVufDF8fHx8MTc2MjIxNzUzMnww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Briefcase,
      name: 'Professional Services',
      description: 'Lawyers, accountants, consultants, clinics - build credibility online and make it easy for clients to find and contact you.',
      image: 'https://images.unsplash.com/photo-1742996111692-2d924f12a058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtZWV0aW5nJTIwQWZyaWNhfGVufDF8fHx8MTc2MjIxNzUzM3ww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Hotel,
      name: 'Hotels & Guest Houses',
      description: 'Get direct bookings through Google Maps, showcase your rooms and amenities, reduce dependence on expensive booking platforms.',
      image: 'https://images.unsplash.com/photo-1632830485299-c4bb1f31724a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZW55YSUyMGhvdGVsJTIwcm9vbXxlbnwxfHx8fDE3NjIyMTc1MzN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl text-[#0A2239] mb-6">
            We Specialize in Local Kenyan Businesses
          </h2>
          <p className="text-xl text-[#2C2C2C] max-w-3xl mx-auto">
            BizWaziri Kenya focuses specifically on small and medium-sized businesses in Kenya that serve local customers. We understand the Kenyan market, Kenyan customer behavior, and the unique challenges of running a business here.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {businesses.map((business, index) => {
            const Icon = business.icon;
            return (
              <div key={index} className="group">
                <div className="relative h-48 rounded-t-xl overflow-hidden">
                  <ImageWithFallback
                    src={business.image}
                    alt={business.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2239] to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#0EBE6F] rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl text-white">{business.name}</h3>
                    </div>
                  </div>
                </div>
                <div className="bg-[#FAFAFA] p-6 rounded-b-xl">
                  <p className="text-[#2C2C2C]">{business.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-[#0EBE6F]/10 border-l-4 border-[#0EBE6F] p-6 rounded-lg max-w-4xl mx-auto">
          <p className="text-[#2C2C2C]">
            <strong className="text-[#0A2239]">Note:</strong> We work with businesses of all types, but these are our most common clients because online visibility makes the biggest difference for businesses that serve local, searching customers.
          </p>
        </div>
      </div>
    </section>
  );
}
