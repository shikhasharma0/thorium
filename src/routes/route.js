let obj = require('../logger/logger.js')

const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    obj.printMessages('thorium')
   console.log(obj.url)
    res.send('My first ever api!')
});



router.get('/test-hello', function (req, res) {
    obj.printMessages('thorium')
   console.log(obj.url)
    res.send('My session session ever api!')
});


module.exports = router;
