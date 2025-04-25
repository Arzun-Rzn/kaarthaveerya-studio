// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Delay scroll to ensure rendering finishes, especially on mobile
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' // or "auto"
      });

      // Forcibly scroll main or body if needed
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 50); // 50ms delay helps on mobile

  }, [pathname]);

  return null;
};

export default ScrollToTop;










// // src/components/ScrollToTop.jsx
// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// const ScrollToTop = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     // Scroll to top on route change
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// };

// export default ScrollToTop;
