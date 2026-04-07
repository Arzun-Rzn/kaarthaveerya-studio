// backend/models/Artwork.js

const mongoose = require("mongoose");

const artworkSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    publicId: {                   
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Artwork", artworkSchema);