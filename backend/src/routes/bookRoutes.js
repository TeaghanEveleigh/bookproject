const { createBook, getBook } = require('../services/bookServices');
const express = require('express');
const router = express.Router();

router.post('/createBook', async (req, res) => {
    const { bookName, bookPreviewPicture, bookDescription, bookAuthors, numberOfPages, estimatedReadTime, publisher, bookLink } = req.body;
    try {
        await createBook(bookName, bookPreviewPicture, bookDescription, bookAuthors, numberOfPages, estimatedReadTime, publisher, bookLink);
        res.send({ success: true });
    } catch (error) {
        res.status(500).send({ success: false, error: error.message });
    }
});

router.get('/getBook/:bookId', async (req, res) => {
    const { bookId } = req.params;
    try {
        const book = await getBook(bookId);
        res.send({ success: true, book });
    } catch (error) {
        res.status(500).send({ success: false, error: error.message });
    }
});

module.exports = router;