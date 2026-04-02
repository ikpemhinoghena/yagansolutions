import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Mail, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  Sparkles,
  ArrowRight,
  Globe,
  Zap,
  Heart,
  Award,
  Clock,
  Send,
  AlertCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import LiquidGlassCard from '../components/LiquidGlassCard';

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    field: '',
    experience: '',
    linkedin: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Store in localStorage for demo purposes
    const submissions = JSON.parse(localStorage.getItem('careerSubmissions') || '[]');
    submissions.push({ ...formData, timestamp: new Date().toISOString() });
    localStorage.setItem('careerSubmissions', JSON.stringify(submissions));
  };

  const fields = [
    'Web Development',
    'SEO & Digital Marketing',
    'UI/UX Design',
    'Project Management',
    'Content Writing',
    'Business Development',
    'Other'
  ];

  const experienceLevels = [
    'Entry Level (0-2 years)',
    'Mid Level (3-5 years)',
    'Senior Level (6-8 years)',
    'Expert Level (9+ years)'
  ];

  const benefits = [
    { icon: <Globe className="w-6 h-6" />, title: 'Remote First', description: 'Work from anywhere in the world' },
    { icon: <Clock className="w-6 h-6" />, title: 'Flexible Hours', description: 'Choose your own schedule' },
    { icon: <TrendingUp className="w-6 h-6" />, title: 'Growth Opportunities', description: 'Continuous learning and development' },
    { icon: <Heart className="w-6 h-6" />, title: 'Health Benefits', description: 'Comprehensive health coverage' },
    { icon: <Award className="w-6 h-6" />, title: 'Competitive Pay', description: 'Industry-leading compensation' },
    { icon: <Users className="w-6 h-6" />, title: 'Amazing Team', description: 'Collaborate with talented professionals' }
  ];

  return (
    <div className="relative min-h-screen pt-24 pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6C3FF5]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1A56DB]/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00C6C6]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
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
            <Briefcase className="w-10 h-10 text-white" />
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Work With <span className="gradient-text">Us</span>
          </h1>
          
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
            Join our team of passionate digital craftsmen and help us build 
            extraordinary experiences that make a difference.
          </p>
        </motion.div>

        {/* Current Openings Status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <LiquidGlassCard glowColor="violet" className="py-16">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#6C3FF5] to-[#1A56DB] mb-6">
                <AlertCircle className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-4">
                No Current Openings
              </h2>
              
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                We're not actively hiring at the moment, but we're always looking for exceptional talent. 
                Join our talent network below, and we'll notify you when positions open up that match your skills.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
                {[
                  { icon: <Zap className="w-6 h-6" />, title: 'Exciting Projects', desc: 'Work on cutting-edge solutions' },
                  { icon: <Users className="w-6 h-6" />, title: 'Great Culture', desc: 'Collaborative environment' },
                  { icon: <TrendingUp className="w-6 h-6" />, title: 'Career Growth', desc: 'Advance your skills' }
                ].map((item) => (
                  <div key={item.title} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 text-[#00C6C6] mb-3">
                      {item.icon}
                    </div>
                    <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                    <p className="text-white/50 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </LiquidGlassCard>
        </motion.div>

        {/* Why Work Here */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <span className="text-[#00C6C6] text-sm font-semibold uppercase tracking-wider mb-4 block">
              Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Why Work At <span className="gradient-text">YaganSolutions?</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              We believe in taking care of our team and providing an environment where everyone can thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <LiquidGlassCard className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#1A56DB] to-[#6C3FF5] flex items-center justify-center text-white">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{benefit.title}</h3>
                      <p className="text-white/60 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                </LiquidGlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Notification Signup Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <LiquidGlassCard glowColor="cyan" className="py-12 px-6 sm:px-12">
            {!isSubmitted ? (
              <>
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#00C6C6] to-[#1A56DB] mb-4">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    Join Our Talent Network
                  </h2>
                  <p className="text-white/60">
                    Be the first to know when we open new positions. Share your details and we'll keep you updated.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#00C6C6] focus:outline-none transition-colors input-glow"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#00C6C6] focus:outline-none transition-colors input-glow"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">
                        Your Field *
                      </label>
                      <select
                        name="field"
                        value={formData.field}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#00C6C6] focus:outline-none transition-colors input-glow appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-[#0D1433]">Select your field</option>
                        {fields.map((field) => (
                          <option key={field} value={field} className="bg-[#0D1433]">
                            {field}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">
                        Experience Level *
                      </label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#00C6C6] focus:outline-none transition-colors input-glow appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-[#0D1433]">Select experience level</option>
                        {experienceLevels.map((level) => (
                          <option key={level} value={level} className="bg-[#0D1433]">
                            {level}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      LinkedIn Profile (Optional)
                    </label>
                    <input
                      type="url"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#00C6C6] focus:outline-none transition-colors input-glow"
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Tell Us About Yourself (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#00C6C6] focus:outline-none transition-colors input-glow resize-none"
                      placeholder="Share your skills, interests, or anything else you'd like us to know..."
                    />
                  </div>

                  {error && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <p className="text-sm">{error}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5" />
                        Join Talent Network
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-white/40 text-xs text-center">
                    By submitting, you agree to receive job notifications from YaganSolutions. 
                    We respect your privacy and will never spam you.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#00C6C6] to-[#1A56DB] mb-6"
                >
                  <CheckCircle className="w-10 h-10 text-white" />
                </motion.div>

                <h2 className="text-3xl font-bold text-white mb-4">
                  You're On The List!
                </h2>
                
                <p className="text-white/70 text-lg mb-8 max-w-md mx-auto">
                  Thank you for joining our talent network. We'll reach out to you at{' '}
                  <strong className="text-white">{formData.email}</strong> when relevant positions open up.
                </p>

                <div className="liquid-glass rounded-2xl p-6 mb-8">
                  <div className="flex items-center gap-3 text-white/70 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>You'll be notified about new openings</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Priority consideration for roles</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>No spam, only relevant opportunities</span>
                  </div>
                </div>

                <Link to="/" className="btn-secondary inline-flex items-center gap-2">
                  Back to Home
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </LiquidGlassCard>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-xl font-bold text-white mb-4">
            Can't Wait to Hear From Us?
          </h3>
          <p className="text-white/60 mb-6 max-w-xl mx-auto">
            If you have an immediate opportunity or specific project in mind, feel free to reach out directly.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Get In Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Careers;
