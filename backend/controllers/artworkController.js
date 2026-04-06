//backend/controllers/artworkController.js

const cloudinary = require("../config/cloudinary");
const Artwork = require("../models/Artwork");

// Upload Artwork
const uploadArtwork = async (req, res) => {
  try {
    const { title, description, category } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "No image file provided" });
    }

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: `artworks/${category}`,
    });

    // Save to MongoDB
    const newArtwork = new Artwork({
      title,
      description,
      category,
      imageUrl: result.secure_url,
    });

    await newArtwork.save();

    res.status(201).json({
      message: "Artwork uploaded successfully",
      artwork: newArtwork,
    });

  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  uploadArtwork,
};