//backend/models/Artwork.js
const mongoose = require("mongoose");

const ArtworkSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  category: { type: String, required: true },
});

const Artwork = mongoose.model("Artwork", ArtworkSchema);
module.exports = Artwork;
