import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import '../styles/sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {!isOpen && (
        <span className="menu-icon" onClick={toggleSidebar}>
          <FiMenu size={28} />
        </span>
      )}


      <div ref={sidebarRef} className={`sidebar ${isOpen ? 'open' : ''}`}>
        <span className="close-btn" onClick={toggleSidebar}>
          <FiX size={24} />
        </span>
        <ul>
          <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
          <li><Link to="/artworks" onClick={toggleSidebar}>Artworks</Link></li>
          <li><Link to="/books" onClick={toggleSidebar}>Books</Link></li>
          <li><Link to="/store" onClick={toggleSidebar}>Store</Link></li>
          <li><Link to="/about" onClick={toggleSidebar}>Artist</Link></li>
          <li><Link to="/blog" onClick={toggleSidebar}>Blog</Link></li>
          <li><Link to="/connect" onClick={toggleSidebar}>Connect</Link></li>
          <li><Link to="/terms" onClick={toggleSidebar}>Terms of use</Link></li>
          <li><Link to="/privacy" onClick={toggleSidebar}>Privacy</Link></li>
          <li><Link to="/copyright" onClick={toggleSidebar}>Copyright</Link></li>
          <li><Link to="/licensing" onClick={toggleSidebar}>Licensing</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;