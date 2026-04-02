import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import WebsiteAudit from './pages/WebsiteAudit';
import Careers from './pages/Careers';
import PolicyModal from './components/PolicyModal';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [policyModal, setPolicyModal] = useState<{ isOpen: boolean; type: 'privacy' | 'cookie' | 'terms' | null }>({
    isOpen: false,
    type: null
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openPolicyModal = (type: 'privacy' | 'cookie' | 'terms') => {
    setPolicyModal({ isOpen: true, type });
  };

  const closePolicyModal = () => {
    setPolicyModal({ isOpen: false, type: null });
  };

  return (
    <Router>
      <div className="relative min-h-screen bg-[#0D1433] overflow-x-hidden">
        {/* Particle Background */}
        <ParticleBackground />
        
        {/* Aurora Background Effect */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-radial" />
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        </div>

        {/* Header */}
        <Header scrollY={scrollY} />

        {/* Main Content */}
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/website-audit" element={<WebsiteAudit />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer openPolicyModal={openPolicyModal} />

        {/* Policy Modal */}
        <PolicyModal 
          isOpen={policyModal.isOpen} 
          type={policyModal.type} 
          onClose={closePolicyModal} 
        />
      </div>
    </Router>
  );
}

export default App;
