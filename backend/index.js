const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const session = require("express-session");
const userRoutes = require('./src/routes/userRoutes');
const bookRoutes = require('./src/routes/bookRoutes');
const libraryRoutes = require('./src/routes/libraryRoutes');
const discoverRoutes = require('./src/routes/discoverRoutes');
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

// Configure express-session middleware


app.use('/user', userRoutes);
app.use('/book', bookRoutes);
app.use('/library', libraryRoutes);
app.use('/discover', discoverRoutes);

app.get('/',  (req, res) => {
    res.send('Hello World!');
});


app.listen(3001, () => {
    console.log("Server is running on port 3001");
});