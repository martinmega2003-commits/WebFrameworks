const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rating: { type: Number, default: 0, min: 0, max: 10 },
  duration: { type: Number, default: 0 }
});

// registrace modelu s názvem "Location"
mongoose.model('Location', locationSchema);
