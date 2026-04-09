// backend/controllers/artworkController.js

const cloudinary = require("../config/cloudinary");
const Artwork = require("../models/Artwork");
const streamifier = require("streamifier");

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
    const { title, description, category } = req.body;

    if (!title || !description || !category || !req.file) {
      return res.status(400).json({ message: "All fields required" });
    }

    if (!allowedCategories.includes(category)) {
      return res.status(400).json({ message: "Invalid category" });
    }

    const normalizedCategory = category.toLowerCase();

    const folderPath = `kaarthaveerya/artworks/${normalizedCategory}`;
    console.log("Uploading to folder:", folderPath);

    const streamUpload = (buffer) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: folderPath },
          (error, result) => {
            if (error) return reject(error);
            resolve(result);
          }
        );
        streamifier.createReadStream(buffer).pipe(stream);
      });
    };

    const result = await streamUpload(req.file.buffer);

    const newArtwork = new Artwork({
      title,
      description,
      category: normalizedCategory,
      imageUrl: result.secure_url,
      publicId: result.public_id,
    });

    await newArtwork.save();

    res.status(201).json({
      message: "Artwork uploaded successfully",
      artwork: newArtwork,
    });

  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ message: "Upload failed" });
  }
};

module.exports = { uploadArtwork };