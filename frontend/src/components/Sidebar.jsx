//Project-K/studio/frontend/src/components/Sidebar.jsx

import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import '../styles/sidebar.css';
import { FiChevronLeft } from 'react-icons/fi';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.classList.add('sidebar-open'); // Disable body scroll
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.classList.remove('sidebar-open'); // Enable body scroll
    }

    return () => {
      document.body.classList.remove('sidebar-open');
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);



  return (
    <>
      {!isOpen && (
        <span className="menu-icon" onClick={toggleSidebar} aria-label="Open Menu">
          <FiMenu size={28} />
        </span>
      )}

      <div ref={sidebarRef} className={`sidebar ${isOpen ? 'open' : ''}`}>
        <span className="close-btn" onClick={toggleSidebar} aria-label="Close Menu">
          <FiChevronLeft size={32} />
        </span>
        <ul>
          <li><Link to="/" onClick={toggleSidebar}>HOME</Link></li>
          <li><Link to="/about" onClick={toggleSidebar}>ABOUT</Link></li>
          <li><Link to="/artworks" onClick={toggleSidebar}>PORTFOLIO</Link></li>
          <li><Link to="/books" onClick={toggleSidebar}>BOOKS</Link></li>
          <li><Link to="/artStore" onClick={toggleSidebar}>ART STORE</Link></li>
          <li><Link to="/bookStore" onClick={toggleSidebar}>BOOK STORE</Link></li>         
          <li><Link to="/blog" onClick={toggleSidebar}>BLOGS</Link></li>
          <li><Link to="/connect" onClick={toggleSidebar}>CONNECT</Link></li>
          <li><Link to="/terms" onClick={toggleSidebar}>TERMS OF USE</Link></li>
          <li><Link to="/privacy" onClick={toggleSidebar}>PRIVACY POLICY</Link></li>
          <li><Link to="/copyright" onClick={toggleSidebar}>COPYRIGHT NOTICE</Link></li>
          <li><Link to="/licensing" onClick={toggleSidebar}>LICENCING INFO</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
