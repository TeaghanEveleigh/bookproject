// createTables.js

const pool = require('./db');

// Query to check if users table exists
const checkUsersTableQuery = `
  SELECT EXISTS (
    SELECT FROM information_schema.tables 
    WHERE table_schema = 'public' 
    AND table_name = 'users'
  );
`;

// Query to create users table
const createUserTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    preferences VARCHAR(255),
    dark_mode BOOLEAN,
    user_id INTEGER REFERENCES users(id)
  );
`;

// Query to check if libraries table exists
const checkLibrariesTableQuery = `
  SELECT EXISTS (
    SELECT FROM information_schema.tables 
    WHERE table_schema = 'public' 
    AND table_name = 'libraries'
  );
`;

// Query to create libraries table
const createLibraryTableQuery = `
  CREATE TABLE IF NOT EXISTS libraries (
    id SERIAL PRIMARY KEY,
    library_name VARCHAR(255) NOT NULL,
    library_photo_url VARCHAR(255),
    user_id INTEGER REFERENCES users(id)
  );
`;

// Query to check if books table exists
const checkBooksTableQuery = `
  SELECT EXISTS (
    SELECT FROM information_schema.tables 
    WHERE table_schema = 'public' 
    AND table_name = 'books'
  );
`;

// Query to create books table
const createBookTableQuery = `
  CREATE TABLE IF NOT EXISTS books (
    id SERIAL PRIMARY KEY,
    book_name VARCHAR(255) NOT NULL,
    book_preview_picture VARCHAR(255),
    book_description TEXT,
    book_authors TEXT[],
    number_of_pages INTEGER,
    estimated_read_time VARCHAR(50),
    publisher VARCHAR(255),
    book_link VARCHAR(255)
  );
`;

// Execute table creation queries
async function createTables() {
  try {
    // Check if users table exists
    const { rows: usersTableExists } = await pool.query(checkUsersTableQuery);
    if (!usersTableExists[0].exists) {
      // Create users table
      await pool.query(createUserTableQuery);
      console.log('Users table created successfully');
    } else {
      console.log('Users table already exists');
    }

    // Check if libraries table exists
    const { rows: librariesTableExists } = await pool.query(checkLibrariesTableQuery);
    if (!librariesTableExists[0].exists) {
      // Create libraries table
      await pool.query(createLibraryTableQuery);
      console.log('Libraries table created successfully');
    } else {
      console.log('Libraries table already exists');
    }

    // Check if books table exists
    const { rows: booksTableExists } = await pool.query(checkBooksTableQuery);
    if (!booksTableExists[0].exists) {
      // Create books table
      await pool.query(createBookTableQuery);
      console.log('Books table created successfully');
    } else {
      console.log('Books table already exists');
    }
  } catch (error) {
    console.error('Error creating tables:', error);
  } finally {
    pool.end(); // Close the pool when done
  }
}

createTables();
