const mongoose = require('mongoose');

// Define temp2 schema
const temp2Schema = new mongoose.Schema({
  description: { type: String, required: true },
  status: { type: String, required: true }
});

// Create temp2 model
const Temp2 = mongoose.model('temp2', temp2Schema);

module.exports = Temp2;
