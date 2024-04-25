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
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const emailExists = await checkEmailExists(email);
        if (!emailExists) {
            return res.send({ success: false, error: 'Email does not exist' });
        }

        const passwordCorrect = await checkPasswordCorrect(email, password);
        if (!passwordCorrect) {
            return res.send({ success: false, error: 'Incorrect password' });
        }


        res.send({ success: true });
    } catch (error) {
        res.status(500).send({ success: false, error: error.message });
    }
});

router.post('/signup', async (req, res) => {
    const { email, password } = req.body;

    try {
        const emailExists = await checkEmailExists(email);
        if (emailExists) {
            return res.send({ success: false, error: 'Email already in use' });
        }

        await createUser(email, password);

        res.send({ success: true });
    } catch (error) {
        res.status(500).send({ success: false, error: error.message });
    }
});

module.exports = router;