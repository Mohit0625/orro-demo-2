export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-20 pb-10 relative border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center shadow-[0_0_20px_rgba(242,125,38,0.3)]">
                <span className="font-black text-black text-sm">O</span>
              </div>
              <span className="font-bold text-lg tracking-tighter text-white">
                ORRO <span className="text-brand-500">DIGITAL</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Delhi\'s premier web development agency, building SEO-first, high-performance digital experiences since 2021.
            </p>
          </div>

          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-white mb-6">Quick Links</h5>
            <ul className="space-y-4 text-sm font-semibold text-gray-500">
              <li><a href="#about" className="hover:text-brand-500 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-brand-500 transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-brand-500 transition-colors">Portfolio</a></li>
              <li><a href="#process" className="hover:text-brand-500 transition-colors">Our Process</a></li>
              <li><a href="#contact" className="hover:text-brand-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-white mb-6">Services</h5>
            <ul className="space-y-4 text-sm font-semibold text-gray-500">
              <li><a href="#services" className="hover:text-brand-500 transition-colors">Business Websites</a></li>
              <li><a href="#services" className="hover:text-brand-500 transition-colors">E-Commerce</a></li>
              <li><a href="#services" className="hover:text-brand-500 transition-colors">Landing Pages</a></li>
              <li><a href="#services" className="hover:text-brand-500 transition-colors">SEO Optimization</a></li>
              <li><a href="#services" className="hover:text-brand-500 transition-colors">Maintenance</a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-white mb-6">Legal</h5>
            <ul className="space-y-4 text-sm font-semibold text-gray-500">
              <li><a href="#" className="hover:text-brand-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-500">
          <p>&copy; {currentYear} ORRO DIGITAL. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
