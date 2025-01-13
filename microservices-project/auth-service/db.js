// const { Pool } = require('pg'); // Import PostgreSQL client
// require('dotenv').config(); // Load environment variables from .env

// // Create a connection pool
// const pool = new Pool({
//   host: process.env.DB_HOST,      // e.g., localhost or a database server
//   port: process.env.DB_PORT,      // Default PostgreSQL port is 5432
//   user: process.env.DB_USER,      // Your database username
//   password: process.env.DB_PASSWORD, // Your database password
//   database: process.env.DB_NAME,  // The specific database for product-service
// });

// // Test the connection
// pool.connect()
//   .then(() => console.log("✅ Connected to the auth-service database!"))
//   .catch((err) => console.error("❌ Database connection error:", err.message));

// module.exports = pool; // Export the pool for use in other parts of the service
// const { Sequelize } = require('sequelize');

// // Load environment variables
// const host = process.env.DB_HOST;
// const port = process.env.DB_PORT;
// const username = process.env.DB_USER;
// const password = process.env.DB_PASSWORD;
// const database = process.env.DB_NAME;

// // Validate the required variables
// if (!host || !port || !username || !database) {
//     throw new Error('Database configuration is missing. Please check your .env file.');
// }

// // Initialize Sequelize
// const sequelize = new Sequelize(database, username, password, {
//     host,
//     port,
//     dialect: 'postgres', // Specify PostgreSQL as the database dialect
//     logging: false,      // Disable logging for cleaner console output
// });

// module.exports = sequelize;


const { Sequelize } = require('sequelize');
require('dotenv').config(); // Load environment variables

// Fetch database configuration from environment variables
const dbUrl = process.env.AUTH_DB_URL; // Single connection string
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_NAME;

// Initialize Sequelize
let sequelize;

if (dbUrl) {
  // Use database URL if provided
  sequelize = new Sequelize(dbUrl, {
    dialect: 'postgres', // Adjust this if using another database
    logging: false,
  });
  console.log('Using database URL for connection.');
} else if (host && port && username && database) {
  // Use individual parameters if URL is not provided
  sequelize = new Sequelize(database, username, password, {
    host,
    port,
    dialect: 'postgres',
    logging: false,
  });
  console.log('Using individual database parameters for connection.');
} else {
  throw new Error(
    'Database configuration is missing. Please provide either AUTH_DB_URL or DB_HOST, DB_PORT, DB_USER, and DB_NAME in the .env file.'
  );
}

// Test the connection
const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1); // Exit the application if the connection fails
  }
};

connectToDatabase();

module.exports = sequelize; // Export the Sequelize instance
