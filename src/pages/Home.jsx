import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
  return (
    <main className="home">
      <section className="hero-section">
        <h2>YOUR ART IS YOUR REFLECTION</h2>
        <p className="intro-text">
          Explore a collection of original artworks, inspirations, referances, thoughts, and stories — all born from the soul of a wandering artist.
        </p>
        <h2>Featured Artworks</h2>
        <div className="featured-gallery">
          <div className="art-card">
            <img src="/images/art1.jpg" alt="Featured Art 1" />
            <p>Radha Rani with pots of water</p>
          </div>
          <div className="art-card">
            <img src="/images/art2.jpg" alt="Featured Art 2" />
            <p>Radha's eyes locked with nemali</p>
          </div>
          <div className="art-card">
            <img src="/images/art3.jpg" alt="Featured Art 3" />
            <p>Goddess Durga ma </p>
          </div>
        </div>
        <div className="store-button-container">
          <Link to="/artstore" className="store-button">Visit Art Store</Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
