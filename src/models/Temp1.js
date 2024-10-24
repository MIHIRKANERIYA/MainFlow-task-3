const mongoose = require('mongoose');

// Define temp1 schema
const temp1Schema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: String, required: true }
});

// Create temp1 model
const Temp1 = mongoose.model('temp1', temp1Schema);

module.exports = Temp1;
