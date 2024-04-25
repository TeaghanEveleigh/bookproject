const pool = require('../config/db');

const getUserLibraries = async (userId) => {
    try {
        const query = {
            text: 'SELECT * FROM libraries WHERE user_id = $1',
            values: [userId],
        };
        const result = await pool.query(query);
        return result.rows;
    } catch (error) {
        console.error('Error in getUserLibraries:', error);
        throw error; // Rethrow the error to propagate it to the caller
    }
}

const getLibraryBooks = async (libraryId, pageNumber, limit) => {
    try {
        const query = {
            text: 'SELECT * FROM books WHERE library_id = $1 LIMIT $2 OFFSET $3',
            values: [libraryId, limit, (pageNumber - 1) * limit],
        };
        const result = await pool.query(query);
        return result.rows;
    } catch (error) {
        console.error('Error in getLibraryBooks:', error);
        throw error; // Rethrow the error to propagate it to the caller
    }
}

const createUserLibrary = async (userId, libraryName) => {
    try {
        const query = {
            text: 'INSERT INTO libraries (user_id, library_name) VALUES ($1, $2)',
            values: [userId, libraryName],
        };
        await pool.query(query);
    } catch (error) {
        console.error('Error in createUserLibrary:', error);
        throw error; // Rethrow the error to propagate it to the caller
    }
}
module.exports = {
    createUserLibrary,
    getUserLibraries,
    getLibraryBooks,

};