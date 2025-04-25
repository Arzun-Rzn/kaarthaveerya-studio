import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/artworks.css';

const categoryList = [
  { title: 'Original Artworks', path: 'original-artworks' },
  { title: 'References', path: 'references' },
  { title: 'Illustrations', path: 'illustrations' },
  { title: 'Inspirations', path: 'inspirations' },
  { title: 'Random Learnings', path: 'random-learninigs' },
  { title: 'Anatomy Art', path: 'anatomy-art' },
  { title: 'Muses', path: 'muses' },
  { title: 'Malavika Mohanan', path: 'malavika-mohanan' },
  { title: 'Indian Sculptures', path: 'indian-sculptures' },
  { title: 'Sculptures of World', path: 'sculptures-of-world' },
  { title: 'Manga and Anime', path: 'manga-and-anime' },
  { title: 'Creatures', path: 'creatures' },
  { title: 'Divine', path: 'divine' },
  { title: 'Expressions', path: 'expressions' },
];

const Artworks = () => {
  return (
    <main className="artworks-page">
      <h1>ARTWORKS</h1>
      <p>Explore Categories</p>
      <div className="category-grid">
        {categoryList.map((cat, index) => (
          <Link 
            to={`/artworks/${cat.path}`} 
            key={index} 
            className="category-card-link"
          >
            <div className="category-card">
              <h2>{cat.title}</h2>
            </div>
          </Link>
        ))}
      </div>
      <div className="store-button-container">
                <Link to="/artStore" className="store-button">Visit Art Store</Link>
              </div>
    </main>
  );
};

export default Artworks;
