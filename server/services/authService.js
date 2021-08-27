const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const {UnauthorizedError} = require("../utils/errors");

const {User} = require('../models/User');

const registration = async ({email, username, password}) => {
  const user = new User({
    email,
    username,
    password: await bcrypt.hash(password, 10)
  });
  await user.save();
};

const login = async ({email, password}) => {
  const user = await User.findOne({email});
  if(!user)
    throw new UnauthorizedError('Invalid username or password');
  if (!(await bcrypt.compare(password, user.password))) {
    throw new UnauthorizedError('Invalid username or password');
  }

  return jwt.sign({
    _id: user._id,
    email: user.email,
    username: user.username,
    role: user.role
  }, 'SECRET');
};

module.exports = {
  registration,
  login,
};
