const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/discover', async (req, res) => {
    const { query } = req.body;
    const orderBy = req.body.orderBy || 'relevance';
    const maxResults = req.body.maxResults || 40;
    try {
        const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
            params: {
                q: query,
                orderBy,
                maxResults,
            },
        });
        res.send({ success: true, books: response.data.items });
    } catch (error) {
        res.status(500).send({ success: false, error: error.message });
    }
});

module.exports = router;