// backend/routes/artworks.js

const express = require("express");
const router = express.Router();
const protectAdmin = require("../middleware/authMiddleware");
const Artwork = require("../models/Artwork");
const upload = require("../middleware/upload");
const {
  uploadArtwork,
  getAllArtworksAdmin,
  deleteArtwork,
  updateArtwork,
} = require("../controllers/artworkController");

// ====================== ADMIN ROUTES ======================

// POST /api/artworks/upload
router.post(
  "/upload",
  protectAdmin,                  
  upload.single("image"),
  uploadArtwork
);

// ====================== PUBLIC ROUTES ======================

// GET /api/artworks/category/:slug?page=1&limit=12
router.get("/category/:slug", async (req, res) => {
  const { slug } = req.params;
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 12;

  try {
    const query = { category: slug };

    const total = await Artwork.countDocuments(query);
    const artworks = await Artwork.find(query)
      .select("title description imageUrl") 
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ createdAt: -1 });            

    res.json({
      artworks,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalArtworks: total,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching artworks" });
  }
});

// GET all artworks (admin)
router.get("/admin", protectAdmin, getAllArtworksAdmin);

// DELETE artwork
router.delete("/:id", protectAdmin, deleteArtwork);

// UPDATE artwork
router.put("/:id", protectAdmin, updateArtwork);

module.exports = router;