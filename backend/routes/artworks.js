const express = require("express");
const Artwork = require("../models/Artwork");

const router = express.Router();

// POST /api/artworks/upload - Upload artwork
router.post("/upload", async (req, res) => {
  try {
    const { title, description, category, imageUrl } = req.body;

    if (!imageUrl) {
      return res.status(400).json({ message: "No image URL provided." });
    }

    // Validate category against allowed slugs
    const allowedCategories = [
      "original-artworks",
      "references",
      "illustrations",
      "inspirations",
      "random-learninigs",
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

    if (!allowedCategories.includes(category)) {
      return res.status(400).json({ message: "Invalid category selected." });
    }

    const newArtwork = new Artwork({
      title,
      description,
      category,
      imageUrl,
    });

    await newArtwork.save();
    res.status(201).json({ message: "Artwork uploaded successfully!", newArtwork });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

// GET /api/artworks/category/:slug?page=1&limit=12 - Fetch artworks by category with pagination
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
