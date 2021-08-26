const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const generateTokenJwt = (userId) => jwt.sign({ _id: userId }, `${process.env.SECRET_KEY}`, { expiresIn: '1d' });

const matchPassword = async (password, userPassword) => bcrypt.compareSync(password, userPassword);

module.exports = {
  generateTokenJwt,
  matchPassword,

};
