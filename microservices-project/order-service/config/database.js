// // order-service/database.js
// const { Sequelize } = require('sequelize');
// require('dotenv').config();

// // Fetch the database URL from the .env file
// const sequelize = new Sequelize(process.env.ORDER_DB_URL, {
//   dialect: 'postgres',
//   logging: false,
// });

// // Test the connection
// const connectToDatabase = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Order Service Database connected successfully');
//   } catch (error) {
//     console.error('Unable to connect to the Order database:', error);
//   }
// };

// connectToDatabase();

// module.exports = sequelize;


const { Sequelize } = require('sequelize');
require('dotenv').config();

const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_NAME;

if (!host || !port || !username || !password || !database) {
  throw new Error('Database configuration is missing in environment variables.');
}

const sequelize = new Sequelize(database, username, password, {
  host,
  port,
  dialect: 'postgres', // Replace with your database dialect if not Postgres
});

module.exports = sequelize;
