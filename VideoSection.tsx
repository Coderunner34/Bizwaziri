import { useState } from 'react';
import { Play, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 bg-[#0A2239]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl text-white mb-4">
            See How We Transform Local Businesses
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Watch how we help Kenyan businesses go from invisible to discoverable in just one week
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {!isPlaying ? (
            <div className="relative group cursor-pointer" onClick={() => setIsPlaying(true)}>
              <div className="relative rounded-2xl overflow-hidden aspect-video">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1710778044102-56a3a6b69a1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZW55YW4lMjBidXNpbmVzcyUyMG93bmVyfGVufDF8fHx8MTc2MjIxNzUzMXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="BizWaziri Success Story"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#0EBE6F] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                    <Play className="w-10 h-10 sm:w-12 sm:h-12 text-white ml-1" fill="white" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4 bg-black/70 px-3 py-1 rounded-full">
                  <span className="text-white text-sm">3:24</span>
                </div>
              </div>

              <div className="text-center mt-6">
                <p className="text-white/80">
                  Click to see real results from businesses like yours
                </p>
              </div>
            </div>
          ) : (
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-black">
              {/* Close Button */}
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Video Placeholder - Replace with actual video embed */}
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="BizWaziri Kenya - Success Stories"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/60 text-sm">
            Replace the YouTube URL above with your actual testimonial or explainer video
          </p>
        </div>
      </div>
    </section>
  );
}
