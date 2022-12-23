const express = require('express');
const crypto = require('crypto');

const router = express.Router();

const emailValidate = require('../middleware/emailValidate');

function generateToken() {
    return crypto.randomBytes(8).toString('hex');
}

router.post('/', emailValidate, (req, res) => {
    try {
        return res.status(200).json({ token: generateToken() });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

module.exports = router;
