const { system } = require('nodemon/lib/config');
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
const toggleDarkmode = async (email ) => {
    try {
        const query ={test: "UPDATE users SET dark_mode = !dark_mode WHERE email=$1", values: email} 
        await pool.query(query);
    } catch (error) {
        console.log(error);
    }
};





module.exports = {
    checkEmailExists,
    checkPasswordCorrect,
    createUser,
    toggleDarkmode
};