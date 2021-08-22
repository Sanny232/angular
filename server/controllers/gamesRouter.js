const express = require("express");
const {getGames} = require("../services/gamesService");
const {asyncWrapper} = require("../utils/apiUtils");
const router = express.Router();

router.post('/all', asyncWrapper(async (req, res) => {
  // const {userId} = req.user;
  // const payload = req.body;
  // payload.created_by = userId;
  const {filters} = req.body;
  const {searchQuery} = req.body;
  const games = await getGames(searchQuery, filters);
  return res.status(200).json(games);
}))


module.exports = {
  gamesRouter: router,
};
