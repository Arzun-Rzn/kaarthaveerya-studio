import React from 'react';
import '../styles/about.css';

const About = () => {
  return (
    <main className="about-artist-page"> 
      <section className="about-hero">
        <h1>ABOUT ARTIST</h1>
        <p>Every artist is first an amateur.</p>
      </section>

      <section className="about-content">
        <div className="artist-bio">
          <h3>Hello, I'm Kaarthaveerya Arjun</h3>
          <p>
            I’m a self-taught artist and visual storyteller, crafting art that weaves myth, nature, and emotion into one flowing canvas.
            My journey began not in a studio, but under trees, near rivers, and amidst wandering thoughts.
          </p>
          <p>
            Each piece I create is a quiet rebellion against chaos, a celebration of slowness, and an offering to beauty and memory.
            My works often reflect tribal essence, folk memories, divine femininity, and forest symbolism.
          </p>
          <p>
            Welcome to my world — not just to view art, but to feel it.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
