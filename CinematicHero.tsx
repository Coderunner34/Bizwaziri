
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Pause, Volume2, VolumeX, ChevronDown } from 'lucide-react';
import logoImage from '../assets/BWlogo.png';

interface CinematicHeroProps {
  onBookingClick: () => void;
}

export function CinematicHero({ onBookingClick }: CinematicHeroProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay was prevented, user will need to click play
        setIsPlaying(false);
      });
    }
  }, []);


  useEffect(() => {
  const handleScroll = () => {
    if (videoRef.current) {
      const rect = videoRef.current.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
      if (!isVisible && !videoRef.current.paused) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else if (isVisible && videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Fallback image while video loads */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1624954788465-448e8692894c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')`
          }}
        />
        
        {/* Video element - Using a placeholder for demonstration */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          loop
          autoPlay
          muted={isMuted}
          playsInline
          poster="https://images.unsplash.com/photo-1624954788465-448e8692894c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
        >
          {/* Note: In production, replace with actual Kenyan business transformation video */}
          <source src="https://cdn.coverr.co/videos/coverr-nairobi-cityscape-2024.mp4" type="video/mp4" />
        </video>



<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 2 }}
  className="absolute inset-0 bg-black/40"
/>




        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/90 via-[#1C1C1C]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/80 via-transparent to-transparent" />

        <div className="absolute inset-0 bg-black/50 mix-blend-overlay" />

      </div>

      {/* Video Controls */}
      <div className="absolute top-24 right-8 z-20 flex gap-3">
        <button
          onClick={togglePlay}
          className="w-12 h-12 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-all"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
        </button>
        <button
          onClick={toggleMute}
          className="w-12 h-12 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-all"
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <img 
            src={logoImage} 
            alt="BizWaziri Kenya" 
            className="h-16 md:h-20 mx-auto opacity-90"
          />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight max-w-5xl mx-auto"
        >
          For Businesses That Want <span className="text-[#F57C00]">More</span>
        </motion.h1>

        {/* Tagline */}
<motion.p
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="text-2xl md:text-3xl text-white/90 mb-4 max-w-3xl mx-auto"
>
  <strong style={{ color: '#fffefecc' }}>BizWaziri</strong> — Where Strategy Meets Growth
</motion.p>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed" 
          style={{ color: '#c5aeaecc' }}
        > 
          We don't just build websites. We rescue struggling businesses and transform them into market leaders through proven digital strategies.
        </motion.p>

        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12"
        >
          <div className="text-center">
            <div className="text-3xl md:text-5xl text-[#F57C00] mb-2">3.8X</div>
            <div className="text-sm md:text-base text-white/80">Return On Investment</div>
          </div>
          <div className="hidden md:block w-px h-16 bg-white/30"></div>
          <div className="text-center">
            <div className="text-3xl md:text-5xl text-[#F57C00] mb-2">65+</div>
            <div className="text-sm md:text-base text-white/80">From 12 Customers Daily to 65+</div>
          </div>
          <div className="hidden md:block w-px h-16 bg-white/30"></div>
          <div className="text-center">
            <div className="text-3xl md:text-5xl text-[#F57C00] mb-2">94% </div>
            <div className="text-sm md:text-base text-white/80">Client Retention Rate</div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={onBookingClick}
            className="group bg-[#F57C00] hover:bg-[#E57000] text-white px-10 py-5 rounded-lg transition-all inline-flex items-center justify-center gap-3 text-lg shadow-[0_0_20px_#F57C00]/50 hover:shadow-[0_0_30px_#E57000]/80"

          >
            Start Your Transformation
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#business-crisis"
            className="bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white px-10 py-5 rounded-lg transition-all inline-flex items-center justify-center gap-3 text-lg"
          >
            See Success Stories
          </a>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 flex flex-wrap justify-center gap-6 text-sm text-white/60"
        >
          <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">✓ Featured in Business Daily</span>
          <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">✓ Google Partner</span>
          <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">✓ 7-Day Money Back Guarantee</span>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-sm">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
