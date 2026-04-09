import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/artEditsList.css";

const categories = [
  "all",
  "original-artworks",
  "references",
  "illustrations",
  "inspirations",
  "random-learnings",
  "anatomy-art",
  "muses",
  "malavika-mohanan",
  "indian-sculptures",
  "sculptures-of-world",
  "manga-and-anime",
  "creatures",
  "divine",
  "expressions",
];

const ArtEditsList = ({ refresh, onEdit }) => {
  const [artworks, setArtworks] = useState([]);
  const [filter, setFilter] = useState("all");

  const token = localStorage.getItem("adminToken");

  const fetchArtworks = async () => {
    try {
      const res = await axios.get(
        "https://kaarthaveerya-studio.onrender.com/api/artworks/admin",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setArtworks(res.data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchArtworks();
  }, [refresh]);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this artwork permanently?")) return;

    try {
      await axios.delete(
        `https://kaarthaveerya-studio.onrender.com/api/artworks/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      fetchArtworks();
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  const filteredArtworks =
    filter === "all"
      ? artworks
      : artworks.filter((art) => art.category === filter);

  return (
    <div className="art-edits-container">
      <h3>Manage Artworks</h3>

      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        {categories.map((cat, i) => (
          <option key={i} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {filteredArtworks.length === 0 ? (
        <p>No artworks in this category yet</p>
      ) : (
        <div className="art-grid">
          {filteredArtworks.map((art) => (
            <div className="art-card" key={art._id}>
              <img src={art.imageUrl} alt={art.title} />

              <div className="overlay">
                <p>{art.title}</p>

                <div className="actions">
                  <button onClick={() => onEdit(art)}>Edit</button>
                  <button onClick={() => handleDelete(art._id)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArtEditsList;