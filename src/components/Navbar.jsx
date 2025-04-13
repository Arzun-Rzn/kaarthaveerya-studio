import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>HOME</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>ABOUT ARTIST</NavLink></li>
        <li><NavLink to="/artworks" className={({ isActive }) => isActive ? 'active' : ''}>ARTWORKS</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>CONTACT</NavLink></li>
        <li><NavLink to="/store" className={({ isActive }) => isActive ? 'active' : ''}>STORE / ART SHOP</NavLink></li>
        <li><NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''}>BLOGS & JOURNALS</NavLink></li>

        <li className="dropdown">
          <span className="dropdown-title">LEGAL INFORMATION ▾</span>
          <ul className="dropdown-menu">
            <li><NavLink to="/terms" className={({ isActive }) => isActive ? 'active' : ''}>TERMS & CONDITIONS</NavLink></li>
            <li><NavLink to="/privacy" className={({ isActive }) => isActive ? 'active' : ''}>PRIVACY POLICY</NavLink></li>
            <li><NavLink to="/copyright" className={({ isActive }) => isActive ? 'active' : ''}>COPYRIGHT NOTICE</NavLink></li>
            <li><NavLink to="/licensing" className={({ isActive }) => isActive ? 'active' : ''}>LICENSING INFO</NavLink></li>
          </ul>
        </li>

        <li className="search-box">
          <input type="text" placeholder="Search..." />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
