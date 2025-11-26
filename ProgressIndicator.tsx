import { motion, useScroll, useSpring } from 'framer-motion';

export function ProgressIndicator() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F57C00] to-orange-400 z-50 origin-left"
      style={{ scaleX }}
    />
  );
}