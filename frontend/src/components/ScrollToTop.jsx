//Project-K/studio/frontend/src/components/ScrollToTop.jsx

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' 
      });

      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 50);

  }, [pathname]);

  return null;
};

export default ScrollToTop;