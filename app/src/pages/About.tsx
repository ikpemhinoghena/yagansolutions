import { motion } from 'framer-motion';
import { useEffect } from 'react';
import {
  Target,
  Eye,
  Heart,
  Zap,
  Users,
  Award,
  TrendingUp,
  Globe,
  Code,
  Sparkles,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import LiquidGlassCard from '../components/LiquidGlassCard';

const About = () => {
  // SEO Meta Description
  useEffect(() => {
    document.title = 'About YaganSolutions | Leading Technology Infrastructure Partner';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'YaganSolutions helps businesses and organizations build, improve, and maintain their technological infrastructure. Expert web development, SEO, and digital solutions with proven results.');
    }
    return () => {
      if (metaDescription) {
        metaDescription.setAttribute('content', '');
      }
    };
  }, []);

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We settle for nothing less than exceptional. Every pixel, every line of code, every strategy is crafted with precision.',
      color: 'from-[#1A56DB] to-[#00C6C6]'
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Transparency',
      description: 'No hidden fees, no surprises. We believe in honest communication and clear expectations throughout our partnership.',
      color: 'from-[#6C3FF5] to-[#1A56DB]'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Passion',
      description: 'We love what we do. This passion drives us to stay ahead of trends and deliver innovative solutions.',
      color: 'from-[#00C6C6] to-[#6C3FF5]'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Results',
      description: 'We measure success by your success. Our focus is always on delivering measurable business outcomes.',
      color: 'from-[#1A56DB] to-[#6C3FF5]'
    }
  ];

  const stats = [
    { value: '5+', label: 'Years Experience', icon: <Award className="w-5 h-5" /> },
    { value: '150+', label: 'Projects Completed', icon: <Code className="w-5 h-5" /> },
    { value: '50+', label: 'Happy Clients', icon: <Users className="w-5 h-5" /> },
    { value: '15+', label: 'Countries Served', icon: <Globe className="w-5 h-5" /> }
  ];

  const team = [
    {
      name: 'Alex Yagan',
      role: 'Founder & CEO',
      bio: 'Visionary leader with 10+ years in digital transformation.',
      initials: 'AY'
    },
    {
      name: 'Sarah Chen',
      role: 'Lead Developer',
      bio: 'Full-stack expert passionate about clean code.',
      initials: 'SC'
    },
    {
      name: 'Marcus Johnson',
      role: 'SEO Director',
      bio: 'Data-driven strategist with proven results.',
      initials: 'MJ'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Design Lead',
      bio: 'Creative mind behind stunning user experiences.',
      initials: 'ER'
    }
  ];

  const milestones = [
    { year: '2019', title: 'Founded', description: 'YaganSolutions was born with a mission to transform digital experiences.' },
    { year: '2020', title: 'First 50 Clients', description: 'Rapid growth as businesses recognized our unique approach.' },
    { year: '2021', title: 'Global Expansion', description: 'Started serving clients across 15+ countries worldwide.' },
    { year: '2022', title: 'Team Growth', description: 'Expanded to a team of 15+ talented professionals.' },
    { year: '2023', title: '150+ Projects', description: 'Celebrated milestone of 150 successful project deliveries.' },
    { year: '2024', title: 'Innovation Focus', description: 'Launched suite of developer tools and resources.' }
  ];

  return (
    <div className="relative pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6C3FF5]/15 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1A56DB]/15 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#00C6C6] text-sm font-semibold uppercase tracking-wider mb-4 block">
                About Us
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                We Are <span className="gradient-text">YaganSolutions</span>
              </h1>
              <p className="text-lg text-white/70 mb-6 leading-relaxed">
                We help businesses and organizations build, improve, and take care of their technological infrastructure.
              </p>
              <p className="text-white/60 mb-8 leading-relaxed">
                From custom web development to ongoing maintenance, our expert team delivers comprehensive digital solutions 
                that drive growth and ensure your technology works as hard as you do. With a focus on innovation and excellence, 
                we transform complex challenges into elegant, scalable solutions.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/careers" className="btn-primary inline-flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Work With Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/services" className="btn-secondary inline-flex items-center gap-2">
                  Our Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <LiquidGlassCard glowColor="violet" className="h-96 flex items-center justify-center">
                <div className="text-center">
                  <img
                    src="/logo.png"
                    alt="YaganSolutions"
                    className="w-32 h-32 object-contain mx-auto mb-6 logo-glow"
                  />
                  <h3 className="text-2xl font-bold text-white mb-2">YaganSolutions</h3>
                  <p className="text-white/60">Digital Excellence Delivered</p>

                  <div className="flex justify-center gap-6 mt-8">
                    {[
                      { icon: <Code className="w-5 h-5" />, label: 'Development' },
                      { icon: <Zap className="w-5 h-5" />, label: 'SEO' },
                      { icon: <Globe className="w-5 h-5" />, label: 'Global' }
                    ].map((item) => (
                      <div key={item.label} className="text-center">
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-2 text-[#00C6C6]">
                          {item.icon}
                        </div>
                        <span className="text-xs text-white/50">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </LiquidGlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section - To be implemented later */}
      {/* 
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="liquid-glass rounded-2xl p-6 text-center"
              >
                <div className="flex justify-center mb-3 text-[#00C6C6]">{stat.icon}</div>
                <div className="text-3xl sm:text-4xl font-bold gradient-text-animated mb-1">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      */}

      {/* Our Story - To be implemented later */}
      {/* 
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-radial" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#6C3FF5] text-sm font-semibold uppercase tracking-wider mb-4 block">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              The Story of <span className="gradient-text">Our Growth</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line *}/}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#1A56DB] via-[#6C3FF5] to-[#00C6C6] hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, idx) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''
                    }`}
                >
                  <div className={`flex-1 ${idx % 2 === 1 ? 'md:text-left' : 'md:text-right'}`}>
                    <LiquidGlassCard className="inline-block">
                      <div className="text-[#00C6C6] font-bold text-lg mb-1">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                      <p className="text-white/60">{milestone.description}</p>
                    </LiquidGlassCard>
                  </div>

                  {/* Timeline Dot *}/}
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-gradient-to-r from-[#1A56DB] to-[#6C3FF5] items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#1A56DB] text-sm font-semibold uppercase tracking-wider mb-4 block">
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              What We <span className="gradient-text">Stand For</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Our core values guide every decision we make and every project we undertake.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <LiquidGlassCard className="h-full">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} mb-6`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-white/60">{value.description}</p>
                </LiquidGlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - To be implemented later */}
      {/* 
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A56DB]/10 via-[#6C3FF5]/10 to-[#00C6C6]/10" />
              
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#00C6C6] text-sm font-semibold uppercase tracking-wider mb-4 block">
              Our Team
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Meet The <span className="gradient-text">Experts</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              A talented team of professionals passionate about delivering excellence.
            </p>
          </motion.div>
      
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <LiquidGlassCard className="text-center h-full">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1A56DB] to-[#6C3FF5] flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{member.initials}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-[#00C6C6] text-sm mb-3">{member.role}</p>
                  <p className="text-white/60 text-sm">{member.bio}</p>
                </LiquidGlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      */}
      
      {/* Our Approach */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#6C3FF5] text-sm font-semibold uppercase tracking-wider mb-4 block">
                Our Approach
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                How We <span className="gradient-text">Work</span>
              </h2>

              <div className="space-y-6">
                {[
                  { title: 'Discovery', desc: 'We start by understanding your business, goals, and challenges.' },
                  { title: 'Strategy', desc: 'We craft a tailored plan aligned with your objectives.' },
                  { title: 'Execution', desc: 'We build with precision, keeping you involved at every step.' },
                  { title: 'Optimization', desc: 'We continuously improve based on data and feedback.' }
                ].map((step) => (
                  <div key={step.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-[#1A56DB] to-[#6C3FF5] flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
                      <p className="text-white/60">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <LiquidGlassCard glowColor="cyan" className="h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1A56DB] to-[#6C3FF5] mb-6">
                    <TrendingUp className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Results-Driven</h3>
                  <p className="text-white/60 max-w-sm">
                    Every decision we make is backed by data and focused on delivering
                    measurable results for your business.
                  </p>
                </div>
              </LiquidGlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Let us bring your vision to life. Get in touch and let us discuss your project.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2 text-lg">
              <Sparkles className="w-5 h-5" />
              Start a Conversation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
