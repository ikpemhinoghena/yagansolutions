import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles,
  Search,
  MousePointer,
  Globe,
  Zap,
  Palette,
  RefreshCw,
  Mail
} from 'lucide-react';
import { Link } from 'react-router-dom';
import LiquidGlassCard from '../components/LiquidGlassCard';

const WebsiteAudit = () => {
  const [url, setUrl] = useState('');
  const [showResults, setShowResults] = useState(false);

  const analyzeWebsite = () => {
    if (!url.trim()) return;
    setShowResults(true);
  };

  return (
    <div className="relative min-h-screen pt-32 pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6C3FF5]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1A56DB]/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00C6C6]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        {!showResults && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#1A56DB] to-[#6C3FF5] mb-6"
            >
              <Search className="w-10 h-10 text-white" />
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Free Website <span className="gradient-text">Audit</span>
            </h1>
            
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Discover how your website performs across SEO, UX, UI, performance, and more. 
              Get actionable insights to improve your digital presence.
            </p>

            {/* URL Input */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              <div className="liquid-glass p-2 rounded-2xl flex flex-col sm:flex-row gap-2">
                <input
                  type="url"
                  placeholder="Enter your website URL (e.g., https://example.com)"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#1A56DB] transition-colors"
                />
                <button
                  onClick={analyzeWebsite}
                  disabled={!url.trim()}
                  className="btn-primary px-8 py-4 whitespace-nowrap flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Sparkles className="w-5 h-5" />
                  Analyze Now
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                {[
                  { icon: <Globe className="w-5 h-5" />, text: 'SEO Analysis' },
                  { icon: <MousePointer className="w-5 h-5" />, text: 'UX Evaluation' },
                  { icon: <Palette className="w-5 h-5" />, text: 'UI Review' },
                  { icon: <Zap className="w-5 h-5" />, text: 'Performance Check' }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-2 justify-center text-white/60"
                  >
                    {feature.icon}
                    <span className="text-sm">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Maintenance Message (Immediate Results) */}
        {showResults && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-3xl mx-auto"
          >
            <LiquidGlassCard glowColor="violet" className="p-12 text-center">
              <div
                className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-[#6C3FF5] to-[#1A56DB] mb-8 shadow-lg shadow-[#6C3FF5]/20"
              >
                <RefreshCw className="w-12 h-12 text-white" />
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Audit Tool Under Maintenance
              </h2>
              
              <div className="space-y-6 mb-10">
                <p className="text-xl text-white/80 leading-relaxed">
                  Our team is currently making website updates and maintenance, and the Audit tool should resume its duties soon.
                </p>
                <p className="text-lg text-white/60">
                  In the meantime, you can directly contact our team for a professional review and get your results manually.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="btn-primary px-10 py-4 text-lg flex items-center gap-2 group"
                >
                  <Mail className="w-5 h-5" />
                  Contact Team for Review
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Progress-like decorative elements */}
              <div className="mt-12 pt-8 border-t border-white/5 flex justify-center gap-8 opacity-40">
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  SEO Analysis Prepped
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-2 h-2 rounded-full bg-[#00C6C6]" />
                  UX/UI Engine Updating
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-2 h-2 rounded-full bg-[#6C3FF5]" />
                  Security Modules Ready
                </div>
              </div>
            </LiquidGlassCard>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default WebsiteAudit;
