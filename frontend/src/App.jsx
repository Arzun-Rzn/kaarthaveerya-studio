/*Project-K/studio/frontend/src/App.jsx */

import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import ScrollToTop from './components/ScrollToTop';
import BigHeader from './components/BigHeader.jsx';
import CompactHeader from './components/CompactHeader.jsx';
import Sidebar from './components/Sidebar.jsx';
import MainSection from './components/MainSection.jsx';
import Footer from './components/Footer.jsx';
import { Toaster } from "react-hot-toast";
import './App.css';

const App = () => {

  const [showCompact, setShowCompact] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowCompact(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Toaster position="top-right" />

      <div className="app-container">

        <Sidebar />

        {/* Big header stays in flow */}
        <div ref={headerRef}>
          <BigHeader />
        </div>

        {/* Compact header ALWAYS mounted */}
        <CompactHeader visible={showCompact} />

        <main>
          <MainSection />
        </main>

        <footer>
          <Footer />
        </footer>

      </div>
    </Router>
  );
};

export default App;