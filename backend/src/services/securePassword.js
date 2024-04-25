const bcrypt = require('bcrypt');
const saltRounds = 10; // Number of salt rounds (higher is more secure but slower)

// Function to generate a salt and hash a password
async function hashPassword(password) {
    try {
        // Generate a salt
        const salt = await bcrypt.genSalt(saltRounds);
        
        // Hash the password with the salt
        const hashedPassword = await bcrypt.hash(password, salt);
        
        return hashedPassword;
    } catch (error) {
        throw new Error('Error hashing password');
    }
}

// Function to compare a password with a hashed password
async function comparePasswords(password, hashedPassword) {
    try {
        // Compare the provided password with the hashed password
        const match = await bcrypt.compare(password, hashedPassword);
        
        return match;
    } catch (error) {
        throw new Error('Error comparing passwords');
    }
}

module.exports = {
    hashPassword,
    comparePasswords,
};