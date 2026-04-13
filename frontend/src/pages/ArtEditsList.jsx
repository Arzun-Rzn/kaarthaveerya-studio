//Project-K/studio/frontend/src/pages/ArtEditsList.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "../styles/artEditsList.css";

const formatCategory = (category) => {
  if (category === "all") return "All Categories";

  return category
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

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

const ArtEditsList = ({ refresh }) => {
  const [artworks, setArtworks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState(null);
  const [editData, setEditData] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const token = localStorage.getItem("adminToken");

  const fetchArtworks = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        `https://kaarthaveerya-studio.onrender.com/api/artworks/admin?page=${page}&limit=12&category=${filter}&search=${search}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setArtworks(res.data.artworks);
      setTotalPages(res.data.totalPages);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArtworks();
  }, [refresh, page, filter, search]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        if (deleteId) setDeleteId(null);
        if (editData) {
          setEditData(null);
          setTitle("");
          setDescription("");
          setError("");
        }
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [deleteId, editData]);

  useEffect(() => {
    if (deleteId || editData) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [deleteId, editData]);

  return (
    <>
      {/* DELETE MODAL */}
      {deleteId && (
        <div className="modal-overlay" onClick={() => setDeleteId(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Delete Artwork</h3>
            <p>Do you really want to delete this artwork?</p>

            <div className="modal-actions">
              <button
                className="cancel-btn"
                onClick={() => setDeleteId(null)}
              >
                No
              </button>

              <button
                className="delete-btn"
                onClick={async () => {
                  try {
                    await axios.delete(
                      `https://kaarthaveerya-studio.onrender.com/api/artworks/${deleteId}`,
                      {
                        headers: {
                          Authorization: `Bearer ${token}`,
                        },
                      }
                    );
                    toast.success("Artwork deleted successfully");
                    setDeleteId(null);
                    fetchArtworks();
                  } catch (err) {
                    toast.error("Failed to delete artwork");
                    console.error(err);
                  }
                }}
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* EDIT MODAL */}
      {editData && (
        <div className="modal-overlayy" onClick={() => setEditData(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Edit Artwork</h3>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
            />

            {error && <p className="error-text">{error}</p>}

            <div className="modal-actions">
              <button
                className="cancel-btn"
                onClick={() => {
                  setEditData(null);
                  setTitle("");
                  setDescription("");
                  setError("");
                }}
              >
                Cancel
              </button>

              <button
                className="update-btn"
                onClick={async () => {
                  setError("");

                  if (!title.trim() || !description.trim()) {
                    setError("Fields cannot be empty");
                    return;
                  }

                  if (
                    title === editData.title &&
                    description === editData.description
                  ) {
                    setError("No changes made");
                    return;
                  }

                  try {
                    await axios.put(
                      `https://kaarthaveerya-studio.onrender.com/api/artworks/${editData._id}`,
                      { title, description },
                      {
                        headers: {
                          Authorization: `Bearer ${token}`,
                        },
                      }
                    );
                    toast.success("Artwork updated successfully");

                    setEditData(null);
                    setTitle("");
                    setDescription("");
                    fetchArtworks();
                  } catch (err) {
                    toast.error("Failed to update artwork");
                    console.error(err);
                  }
                }}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MAIN UI */}
      <div className="art-edits-container">
        <h3>Manage Artworks</h3>

        <select
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            setPage(1);
          }}
        >
          {categories.map((cat, i) => (
            <option key={i} value={cat}>
              {formatCategory(cat)}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search artworks..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1); 
          }}
          className="search-input"
        />

        {loading ? (
          <div className="loader"></div>
        ) : artworks.length === 0 ? (
          <p>No artworks in this category yet</p>
        ) : (
          <>
            <div className="art-grid">
              {artworks.map((art) => (
                <div className="art-card" key={art._id}>
                  <img src={art.imageUrl} alt={art.title} loading="lazy" />

                  <div className="overlay">
                    <p>{art.title}</p>

                    <div className="actions">
                      <button
                        onClick={() => {
                          setEditData(art);
                          setTitle(art.title);
                          setDescription(art.description);
                          setError("");
                        }}
                      >
                        Edit
                      </button>

                      <button onClick={() => setDeleteId(art._id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* PAGINATION */}
            <div className="pagination">
              <button
                disabled={page === 1}
                onClick={() => setPage((prev) => prev - 1)}
              >
                Prev
              </button>

              <span>
                Page {page} of {totalPages}
              </span>

              <button
                disabled={page === totalPages}
                onClick={() => setPage((prev) => prev + 1)}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ArtEditsList;