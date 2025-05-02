import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import '../styles/sidebar.css'; // Make sure to import the CSS file

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Toggle Sidebar visibility
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
      {/* Menu icon */}
      {!isOpen && (
        <span className="menu-icon" onClick={toggleSidebar} aria-label="Open Menu">
          <FiMenu size={28} />
        </span>
      )}

      {/* Sidebar content */}
      <div ref={sidebarRef} className={`sidebar ${isOpen ? 'open' : ''}`}>
        <span className="close-btn" onClick={toggleSidebar} aria-label="Close Menu">
          <FiX size={24} />
        </span>
        <ul>
          <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
          <li><Link to="/about" onClick={toggleSidebar}>About Artist</Link></li>
          <li><Link to="/artworks" onClick={toggleSidebar}>Artworks</Link></li>
          <li><Link to="/books" onClick={toggleSidebar}>Books</Link></li>
          <li><Link to="/artStore" onClick={toggleSidebar}>Art Store</Link></li>
          <li><Link to="/bookStore" onClick={toggleSidebar}>Book Store</Link></li>         
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
