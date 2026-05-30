import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Code, Sparkles, Layout } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute top-[10%] left-[-100px] w-[500px] h-[500px] bg-brand-500 opacity-[0.08] blur-[120px] rounded-full" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] bg-blue-500 opacity-[0.06] blur-[150px] rounded-full" />
        
        {/* Floating elements */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-[15%] w-16 h-16 bg-white/[0.03] border border-white/5 backdrop-blur-xl rounded-2xl flex items-center justify-center opacity-50"
        >
          <Code className="text-brand-500" size={24} />
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/3 left-[15%] w-20 h-20 bg-white/[0.03] border border-white/5 backdrop-blur-xl rounded-2xl flex items-center justify-center opacity-50"
        >
          <Layout className="text-blue-500" size={32} />
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 px-3 py-1 bg-brand-500/10 border border-brand-500/20 rounded-full w-fit flex justify-center mx-auto"
        >
          <span className="text-brand-500 text-[10px] font-bold uppercase tracking-widest">Est. 2021 • Delhi Based</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-6xl md:text-[80px] font-bold tracking-tighter text-white max-w-5xl leading-[0.9]"
        >
          Building Websites That <br className="hidden md:block" />
          <span className="text-gradient">Drive Growth.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mt-8 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          Delhi-based web development agency helping businesses establish a powerful digital presence since 2021.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group flex items-center justify-center gap-2 px-8 py-4 bg-brand-500 text-black font-bold rounded-xl shadow-[0_10px_30px_rgba(242,125,38,0.2)] hover:shadow-[0_15px_40px_rgba(242,125,38,0.4)] transition-all w-full sm:w-auto text-sm uppercase tracking-widest"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#portfolio"
            className="flex items-center justify-center gap-2 px-8 py-4 border border-white/10 bg-white/5 backdrop-blur-md rounded-xl hover:bg-white/10 transition-all text-white font-bold w-full sm:w-auto text-sm uppercase tracking-widest"
          >
            View Our Work
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-sm text-gray-500"
      >
        <span>Scroll to explore</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-1 h-8 rounded-full bg-gradient-to-b from-gray-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}
