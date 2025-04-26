import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h1 className="footer-logo">KAARTHAVEERYA STUDIO</h1>
        <p>Website developed by Nagarjuna Jogi</p>
          <a
            href="mailto:kaarthaveeryaa.arjuna@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-email"
          >
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
        <a
          href="mailto:kaarthaveeryaa.arjuna@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gmail
        </a>
        <a href="https://www.instagram.com/kaarthaveerya/" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://www.facebook.com/profile.php?id=61575235523785" target="_blank" rel="noreferrer">Facebook</a>
        <a href="https://x.com/kaarthaveerrya" target="_blank" rel="noreferrer">X (Twitter)</a>
        <a href="https://www.youtube.com/@KaarthaveeryaArjuna" target="_blank" rel="noreferrer">YouTube</a>
        <a href="https://www.behance.net/KaarthaveeryaArjun" target="_blank" rel="noreferrer">Behance</a>
        <a href="https://in.pinterest.com/kaarthaveeryaa/_created/" target="_blank" rel="noreferrer">Pinterest</a>
        <a href="https://www.reddit.com/u/kaarthaveerya/s/7MnUIMvA8D" target="_blank" rel="noreferrer">Reddit</a>
        <a href="https://www.tumblr.com/blog/kaarthaveerya-arjun" target="_blank" rel="noreferrer">Tumblr</a>
      </div>

      <div className="footer-bottom">
        <p>&copy;2024  Kaarthaveerya Art Studio. All rights reserved.</p>
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
