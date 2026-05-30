import { motion } from "motion/react";
import { CheckCircle, Search, Smartphone, Zap, Activity, HeartHandshake } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "SEO-First Development",
      desc: "Every website is built with technical SEO best practices from the ground up.",
      icon: Search
    },
    {
      title: "Mobile Responsive Design",
      desc: "Websites perfectly optimized for desktop, tablet, and mobile devices.",
      icon: Smartphone
    },
    {
      title: "Fast Loading Performance",
      desc: "Optimized code, modern image formats, and smart caching for superior speed.",
      icon: Zap
    },
    {
      title: "Conversion Focused",
      desc: "Strategic UX/UI designed to turn casual visitors into inquiries and customers.",
      icon: Activity
    },
    {
      title: "Personalized Support",
      desc: "Direct, transparent communication and customized solutions for every client.",
      icon: HeartHandshake
    }
  ];

  return (
    <section className="py-24 relative bg-[#050505] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6 leading-[0.9]"
            >
              Why Choose <span className="text-gradient">ORRO DIGITAL</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg mb-8"
            >
              We don\'t just build websites; we build scalable digital assets tailored to support your long-term business goals. Here is what sets our Delhi agency apart.
            </motion.p>
            
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className="flex gap-4 items-start"
                >
                  <div className="mt-1 p-2 bg-white/[0.03] border border-white/5 rounded-xl">
                    <reason.icon className="w-4 h-4 text-brand-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-[13px] uppercase tracking-widest mb-1">{reason.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{reason.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[600px] rounded-[32px] overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 p-8 flex shadow-2xl"
          >
            {/* Dark abstract placeholder visual */}
            <div className="absolute inset-0 bg-[#050505] flex items-center justify-center rounded-[32px]">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
              <div className="absolute inset-0 bg-gradient-to-br from-brand-600/20 to-blue-600/10 rounded-[32px]"></div>
              <div className="w-[300px] h-[300px] rounded-full border border-brand-500/30 flex items-center justify-center animate-[spin_20s_linear_infinite]">
                 <div className="w-[200px] h-[200px] rounded-full border border-blue-500/30 flex items-center justify-center animate-[spin_15s_linear_infinite_reverse]">
                    <div className="w-24 h-24 bg-gradient-to-r from-brand-500 to-accent-500 rounded-full blur-[60px] opacity-60"></div>
                 </div>
              </div>
            </div>

            {/* Floating UI Elements */}
            <div className="absolute top-10 left-10 p-4 rounded-xl flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-md">
              <CheckCircle className="text-brand-500 w-5 h-5" />
              <div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Core Web Vitals</div>
                <div className="font-bold text-white text-sm">100/100 Score</div>
              </div>
            </div>
            
             <div className="absolute bottom-10 right-10 p-4 rounded-xl flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-md">
              <Activity className="text-brand-500 w-5 h-5" />
              <div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Uptime</div>
                <div className="font-bold text-white text-sm">99.99% Guaranteed</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
