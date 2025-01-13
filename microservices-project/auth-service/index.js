const express = require('express');
const pool = require('./db'); // Import the database connection

const app = express();

app.use(express.json());

// Example route to test database interaction
app.get('/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ message: 'Database connection successful!', time: result.rows[0].now });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Database query failed' });
  }
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Auth service running on port ${PORT}`);
});
