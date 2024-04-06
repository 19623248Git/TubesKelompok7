const express = require('express');
const router = express.Router();

// Routes
router.get('/', (req, res) => {
    layout: false
    res.send("Ini testing")
})

module.exports = router;