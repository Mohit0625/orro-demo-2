import { motion } from "motion/react";
import { Monitor, Briefcase, ShoppingCart, Rocket, Gauge, Wrench } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Business Website Development",
      description: "Custom websites designed to generate leads and showcase your professional services.",
      icon: Briefcase,
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "Corporate Website Design",
      description: "Enterprise-grade digital experiences that build trust and communicate authority.",
      icon: Monitor,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "E-Commerce Development",
      description: "Robust online stores with seamless payment gateways and inventory management.",
      icon: ShoppingCart,
      color: "from-amber-500 to-orange-400"
    },
    {
      title: "Landing Page Design",
      description: "High-converting landing pages engineered specifically for marketing campaigns.",
      icon: Rocket,
      color: "from-emerald-500 to-teal-400"
    },
    {
      title: "Website Optimization",
      description: "Technical SEO, speed enhancements, and mobile responsiveness for better rankings.",
      icon: Gauge,
      color: "from-brand-500 to-accent-500"
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing security monitoring, updates, backups, and technical support.",
      icon: Wrench,
      color: "from-rose-500 to-red-500"
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-500 text-[10px] font-bold uppercase tracking-widest mb-3"
          >
            Capabilities
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6 leading-[0.9]"
          >
            Digital Services That <br/> Drive Results
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[32px] relative group overflow-hidden hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-between"
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none z-0" />
              
              <div className={`p-3 rounded-xl bg-white/[0.03] border border-white/5 w-fit mb-6 relative z-10 shadow-lg`}>
                <service.icon className="w-6 h-6 text-brand-500" />
              </div>
              
              <h4 className="text-xl font-bold text-white mb-3 relative z-10">{service.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed relative z-10">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
