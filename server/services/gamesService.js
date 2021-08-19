const {Game} = require('../models/Game');

function getGames(){
  return Game.find();
}

module.exports = {
  getGames
}

