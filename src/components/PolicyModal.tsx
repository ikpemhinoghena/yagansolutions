import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Cookie, FileText } from 'lucide-react';

interface PolicyModalProps {
  isOpen: boolean;
  type: 'privacy' | 'cookie' | 'terms' | null;
  onClose: () => void;
}

const PolicyModal = ({ isOpen, type, onClose }: PolicyModalProps) => {
  if (!type) return null;

  const policyContent = {
    privacy: {
      title: 'Privacy Policy',
      icon: <Shield className="w-6 h-6 text-[#6C3FF5]" />,
      content: `
        <h3 className="text-lg font-semibold mb-3 text-white">1. Information We Collect</h3>
        <p className="mb-4 text-white/70">We collect information you provide directly to us, including name, email address, phone number, and any other information you choose to provide when contacting us or using our services.</p>
        
        <h3 className="text-lg font-semibold mb-3 text-white">2. How We Use Your Information</h3>
        <p className="mb-4 text-white/70">We use the information we collect to provide, maintain, and improve our services, communicate with you, and personalize your experience.</p>
        
        <h3 className="text-lg font-semibold mb-3 text-white">3. Information Sharing</h3>
        <p className="mb-4 text-white/70">We do not sell, trade, or otherwise transfer your personally identifiable information to third parties without your consent, except as required by law.</p>
        
        <h3 className="text-lg font-semibold mb-3 text-white">4. Data Security</h3>
        <p className="mb-4 text-white/70">We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>
        
        <h3 className="text-lg font-semibold mb-3 text-white">5. Your Rights</h3>
        <p className="mb-4 text-white/70">You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.</p>
        
        <h3 className="text-lg font-semibold mb-3 text-white">6. Contact Us</h3>
        <p className="text-white/70">If you have any questions about this Privacy Policy, please contact us at help@yagansolutions.com</p>
      `
    },
    cookie: {
      title: 'Cookie Policy',
      icon: <Cookie className="w-6 h-6 text-[#00C6C6]" />,
      content: `
        <h3 className="text-lg font-semibold mb-3 text-white">1. What Are Cookies</h3>
        <p className="mb-4 text-white/70">Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.</p>
        
        <h3 className="text-lg font-semibold mb-3 text-white">2. How We Use Cookies</h3>
        <p className="mb-4 text-white/70">We use cookies to understand how you use our website, personalize your experience, analyze our traffic, and improve our services.</p>
        
        <h3 className="text-lg font-semibold mb-3 text-white">3. Types of Cookies We Use</h3>
        <ul class="list-disc pl-5 mb-4 text-white/70 space-y-2">
          <li><strong>Essential Cookies:</strong> Required for the website to function properly.</li>
          <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website.</li>
          <li><strong>Preference Cookies:</strong> Remember your settings and preferences.</li>
        </ul>
        
        <h3 className="text-lg font-semibold mb-3 text-white">4. Managing Cookies</h3>
        <p className="mb-4 text-white/70">Most web browsers allow you to control cookies through their settings. You can usually find these settings in the "Options" or "Preferences" menu of your browser.</p>
        
        <h3 className="text-lg font-semibold mb-3 text-white">5. Changes to This Policy</h3>
        <p className="text-white/70">We may update this Cookie Policy from time to time. Please check back regularly for any changes.</p>
      `
    },
    terms: {
      title: 'Terms of Service',
      icon: <FileText className="w-6 h-6 text-[#1A56DB]" />,
      content: `
        <h3 className="text-lg font-semibold mb-3 text-white">1. Acceptance of Terms</h3>
        <p className="mb-4 text-white/70">By accessing or using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
        
        <h3 className="text-lg font-semibold mb-3 text-white">2. Services Description</h3>
        <p className="mb-4 text-white/70">YaganSolutions provides web development, SEO optimization, website maintenance, and related digital services. Specific service terms will be outlined in individual contracts.</p>
        
        <h3 className="text-lg font-semibold mb-3 text-white">3. Payment Terms</h3>
        <p className="mb-4 text-white/70">Payment terms are specified in individual service agreements. We accept payments via Stripe, PayPal, and cryptocurrency. All fees are non-refundable unless otherwise stated.</p>
        
        <h3 className="text-lg font-semibold mb-3 text-white">4. Intellectual Property</h3>
        <p className="mb-4 text-white/70">All content, designs, and code created by YaganSolutions remain our intellectual property until full payment is received. Upon payment, ownership transfers to the client as specified in the service agreement.</p>
        
        <h3 className="text-lg font-semibold mb-3 text-white">5. Limitation of Liability</h3>
        <p className="mb-4 text-white/70">YaganSolutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.</p>
        
        <h3 className="text-lg font-semibold mb-3 text-white">6. Termination</h3>
        <p className="mb-4 text-white/70">Either party may terminate the service agreement with written notice. Upon termination, you remain responsible for any outstanding payments.</p>
        
        <h3 className="text-lg font-semibold mb-3 text-white">7. Governing Law</h3>
        <p className="text-white/70">These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.</p>
      `
    }
  };

  const policy = policyContent[type];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-overlay"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl max-h-[80vh] overflow-hidden liquid-glass-strong rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                {policy.icon}
                <h2 className="text-xl font-bold text-white">{policy.title}</h2>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-white/70" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div 
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: policy.content }}
              />
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-white/10 flex justify-end">
              <button
                onClick={onClose}
                className="btn-primary"
              >
                I Understand
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PolicyModal;
