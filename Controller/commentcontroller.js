const Testimonial = require('../Models/CommentsModel'); 

// Get all testimonials
const getallTestimony = async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.status(200).json({
        message :"All Testimonials",
        testimonials});
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch testimonials",
      error: error.message,
    });
  }
};

// Get single testimonials
const getTestimony = async (req, res) => {
  try {
    const { id } = req.params;
    const testimonial = await Testimonial.findById(id);

    if (!testimonial) {
      return res.status(404).json({ message: "Testimonial not found" });
    }

    res.status(200).json({
      message: "Testimonial fetched successfully",
      testimonial
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch testimonial",
      error: error.message,
    });
  }
};

// Add new testimonial
const addTestimonial = async (req, res) => {
  try {
    const newTestimonial = new Testimonial(req.body);
    await newTestimonial.save();
    res.status(201).json({
        message :"Testimony Added",
        testimonial : newTestimonial});
  } catch (error) {
    res.status(400).json({
      message: "Failed to add testimonial",
      error: error.message,
    });
  }
};

// Update testimonial by id
const updateTestimony = async (req, res) => {
  try {
    const updatedTestimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedTestimonial) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }

    res.status(200).json({
        message:"Updated Comment",
        testimonial : updatedTestimonial});
  } catch (error) {
    res.status(400).json({
      message: "Failed to update testimonial",
      error: error.message,
    });
  }
};

// Delete testimonial by id
const deleteTestimony = async (req, res) => {
  try {
    const deletedTestimonial = await Testimonial.findByIdAndDelete(req.params.id);

    if (!deletedTestimonial) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }

    res.status(200).json({ message: 'Testimonial deleted successfully' });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete testimonial",
      error: error.message,
    });
  }
};

module.exports = {
  getallTestimony,
  addTestimonial,
  updateTestimony,
  deleteTestimony,
  getTestimony
};
