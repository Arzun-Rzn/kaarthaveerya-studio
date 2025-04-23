import React from "react";
import "../styles/connect.css";
import { FaEnvelope, FaInstagram, FaYoutube, FaFacebook, FaTwitter, FaBehance, FaPinterest, FaLinkedin, FaTumblr, FaWhatsapp, FaTelegram } from "react-icons/fa";

const socials = [
  { name: "Gmail", icon: <FaEnvelope />, link: "mailto:kaarthaveeryaa.arjuna@gmail.com" },
  { name: "Instagram", icon: <FaInstagram />, link: "https://instagram.com/yourusername" },
  { name: "YouTube", icon: <FaYoutube />, link: "https://youtube.com/@yourchannel" },
  { name: "Facebook", icon: <FaFacebook />, link: "https://facebook.com/yourusername" },
  { name: "Twitter", icon: <FaTwitter />, link: "https://twitter.com/yourusername" },
  { name: "Behance", icon: <FaBehance />, link: "https://behance.net/yourusername" },
  { name: "Pinterest", icon: <FaPinterest />, link: "https://pinterest.com/yourusername" },
  { name: "LinkedIn", icon: <FaLinkedin />, link: "https://linkedin.com/in/yourusername" },
  { name: "Tumblr", icon: <FaTumblr />, link: "https://yourusername.tumblr.com" },
  { name: "WhatsApp", icon: <FaWhatsapp />, link: "https://wa.me/yourphonenumber" },
  { name: "Telegram", icon: <FaTelegram />, link: "https://t.me/yourusername" },
];

const Connect = () => {
  return (
    <main className="social-container">
      <h2>CONNECT WITH ME</h2>
      <div className="social-grid">
        {socials.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="social-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon">{item.icon}</div>
            <p>{item.name}</p>
          </a>
        ))}
      </div>
    </main>
  );
};

export default Connect;
