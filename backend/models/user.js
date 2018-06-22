var Sequelize = require('Sequelize');

module.exports = function user(instance) {
  return instance.define('user', {
    email: Sequelize.STRING,
    pw: Sequelize.STRING,
    name: Sequelize.STRING,
    phone: Sequelize.STRING,
    addr: Sequelize.STRING
  });
};