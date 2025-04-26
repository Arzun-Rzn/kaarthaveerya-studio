import React, { useEffect, useState, useMemo, useRef } from "react";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "../styles/artworkCategory.css";

const ArtworkCategory = () => {
  const containerRef = useRef(null);
  const { categoryName } = useParams();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [currentPage]);  
  
  const itemsPerPage = 12;

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [location]); 

  useEffect(() => {
    setLoading(true);
    fetch(`https://www.kaarthaveerya-studio.com/api/images/${categoryName}`)
      .then((res) => res.json())
      .then((data) => {
        setImages(data.reverse());
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching images:", err);
        setLoading(false);
      });
  }, [categoryName]);

  const totalPages = useMemo(() => Math.ceil(images.length / itemsPerPage), [images]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = images.slice(indexOfFirstItem, indexOfLastItem);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(-1);

  return (
    <div className="artwork-category-page" ref={containerRef}>
      <h2>{categoryName.replace(/-/g, ' ').toUpperCase()}</h2>

      {loading ? (
        <div className="spinner-container">
          <ClipLoader size={50} color="#333" loading={loading} />
        </div>
      ) : images.length === 0 ? (
        <div className="no-images-message">
          <p>There are no artworks related to this category. Will make some artworks soon. Meanwhile, explore other categories.</p>
        </div>
      ) : (
        <>
          <div className="masonry-grid">
            {currentItems.map((img, i) => (
              <div
                key={i}
                className="masonry-item"
                onClick={() => openLightbox(i + indexOfFirstItem)}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="artwork-img"
                  loading="lazy"
                />
                <div className="image-info">
                  <h4>{img.title}</h4>
                  <p>{img.description}</p>
                  <small>{img.date}</small>
                </div>
              </div>
            ))}
          </div>

          <div className="pagination-controls">
          <button
            onClick={() => {
              setCurrentPage((prev) => {
                const newPage = Math.max(prev - 1, 1);
                setTimeout(() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "instant", // you can use "smooth" if preferred
                  });
                }, 50);
                return newPage;
              });
            }}
            disabled={currentPage === 1}
          >
            Prev
          </button>

            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => {
                setCurrentPage((prev) => {
                  const newPage = Math.min(prev + 1, totalPages);
                  setTimeout(() => {
                    window.scrollTo({
                      top: 0,
                      behavior: "instant",
                    });
                  }, 50);
                  return newPage;
                });
              }}
              disabled={currentPage === totalPages}
            >
              Next
            </button>

          </div>

          {lightboxIndex >= 0 && (
            <Lightbox
              open={true}
              close={closeLightbox}
              index={lightboxIndex}
              slides={images.map((img) => ({ src: img.src }))}
              plugins={[Zoom]}
              controller={{
                closeOnBackdropClick: true,
              }}
              carousel={{
                finite: true,
              }}
              zoom={{
                scrollToZoom: true,
                maxZoomPixelRatio: 3,
                zoomInMultiplier: 2,
                wheelZoomDistanceFactor: 100,
              }}
              // render={{
              //   slide: ({ slide }) => (
              //     <img
              //       src={slide.src}
              //       alt=""
              //       style={{
              //         maxHeight: "90vh",
              //         margin: "0 auto",
              //         display: "block",
              //       }}
              //     />
              //   ),
              // }}
            />
          )}
        </>
      )}
    </div>
  );
};

export default ArtworkCategory;
