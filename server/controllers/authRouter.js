const express = require('express');
const {User} = require("../models/User");
const {addLibrary} = require("../services/libraryService");
const router = express.Router();

const {
  registration,
  login,
} = require('../services/authService');

const {
  asyncWrapper,
} = require('../utils/apiUtils');

router.post('/register',
  asyncWrapper(async (req, res) => {
    const {
      email,
      username,
      password
    } = req.body;

    await registration({email, username, password});
    const user = await User.findOne({email});
    await addLibrary(user._id);
    return res.json({message: 'Account created successfully!'});
  }));

router.post('/login', asyncWrapper(async (req, res) => {
  const {
    email,
    password,
  } = req.body;

  const token = await login({email, password});

  return res.json({message: 'Success', jwt_token: token});
}));

module.exports = {
  authRouter: router,
};
