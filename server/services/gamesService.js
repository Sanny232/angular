const {Game} = require('../models/Game');

function getGames(filters){
  return Game.find({genre: {$in: filters}});
}

module.exports = {
  getGames
}

