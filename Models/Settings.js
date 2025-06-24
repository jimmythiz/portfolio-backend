// models/Settings.js
const mongoose = require("mongoose")

const settingsSchema = new mongoose.Schema({
  cvUrl: { type: String, required: true },
});

module.exports = mongoose.model("cv-document", settingsSchema);
