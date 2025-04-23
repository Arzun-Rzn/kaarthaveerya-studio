import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/artworks.css';

const ArtworkCategory = () => {
  const { category } = useParams();
  const cloudName = 'your_cloud_name_here';
  const categoryInfo = artworksData[category];

  if (!categoryInfo) {
    return <h2>Category not found</h2>;
  }

  return (
    <main className="category-images-page">
      <h1>{categoryInfo.title}</h1>
      <div className="image-grid">
        {categoryInfo.images.map((img, index) => {
          const imageUrl = `https://res.cloudinary.com/${cloudName}/image/upload/${categoryInfo.folder}/${img}`;
          return (
            <img
              key={index}
              src={imageUrl}
              alt={img}
              className="artwork-image"
            />
          );
        })}
      </div>
    </main>
  );
};

export default ArtworkCategory;
