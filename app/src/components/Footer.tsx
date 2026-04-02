import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight,
  Shield,
  Cookie,
  FileText,
  CreditCard,
  Bitcoin,
  Wallet
} from 'lucide-react';

interface FooterProps {
  openPolicyModal: (type: 'privacy' | 'cookie' | 'terms') => void;
}

const Footer = ({ openPolicyModal }: FooterProps) => {
  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'Free Audit', path: '/website-audit' },
  ];

  const services = [
    { label: 'Web Development', path: '/services' },
    { label: 'SEO Optimization', path: '/services' },
    { label: 'Website Maintenance', path: '/services' },
    { label: 'Performance Audit', path: '/website-audit' },
    { label: 'Developer Tools', path: '/services' },
  ];

  const tools = [
    { label: 'Code Generator', path: '#' },
    { label: 'SEO Analyzer', path: '#' },
    { label: 'Speed Test', path: '#' },
    { label: 'Color Palette', path: '#' },
    { label: 'API Tester', path: '#' },
  ];

  const socialLinks = [
    { label: 'Twitter', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'GitHub', href: '#' },
    { label: 'Discord', href: '#' },
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6C3FF5] to-transparent" />
      
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#6C3FF5]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#1A56DB]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src="/logo.png" 
                  alt="YaganSolutions" 
                  className="w-12 h-12 object-contain logo-glow"
                />
                <div>
                  <h3 className="text-xl font-bold gradient-text-animated">YaganSolutions</h3>
                  <p className="text-white/50 text-sm">Digital Excellence Delivered</p>
                </div>
              </div>
              
              <p className="text-white/70 mb-6 max-w-sm leading-relaxed">
                We transform underperforming websites into powerful business assets. 
                From discovery to deployment, we ensure your digital presence drives growth.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <a 
                  href="mailto:help@yagansolutions.com" 
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 text-[#00C6C6]" />
                  <span className="footer-link">help@yagansolutions.com</span>
                </a>
                <a 
                  href="tel:+2349138155550" 
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
                >
                  <Phone className="w-4 h-4 text-[#00C6C6]" />
                  <span className="footer-link">+234 913 815 5550</span>
                </a>
                <div className="flex items-center gap-3 text-white/70">
                  <MapPin className="w-4 h-4 text-[#00C6C6]" />
                  <span>Global Remote Team</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-[#6C3FF5]/50 transition-all"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.path}
                    className="text-white/70 hover:text-white transition-colors footer-link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link 
                    to={service.path}
                    className="text-white/70 hover:text-white transition-colors footer-link"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
              Developer Tools
            </h4>
            <ul className="space-y-3">
              {tools.map((tool) => (
                <li key={tool.label}>
                  <a 
                    href={tool.path}
                    className="text-white/70 hover:text-white transition-colors footer-link"
                  >
                    {tool.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="text-white/50 text-sm">We Accept:</span>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 payment-icon">
                  <CreditCard className="w-4 h-4" />
                  <span className="text-sm">Stripe</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 payment-icon">
                  <Wallet className="w-4 h-4" />
                  <span className="text-sm">PayPal</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 payment-icon">
                  <Bitcoin className="w-4 h-4" />
                  <span className="text-sm">Crypto</span>
                </div>
              </div>
            </div>
            
            {/* Policy Links */}
            <div className="flex items-center gap-6">
              <button
                onClick={() => openPolicyModal('privacy')}
                className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm footer-link"
              >
                <Shield className="w-4 h-4" />
                Privacy Policy
              </button>
              <button
                onClick={() => openPolicyModal('cookie')}
                className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm footer-link"
              >
                <Cookie className="w-4 h-4" />
                Cookie Policy
              </button>
              <button
                onClick={() => openPolicyModal('terms')}
                className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm footer-link"
              >
                <FileText className="w-4 h-4" />
                Terms of Service
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar with Large Logo */}
      <div className="relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              &copy; {new Date().getFullYear()} YaganSolutions. All rights reserved.
            </p>
            <p className="text-white/40 text-sm">
              Crafted with precision for digital excellence.
            </p>
          </div>
        </div>
        
        {/* Large Glowing Logo */}
        <motion.div 
          className="absolute bottom-0 right-0 pointer-events-none"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#6C3FF5]/30 via-[#1A56DB]/20 to-transparent blur-3xl" />
            <img 
              src="/logo.png" 
              alt="" 
              className="w-48 h-48 md:w-64 md:h-64 object-contain opacity-20 logo-glow"
            />
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
