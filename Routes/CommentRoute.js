const express = require("express")
const router = express.Router();
const CommentController = require("../Controller/commentcontroller")



const {  authenticateToken } = require('../Controller/AuthController');
// --- Testimonials routes ---

// Get all testimonials
router.get('/',CommentController.getallTestimony)


// Add new testimonial
router.post('/',authenticateToken,CommentController.addTestimonial)


// Get Single testimonial
router.get('/:id',CommentController.getTestimony)

// Update testimonial by id
router.put('/:id',authenticateToken,CommentController.updateTestimony)


// Delete testimonial by id
router.delete('/:id',authenticateToken,CommentController.deleteTestimony)

module.exports = router;
