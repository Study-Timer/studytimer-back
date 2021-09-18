/* eslint-disable max-len */
const sequelize = require('../src/database');

module.exports = () => Promise.all(
  Object.keys(sequelize.models).map((key) => sequelize.models[key].destroy({ cascade: true, truncate: true, force: true })),
);
