const express = require('express');
const Portfolio = require('../models/Portfolio');
const { verifyToken } = require('../middleware/auth');

const router = express.Router();
router.use(verifyToken);

// Get all portfolios
router.get('/', async (req, res) => {
    try {
        const portfolios = await Portfolio.find({ userId: req.user.id });
        res.json(portfolios);
    } catch (err) {
        res.status(500).json({ error: 'Server error while fetching portfolios' });
    }
});

// Add a stock to portfolio
router.post('/', async (req, res) => {
    const { stockSymbol, quantity, averagePrice } = req.body;

    const newPortfolio = new Portfolio({
        userId: req.user.id,
        stockSymbol,
        quantity,
        averagePrice,
    });

    try {
        const savedPortfolio = await newPortfolio.save();
        res.json(savedPortfolio);
    } catch (err) {
        res.status(500).json({ error: 'Error saving portfolio' });
    }
});

module.exports = router;
