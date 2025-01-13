const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');  // Assuming you have a sequelize instance

const Order = sequelize.define('Order', {
  order_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  order_status: {
    type: DataTypes.STRING,
    defaultValue: 'PENDING'
  }
});

module.exports = Order;
