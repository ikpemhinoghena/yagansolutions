import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Zap, Globe, Code } from 'lucide-react';

interface HeaderProps {
  scrollY: number;
}

const Header = ({ scrollY }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  const isScrolled = scrollY > 50;

  const navLinks = [
    { path: '/', label: 'Home', icon: <Sparkles className="w-4 h-4" /> },
    { path: '/services', label: 'Services', icon: <Zap className="w-4 h-4" /> },
    { path: '/about', label: 'About', icon: <Globe className="w-4 h-4" /> },
    { path: '/contact', label: 'Contact', icon: <Code className="w-4 h-4" /> },
  ];

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
            ? 'py-3 liquid-glass-strong'
            : 'py-5 bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <img
                  src="/logo.png"
                  alt="YaganSolutions"
                  className="w-10 h-10 object-contain logo-glow"
                />
                {/* Orbiting particles */}
                <motion.div
                  className="absolute inset-0"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                >
                  <div className="absolute -top-1 left-1/2 w-1 h-1 bg-[#00C6C6] rounded-full" />
                </motion.div>
              </motion.div>

              <AnimatePresence>
                {(isHovered || isScrolled) && (
                  <motion.div
                    initial={{ opacity: 0, x: -10, width: 0 }}
                    animate={{ opacity: 1, x: 0, width: 'auto' }}
                    exit={{ opacity: 0, x: -10, width: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <span className="text-lg font-bold whitespace-nowrap gradient-text-animated">
                      YaganSolutions
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <Link
                    to={link.path}
                    className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 group flex items-center gap-2 ${location.pathname === link.path
                        ? 'text-white'
                        : 'text-white/70 hover:text-white'
                      }`}
                  >
                    {/* Active indicator */}
                    {location.pathname === link.path && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-gradient-to-r from-[#1A56DB]/30 to-[#6C3FF5]/30 rounded-xl border border-white/10"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}

                    <span className="relative z-10 flex items-center gap-2">
                      <motion.span
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ rotate: 15 }}
                      >
                        {link.icon}
                      </motion.span>
                      {link.label}
                    </span>

                    {/* Hover glow */}
                    <motion.div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        background: 'radial-gradient(circle at center, rgba(108, 63, 245, 0.2) 0%, transparent 70%)'
                      }}
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="hidden md:block"
            >
              <Link
                to="/website-audit"
                className="btn-primary text-sm flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Get Free Audit
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative z-50 p-2"
            >
              <div className={`hamburger ${isMenuOpen ? 'active' : ''} flex flex-col gap-1.5`}>
                <span className="w-6 h-0.5 bg-white rounded-full" />
                <span className="w-6 h-0.5 bg-white rounded-full" />
                <span className="w-6 h-0.5 bg-white rounded-full" />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#0D1433]/95 backdrop-blur-xl"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-72 bg-[#0D1433] border-l border-white/10 p-8 pt-24"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${location.pathname === link.path
                          ? 'bg-gradient-to-r from-[#1A56DB]/30 to-[#6C3FF5]/30 text-white'
                          : 'text-white/70 hover:text-white hover:bg-white/5'
                        }`}
                    >
                      {link.icon}
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4"
                >
                  <Link
                    to="/website-audit"
                    className="btn-primary w-full justify-center flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    Get Free Audit
                  </Link>
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-2 text-white/40 text-sm">
                  <img src="/logo.png" alt="" className="w-6 h-6 opacity-50" />
                  <span>YaganSolutions</span>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
