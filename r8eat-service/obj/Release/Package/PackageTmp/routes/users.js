'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function (req, res) {

    res.send('the id you gave me is ' + req.params.id);
});

module.exports = router;
