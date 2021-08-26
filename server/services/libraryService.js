const {Game} = require('../models/Game');
const {Library} = require('../models/Library');

function getLibrary(userId){
  return Library.findOne({owner: userId});
}
async function addLibrary(userId){
  const payload = {
    owner: userId
  }
  const newLib = new Library(payload);
  await newLib.save();
}
function getLibraryGames(lib){
  return Game.find({_id: {$in: lib.games}})
}

async function addGameToLib(userId, gameId){
  const library = await getLibrary(userId);
  library.games.push(gameId);
  await library.save();
}

async function removeGameFromLib(userId, gameId){
  await Library.updateMany({owner: userId}, {$pull: {games: gameId}}, { multi: true })
}
module.exports = {
  addLibrary,
  getLibrary,
  getLibraryGames,
  addGameToLib,
  removeGameFromLib
}
