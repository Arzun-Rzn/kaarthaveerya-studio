const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const cloudinary = require('cloudinary').v2;

dotenv.config();
const app = express();
app.use(cors());

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Route to fetch images from a folder
app.get('/api/images/:folder', async (req, res) => {
  const folder = req.params.folder;
  try {
    console.log("Cloudinary config:", {
      name: process.env.CLOUDINARY_CLOUD_NAME,
      key: process.env.CLOUDINARY_API_KEY,
      secret: process.env.CLOUDINARY_API_SECRET ? "✅ Present" : "❌ Missing"
    });
    
    const result = await cloudinary.search
      .expression(`folder:Artworks/${folder}`)
      .sort_by('created_at', 'desc')
      .max_results(30)
      .execute();

    console.log("Cloudinary Search Result:", result); // Log the response

    // Ensure resources are returned and map through them
    if (result.resources.length > 0) {
      const formattedImages = result.resources.map((img) => ({
        src: img.secure_url,
        title: img.context?.custom?.title || "Untitled", // Default title if missing
        description: img.context?.custom?.description || "No description", // Default description if missing
      }));
      res.json(formattedImages);
    } else {
      res.status(404).json({ message: "No images found" });
    }
  } catch (err) {
    console.error("Error fetching Cloudinary images:", err);
    res.status(500).json({ error: "Failed to fetch images" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
