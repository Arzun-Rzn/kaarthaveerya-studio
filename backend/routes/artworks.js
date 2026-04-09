// backend/routes/artworks.js

const express = require("express");
const router = express.Router();
const protectAdmin = require("../middleware/authMiddleware");
const upload = require("../middleware/upload"); 
const Artwork = require("../models/Artwork");
const { uploadArtwork, getAllArtworksAdmin, deleteArtwork, updateArtwork } = require("../controllers/artworkController");

// POST /api/artworks/upload
router.post(
  "/upload",
  protectAdmin,
  upload.single("image"),
  uploadArtwork
);

// GET /api/artworks/category/:slug
router.get("/category/:slug", async (req, res) => {
  try {
    const { slug } = req.params;

    const artworks = await Artwork.find({ category: slug })
      .select("title imageUrl")
      .sort({ createdAt: -1 });

    res.status(200).json({ artworks });

  } catch (error) {
    console.error("Fetch artworks error:", error);
    res.status(500).json({ message: "Failed to fetch artworks" });
  }
});


router.get("/admin", protectAdmin, getAllArtworksAdmin);

router.delete("/:id", protectAdmin, deleteArtwork);

router.put("/:id", protectAdmin, updateArtwork);

module.exports = router;