const express = require("express")
const router = express.Router();
const ProjectController = require("../Controller/projectcontroller")


const {  authenticateToken } = require('../Controller/AuthController');
// --- Projects routes ---

// Get all projects
router.get('/',ProjectController.getallproject );

// Get single projects
router.get('/:id',ProjectController.getsingleproject );

// Add new project
router.post('/',authenticateToken,ProjectController.addnewProject );

// Update project by id
router.put('/:id',authenticateToken,ProjectController.updateProject );

// Delete project by id
router.delete('/:id',authenticateToken,ProjectController.deleteProject );

module.exports = router;