const express = require('express');
const Temp1 = require('../models/Temp1');
const router = express.Router();

// Create a document in temp1
router.post('/', async (req, res) => {
  try {
    const newRecord = new Temp1(req.body);
    const savedRecord = await newRecord.save();
    res.status(201).json(savedRecord);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Retrieve documents from temp1
router.get('/', async (req, res) => {
  try {
    const records = await Temp1.find();
    res.json(records);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a document in temp1
router.put('/:id', async (req, res) => {
  try {
    const updatedRecord = await Temp1.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedRecord);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a document in temp1
router.delete('/:id', async (req, res) => {
  try {
    await Temp1.findByIdAndDelete(req.params.id);
    res.json({ message: 'Record deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
