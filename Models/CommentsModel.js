// models/Testimonial.js
const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema({
  imageUrl: {type : String, required : true},
  name: { type: String, required: true },
  testimony: { type: String, required: true },
}, { timestamps: true });


const Testimonial =  mongoose.model('Testimonial', TestimonialSchema,);
module.exports = Testimonial
