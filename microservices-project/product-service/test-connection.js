const { Pool } = require('pg');
require('dotenv').config(); // Load environment variables from .env

// Database connection configuration
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Test database connection
(async () => {
  try {
    console.log("⏳ Testing database connection...");
    const client = await pool.connect();
    console.log("✅ Database connection successful!");
    client.release(); // Release the client back to the pool
    process.exit(0); // Exit the script successfully


    


  } catch (err) {
    console.error("❌ Database connection error:", err.message);
    process.exit(1); // Exit the script with an error code
  }
})();
