const {Game} = require('../models/Game');

function getGames(searchQuery, filters, price){
  return Game.find({genre: {$in: filters}, 'name': {'$regex': searchQuery, '$options': 'i'}, price: {$lt: price}});
}
function getGameByID(_id){
  return Game.findOne({_id})
}

module.exports = {
  getGames,
  getGameByID
}

