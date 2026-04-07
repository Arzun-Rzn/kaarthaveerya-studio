// backend/controllers/artworkController.js

const cloudinary = require("../config/cloudinary");
const Artwork = require("../models/Artwork");
const streamifier = require("streamifier");

const uploadArtwork = async (req, res) => {
  try {
    const { title, description, category } = req.body;

    console.log("Upload request received:", { 
      hasTitle: !!title, 
      hasDescription: !!description, 
      category, 
      hasFile: !!req.file,
      fileSize: req.file ? req.file.size : 0 
    });

    if (!title || !description || !category) {
      return res.status(400).json({ message: "Title, description and category are required" });
    }

    if (!req.file) {
      return res.status(400).json({ message: "No image file provided. Make sure field name is 'image'" });
    }

    const folderPath = `kaarthaveerya/artworks/${category}`;

    const streamUpload = (buffer) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { 
            folder: folderPath,
            resource_type: "image",
            timeout: 60000   // 60 seconds timeout
          },
          (error, result) => {
            if (error) {
              console.error("Cloudinary upload error:", error);
              reject(error);
            } else {
              resolve(result);
            }
          }
        );
        streamifier.createReadStream(buffer).pipe(stream);
      });
    };

    const result = await streamUpload(req.file.buffer);

    const newArtwork = new Artwork({
      title,
      description,
      category,
      imageUrl: result.secure_url,
      publicId: result.public_id,
    });

    await newArtwork.save();

    console.log("Artwork saved successfully with publicId:", result.public_id);

    res.status(201).json({
      message: "Artwork uploaded successfully",
      artwork: newArtwork,
    });

  } catch (error) {
    console.error("=== FULL UPLOAD ERROR ===");
    console.error("Message:", error.message);
    console.error("Stack:", error.stack);
    console.error("Cloudinary specific:", error?.response?.data || error);

    res.status(500).json({
      message: "Server error during upload",
      error: process.env.NODE_ENV === "development" ? error.message : "Internal server error"
    });
  }
};

module.exports = { uploadArtwork };