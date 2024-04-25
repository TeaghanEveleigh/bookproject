const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const userRoutes = require('./src/routes/userRoutes');
const pool = require("./src/config/db.js");
const  createTables  = require("./src/config/createTables.js");
const { options } = require("nodemon/lib/config/index.js");
//10 seconds in milliseconds
const maxAge = 10 * 1000;

// Setup express app
const app = express();
app.use(bodyParser.json());
pool.connect((err) => {
    if (err) {
        console.error('Failed to connect to database:', err);
    } else {
        console.log('Connected to database');
    }
});



// Use the routes
app.use('/user', userRoutes);

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});