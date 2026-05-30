import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

export default function FAQ() {
  const faqs = [
    {
      q: "How much does a business website cost?",
      a: "Website development costs vary based on complexity, features, and platform requirements. Contact us for a personalized quote tailored to your specific business needs."
    },
    {
      q: "How long does website development take?",
      a: "A standard business website typically takes 3-6 weeks from discovery to launch. Complex e-commerce platforms or custom web applications may take 8-12 weeks."
    },
    {
      q: "Do you provide website maintenance?",
      a: "Yes, we offer ongoing maintenance and support packages that include security monitoring, software updates, regular backups, and technical support."
    },
    {
      q: "Are your websites SEO optimized?",
      a: "Absolutely. We follow a technical SEO-first approach. Every website is built with clean semantic HTML, optimized loading speeds, mobile responsiveness, and proper heading hierarchies."
    },
    {
      q: "Can you redesign an existing website?",
      a: "Yes. We can audit your current website, identify performance bottlenecks and UX issues, and completely redesign it to align with modern web standards and your current brand identity."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
           <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4 leading-[0.9]"
          >
            Frequently Asked <span className="text-gradient">Questions</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-bold text-white text-base">{faq.q}</span>
                  <ChevronDown 
                    className={cn(
                      "text-gray-400 transition-transform duration-300", 
                      isOpen ? "rotate-180" : ""
                    )} 
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-gray-400 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
