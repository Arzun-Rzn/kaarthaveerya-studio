import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h1 className="footer-logo">KAARTHAVEERYA ART STUDIO</h1>
        <a href="mailto:kaarthaveeryaa.arjuna@gmail.com" className="footer-email">
          📧 kaarthaveeryaa.arjuna@gmail.com
        </a>

        <div className="footer-links">
          <Link to="/about">About Artist</Link>
          <Link to="/artstore">Art store</Link>
          <Link to="/artworks">Artworks</Link>
          <Link to="/books">Books</Link>
          <Link to="/blog">Blogs & Journals</Link>
          <Link to="/connect">Connect</Link>         
        </div>
      </div>

      <div className="footer-social">
        <a href="mailto:kaarthaveeryaa.arjuna@gmail.com" target="_blank" rel="noreferrer">Gmail</a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
        <a href="https://x.com" target="_blank" rel="noreferrer">X (Twitter)</a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a>
        <a href="https://behance.net" target="_blank" rel="noreferrer">Behance</a>
        <a href="https://pinterest.com" target="_blank" rel="noreferrer">Pinterest</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://tumblr.com" target="_blank" rel="noreferrer">Tumblr</a>
      </div>

      <div className="footer-bottom">
        <p>&copy;2018  Kaarthaveerya Art Studio. All rights reserved.</p>
        <div className="footer-legal">
          <Link to="/terms">Terms & Conditions</Link>
          <Link to="/privacy">Privacy policy</Link>
          <Link to="/copyright">Copyright notice</Link>
          <Link to="/licensing">Licensing info</Link>         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
