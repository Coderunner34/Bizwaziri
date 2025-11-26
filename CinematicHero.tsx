
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
            backgroundImage: `url('https://i.pinimg.com/1200x/76/14/04/761404a6e72d71e7616301393c7b7106.jpg')`
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
          poster="https://i.pinimg.com/1200x/76/14/04/761404a6e72d71e7616301393c7b7106.jpg"
        >
          {/* Note: In production, replace with actual Kenyan business transformation video */}
          <source src="https://www.pinterest.com/pin/696158054918622934/" type="video/mp4" />
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
  <strong style={{ color: '#fffbf7cc' }}>BizWaziri</strong> — Where Strategy Meets Growth
</motion.p>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          We don't just build, We rescue struggling businesses and transform them into market leaders through proven digital strategies.
        </motion.p>

        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12"
        >
          <div className="text-center">
            <div className="text-3xl md:text-5xl text-[#F57C00] mb-2">3x</div>
            <div className="text-sm md:text-base text-white/80">Retruns On Investment</div>
          </div>
          <div className="hidden md:block w-px h-16 bg-white/30"></div>
          <div className="text-center">
            <div className="text-3xl md:text-5xl text-[#F57C00] mb-2">50+</div>
            <div className="text-sm md:text-base text-white/80">Businesses Transformed</div>
          </div>
          <div className="hidden md:block w-px h-16 bg-white/30"></div>
          <div className="text-center">
            <div className="text-3xl md:text-5xl text-[#F57C00] mb-2">94%</div>
            <div className="text-sm md:text-base text-white/80">Client Success Rate</div>
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



// import { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Play, ArrowRight, Pause, Volume2, VolumeX, ChevronRight, ChevronLeft } from 'lucide-react';

// interface CinematicHeroProps {
//   onBookingClick: () => void;
// }

// const premiumBusinessImages = [
//   {
//     url: 'https://i.pinimg.com/1200x/76/14/04/761404a6e72d71e7616301393c7b7106.jpg',
//     title: 'Nairobi Skyline at Golden Hour',
//     category: 'Business District'
//   },
//   {
//     url: 'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//     title: 'Modern Kenyan Office Space',
//     category: 'Workspace'
//   },
//   {
//     url: 'https://images.unsplash.com/photo-1551833086-f6d0d11a5d8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//     title: 'Thriving Restaurant Business',
//     category: 'Hospitality'
//   },
//   {
//     url: 'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//     title: 'Successful Retail Store',
//     category: 'Retail'
//   },
//   {
//     url: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//     title: 'Business Meeting Success',
//     category: 'Corporate'
//   }
// ];

// export function CinematicHero({ onBookingClick }: CinematicHeroProps) {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [isMuted, setIsMuted] = useState(true);
//   const [touchStart, setTouchStart] = useState(0);
//   const [touchEnd, setTouchEnd] = useState(0);
//   const autoPlayRef = useRef<NodeJS.Timeout>();

//   // Auto-advance images
//   useEffect(() => {
//     if (isPlaying) {
//       autoPlayRef.current = setInterval(() => {
//         setCurrentImageIndex((prev) => (prev + 1) % premiumBusinessImages.length);
//       }, 5000);
//     }
//     return () => {
//       if (autoPlayRef.current) {
//         clearInterval(autoPlayRef.current);
//       }
//     };
//   }, [isPlaying]);

//   const nextImage = () => {
//     setCurrentImageIndex((prev) => (prev + 1) % premiumBusinessImages.length);
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prev) => (prev - 1 + premiumBusinessImages.length) % premiumBusinessImages.length);
//   };

//   const togglePlay = () => {
//     setIsPlaying(!isPlaying);
//   };

//   const toggleMute = () => {
//     setIsMuted(!isMuted);
//   };

//   // Touch handlers for mobile swipe
//   const handleTouchStart = (e: React.TouchEvent) => {
//     setTouchStart(e.targetTouches[0].clientX);
//   };

//   const handleTouchMove = (e: React.TouchEvent) => {
//     setTouchEnd(e.targetTouches[0].clientX);
//   };

//   const handleTouchEnd = () => {
//     if (touchStart - touchEnd > 50) {
//       nextImage();
//     }
//     if (touchStart - touchEnd < -50) {
//       prevImage();
//     }
//   };

//   return (
//     <section 
//       className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
//       onTouchStart={handleTouchStart}
//       onTouchMove={handleTouchMove}
//       onTouchEnd={handleTouchEnd}
//     >
//       {/* Animated Background Gallery */}
//       <div className="absolute inset-0 w-full h-full">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentImageIndex}
//             className="absolute inset-0 w-full h-full"
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -100 }}
//             transition={{ duration: 1.2, ease: "easeInOut" }}
//           >
//             <div
//               className="w-full h-full bg-cover bg-center"
//               style={{
//                 backgroundImage: `url('${premiumBusinessImages[currentImageIndex].url}')`,
//               }}
//             />
//           </motion.div>
//         </AnimatePresence>

//         {/* Enhanced Gradient Overlays */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70" />
        
//         {/* Animated Scan Line */}
//         <motion.div
//           className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"
//           animate={{ y: [-100, 600] }}
//           transition={{ duration: 6, repeat: Infinity, repeatType: "loop" }}
//         />
//       </div>

//       {/* Gallery Controls */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex items-center gap-6">
//         {/* Play/Pause */}
//         <button
//           onClick={togglePlay}
//           className="w-12 h-12 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all border border-white/20 hover:border-orange-400/50"
//           aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
//         >
//           {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
//         </button>

//         {/* Image Dots */}
//         <div className="flex items-center gap-3">
//           {premiumBusinessImages.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentImageIndex(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 index === currentImageIndex
//                   ? 'bg-orange-500 scale-125'
//                   : 'bg-white/40 hover:bg-white/60'
//               }`}
//               aria-label={`Go to image ${index + 1}`}
//             />
//           ))}
//         </div>

//         {/* Navigation Arrows */}
//         <div className="flex items-center gap-2">
//           <button
//             onClick={prevImage}
//             className="w-10 h-10 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all border border-white/20 hover:border-orange-400/50"
//             aria-label="Previous image"
//           >
//             <ChevronLeft className="w-5 h-5" />
//           </button>
//           <button
//             onClick={nextImage}
//             className="w-10 h-10 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all border border-white/20 hover:border-orange-400/50"
//             aria-label="Next image"
//           >
//             <ChevronRight className="w-5 h-5" />
//           </button>
//         </div>
//       </div>

//       {/* Current Image Info */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         key={currentImageIndex}
//         className="absolute top-8 right-8 z-30 text-right"
//       >
//         <div className="bg-black/40 backdrop-blur-md rounded-lg px-4 py-2 border border-white/20">
//           <p className="text-white text-sm font-light">{premiumBusinessImages[currentImageIndex].category}</p>
//           <p className="text-orange-300 text-xs">{premiumBusinessImages[currentImageIndex].title}</p>
//         </div>
//       </motion.div>

//       {/* Main Content */}
//       <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          
//           {/* Left Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1, delay: 0.3 }}
//             className="space-y-8"
//           >
//             {/* Trust Badge */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//               className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/20 to-amber-500/10 backdrop-blur-md rounded-full px-6 py-3 border border-orange-400/30"
//             >
//               <div className="flex gap-1">
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <div key={star} className="w-4 h-4 text-amber-400 fill-current">
//                     ★
//                   </div>
//                 ))}
//               </div>
//               <span className="text-sm text-white/90 font-medium tracking-wide">
//                 Rated #1 in Business Transformation
//               </span>
//             </motion.div>

//             {/* Main Headline */}
//             <motion.h1
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 0.4 }}
//               className="text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-none tracking-tight"
//             >
//               YOUR
//               <span className="block bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
//                 BUSINESS
//               </span>
//               <span className="block text-white">REIMAGINED</span>
//             </motion.h1>

//             {/* Subheadline */}
//             <motion.p
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 0.5 }}
//               className="text-xl lg:text-2xl text-white/80 font-light leading-relaxed max-w-2xl"
//             >
//               We transform Kenyan businesses into <span className="text-orange-300 font-semibold">digital powerhouses</span>. 
//               Experience 3x growth in 90 days or we refund your investment.
//             </motion.p>

//             {/* CTA Buttons */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 0.6 }}
//               className="flex flex-col sm:flex-row gap-4 items-start"
//             >
//               <button
//                 onClick={onBookingClick}
//                 className="group relative bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-14 py-6 rounded-2xl transition-all duration-500 inline-flex items-center justify-center gap-4 text-xl font-bold shadow-2xl hover:shadow-orange-500/30 border-2 border-orange-400/50 overflow-hidden"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
//                 <span>Start Your Journey</span>
//                 <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
//               </button>

//               {/* Secondary Stats */}
//               <div className="flex items-center gap-6 text-white/70">
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-orange-400">94%</div>
//                   <div className="text-xs font-light">Success Rate</div>
//                 </div>
//                 <div className="w-px h-8 bg-white/30"></div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-orange-400">90</div>
//                   <div className="text-xs font-light">Days Avg.</div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Right Content - Stats Card */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1, delay: 0.7 }}
//             className="relative"
//           >
//             <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 shadow-2xl">
//               <div className="space-y-6">
//                 <h3 className="text-2xl font-bold text-white text-center mb-8">Transformation Results</h3>
                
//                 {/* Animated Stats Grid */}
//                 <div className="grid grid-cols-2 gap-6">
//                   {[
//                     { value: '3.8x', label: 'ROI', color: 'text-green-400' },
//                     { value: 'KSh 120M+', label: 'Revenue', color: 'text-blue-400' },
//                     { value: '247%', label: 'Growth', color: 'text-orange-400' },
//                     { value: '150+', label: 'Businesses', color: 'text-purple-400' }
//                   ].map((stat, index) => (
//                     <motion.div
//                       key={stat.label}
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
//                       className="text-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-400/30 transition-all"
//                     >
//                       <div className={`text-3xl font-bold ${stat.color} mb-2`}>
//                         {stat.value}
//                       </div>
//                       <div className="text-white/70 text-sm font-light">{stat.label}</div>
//                     </motion.div>
//                   ))}
//                 </div>

//                 {/* Client Logos */}
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.8, delay: 1.3 }}
//                   className="pt-6 border-t border-white/10"
//                 >
//                   <p className="text-white/60 text-sm text-center mb-4">TRUSTED BY INDUSTRY LEADERS</p>
//                   <div className="flex justify-center items-center gap-8 opacity-90">
//                     <div className="text-white font-bold text-lg tracking-tight">Safaricom</div>
//                     <div className="text-white font-serif italic text-xl">KCB Group</div>
//                     <div className="text-white font-semibold text-sm">Naivas</div>
//                   </div>
//                 </motion.div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 1.5 }}
//         className="absolute bottom-8 left-8 z-30"
//       >
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//           className="flex flex-col items-center gap-2 text-white/40"
//         >
//           <span className="text-xs uppercase tracking-widest font-light rotate-90 origin-left translate-y-8">
//             Scroll to Explore
//           </span>
//           <div className="w-px h-16 bg-gradient-to-b from-orange-400 to-transparent" />
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }