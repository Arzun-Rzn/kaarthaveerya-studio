import React from "react";
import "../styles/artStore.css"; 

const platforms = [
  {
    name: "Redbubble",
    url: "https://www.redbubble.com/portfolio/manage_works?ref=account-nav-dropdown",
    logo: "/logos/redbubble.png",
  },
  {
    name: "Society6",
    url: "https://society6.com/pages/sell-art",
    logo: "/logos/society6.png",
  },
  {
    name: "Saatchi Art",
    url: "https://www.saatchiart.com/en-in/account/profile/2763987",
    logo: "/logos/saatchiart.png",
  },
  {
    name: "Zazzle",
    url: "https://www.zazzle.com/store/kaarthaveerya_studio",
    logo: "/logos/zazzle.jpg",
  },
  {
    name: "Displate",
    url: "https://displate.com/artist/profile",
    logo: "/logos/displate.jpg",
  },
  {
    name: "Threadless",
    url: "https://www.threadless.com/profile/artist_dashboard/",
    logo: "/logos/threadless.png",
  },
  {
    name: "TeePublic",
    url: "https://www.teepublic.com/designs/75055928/edit",
    logo: "/logos/teepublic.png",
  },
];

const ArtStore = () => {
  return (
    <div className="art-store-page">
      <h2>Visit these Platforms to buy my Art</h2>
      <div className="store-grid">
        {platforms.map((platform, index) => (
          <a
            key={index}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="store-card"
          >
            <img src={platform.logo} alt={platform.name} className="store-logo" />
            <p>{platform.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ArtStore;
