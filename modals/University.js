const mongoose = require('mongoose');

const entryRequirementSchema = new mongoose.Schema({
  requirement_subject: String,
  requirement: String,
});

const courseSchema = new mongoose.Schema({
  name: String,
  availability: String,
  course_start: Date,
  course_end: Date,
  fees: String,
  degree_level: String,
  entry_requirements: [entryRequirementSchema],
});

const scholarshipSchema = new mongoose.Schema({
  subject: String,
  award: String,
  deadline: Date,
  eligible_countries: [String],
  eligible_level: String,
});

const facilitySchema = new mongoose.Schema({
  scholarships: [scholarshipSchema],
});

const rankingSchema = new mongoose.Schema({
  by: String,
  ranking: String,
});

const universitySchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  location: String,
  ranking: [rankingSchema],
  Courses: [courseSchema],
  facilities: [facilitySchema],
});

const University = mongoose.model('University', universitySchema);

module.exports = {University};
