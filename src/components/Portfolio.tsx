import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "FinTech Corporate Platform",
      category: "Corporate Website",
      desc: "A high-performance corporate site for a leading financial services firm.",
      gradient: "from-blue-600/20 to-cyan-600/20",
      accent: "text-blue-400"
    },
    {
      title: "Luxury Commerce",
      category: "E-Commerce",
      desc: "A premium headless e-commerce store optimized for conversions.",
      gradient: "from-amber-600/20 to-orange-600/20",
      accent: "text-amber-400"
    },
    {
      title: "HealthTech App Landing",
      category: "Landing Page",
      desc: "Conversion-focused landing page for a new healthcare application launch.",
      gradient: "from-emerald-600/20 to-teal-600/20",
      accent: "text-emerald-400"
    },
    {
      title: "Real Estate Portal",
      category: "Business Website",
      desc: "Property listing website with advanced geographic search filtering.",
      gradient: "from-purple-600/20 to-pink-600/20",
      accent: "text-purple-400"
    }
  ];

  return (
    <section id="portfolio" className="py-24 relative bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-500 text-[10px] font-bold uppercase tracking-widest mb-3"
            >
              Selected Work
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold tracking-tighter text-white leading-[0.9]"
            >
              Real Projects, <br /> <span className="text-gradient">Real Results</span>
            </motion.h3>
          </div>
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#contact" 
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-brand-500 transition-all transform hover:scale-105 active:scale-95"
          >
             View All Cases <ExternalLink size={14} />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className={`relative h-[350px] lg:h-[450px] rounded-[32px] overflow-hidden mb-6 bg-gradient-to-br ${project.gradient} border border-white/5`}>
                <div className="absolute inset-0 bg-[#050505]/40 group-hover:bg-[#050505]/10 transition-colors duration-500 z-10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/5 font-black text-6xl md:text-8xl whitespace-nowrap z-0 pointer-events-none">
                  ORRO DIGITAL
                </div>
                {/* Simulated UI Mockup inside placeholder */}
                <div className="absolute top-12 left-12 right-12 bottom-0 bg-[#050505] rounded-t-2xl border-t border-l border-r border-white/10 shadow-2xl overflow-hidden transform group-hover:translate-y-2 transition-transform duration-500 z-20">
                  <div className="h-8 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
                  </div>
                  <div className="p-6 opacity-30">
                    <div className="w-1/3 h-4 bg-white/20 rounded mb-4" />
                    <div className="w-3/4 h-8 bg-white/10 rounded mb-8" />
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-24 bg-white/5 rounded" />
                      <div className="h-24 bg-white/5 rounded" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-2">
                <span className="text-[10px] font-bold tracking-widest uppercase mb-2 block text-brand-500">
                  {project.category}
                </span>
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-brand-500 transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-400 text-sm">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
