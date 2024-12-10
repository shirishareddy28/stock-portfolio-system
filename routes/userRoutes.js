
const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Route to create a new user
router.post('/users', async (req, res) => {
    const { name, email, portfolioValue } = req.body;

    try {
        const user = new User({ name, email, portfolioValue });
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Route to fetch all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

