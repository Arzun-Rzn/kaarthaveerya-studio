import React, { useState } from "react";
import axios from "axios";
import "../styles/artworkUpload.css";

const categories = [
  { title: 'Original Artworks', slug: 'original-artworks' },
  { title: 'References', slug: 'references' },
  { title: 'Illustrations', slug: 'illustrations' },
  { title: 'Inspirations', slug: 'inspirations' },
  { title: 'Random Learnings', slug: 'random-learninigs' },
  { title: 'Anatomy Art', slug: 'anatomy-art' },
  { title: 'Muses', slug: 'muses' },
  { title: 'Malavika Mohanan', slug: 'malavika-mohanan' },
  { title: 'Indian Sculptures', slug: 'indian-sculptures' },
  { title: 'Sculptures of World', slug: 'sculptures-of-world' },
  { title: 'Manga and Anime', slug: 'manga-and-anime' },
  { title: 'Creatures', slug: 'creatures' },
  { title: 'Divine', slug: 'divine' },
  { title: 'Expressions', slug: 'expressions' },
];


const ArtworkUploadCard = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
     formData.append("file", file);
     formData.append("upload_preset", "artworks_upload"); 

      setUploading(true);
      try {
        const res = await axios.post(
          `https://api.cloudinary.com/v1_1/dmysk41l0/image/upload`,
          formData
        );
        setImageUrl(res.data.secure_url);
        setUploading(false);
      } catch (error) {
        console.error("Image upload failed:", error);
        setUploading(false);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !category || !imageUrl) {
      return setMessage("Please fill all fields and upload an image.");
    }

    try {
      const res = await axios.post("https://kaarthaveerya-studio.onrender.com/api/artworks/upload", {
        title,
        description,
        imageUrl,
        category,
      });

      setMessage(res.data.message || "Artwork uploaded successfully!");
      setTimeout(() => {
        setMessage("");
      }, 3000);
      setTitle("");
      setDescription("");
      setCategory("");
      setImageUrl("");
    } catch (error) {
      console.error("Error saving artwork:", error);
      setMessage("Failed to upload artwork.");
    }
  };

  return (
    <div className="artwork-upload-card">
      <h3>Upload Artwork</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
       <select
         value={category}
         onChange={(e) => setCategory(e.target.value)}
         required
       >
         <option value="">Select a category</option>
         {categories.map((cat, index) => (
           <option key={index} value={cat.slug}>
             {cat.title}
          </option>
        ))}
       </select>

        <input type="file" onChange={handleImageUpload} required />
        {uploading && <p>loading image...</p>}
        {imageUrl && <img src={imageUrl} alt="Preview" style={{ width: "200px", marginTop: "10px" }} />}
        <button type="submit" disabled={uploading}>Upload Artwork</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ArtworkUploadCard;
