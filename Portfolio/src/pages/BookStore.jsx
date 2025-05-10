import React from "react";
import "../styles/bookStore.css"; // if you're using custom CSS too

const platforms = [
  {
    name: "Amazon KDP",
    logo: "/logos/amazonkdp.png",
    url: "https://kdp.amazon.com/en_US/bookshelf?ref_=kdp_kdp_BS_D_TN_bs",
  },
  // You can add more platforms here, like:
  // {
  //   name: "Gumroad",
  //   logo: "https://your-logo-url.com",
  //   url: "https://gumroad.com/your-store",
  // },
];

const BookStore = () => {
  return (
    <div className="bookstore-container">
      <h2 className="bookstore-title">Book Store</h2>
      <div className="bookstore-grid">
        {platforms.map((platform, index) => (
          <a
            key={index}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bookstore-card"
          >
            <img
              src={platform.logo}
              alt={platform.name}
              className="bookstore-logo"
            />
            <span className="bookstore-name">{platform.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BookStore;
