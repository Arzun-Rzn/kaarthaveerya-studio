import React from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import '../styles/home.css';

const Home = () => {
  return (
    <main className="home">
      <section className="hero-section">
      <h2 className="quote-heading">
        <span className="typewriter-wrapper">
          <Typewriter
            words={[
              'YOUR ART IS YOUR REFLECTION',
              'EVERYTHING YOU CAN IMAGINE IS REAL',
              'LOGIC CAN ONLY TAKE YOU FROM A TO B',
              'BUT IMAGINATION CAN TAKE YOU ANYWHERE',
              'IMAGINATION IS THE BEGINNING OF ALL CREATION',
              'ART IS THE LIE THAT ENABLES US TO REALIZE TRUTH',
              'BAD ARTISTS COPY, GOOD ARTISTS STEAL',
              'CREATIVITY IS INTELLIGENCE HAVING FUN',
            ]}
            loop={true}
            cursor={false}
            typeSpeed={40}
            deleteSpeed={40}
            delaySpeed={1800}
          />
        </span>
      </h2>

        <h4>WELCOME TO MY WORLD</h4>
        <p className="intro-text">
          Explore a collection of original artworks, inspirations, referances, thoughts, and stories — all born from the soul of a wandering artist.
        </p>
        <h3>Featured Artworks</h3>
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
          <Link to="/artworks" className="store-button">Explore Artworks</Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
