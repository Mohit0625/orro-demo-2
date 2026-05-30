import { motion } from "motion/react";
import { LineChart, Globe, Zap, SearchCheck } from "lucide-react";

export default function SEOBenefits() {
  const points = [
    {
      title: "Indexability",
      desc: "Clean semantic HTML5 ensures search engines can crawl and index your content quickly.",
      icon: SearchCheck
    },
    {
      title: "Core Web Vitals",
      desc: "Optimized LCP, FID, and CLS scores for superior user experience and Google rankings.",
      icon: Zap
    },
    {
      title: "Mobile-First",
      desc: "Responsive architectures that prioritize mobile performance for better SERP visibility.",
      icon: Globe
    },
    {
      title: "Structured Data",
      desc: "Implementation of JSON-LD Schema markup for Local Business and rich snippets.",
      icon: LineChart
    }
  ];

  return (
    <section className="py-24 relative bg-[#050505] border-y border-white/5 overflow-hidden">
      <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-brand-500 opacity-[0.06] blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
           <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-brand-500 text-[10px] font-bold uppercase tracking-widest mb-3">SEO Optimization</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6 leading-[0.9]">
              Built To Rank, <br /> Engineered To <span className="text-gradient">Convert</span>
            </h3>
            <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
              A visually appealing website is useless if no one can find it. At ORRO DIGITAL, we integrate advanced technical SEO directly into our development architecture. We do not just build websites; we build discovery engines.
            </p>
            
            <a href="#contact" className="px-8 py-4 border border-white/10 bg-white/5 backdrop-blur-md rounded-xl hover:bg-white/10 transition-all text-white font-bold inline-flex">
              Discuss Your SEO Strategy
            </a>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {points.map((pt, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-xl p-8 rounded-[32px] border border-white/10"
              >
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 mb-4 w-fit">
                  <pt.icon className="w-6 h-6 text-brand-500" />
                </div>
                <h4 className="text-[13px] font-bold text-white uppercase tracking-widest mb-2">{pt.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{pt.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
