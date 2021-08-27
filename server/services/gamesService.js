const {Game} = require('../models/Game');

function getGames(searchQuery, filters){
  return Game.find({genre: {$in: filters}, 'name': {'$regex': searchQuery, '$options': 'i'}});
}
function getGameByID(_id){
  return Game.findOne({_id})
}

module.exports = {
  getGames,
  getGameByID
}

