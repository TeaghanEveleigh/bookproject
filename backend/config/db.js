// db.js

const { Pool } = require('pg');

// Database configuration
const dbConfig = {
  user: '',
  password: '',
  host: '',
  port: 5432,
  database: '',
};

// Create a new pool instance
const pool = new Pool(dbConfig);

// Export the pool for accessing the database connection
module.exports = pool;
