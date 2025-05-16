const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const router = express.Router();

// POST /api/admin/login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // ✅ Check username
    if (username !== process.env.ADMIN_USERNAME) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // ✅ Compare password with hashed password in .env
    const isMatch = await bcrypt.compare(password, process.env.ADMIN_HASH);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // ✅ Create JWT
    const token = jwt.sign({ username }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({ token });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
