import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";
import heroVideo from "../assets/hero-video.mp4";
import heroFallback from "../assets/hero-fallback.jpg";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

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

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        src={heroVideo}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        poster={heroFallback}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg"
        >
          Empowering Kenyan Businesses to Thrive
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-white text-lg md:text-xl max-w-2xl mb-8"
        >
          BizWaziri helps you transform your business with smart strategies,
          proven growth systems, and sustainable innovation.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#F57C00] hover:bg-[#E57000] text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all"
        >
          Start Your Transformation
        </motion.button>
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 right-6 flex items-center gap-4">
        <button
          onClick={togglePlay}
          className="bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-md transition"
        >
          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
        </button>

        <button
          onClick={toggleMute}
          className="bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-md transition"
        >
          {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
        </button>
      </div>
    </section>
  );
}
