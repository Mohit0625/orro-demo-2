import { motion } from "motion/react";

export default function Process() {
  const steps = [
    { num: "01", title: "Discovery", desc: "Understanding your business goals, target audience, and project requirements." },
    { num: "02", title: "Strategy", desc: "Mapping out the website architecture, UX flow, and technical SEO strategy." },
    { num: "03", title: "Design", desc: "Creating high-fidelity, conversion-focused UI designs aligned with your brand." },
    { num: "04", title: "Development", desc: "Coding a fast, responsive, semantic HTML5 website with modern tech stacks." },
    { num: "05", title: "Launch", desc: "Rigorous quality assurance, Core Web Vitals checks, tuning, and successful deployment." },
  ];

  return (
    <section id="process" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-bold tracking-widest text-brand-400 uppercase mb-3"
        >
          Our Methodology
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-heading font-bold text-white mb-16"
        >
          A Proven 5-Step <span className="text-gradient">Workflow</span>
        </motion.h3>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-500/30 to-transparent -translate-y-1/2 z-0" />

          <div className="grid lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative z-10 flex flex-col items-center text-center group bg-white/5 backdrop-blur-md rounded-[32px] p-6 border border-white/5"
              >
                <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-lg font-black text-brand-500 mb-4 group-hover:border-brand-500/50 group-hover:shadow-[0_0_20px_rgba(242,125,38,0.3)] transition-all">
                  {step.num}
                </div>
                <h4 className="text-[13px] font-bold text-white uppercase tracking-widest mb-2">{step.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
