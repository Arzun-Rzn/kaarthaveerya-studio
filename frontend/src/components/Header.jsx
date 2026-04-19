//Project-K/studio/frontend/src/components/Header.jsx

import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/header.css";

const Header = ({ scrolled }) => {
  return (
    <header className={`header ${scrolled ? "shrink" : ""}`}>

      <Link to="/" className="header-left">
        <img src="/assets/LogoK.png" alt="Logo" className="logo" />
        <h1 className="site-title">KAARTHAVEERYA STUDIO</h1>
      </Link>

      <nav className="nav-links">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/artworks">PORTFOLIO</NavLink>
        <NavLink to="/books">BOOKS</NavLink>

        <div className="dropdown">
          <span className="dropdown-title">STORE ▾</span>
          <div className="dropdown-menu">
            <NavLink to="/artstore">ART STORE</NavLink>
            <NavLink to="/bookstore">BOOK STORE</NavLink>
          </div>
        </div>

        <NavLink to="/connect">CONNECT</NavLink>
        <NavLink to="/blog">BLOGS</NavLink>

        <div className="dropdown dropdown-right">
          <span className="dropdown-title">LEGAL INFO ▾</span>
          <div className="dropdown-menu">
            <NavLink to="/terms">TERMS & CONDITIONS</NavLink>
            <NavLink to="/privacy">PRIVACY POLICY</NavLink>
            <NavLink to="/copyright">COPYRIGHT NOTICE</NavLink>
            <NavLink to="/licensing">LICENSING INFO</NavLink>
          </div>
        </div>
      </nav>

    </header>
  );
};

export default Header;