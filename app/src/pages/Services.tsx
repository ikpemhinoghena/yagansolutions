import { motion } from 'framer-motion';
import { 
  Globe, 
  Zap, 
  TrendingUp, 
  Shield, 
  Code, 
  Search, 
  Wrench,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Clock,
  Users,
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';
import LiquidGlassCard from '../components/LiquidGlassCard';

const Services = () => {
  const mainServices = [
    {
      icon: <Globe className="w-10 h-10" />,
      title: 'Web Development',
      shortDesc: 'Custom websites built for performance and conversion.',
      fullDesc: 'We create stunning, high-performing websites that captivate your audience and drive conversions. From landing pages to complex web applications, we deliver solutions tailored to your business needs.',
      features: [
        'Custom Design & Development',
        'Responsive & Mobile-First',
        'Performance Optimized',
        'SEO-Friendly Architecture',
        'CMS Integration',
        'E-commerce Solutions'
      ],
      benefits: [
        '40% faster load times',
        '3x higher conversion rates',
        'Improved user engagement'
      ],
      color: 'from-[#1A56DB] to-[#00C6C6]',
      glowColor: 'blue' as const
    },
    {
      icon: <Search className="w-10 h-10" />,
      title: 'SEO Optimization',
      shortDesc: 'Dominate search rankings and increase visibility.',
      fullDesc: 'Our data-driven SEO strategies help you climb the search rankings, attract qualified traffic, and establish authority in your industry. We focus on sustainable, long-term results.',
      features: [
        'Comprehensive SEO Audit',
        'Keyword Research & Strategy',
        'On-Page Optimization',
        'Technical SEO',
        'Link Building',
        'Content Strategy'
      ],
      benefits: [
        'First page rankings',
        '300% organic traffic increase',
        'Higher quality leads'
      ],
      color: 'from-[#6C3FF5] to-[#1A56DB]',
      glowColor: 'violet' as const
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: 'Performance Audit',
      shortDesc: 'Identify issues and unlock your website potential.',
      fullDesc: 'Our comprehensive audits analyze every aspect of your website performance, from speed and SEO to user experience and conversion optimization. Get actionable insights to improve.',
      features: [
        'Speed & Performance Analysis',
        'SEO Health Check',
        'UX/UI Evaluation',
        'Security Assessment',
        'Competitor Analysis',
        'Detailed Action Plan'
      ],
      benefits: [
        'Identify hidden issues',
        'Prioritized improvements',
        'ROI-focused recommendations'
      ],
      color: 'from-[#00C6C6] to-[#6C3FF5]',
      glowColor: 'cyan' as const
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      title: 'Website Maintenance',
      shortDesc: 'Keep your site secure, updated, and running smoothly.',
      fullDesc: 'Focus on your business while we handle the technical details. Our maintenance plans ensure your website stays secure, fast, and up-to-date with regular monitoring and support.',
      features: [
        '24/7 Uptime Monitoring',
        'Security Updates & Patches',
        'Regular Backups',
        'Performance Optimization',
        'Content Updates',
        'Priority Support'
      ],
      benefits: [
        '99.9% uptime guarantee',
        'Peace of mind',
        'Proactive issue resolution'
      ],
      color: 'from-[#1A56DB] to-[#6C3FF5]',
      glowColor: 'blue' as const
    }
  ];

  const additionalServices = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Custom Development',
      description: 'Tailored solutions for unique business requirements.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Speed Optimization',
      description: 'Lightning-fast load times for better UX and SEO.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Security Hardening',
      description: 'Protect your site from threats and vulnerabilities.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Conversion Optimization',
      description: 'Turn more visitors into paying customers.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$999',
      period: 'one-time',
      description: 'Perfect for small businesses getting started.',
      features: [
        '5-page website',
        'Mobile responsive',
        'Basic SEO setup',
        'Contact form',
        '2 revision rounds'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$2,499',
      period: 'one-time',
      description: 'Ideal for growing businesses.',
      features: [
        '10-page website',
        'Advanced SEO',
        'Blog setup',
        'Analytics integration',
        '5 revision rounds',
        '30-day support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'quote',
      description: 'For large-scale projects.',
      features: [
        'Unlimited pages',
        'Custom functionality',
        'Priority support',
        'Dedicated manager',
        'Unlimited revisions',
        '90-day support'
      ],
      popular: false
    }
  ];

  return (
    <div className="relative pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#6C3FF5]/15 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#1A56DB]/15 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#00C6C6] text-sm font-semibold uppercase tracking-wider mb-4 block">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Solutions That <span className="gradient-text">Drive Growth</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10">
              From web development to ongoing maintenance, we provide comprehensive 
              digital solutions tailored to your business goals.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Discuss Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} mb-6`}>
                    {service.icon}
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    {service.title}
                  </h2>
                  <p className="text-white/70 text-lg mb-6">
                    {service.fullDesc}
                  </p>
                  
                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-white/60">
                        <CheckCircle className="w-4 h-4 text-[#00C6C6] flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Benefits */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {service.benefits.map((benefit) => (
                      <span 
                        key={benefit}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-white/70"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    to="/contact" 
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                
                {/* Visual */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <LiquidGlassCard glowColor={service.glowColor} className="h-80 flex items-center justify-center">
                    <div className="text-center">
                      <div className={`inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br ${service.color} mb-6`}>
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-white/60">{service.shortDesc}</p>
                    </div>
                  </LiquidGlassCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-radial" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Additional <span className="gradient-text">Services</span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Complementary services to enhance your digital presence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <LiquidGlassCard className="text-center h-full">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/5 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-white/60 text-sm">{service.description}</p>
                </LiquidGlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Transparent <span className="gradient-text">Pricing</span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Choose the plan that fits your needs. All plans include our commitment to quality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <LiquidGlassCard 
                  glowColor={plan.popular ? 'violet' : 'none'}
                  className={`h-full relative ${plan.popular ? 'border-[#6C3FF5]/50' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#6C3FF5] to-[#1A56DB] text-xs font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold gradient-text-animated">{plan.price}</span>
                      {plan.period !== 'quote' && (
                        <span className="text-white/50">/{plan.period}</span>
                      )}
                    </div>
                    <p className="text-white/60 text-sm mt-2">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-white/70">
                        <CheckCircle className="w-4 h-4 text-[#00C6C6] flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact"
                    className={`w-full py-3 rounded-xl font-semibold text-center block transition-all ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-[#1A56DB] to-[#6C3FF5] text-white hover:shadow-lg hover:shadow-[#6C3FF5]/30' 
                        : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    Get Started
                  </Link>
                </LiquidGlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A56DB]/10 via-[#6C3FF5]/10 to-[#00C6C6]/10" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose <span className="gradient-text">YaganSolutions?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Award className="w-6 h-6" />, title: 'Expert Team', desc: 'Years of industry experience' },
              { icon: <Clock className="w-6 h-6" />, title: 'On-Time Delivery', desc: 'We respect your deadlines' },
              { icon: <Users className="w-6 h-6" />, title: 'Dedicated Support', desc: 'We are here when you need us' },
              { icon: <TrendingUp className="w-6 h-6" />, title: 'Results Driven', desc: 'Focused on your success' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#1A56DB] to-[#6C3FF5] mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Let us discuss your project and create something amazing together.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2 text-lg">
              <Sparkles className="w-5 h-5" />
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
