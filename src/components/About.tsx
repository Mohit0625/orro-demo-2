import { motion } from "motion/react";
import { Building2, CheckCircle2, Users, Target } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Projects Delivered", value: "20+", icon: CheckCircle2 },
    { label: "Years Experience", value: "4+", icon: Building2 },
    { label: "Industries Served", value: "5+", icon: Target },
    { label: "Client Satisfaction", value: "95%", icon: Users },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-brand-500 text-[10px] font-bold uppercase tracking-widest mb-3">About Orro Digital</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6 leading-[0.9]">
              We engineer digital <br/> <span className="text-gradient">success stories.</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              ORRO DIGITAL is a Delhi-based website development agency established in 2021 with a mission to help businesses establish a strong online presence through modern, high-performing websites.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Since our inception, we have successfully delivered projects for over 20 clients across industries including professional services, retail, healthcare, education, hospitality, and startups. We combine creative design with modern development practices to build websites that are visually appealing, fast-loading, and optimized for search engines.
            </p>
            
            <div className="flex gap-4">
              <div className="p-6 bg-glass-dark rounded-[32px] flex-1">
                <h4 className="text-white font-bold mb-2">Our Mission</h4>
                <p className="text-sm text-gray-400">To empower businesses with digital solutions that enhance visibility, build trust, and drive measurable growth.</p>
              </div>
              <div className="p-6 bg-glass-dark rounded-[32px] flex-1">
                <h4 className="text-white font-bold mb-2">Our Vision</h4>
                <p className="text-sm text-gray-400">To become Delhi\'s most trusted web development agency by delivering innovative, user-centric experiences.</p>
              </div>
            </div>
          </motion.div>

          {/* Visual / Stats */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-600/10 to-blue-600/10 rounded-[3rem] blur-3xl -z-10" />
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[32px] flex flex-col items-center justify-center text-center group hover:bg-white/10 transition-colors"
                >
                  <stat.icon className="w-8 h-8 text-brand-500 mb-4 group-hover:scale-110 transition-transform" />
                  <span className="text-4xl font-bold text-white mb-2">{stat.value}</span>
                  <span className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
