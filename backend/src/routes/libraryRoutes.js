const { createUserLibrary, getUserLibraries, getLibraryBooks } = require('../services/libraryService');
const express = require('express');
const router = express.Router();

router.post('/createLibrary', async (req, res) => {
    const { userId, libraryName } = req.body;
    try {
        await createUserLibrary(userId, libraryName);
        res.send({ success: true });
    } catch (error) {
        res.status(500).send({ success: false, error: error.message });
    }
});

router.get('/userLibraries/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const libraries = await getUserLibraries(userId);
        res.send({ success: true, libraries });
    } catch (error) {
        res.status(500).send({ success: false, error: error.message });
    }
});

router.get('/libraryBooks/:libraryId', async (req, res) => {
    const { libraryId } = req.params;
    const { pageNumber = 1, limit = 10 } = req.query;
    try {
        const books = await getLibraryBooks(libraryId, Number(pageNumber), Number(limit));
        res.send({ success: true, books });
    } catch (error) {
        res.status(500).send({ success: false, error: error.message });
    }
});

module.exports = router;