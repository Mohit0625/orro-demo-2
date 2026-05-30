import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#050505] to-transparent -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-500 text-[10px] font-bold uppercase tracking-widest mb-3"
            >
              Get In Touch
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold tracking-tighter text-white mb-6 leading-[0.9]"
            >
              Let\'s Start Building <br /> <span className="text-gradient">Your Vision</span>
            </motion.h3>
            <p className="text-gray-400 text-lg mb-10">
              Ready to elevate your digital presence? Contact our Delhi office today to discuss your next web development project.
            </p>

            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-white/[0.03] flex items-center justify-center shrink-0 border border-white/5">
                  <Mail className="text-brand-500 w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Email Us</div>
                  <a href="mailto:hello@orrodigital.com" className="text-white text-lg font-bold hover:text-brand-500 transition-colors">hello@orrodigital.com</a>
                </div>
              </motion.div>

              <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-white/[0.03] flex items-center justify-center shrink-0 border border-white/5">
                  <Phone className="text-brand-500 w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Call Us</div>
                  <a href="tel:+919876543210" className="text-white text-lg font-bold hover:text-brand-500 transition-colors">+91 98765 43210</a>
                </div>
              </motion.div>

              <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-white/[0.03] flex items-center justify-center shrink-0 border border-white/5">
                  <MapPin className="text-brand-500 w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Visit Us</div>
                  <address className="text-white text-lg font-bold not-italic">
                    Connaught Place,<br />
                    New Delhi, DL 110001, India
                  </address>
                </div>
              </motion.div>
            </div>
            
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-12"
             >
                <a href="#" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 font-bold text-white transition-colors">
                  Chat via WhatsApp
                </a>
             </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-[32px] border border-white/10 shadow-2xl relative"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">First Name</label>
                  <input type="text" id="firstName" className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Last Name</label>
                  <input type="text" id="lastName" className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Email Address</label>
                <input type="email" id="email" className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="john@company.com" />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Interested Service</label>
                 <select id="service" className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors appearance-none">
                    <option value="" className="bg-[#050505]">Select a service...</option>
                    <option value="business" className="bg-[#050505]">Business Website</option>
                    <option value="ecommerce" className="bg-[#050505]">E-Commerce Development</option>
                    <option value="landing" className="bg-[#050505]">Landing Page</option>
                    <option value="other" className="bg-[#050505]">Other / Consultation</option>
                  </select>
              </div>

               <div>
                <label htmlFor="message" className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
              </div>

              <button type="submit" className="w-full py-4 rounded-xl bg-brand-500 text-black font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-brand-600 transition-colors">
                Send Request <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
