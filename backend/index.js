const express = require('express');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const dotenv = require('dotenv');
const cloudinary = require('cloudinary').v2;
const helmet = require('helmet');

dotenv.config();
const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again after 15 minutes',
  headers: true,
});

app.use(limiter);

const allowedOrigins = [
  'https://www.kaarthaveerya-studio.com',  // your Vercel frontend URL
  'http://localhost:5173'                 // for local development
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

app.use(helmet());

app.get('/ping', (req, res) => {
  res.status(200).send('pong');
});


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
      .with_field("metadata")
      .max_results(30)
      .execute();

    console.log("Cloudinary Search Result:", result); // Log the response

    // Ensure resources are returned and map through them
    if (result.resources.length > 0) {
      const formattedImages = result.resources.map((img) => ({
        src: img.secure_url,
        title: img.metadta?.title || "Untitled", // Default title if missing
        description: img.metadata?.description || "No description", // Default description if missing
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
