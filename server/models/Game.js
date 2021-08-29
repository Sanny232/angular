const mongoose = require('mongoose');

const Game = mongoose.model('Game', {
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
  },
  scores: {
    type: Number,
    default: 5
  },
  photo: {
    type: String
  },
  genre: {
    type: String,
    required: true
  }
});

module.exports = {Game};
