import React, { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

const ArtEditsList = ({ refresh, onEdit }) => {
  const [artworks, setArtworks] = useState([]);

  const fetchArtworks = async () => {
    try {
      const token = localStorage.getItem("adminToken");

      const res = await axios.get(`${BASE_URL}/artworks/admin`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setArtworks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchArtworks();
  }, [refresh]);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("adminToken");

      await axios.delete(`${BASE_URL}/artworks/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setArtworks((prev) => prev.filter((a) => a._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h3>Uploaded Artworks</h3>

      {artworks.map((art) => (
        <div key={art._id}>
          <img src={art.imageUrl} width="150" />
          <h4>{art.title}</h4>

          <button onClick={() => onEdit(art)}>Edit</button>
          <button onClick={() => handleDelete(art._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ArtEditsList;