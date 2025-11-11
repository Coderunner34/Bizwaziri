import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart, Shield, Users } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl text-[#0A2239] mb-6">
            Who We Are
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1710778044102-56a3a6b69a1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZW55YW4lMjBidXNpbmVzcyUyMG93bmVyfGVufDF8fHx8MTc2MjIxNzUzMXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Karanu Isaac - Founder of BizWaziri Kenya"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="prose prose-lg max-w-none">
              <p className="text-[#2C2C2C] mb-4">
                BizWaziri Kenya was founded by <strong>Karanu Isaac</strong> in 2025 with a simple mission: help Kenyan businesses compete in an increasingly digital marketplace by making quality digital presence affordable and accessible.
              </p>
              <p className="text-[#2C2C2C] mb-4">
                After working with over five hundred businesses across Kenya through various digital projects, Karanu noticed a consistent pattern: most local businesses were losing customers not because they lacked quality products or services, but because they were invisible to customers who were actively searching for what they offered.
              </p>
              <p className="text-[#2C2C2C]">
                Traditional marketing agencies were either too expensive for small businesses or focused on complex strategies that didn't address the fundamental problem of basic visibility. BizWaziri was created to fill this gap - providing simple, effective, affordable digital presence setup for the backbone of Kenya's economy: small and medium-sized local businesses.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-[#0EBE6F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-[#0EBE6F]" />
            </div>
            <h3 className="text-xl text-[#0A2239] mb-3">Our Approach</h3>
            <p className="text-[#2C2C2C]">
              We believe in education over dependency, results over vanity metrics, and honest pricing over hidden fees.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-[#0EBE6F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-[#0EBE6F]" />
            </div>
            <h3 className="text-xl text-[#0A2239] mb-3">Our Promise</h3>
            <p className="text-[#2C2C2C]">
              Every business we work with will understand what we did, why it matters, and how to maintain it. You won't be confused or dependent. You'll be empowered and capable.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-[#0EBE6F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-[#0EBE6F]" />
            </div>
            <h3 className="text-xl text-[#0A2239] mb-3">Our Goal</h3>
            <p className="text-[#2C2C2C]">
              We're not trying to be the biggest agency in Kenya. We're trying to be the most helpful one for businesses like yours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
