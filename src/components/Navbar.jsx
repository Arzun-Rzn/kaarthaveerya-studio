import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>HOME</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>ABOUT ARTIST</NavLink></li>
        <li><NavLink to="/artworks" className={({ isActive }) => isActive ? 'active' : ''}>ARTWORKS</NavLink></li>
        <li><NavLink to="/books" className={({ isActive }) => isActive ? 'active' : ''}>BOOKS</NavLink></li>
        <li><NavLink to="/connect" className={({ isActive }) => isActive ? 'active' : ''}>CONNECT</NavLink></li>
       
        <li className="dropdown">
          <span className="dropdown-title">STORE / SHOP ▾</span>
          <ul className="dropdown-menu">
            <li><NavLink to="/artStore" className={({ isActive }) => isActive ? 'active' : ''}>ART STORE</NavLink></li>
            <li><NavLink to="/bookStore" className={({ isActive }) => isActive ? 'active' : ''}>BOOK STORE</NavLink></li>
          </ul>
        </li>  

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
          <input type="text" placeholder="What are you looking for?" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
