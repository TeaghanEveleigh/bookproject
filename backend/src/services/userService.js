const pool = require('../config/db');
const { hashPassword, comparePasswords } = require('./securePassword');

const checkEmailExists = async (email) => {
    const query = {
        text: 'SELECT * FROM users WHERE email = $1',
        values: [email],
    };
    const result = await pool.query(query);
    return result.rows.length > 0;
}
const checkPasswordCorrect = async (email, password) => {
    const query = {
        text: 'SELECT password FROM users WHERE email = $1',
        values: [email],
    };
    try{const result = await pool.query(query);
    if (result.rows.length === 0) {
        return false;
    }
    const hashedPassword = result.rows[0].password;
    const passwordsMatch =  await comparePasswords(password, hashedPassword);
    return passwordsMatch;
}
    catch(error){
        // Handle errors, such as database connection errors or query failures
        console.error('An error occurred while checking password:', error);
        return false; // Return false in case of error
    }
    
}
const createUser = async (email, password) => {
    try {
        password = await hashPassword(password); // Use await here
        const query = {
            text: 'INSERT INTO users (email, password) VALUES ($1, $2)',
            values: [email, password],
        };
        //check user does not exist
        const userExists = await checkEmailExists(email);
        if (userExists) {
            throw new Error('User already exists');
        }
        else {
            await pool.query(query);
        }
    } catch (error) {
        // Handle errors
        console.error('An error occurred while creating user:', error);
        throw error;
    }
}
const createUserLibrary = async (userId, libraryName, libraryPhotoUrl) => {
    const query = {
        text: 'INSERT INTO libraries (user_id, library_name) VALUES ($1, $2, $3)',
        values: [userId, libraryName],
    };
    await pool.query(query);
}
const getUserLibraries = async (userId) => {
    const query = {
        text: 'SELECT * FROM libraries WHERE user_id = $1',
        values: [userId],
    };
    const result = await pool.query(query);
    return result.rows;
}

const getLibraryBooks = async (libraryId) => {
    const query = {
        text: 'SELECT * FROM books WHERE library_id = $1',
        values: [libraryId],
    };
    const result = await pool.query(query);
    return result.rows;
}
const createBook = async (libraryId, bookName, bookPreviewPicture, bookDescription, bookAuthors, numberOfPages, estimatedReadTime, publisher, bookLink) => {
    const query = {
        text: 'INSERT INTO books (library_id, book_name, book_preview_picture, book_description, book_authors, number_of_pages, estimated_read_time, publisher, book_link) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
        values: [libraryId, bookName, bookPreviewPicture, bookDescription, bookAuthors, numberOfPages, estimatedReadTime, publisher, bookLink],
    };
    await pool.query(query);
}


module.exports = {
    checkEmailExists,
    checkPasswordCorrect,
    createUser,
    createUserLibrary,
    getUserLibraries,
    getLibraryBooks,
    createBook,
};