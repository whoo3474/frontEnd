var Sequelize = require('sequelize');
var userDefine = require('./user');
var itemDefine = require('./item');

var instance = new Sequelize('node_mysql', 'whoo3474', 'hatuhana1', {
  host: 'rds-mysql.cfp92mapp9op.us-east-1.rds.amazonaws.com',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

module.exports.user = userDefine(instance);
module.exports.category = itemDefine.category(instance);
module.exports.item = itemDefine.item(instance);
module.exports.itemColor = itemDefine.itemColor(instance);
instance.sync();