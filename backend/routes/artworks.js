//backend/routes/artworks.js

const express = require("express");
const router = express.Router();

const Artwork = require("../models/Artwork");
const { uploadArtwork } = require("../controllers/artworkController");
const protectAdmin = require("../middleware/authMiddleware");
const upload = require("../middleware/upload");


// POST /api/artworks/upload (UPDATED - secure + cloudinary)
router.post(
  "/upload",
  protectAdmin,
  upload.single("image"),
  uploadArtwork
);


// GET /api/artworks/category/:slug?page=1&limit=12 (KEEP THIS)
router.get("/category/:slug", async (req, res) => {
  const { slug } = req.params;
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 12;

  try {
    const query = { category: slug };

    const total = await Artwork.countDocuments(query);

    const artworks = await Artwork.find(query)
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ _id: -1 });

    res.json({
      artworks,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching artworks" });
  }
});

module.exports = router;
