import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rohit Sharma",
      role: "Managing Director, Tech Solutions",
      content: "ORRO DIGITAL transformed our outdated site into a modern, fast-loading platform. Our lead generation has increased by 40% since the new launch. Highly recommend their Delhi team."
    },
    {
      name: "Priya Singh",
      role: "Founder, Style E-Commerce",
      content: "The level of professionalism and technical SEO expertise is unmatched. They understood our brand vision and executed an e-commerce store that is beautiful and highly functional."
    },
    {
      name: "Amit Mehta",
      role: "Marketing Head, Elite Estates",
      content: "Responsive, transparent, and incredibly skilled. They delivered our corporate real estate portal ahead of schedule. Truly a premium web development agency."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
           <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4 leading-[0.9]"
          >
            Client <span className="text-gradient">Success Stories</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400"
          >
            Don\'t just take our word for it. See what our 20+ satisfied clients have to say.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white/5 backdrop-blur-xl p-8 rounded-[32px] border border-white/10 relative group hover:border-brand-500/30 transition-colors"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5 group-hover:text-brand-500/10 transition-colors" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-500 text-brand-500" />
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed mb-8 relative z-10">"{test.content}"</p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#050505] border border-white/10 flex items-center justify-center text-white font-black text-xl shadow-lg">
                  {test.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-bold">{test.name}</div>
                  <div className="text-xs text-gray-500">{test.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
