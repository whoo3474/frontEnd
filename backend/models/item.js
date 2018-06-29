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

function itemImage(instance) {
  return instance.define('itemImage', {
    item_id:{
      type: Sequelize.INTEGER,
      references: {
        model: 'items',
        key:'id',
      }
    },
    itemColor_id:{
      type: Sequelize.INTEGER,
      references: {
        model: 'itemColors',
        key:'id',
      }
    },
    url: Sequelize.STRING
  })
}

function itemInfo(instance) {
  return instance.define('itemInfo', {
    item_id:{
      type: Sequelize.INTEGER,
      references: {
        model: 'items',
        key:'id',
      }
    },
    url: Sequelize.STRING,
    text: Sequelize.STRING,
  })
}

function itemDetail(instance) {
  return instance.define('itemInfo', {
    item_id:{
      type: Sequelize.INTEGER,
      references: {
        model: 'items',
        key:'id',
      }
    },
    title: Sequelize.STRING,
    content: Sequelize.STRING,
  })
}
module.exports = {
  item:item,
  category:category,
  itemColor:itemColor,
  itemImage:itemImage
};