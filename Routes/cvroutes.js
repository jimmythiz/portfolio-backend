const express = require('express');
const Settings = require("../Models/Settings")

const router = express.Router();
// Assuming you use Mongoose for Settings collection
router.post("/upload-cv", async (req, res) => {
  try {
    const { cvUrl } = req.body;
    if (!cvUrl) return res.status(400).json({ error: "cvUrl is required" });

    // Find existing settings document
    let settings = await Settings.findOne();

    if (settings) {
      // Update existing doc
      settings.cvUrl = cvUrl;
      await settings.save();
    } else {
      // Create new doc if none exists
      settings = await Settings.create({ cvUrl });
    }

    res.status(200).json({ message: "CV saved", saved: settings });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports =  router;
