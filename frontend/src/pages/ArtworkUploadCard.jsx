//Project-K/studio/frontend/src/pages/ArtworkUploadCard.jsx

import React, { useState } from "react";
import axios from "axios";
import "../styles/artworkUpload.css";
import toast from "react-hot-toast";

const categories = [
  { title: 'Original Artworks', slug: 'original-artworks' },
  { title: 'References', slug: 'references' },
  { title: 'Illustrations', slug: 'illustrations' },
  { title: 'Inspirations', slug: 'inspirations' },
  { title: 'Random Learnings', slug: 'random-learnings' },
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
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile)); 
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !category || !file) {
      return setMessage("Please fill all fields and select an image.");
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("image", file);

    const token = localStorage.getItem("adminToken");

    try {
      setUploading(true);

      const res = await axios.post(
        "https://kaarthaveerya-studio.onrender.com/api/artworks/upload",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage(res.data.message || "Artwork uploaded successfully!");
      toast.success("Artwork uploaded successfully")

      // reset
      setTitle("");
      setDescription("");
      setCategory("");
      setFile(null);
      setPreview("");

      setTimeout(() => setMessage(""), 3000);

    } catch (error) {
      console.error("Upload error:", error);
      setMessage("Failed to upload artwork.");
    } finally {
      setUploading(false);
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

        <input type="file" onChange={handleFileChange} required />

        {preview && (
          <img
            src={preview}
            alt="Preview"
            style={{ width: "200px", marginTop: "10px" }}
          />
        )}

        {uploading && <p>Uploading...</p>}

        <button type="submit" disabled={uploading}>
          Upload Artwork
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default ArtworkUploadCard;