const {Game} = require('../models/Game');

function getGames(searchQuery, filters){
  return Game.find({genre: {$in: filters}, 'name': {'$regex': searchQuery, '$options': 'i'}});
}

module.exports = {
  getGames
}

