const mongoose = require('mongoose');

const User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
  },
  games: [mongoose.Schema.Types.ObjectId],
  friends: [mongoose.Schema.Types.ObjectId]
});

module.exports = {User};
