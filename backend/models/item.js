var Sequelize = require('Sequelize');

function item(instance) {
  return instance.define('item', {
    category_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'categories',
        key: 'id',
      }
    },
    name: Sequelize.STRING,
    price: Sequelize.INTEGER,
    inventory: Sequelize.INTEGER,
  });
};

function category(instance) {
  return instance.define('category', {
    category: Sequelize.STRING,
    sub_category: Sequelize.STRING
  });
};

function itemColor(instance) {
  return instance.define('itemColor', {
    item_id:{
      type: Sequelize.INTEGER,
      references: {
        model: 'items',
        key:'id',
      }
    },
    name: Sequelize.STRING,
    code: Sequelize.STRING
  })
}

module.exports = {
  item:item,
  category:category,
  itemColor:itemColor
};