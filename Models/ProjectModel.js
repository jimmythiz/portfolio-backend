// models/Project.js
const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  imageUrl: String,
  description: String,
  projectLink: String,
}, { timestamps: true });

const Project =  mongoose.model('Project', ProjectSchema);
module.exports = Project
