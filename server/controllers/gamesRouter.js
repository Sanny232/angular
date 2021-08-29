const express = require("express");
const mongoose = require("mongoose");
const {getGameByID} = require("../services/gamesService");
const {removeGameFromLib} = require("../services/libraryService");
const {addGameToLib} = require("../services/libraryService");
const {getLibraryGames} = require("../services/libraryService");
const {getLibrary} = require("../services/libraryService");
const {authMiddleware} = require("../middlewares/authMiddleware");
const {getGames} = require("../services/gamesService");
const {asyncWrapper} = require("../utils/apiUtils");
const router = express.Router();

router.post('/all', [authMiddleware], asyncWrapper(async (req, res) => {
  const {filters} = req.body;
  const {searchQuery} = req.body;
  const {price} = req.body;

  const games = await getGames(searchQuery, filters, price);

  res.status(200).json(games);
}))

router.get('/library', [authMiddleware], asyncWrapper(async (req, res) => {
  const {userId} = req.user;
  const lib = await getLibrary(userId);
  const library = await getLibraryGames(lib)
  res.json(library)
}))

router.post('/library', [authMiddleware], asyncWrapper(async (req, res) => {
  const {userId} = req.user;
  const {gameId} = req.body;
  await addGameToLib(userId, gameId);
  res.json({message: 'OK'})
}))

router.delete('/library/:gameId', [authMiddleware], asyncWrapper(async (req, res) => {
  const {userId} = req.user;
  const {gameId} = req.params;
  await removeGameFromLib(userId, gameId);
  res.json({message: 'OK'})
}))

router.get('/:gameId', [authMiddleware], asyncWrapper(async (req, res) => {
  const {gameId} = req.params;
  if(!mongoose.Types.ObjectId.isValid(gameId))
    return res.json(null)
  const game = await getGameByID(gameId);
  return res.json(game);
}))


module.exports = {
  gamesRouter: router,
};
