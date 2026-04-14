/*Project-K/studio/frontend/src/App.jsx */

import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import MainSection from './components/MainSection.jsx';
import Footer from './components/Footer.jsx';
import { Toaster } from "react-hot-toast";
import './App.css';

const App = () => {

  const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const trigger = document.getElementById("scroll-trigger");

      const observer = new IntersectionObserver(
        ([entry]) => {
          setScrolled(!entry.isIntersecting);
        },
        {
          root: null,
          threshold: 0,
        }
      );

      if (trigger) observer.observe(trigger);

      return () => {
        if (trigger) observer.unobserve(trigger);
      };
    }, []);

  return (
    <Router>
      <ScrollToTop />
      <Toaster position="top-right" />

      <div className="app-container">

        <div className={`top-section ${scrolled ? "shrink" : ""}`}>
          <Sidebar />

          <div className="top-section-inner">
           <Header scrolled={scrolled} />
          </div>
        </div>

        <div id="scroll-trigger"></div>

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