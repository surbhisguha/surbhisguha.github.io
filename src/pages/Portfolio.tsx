import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Build from '../components/Build';
import Grow from '../components/Grow';
import Experience from '../components/Experience';
import Writing from '../components/Writing';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import useActiveSection from '../hooks/useActiveSection';
import useReveal from '../hooks/useReveal';

// Module scope keeps the reference stable across renders for useActiveSection.
const SECTION_IDS = ['hero', 'build', 'grow', 'experience', 'writing', 'contact'];

const Portfolio: React.FC = () => {
  const activeSection = useActiveSection(SECTION_IDS);
  const location = useLocation();
  const navigate = useNavigate();
  useReveal();

  // Cross-page nav (e.g. header links from the 404 page) passes the target
  // section via router state rather than a URL hash, so HashRouter never
  // has to render a second `#`. See SectionLink.
  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (!target) return;

    const frame = window.requestAnimationFrame(() => {
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    navigate(location.pathname, { replace: true, state: null });

    return () => window.cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-paper">
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <Build />
        <Grow />
        <Experience />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
