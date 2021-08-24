const express = require("express");
const {authMiddleware} = require("../middlewares/authMiddleware");
const {getGames} = require("../services/gamesService");
const {asyncWrapper} = require("../utils/apiUtils");
const router = express.Router();

router.post('/all', [authMiddleware], asyncWrapper(async (req, res) => {
  const {filters} = req.body;
  const {searchQuery} = req.body;
  const games = await getGames(searchQuery, filters);
  return res.status(200).json(games);
}))


module.exports = {
  gamesRouter: router,
};
