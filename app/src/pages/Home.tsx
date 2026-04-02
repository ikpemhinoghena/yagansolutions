import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  Zap, 
  TrendingUp, 
  Shield,
  CheckCircle,
  Star,
  Users,
  Clock,
  Award,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';
import TypingText from '../components/TypingText';
import LiquidGlassCard from '../components/LiquidGlassCard';

const Home = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8 text-[#1A56DB]" />,
      title: 'Web Development',
      description: 'Custom websites built for performance, conversion, and user experience.',
      features: ['Responsive Design', 'Fast Loading', 'SEO Ready']
    },
    {
      icon: <Zap className="w-8 h-8 text-[#6C3FF5]" />,
      title: 'SEO Optimization',
      description: 'Data-driven strategies to boost your search rankings and visibility.',
      features: ['Keyword Research', 'On-Page SEO', 'Link Building']
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#00C6C6]" />,
      title: 'Performance Audit',
      description: 'Comprehensive analysis to identify and fix performance bottlenecks.',
      features: ['Speed Analysis', 'Code Review', 'Optimization Plan']
    },
    {
      icon: <Shield className="w-8 h-8 text-[#1A56DB]" />,
      title: 'Maintenance',
      description: 'Ongoing support to keep your website secure, updated, and running smoothly.',
      features: ['24/7 Monitoring', 'Security Updates', 'Regular Backups']
    }
  ];

  const process = [
    {
      number: '01',
      title: 'Request',
      description: 'Share your vision and requirements with us.',
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      number: '02',
      title: 'Create',
      description: 'We build your solution with precision and care.',
      icon: <Zap className="w-6 h-6" />
    },
    {
      number: '03',
      title: 'Review',
      description: 'Collaborate and refine until it is perfect.',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      number: '04',
      title: 'Approve',
      description: 'Give the final nod and we deploy.',
      icon: <Star className="w-6 h-6" />
    },
    {
      number: '05',
      title: 'Grow',
      description: 'Watch your business thrive online.',
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const stats = [
    { value: '150+', label: 'Projects Delivered', icon: <CheckCircle className="w-5 h-5" /> },
    { value: '98%', label: 'Client Satisfaction', icon: <Star className="w-5 h-5" /> },
    { value: '24/7', label: 'Support Available', icon: <Clock className="w-5 h-5" /> },
    { value: '50+', label: 'Happy Clients', icon: <Users className="w-5 h-5" /> }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'CEO, TechStart Inc.',
      content: 'YaganSolutions transformed our outdated website into a modern conversion machine. Our leads increased by 340% in just 3 months!',
      rating: 5
    },
    {
      name: 'James Rodriguez',
      role: 'Marketing Director, GrowthCo',
      content: 'The SEO work they did pushed us to page one for our main keywords. Professional team, excellent communication, outstanding results.',
      rating: 5
    },
    {
      name: 'Emily Chen',
      role: 'Founder, EcoStore',
      content: 'Their maintenance service gives me peace of mind. My site is always up, secure, and performing at its best. Highly recommended!',
      rating: 5
    }
  ];

  const trustBadges = [
    { icon: <Award className="w-5 h-5" />, text: 'Certified Experts' },
    { icon: <Shield className="w-5 h-5" />, text: 'Secure Payments' },
    { icon: <Clock className="w-5 h-5" />, text: 'On-Time Delivery' },
    { icon: <Star className="w-5 h-5" />, text: '5-Star Rated' }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6C3FF5]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1A56DB]/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00C6C6]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {trustBadges.map((badge, index) => (
              <motion.div
                key={badge.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="trust-badge px-4 py-2 rounded-full flex items-center gap-2 text-sm"
              >
                {badge.icon}
                <span className="text-white/80">{badge.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-white">We Improve</span>
            <br />
            <TypingText 
              words={['Websites', 'SEO', 'Performance', 'Digital Presence', 'Business Growth']}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
              typingSpeed={120}
              deletingSpeed={60}
              pauseDuration={2500}
            />
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10"
          >
            We find underperforming websites, rebuild them into powerful business assets, 
            and help you dominate your digital space.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link to="/contact" className="btn-primary text-lg flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5" />
              Get Free Website Audit
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/services" className="btn-secondary text-lg flex items-center justify-center gap-2">
              Explore Services
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="liquid-glass rounded-2xl p-4 text-center"
              >
                <div className="flex justify-center mb-2 text-[#00C6C6]">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl font-bold gradient-text-animated">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
          >
            <motion.div
              animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white/60 rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#00C6C6] text-sm font-semibold uppercase tracking-wider mb-4 block">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Services That <span className="gradient-text">Drive Results</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              From discovery to deployment, we provide end-to-end digital solutions 
              that transform your online presence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <LiquidGlassCard glowColor={index % 2 === 0 ? 'blue' : 'violet'} className="h-full">
                  <div className="service-icon-glow inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-white/60 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-white/50">
                        <CheckCircle className="w-4 h-4 text-[#00C6C6]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </LiquidGlassCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/services" className="btn-secondary inline-flex items-center gap-2">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#6C3FF5] text-sm font-semibold uppercase tracking-wider mb-4 block">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Simple. Transparent. <span className="gradient-text">Effective.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <LiquidGlassCard className="text-center h-full">
                  <div className="text-4xl font-bold gradient-text-animated mb-4">{step.number}</div>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#1A56DB] to-[#6C3FF5] mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-white/60 text-sm">{step.description}</p>
                </LiquidGlassCard>
                
                {/* Connector Line (hidden on mobile and last item) */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-[#1A56DB] to-[#6C3FF5]" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#1A56DB] text-sm font-semibold uppercase tracking-wider mb-4 block">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <LiquidGlassCard glowColor="cyan" className="h-full">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-white/80 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1A56DB] to-[#6C3FF5] flex items-center justify-center text-white font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-white/50 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </LiquidGlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A56DB]/20 via-[#6C3FF5]/20 to-[#00C6C6]/20" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your <span className="gradient-text">Digital Presence?</span>
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Get a free website audit and discover how we can help you achieve 
              your business goals. No obligations, just insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary text-lg flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5" />
                Start Your Free Audit
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            <p className="text-white/40 text-sm mt-6">
              Limited spots available. Secure yours today.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
