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
          <div className="art-card">
            <img src="/images/art4.jpg" alt="Featured Art 4" />
            <p>Shivayya</p>
          </div>
          <div className="art-card">
            <img src="/images/art5.jpg" alt="Featured Art 5" />
            <p>Satyabhama</p>
          </div>
          <div className="art-card">
            <img src="/images/art6.jpg" alt="Featured Art 6" />
            <p> Durga ma </p>
          </div>
          <div className="art-card">
            <img src="/images/art7.jpg" alt="Featured Art 7" />
            <p>Malavika Mohanan</p>
          </div>
          <div className="art-card">
            <img src="/images/art8.jpg" alt="Featured Art 8" />
            <p>Sobhita Dhulipala</p>
          </div>
          <div className="art-card">
            <img src="/images/art9.jpg" alt="Featured Art 9" />
            <p>Malavika Mohanan </p>
          </div>
          <div className="art-card">
            <img src="/images/art10.jpg" alt="Featured Art 10" />
            <p>Eyes of Malavika Mohanan</p>
          </div>
          <div className="art-card">
            <img src="/images/art11.jpg" alt="Featured Art 11" />
            <p>Malavika Mohanan</p>
          </div>
          <div className="art-card">
            <img src="/images/art12.jpg" alt="Featured Art 12" />
            <p>Satyabhama</p>
          </div>
          <div className="art-card">
            <img src="/images/art13.jpg" alt="Featured Art 13" />
            <p>Sree Rama</p>
          </div>
          <div className="art-card">
            <img src="/images/art14.jpg" alt="Featured Art 14" />
            <p>Hanuma</p>
          </div>
        </div>
        <div className="store-button-container">
          <Link to="/artworks" className="store-button">Visit Artworks</Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
