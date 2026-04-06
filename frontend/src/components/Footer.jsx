//Project-K/studio/frontend/src/components/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';

import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaPinterest,
  FaReddit,
  FaTumblr,
  FaBehance,
  FaArtstation
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h1 className="footer-logo">KAARTHAVEERYA STUDIO</h1>
          <a
            href="mailto:kaarthaveeryaa.arjuna@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-email"
          >
            📧 kaarthaveeryaa.arjuna@gmail.com
          </a>
        <div className="footer-links">
          <Link to="/about">ABOUT</Link>
          <Link to="/artstore">ART STORE</Link>
          <Link to="/artworks">PORTFOLIO</Link>
          <Link to="/books">BOOKS</Link>
          <Link to="/blog">BLOGS</Link>
          <Link to="/connect">CONNECT</Link>         
        </div>
      </div>

      <div className="footer-social">
        <h4>CONNECT</h4>

        <a href="mailto:kaarthaveeryaa.arjuna@gmail.com" target="_blank" rel="noreferrer" data-name="Gmail">
          <MdEmail />
        </a>

        <a href="https://www.instagram.com/kaarthaveerya/" target="_blank" rel="noreferrer" data-name="Instragram">
          <FaInstagram />
        </a>

        <a href="https://www.facebook.com/profile.php?id=61575235523785" target="_blank" rel="noreferrer" data-name="Facebook">
          <FaFacebook />
        </a>

        <a href="https://x.com/kaarthaveerrya" target="_blank" rel="noreferrer" data-name="X(Twitter)">
          <FaXTwitter />
        </a>

        <a href="https://www.youtube.com/@KaarthaveeryaArjun" target="_blank" rel="noreferrer" data-name="Youtube">
          <FaYoutube />
        </a>

        <a href="https://www.behance.net/KaarthaveeryaArjun" target="_blank" rel="noreferrer" data-name="Behance">
          <FaBehance />
        </a>

        <a href="https://in.pinterest.com/kaarthaveeryaa/" target="_blank" rel="noreferrer" data-name="Pinterest">
          <FaPinterest />
        </a>

        <a
          href="https://linkedin.com/company/kaarthaveerya-studio"
          target="_blank"
          rel="noreferrer"
          data-name="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a href="https://www.reddit.com/user/kaarthaveeryaa/" target="_blank" rel="noreferrer" data-name="Reddit">
          <FaReddit />
        </a>

        <a href="https://www.tumblr.com/kaarthaveerya-arjun" target="_blank" rel="noreferrer" data-name="Tumblr">
          <FaTumblr />
        </a>

        <a href="https://www.artstation.com/kaarthaveerya" target="_blank" rel="noreferrer" data-name="ArtStation">
          <FaArtstation />
        </a>
      </div>

      <div className="footer-bottom">
        <p>&copy;2026  Kaarthaveerya Studio. All rights reserved.</p>
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
