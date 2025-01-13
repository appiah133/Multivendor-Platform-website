// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = require('../config/database');

// const User = sequelize.define('User', {
//   user_id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//   },
//   password_hash: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   roles: {
//     type: DataTypes.JSONB,
//     defaultValue: ['user'],
//   },
// });

// module.exports = User;
// models/user.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const User = sequelize.define('User', {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password_hash: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  roles: {
    type: DataTypes.JSONB,
    defaultValue: ['user'],
  },
}, {
  tableName: 'users', // Ensure this matches the table name
  schema: 'public', // Specify the schema if it's not the default 'public'
  timestamps: false,   // Disable timestamps if your table doesn't have them
});

module.exports = User;
