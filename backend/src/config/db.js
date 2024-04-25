// db.js

const { Pool } = require('pg');

// Database configuration
const dbConfig = {
  host: 'database-2.cjkou6wqywbo.ap-southeast-2.rds.amazonaws.com',
  user: 'postgres',
  password: 'peopleeat8Apples',
  database: 'BOOKs',
  port: 5432,
  ssl: {
    rejectUnauthorized: false
  }
};

// Create a new pool instance
const pool = new Pool(dbConfig);

// Export the pool for accessing the database connection
module.exports = pool;