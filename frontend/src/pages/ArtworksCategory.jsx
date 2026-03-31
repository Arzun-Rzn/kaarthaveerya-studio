import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";

import "../styles/artworksCategory.css";

const ArtworksCategory = () => {
  const { categorySlug } = useParams();
  const [artworks, setArtworks] = useState([]);
  const [openIndex, setOpenIndex] = useState(-1);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 12;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [currentPage]);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://kaarthaveerya-studio.onrender.com/api/artworks/category/${categorySlug}?page=${currentPage}&limit=${limit}`
        );
        setArtworks(res.data.artworks);
        setCurrentPage(res.data.currentPage);
        setTotalPages(res.data.totalPages);
      } catch (error) {
        console.error("Failed to fetch artworks:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchArtworks();
  }, [categorySlug, currentPage]);

  const formattedTitle = categorySlug.replace(/-/g, " ").toUpperCase();

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <main className="artworks-category-page">
      <h2>{formattedTitle}</h2>
      <br />
      <br />

      {loading ? (
        <div className="loading-spinner"></div>
      ) : artworks.length > 0 ? (
        <>
          <div className="masonry-grid">
            {artworks.map((art, index) => (
              <div key={art._id} className="masonry-item">
                <img
                  src={art.imageUrl}
                  alt={art.title}
                  onClick={() => setOpenIndex(index)}
                />
                <div className="artwork-info">
                  <h3>{art.title}</h3>
                  <p>{art.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="pagination-controls"
            style={{ marginTop: "20px", textAlign: "center" }}
          >
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
              &lt; Prev
            </button>
            <span style={{ margin: "0 10px" }}>
              Page {currentPage} of {totalPages}
            </span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>
              Next &gt;
            </button>
          </div>

          <Lightbox
            open={openIndex !== -1}
            close={() => setOpenIndex(-1)}
            slides={artworks.map((art) => ({
              src: art.imageUrl,
            }))}
            index={openIndex}
            plugins={[Zoom, Captions]}
            carousel={{ finite: true }}
            controller={{ closeOnBackdropClick: true }}
          />
        </>
      ) : (
        <p className="no-artworks-message">
          There are no artworks in this category. Will upload some soon.
          Meanwhile explore other categories.
        </p>
      )}
      <br />
      <br />
    </main>
  );
};

export default ArtworksCategory;
