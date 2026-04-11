//Project-K/studio/frontend/src/pages/ArtworksManager.jsx

import React, { useState } from "react";
import ArtEditsList from "./ArtEditsList";
import ArtworkUploadCard from './ArtworkUploadCard';
import '../styles/artworksManager.css'

const ArtworksManager = () => {
  const [mode, setMode] = useState(null);

  return (
    <div>
      {!mode && (
        <div className="artwork-choice-container">
          <h3>Artworks Studio</h3>

          <div className="choice-buttons">
            <button onClick={() => setMode("upload")}>
              Upload Artwork
            </button>

            <button onClick={() => setMode("manage")}>
              Manage Artworks
            </button>
          </div>
        </div>
      )}

      {mode === "upload" && (
        <>
          <button className="back-btn" onClick={() => setMode(null)}>
            ← Back
          </button>

          <ArtworkUploadCard />
        </>
      )}

      {mode === "manage" && (
        <>
          <button className="back-btn" onClick={() => setMode(null)}>
            ← Back
          </button>

          <ArtEditsList />
        </>
      )}
    </div>
  );
};

export default ArtworksManager;