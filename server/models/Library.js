const mongoose = require('mongoose');

const Library = mongoose.model('Library', {
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  games: [mongoose.Schema.Types.ObjectId]
});

module.exports = {Library};
