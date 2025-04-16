import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/artworks.css';

const allCategories = {
  "original-artworks": ['Pencil Sketches', 'Watercolors', 'Acrylic Paintings'],
  "references": ['Pose Studies', 'Environment References'],
  "inspirations": ['Art Legends', 'Modern Artists'],
  "anatomy-art": ['Hands', 'Faces', 'Muscle Structure'],
  "muses": ['Radha', 'Mythological', 'Tribal Life'],
  "indian-sculptures": ['Chola Bronze', 'Temple Sculptures'],
  "sculptures-of-world": ['Greek', 'Egyptian', 'Modern'],
  "manga-and-anime": ['Fan Art', 'Style Studies'],
  "creatures": ['Mythical Beasts', 'Nature Creatures'],
  "divine": ['Gods & Goddesses', 'Cosmic Themes'],
  "expressions": ['Emotion Studies', 'Eyes & Faces'],
};

const SubArtworks = () => {
  const { categoryId } = useParams();
  const subcategories = allCategories[categoryId] || [];

  return (
    <main className="artworks-page">
      <h1 className="page-title">{categoryId.replace(/-/g, ' ').toUpperCase()}</h1>
      <div className="category-grid">
        {subcategories.map((sub, i) => (
          <div key={i} className="subcategory-card">{sub}</div>
        ))}
      </div>
    </main>
  );
};

export default SubArtworks;
