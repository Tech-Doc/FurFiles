const express = require('express');
const { register, login } = require('../controllers/authController');

<<<<<<< HEAD
console.log('Path to authService:', require.resolve('../services/authService'));

router.post('/register', async (req, res) => {
    try {
        const token = await register(req.body.username, req.body.email, req.body.password);
        res.json({ token });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});
=======
const router = express.Router();
>>>>>>> a9df239c5214b4ad45af7a0035e791f775200208

router.post('/register', register);
router.post('/login', login);

module.exports = router;
