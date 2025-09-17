import React from "react";
import "../styles/connect.css";
import { FaEnvelope, FaInstagram, FaYoutube,FaReddit, FaFacebook, FaTwitter, FaBehance, FaPinterest, FaLinkedin, FaArtstation} from "react-icons/fa";

const socials = [
  {name: "Gmail",icon: <FaEnvelope />,link: "mailto:kaarthaveeryaa.arjuna@gmail.com"},
  { name: "Instagram", icon: <FaInstagram />, link: "https://www.instagram.com/kaarthaveerya/"},
  { name: "YouTube", icon: <FaYoutube />, link: "https://www.youtube.com/@KaarthaveeryaArjun" },
  { name: "Facebook", icon: <FaFacebook />, link: "https://www.facebook.com/profile.php?id=61575235523785" },
  { name: "Twitter", icon: <FaTwitter />, link: "https://x.com/kaarthaveerrya" },
  { name: "Behance", icon: <FaBehance />, link: "https://www.behance.net/KaarthaveeryaArjun" },
  { name: "Pinterest", icon: <FaPinterest />, link: "https://in.pinterest.com/kaarthaveeryaa/_created/" },
  { name: "LinkedIn", icon: <FaLinkedin />, link: "https://linkedin.com/company/kaarthaveerya-studio" },
  { name: "ArtStation", icon: <FaArtstation />, link: "https://www.artstation.com/kaarthaveerya" },
  { name: "Reddit", icon: <FaReddit />, link: "https://www.reddit.com/u/kaarthaveerya/s/7MnUIMvA8D" }
];

const Connect = () => {
  return (
    <main className="social-container">
      <h2>CONNECT WITH ME</h2>
      <br />
      <br />
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
      <br />
    </main>
  );
};

export default Connect;
