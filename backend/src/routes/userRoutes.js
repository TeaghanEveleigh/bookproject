const { checkEmailExists, checkPasswordCorrect, createUser, createUserLibrary } = require('../services/userService');
const express = require('express');
const router = express.Router();


router.post('/checkEmailExists', async (req, res) => {
    const email = req.body.email;
    const emailExists = await checkEmailExists(email);
    res.send({ emailExists });
});
router.post('/checkPasswordCorrect', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const passwordCorrect = await checkPasswordCorrect(email, password);
    res.send({ passwordCorrect });
});
router.post('/createUser', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
  
    try {
        await createUser(email, password);
        res.send({ success: true });
    } catch (error) {
        res.send({ success: false, error: error.message });
    }
});
router.post('/createUserLibrary', async (req, res) => {
    const userId = req.body.userId;
    const libraryName = req.body.libraryName;
    try {
        await createUserLibrary(userId, libraryName, libraryPhotoUrl);
        res.send({ success: true });
    } catch (error) {
        res.send({ success: false, error: error.message });
    }
});
module.exports = router;