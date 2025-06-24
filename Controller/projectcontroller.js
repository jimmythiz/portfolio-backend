const Project = require('../Models/ProjectModel'); 

// Get all projects
const getallproject = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json({
        message :"All Projects",
        projects
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch projects data",
      error: error.message,
    });
  }
};

// Get Single Project
const getsingleproject = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.status(200).json({
      message: "Project fetched successfully",
      project
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch project data",
      error: error.message,
    });
  }
};

// Add new project
const addnewProject = async (req, res) => {
  try {
    const newProject = new Project(req.body);
    await newProject.save();
    res.status(201).json({
        message : "Added New Project",
        project: newProject
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to add project",
      error: error.message,
    });
  }
};

// Update project
const updateProject = async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedProject) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json({
        message : "Updated",
        updatedProject});
  } catch (error) {
    res.status(400).json({
      message: "Failed to update project",
      error: error.message,
    });
  }
};

// Delete project
const deleteProject = async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);
    if (!deletedProject) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete project",
      error: error.message,
    });
  }
};

module.exports = {
  getallproject,
  addnewProject,
  updateProject,
  deleteProject,
  getsingleproject
};
