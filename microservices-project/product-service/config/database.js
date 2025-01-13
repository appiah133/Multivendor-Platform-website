const { Sequelize } = require('sequelize'); // Ensure Sequelize is imported
require('dotenv').config();

const dbUrl = process.env.PRODUCT_DB_URL;
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;

if (!dbUrl && !(dbHost && dbPort && dbUser && dbPassword && dbName)) {
  throw new Error(
    'Database configuration is missing. Please provide either PRODUCT_DB_URL or DB_HOST, DB_PORT, DB_USER, and DB_NAME in the .env file.'
  );
}

const sequelize = new Sequelize(dbUrl || {
  host: dbHost,
  port: dbPort,
  username: dbUser,
  password: dbPassword,
  database: dbName,
  dialect: 'postgres',
  logging: false,
});

module.exports = sequelize;
