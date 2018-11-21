const express = require('express');

const router = express.Router();

// @route GET api/user/test
// @desc Tests users rout
// @access Public

router.get('/test', (req, res) => {
    res.json({message:"User Works"})
} )

module.exports = router; 