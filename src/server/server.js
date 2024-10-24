const express = require('express');
const mongoose = require('mongoose');
const temp1Routes = require('../routes/temp1Routes');  // Check path
const temp2Routes = require('../routes/temp2Routes');  // Check path

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB Atlas URI
const MONGO_URI = 'mongodb+srv://mihirkaneriya007bn:M1i2h3i4r5@cluster0.dsfkf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Middleware
app.use(express.json());

// Routes
app.use('/api/temp1', temp1Routes);
app.use('/api/temp2', temp2Routes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
