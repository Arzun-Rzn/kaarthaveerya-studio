// backend/controllers/artworkController.js

const Artwork = require("../models/Artwork");

const allowedCategories = [
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

const uploadArtwork = async (req, res) => {
  try {
    const { title, description, category, imageUrl, publicId } = req.body;

    // Validation
    if (!title || !description || !category || !imageUrl || !publicId) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Category validation (CORRECT PLACE)
    if (!allowedCategories.includes(category)) {
      return res.status(400).json({ message: "Invalid category" });
    }

    // Normalize category
    const normalizedCategory = category.toLowerCase();

    // Save to DB
    const newArtwork = new Artwork({
      title,
      description,
      category: normalizedCategory,
      imageUrl,
      publicId,
    });

    await newArtwork.save();

    res.status(201).json({
      message: "Artwork uploaded successfully",
      artwork: newArtwork,
    });

  } catch (error) {
    console.error("Upload artwork error:", error);
    res.status(500).json({
      message: "Server error during upload",
    });
  }
};

module.exports = {
  uploadArtwork,
};