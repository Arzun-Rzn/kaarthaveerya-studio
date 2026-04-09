// backend/routes/artworks.js

const express = require("express");
const router = express.Router();
const protectAdmin = require("../middleware/authMiddleware");
const {uploadArtwork} = require("../controllers/artworkController");

// POST /api/artworks/upload
router.post(
  "/upload",
  protectAdmin,                  
  uploadArtwork
);

module.exports = router;