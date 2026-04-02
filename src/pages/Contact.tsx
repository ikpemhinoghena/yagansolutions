import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock, 
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Globe,
  Zap,
  Shield
} from 'lucide-react';
import LiquidGlassCard from '../components/LiquidGlassCard';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      value: 'help@yagansolutions.com',
      href: 'mailto:help@yagansolutions.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      value: '+234 913 815 5550',
      href: 'tel:+2349138155550'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Global Remote Team',
      href: '#'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Response Time',
      value: 'Within 24 hours',
      href: '#'
    }
  ];

  const services = [
    'Web Development',
    'SEO Optimization',
    'Performance Audit',
    'Website Maintenance',
    'Custom Project',
    'Other'
  ];

  const budgets = [
    'Under $1,000',
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000+',
    'Not sure yet'
  ];

  const benefits = [
    { icon: <Zap className="w-5 h-5" />, text: 'Free initial consultation' },
    { icon: <CheckCircle className="w-5 h-5" />, text: 'Detailed project proposal' },
    { icon: <Shield className="w-5 h-5" />, text: 'No obligation quote' },
    { icon: <Globe className="w-5 h-5" />, text: 'Global expertise' }
  ];

  if (isSubmitted) {
    return (
      <div className="relative pt-24 min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6C3FF5]/15 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1A56DB]/15 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 max-w-lg mx-auto px-4 text-center"
        >
          <LiquidGlassCard glowColor="cyan" className="py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#00C6C6] to-[#1A56DB] mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Message Sent!</h2>
            <p className="text-white/70 mb-8">
              Thank you for reaching out. We will get back to you within 24 hours 
              with a detailed response.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: '',
                  email: '',
                  company: '',
                  service: '',
                  budget: '',
                  message: ''
                });
              }}
              className="btn-primary"
            >
              Send Another Message
            </button>
          </LiquidGlassCard>
        </motion.div>
      </div>
    );
  }

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
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Let Us <span className="gradient-text">Talk</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Ready to transform your digital presence? Get in touch and let us 
              discuss how we can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <LiquidGlassCard className="text-center h-full hover:border-[#00C6C6]/50 transition-colors">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#1A56DB] to-[#6C3FF5] mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{info.title}</h3>
                  <p className="text-white/60">{info.value}</p>
                </LiquidGlassCard>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <LiquidGlassCard glowColor="blue" className="h-full">
                <div className="flex items-center gap-3 mb-8">
                  <MessageSquare className="w-6 h-6 text-[#00C6C6]" />
                  <h2 className="text-2xl font-bold text-white">Send Us a Message</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">
                        Your Name *
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
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#00C6C6] focus:outline-none transition-colors input-glow"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">
                        Service Interested In *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#00C6C6] focus:outline-none transition-colors input-glow appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-[#0D1433]">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service} className="bg-[#0D1433]">
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#00C6C6] focus:outline-none transition-colors input-glow appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#0D1433]">Select budget range</option>
                      {budgets.map((budget) => (
                        <option key={budget} value={budget} className="bg-[#0D1433]">
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#00C6C6] focus:outline-none transition-colors input-glow resize-none"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5" />
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </LiquidGlassCard>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Benefits */}
              <LiquidGlassCard glowColor="violet">
                <h3 className="text-xl font-bold text-white mb-6">
                  What to Expect
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit) => (
                    <div key={benefit.text} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#00C6C6]">
                        {benefit.icon}
                      </div>
                      <span className="text-white/70">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </LiquidGlassCard>

              {/* Working Hours */}
              <LiquidGlassCard>
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-[#6C3FF5]" />
                  <h3 className="text-lg font-bold text-white">Working Hours</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-white/70">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 8:00 PM EST</span>
                  </div>
                  <div className="flex justify-between text-white/70">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex justify-between text-white/50">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
                <p className="text-white/50 text-xs mt-4">
                  * 24/7 support available for maintenance
                </p>
              </LiquidGlassCard>

              {/* Quick CTA */}
              <LiquidGlassCard glowColor="cyan" className="text-center">
                <h3 className="text-lg font-bold text-white mb-2">
                  Prefer a Call?
                </h3>
                <p className="text-white/60 text-sm mb-4">
                  Schedule a free 30-minute consultation at your convenience.
                </p>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full flex items-center justify-center gap-2"
                >
                  Book a Call
                  <ArrowRight className="w-4 h-4" />
                </a>
              </LiquidGlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-radial" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: 'How long does a typical project take?',
                a: 'Project timelines vary based on complexity. A simple website takes 2-3 weeks, while complex projects may take 6-8 weeks. We will provide a detailed timeline during our initial consultation.'
              },
              {
                q: 'What is your payment structure?',
                a: 'We typically work with a 50% upfront deposit and 50% upon completion. For larger projects, we can arrange milestone-based payments. We accept Stripe, PayPal, and cryptocurrency.'
              },
              {
                q: 'Do you offer ongoing support?',
                a: 'Yes! We offer monthly and annual maintenance packages that include 24/7 monitoring, security updates, regular backups, and priority support.'
              },
              {
                q: 'Can you work with existing websites?',
                a: 'Absolutely. We can audit, optimize, and improve existing websites, or completely rebuild them depending on your needs and goals.'
              },
              {
                q: 'Do you guarantee SEO improvements?',
                a: 'While we cannot guarantee specific rankings due to search engine algorithms constantly changing, our data-driven SEO strategies have consistently delivered first-page rankings and significant traffic increases for our clients. We focus on sustainable, white-hat techniques that build long-term authority.'
              },
              {
                q: 'What if I need custom tools or plugins?',
                a: 'We specialize in custom digital products! From plugins and extensions to AI agents, dev tools, and graphic design, we can build tailored solutions to meet your unique business requirements. Just share your idea during the consultation.'
              },
              {
                q: 'How many revisions are included?',
                a: 'The number of revisions depends on your project scope. Our Starter plan includes 2 revision rounds, Professional includes 5 rounds, and Enterprise offers unlimited revisions. We collaborate closely with you to ensure the final product exceeds your expectations.'
              },
              {
                q: 'Will I be able to update my website myself after launch?',
                a: 'Yes! We build all our websites with user-friendly CMS integration, so you can easily update content, images, and blog posts. We also provide training and documentation, plus ongoing support if you prefer us to handle updates.'
              },
              {
                q: 'What technologies do you use?',
                a: 'We work with modern, industry-standard technologies including React, Next.js, TypeScript, Node.js, WordPress, Shopify, and more. We choose the best tech stack based on your specific project requirements, budget, and scalability needs.'
              },
              {
                q: 'How involved do I need to be during the project?',
                a: 'Our process is designed to be collaborative yet efficient. We require your input at key milestones (discovery, design review, testing), but we handle the heavy lifting. Regular updates and clear communication keep you informed without overwhelming your schedule.'
              },
              {
                q: 'What is included in the free website audit?',
                a: 'Our free audit provides a comprehensive analysis of your website\'s performance, SEO health, user experience, security vulnerabilities, and competitor benchmarking. You will receive a detailed report with prioritized recommendations and actionable insights to improve your site.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <LiquidGlassCard>
                  <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-white/60">{faq.a}</p>
                </LiquidGlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
