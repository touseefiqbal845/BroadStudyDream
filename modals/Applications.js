const mongoose = require('mongoose');
const { Schema } = mongoose;


const applicationSchema = new mongoose.Schema({
    uni_and_course_details: { type: Schema.Types.ObjectId, ref: "UserInformation", required: true },
    // application_status: String,
    // decision_status: String,
});

const Applications = mongoose.model('Applications', applicationSchema);

module.exports = {Applications};
