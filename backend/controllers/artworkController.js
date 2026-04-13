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

// GET ALL ARTWORKS (ADMIN - PAGINATED + FILTER + SEARCH)
const getAllArtworksAdmin = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;
    const category = req.query.category || "all";
    const search = req.query.search || "";

    const skip = (page - 1) * limit;

    // build query object
    let query = {};

    // category filter
    if (category !== "all") {
      query.category = category;
    }

    // search filter (case-insensitive)
    if (search) {
      query.title = { $regex: search, $options: "i" };
    }

    const artworks = await Artwork.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Artwork.countDocuments(query);

    res.status(200).json({
      artworks,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });

  } catch (error) {
    console.error("Fetch admin artworks error:", error);
    res.status(500).json({ message: "Failed to fetch artworks" });
  }
};

// DELETE
const deleteArtwork = async (req, res) => {
  try {
    const { id } = req.params;

    const artwork = await Artwork.findById(id);
    if (!artwork) {
      return res.status(404).json({ message: "Artwork not found" });
    }

    // delete from cloudinary
    await cloudinary.uploader.destroy(artwork.publicId);

    await Artwork.findByIdAndDelete(id);

    res.status(200).json({ message: "Deleted successfully" });

  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ message: "Delete failed" });
  }
};

// UPDATE (title + description only)
const updateArtwork = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const updated = await Artwork.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );

    res.status(200).json(updated);

  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ message: "Update failed" });
  }
};

module.exports = {
  uploadArtwork,
  getAllArtworksAdmin,
  deleteArtwork,
  updateArtwork,
};