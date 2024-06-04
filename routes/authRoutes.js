const express = require('express');
const { register, login } = require('../services/authService');
const router = express.Router();

console.log('Path to authService:', require.resolve('../services/authService'));

router.post('/register', async (req, res) => {
    try {
        const token = await register(req.body.username, req.body.email, req.body.password);
        res.json({ token });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.post('/login', async (req, res) => {
    try {
        const token = await login(req.body.email, req.body.password);
        res.json({ token });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;

