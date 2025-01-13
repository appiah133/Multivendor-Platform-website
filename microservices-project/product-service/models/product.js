const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');  // Assuming you have a sequelize instance


const Product = sequelize.define('Product', {
  product_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  stock_quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING(800), // Assuming the image URL or file path is stored as a string
    allowNull: true, // Optional field
  },
}, {
  tableName: 'product', // Ensure this matches your database table name
});

module.exports = Product;
