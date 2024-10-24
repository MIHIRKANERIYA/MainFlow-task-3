const express = require('express');
const Temp2 = require('../models/Temp2');
const router = express.Router();

// Create a document in temp2
router.post('/', async (req, res) => {
  try {
    const newRecord = new Temp2(req.body);
    const savedRecord = await newRecord.save();
    res.status(201).json(savedRecord);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Retrieve documents from temp2
router.get('/', async (req, res) => {
  try {
    const records = await Temp2.find();
    res.json(records);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a document in temp2
router.put('/:id', async (req, res) => {
  try {
    const updatedRecord = await Temp2.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedRecord);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete the entire collection temp2
router.delete('/all', async (req, res) => {
  try {
    await Temp2.deleteMany();
    res.json({ message: 'All records deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
