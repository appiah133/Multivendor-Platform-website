const { Pool } = require('pg'); // Import PostgreSQL client
require('dotenv').config(); // Load environment variables from .env

// Create a connection pool
const pool = new Pool({
  host: process.env.DB_HOST,      // e.g., localhost or a database server
  port: process.env.DB_PORT,      // Default PostgreSQL port is 5432
  user: process.env.DB_USER,      // Your database username
  password: process.env.DB_PASSWORD, // Your database password
  database: process.env.DB_NAME,  // The specific database for product-service
});

// Test the connection
pool.connect()
  .then(() => console.log("✅ Connected to the notification-service database!"))
  .catch((err) => console.error("❌ Database connection error:", err.message));

module.exports = pool; // Export the pool for use in other parts of the service
