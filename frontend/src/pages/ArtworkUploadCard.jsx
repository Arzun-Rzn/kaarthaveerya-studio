//Project-K/studio/frontend/src/pages/ArtworkUploadCard.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/artworkUpload.css";

const categories = [
  { title: "Original Artworks", slug: "original-artworks" },
  { title: "References", slug: "references" },
  { title: "Illustrations", slug: "illustrations" },
  { title: "Inspirations", slug: "inspirations" },
  { title: "Random Learnings", slug: "random-learnings" },
  { title: "Anatomy Art", slug: "anatomy-art" },
  { title: "Muses", slug: "muses" },
  { title: "Malavika Mohanan", slug: "malavika-mohanan" },
  { title: "Indian Sculptures", slug: "indian-sculptures" },
  { title: "Sculptures of World", slug: "sculptures-of-world" },
  { title: "Manga and Anime", slug: "manga-and-anime" },
  { title: "Creatures", slug: "creatures" },
  { title: "Divine", slug: "divine" },
  { title: "Expressions", slug: "expressions" },
];

const BASE_URL = "https://kaarthaveerya-studio.onrender.com/api";

const ArtworkUploadCard = () => {
  // ================= STATE =================
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const [artworks, setArtworks] = useState([]);
  const [editId, setEditId] = useState(null);

  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  // ================= FILE HANDLER =================
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  // ================= FETCH ARTWORKS =================
  const fetchArtworks = async () => {
    try {
      const token = localStorage.getItem("adminToken");

      const res = await axios.get(`${BASE_URL}/artworks/admin`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setArtworks(res.data);
    } catch (err) {
      console.error("Fetch artworks error:", err);
    }
  };

  useEffect(() => {
    fetchArtworks();
  }, []);

  // ================= SUBMIT =================
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("adminToken");

    if (!token) {
      return setMessage("Unauthorized. Please login again.");
    }

    try {
      setUploading(true);

      // 🔥 EDIT MODE
      if (editId) {
        await axios.put(
          `${BASE_URL}/artworks/${editId}`,
          {
            title,
            description,
            category,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setMessage("Artwork updated successfully!");
        setEditId(null);

      } else {
        // 🔥 CREATE MODE
        if (!file) {
          return setMessage("Please select an image.");
        }

        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("category", category);
        formData.append("image", file);

        const res = await axios.post(
          `${BASE_URL}/artworks/upload`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setMessage(res.data.message || "Artwork uploaded successfully!");
      }

      // Reset form
      setTitle("");
      setDescription("");
      setCategory("");
      setFile(null);
      setPreview(null);

      await fetchArtworks(); // refresh list

      setTimeout(() => setMessage(""), 3000);

    } catch (error) {
      console.error(error);
      setMessage(error.response?.data?.message || "Operation failed");
    } finally {
      setUploading(false);
    }
  };

  // ================= DELETE =================
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("adminToken");

      await axios.delete(`${BASE_URL}/artworks/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setArtworks(artworks.filter((art) => art._id !== id));

    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  // ================= EDIT =================
  const handleEdit = (art) => {
    setTitle(art.title);
    setDescription(art.description);
    setCategory(art.category);
    setEditId(art._id);
    setPreview(art.imageUrl); // show existing image
  };

  // ================= UI =================
  return (
    <div className="artwork-upload-card">
      <h3>{editId ? "Edit Artwork" : "Upload Artwork"}</h3>

      {/* ===== FORM ===== */}
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

        {/* Show file input only in upload mode */}
        {!editId && (
          <input type="file" onChange={handleFileChange} required />
        )}

        {preview && (
          <img
            src={preview}
            alt="Preview"
            style={{ width: "200px", marginTop: "10px" }}
          />
        )}

        {uploading && <p>Processing...</p>}

        <button type="submit" disabled={uploading}>
          {uploading
            ? "Processing..."
            : editId
            ? "Update Artwork"
            : "Upload Artwork"}
        </button>
      </form>

      {message && <p>{message}</p>}

      {/* ===== LIST OF ARTWORKS ===== */}
      <h3 style={{ marginTop: "30px" }}>Uploaded Artworks</h3>

      {artworks.length === 0 ? (
        <p>No artworks uploaded yet.</p>
      ) : (
        <div className="admin-artworks-list">
          {artworks.map((art) => (
            <div key={art._id} className="admin-art-card">
              <img src={art.imageUrl} alt={art.title} />

              <h4>{art.title}</h4>
              <p>{art.description}</p>
              <p><strong>{art.category}</strong></p>

              <div className="admin-actions">
                <button onClick={() => handleEdit(art)}>
                  Edit
                </button>

                <button onClick={() => handleDelete(art._id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArtworkUploadCard;